//======================
//== HASH TABLE CLASS ==
//======================
class HashTable {
  constructor(size) {
    // initialize size of hash table (number)
    this.size = size;
    // intialize the table to have "size" number of elements
    // the table will be a new array named "table"
    this.table = new Array(this.size);
  }
  insert = (pair) => {
    // if pair (array = [key, value]) is empty return false
    if (!pair.length) return false;
    // hash the key to get an integer index
    const index = this.#hash(pair[0]);
    // if there's no bucket at the idx of the table
    if (!this.table[index]) {
      // create one
      this.table[index] = [];
      // and insert this key value pair into the new array
      this.table[index].push(pair);
      // return true
      return true;
    }
    // if there's a bucket at that index
    // if a pair already exists with the key, update the data in that pair to reflect the new pair value
    if (this.table[index]) {
      // finds the index of the key value pair. returns -1 if it doesnt exist
      const pairIndex = this.table[index].findIndex(
        (bucketPair) => bucketPair[0] === pair[0]
      );
      if (pairIndex != -1) return (this.table[index][pairIndex] = pair);
    }
    // otherwise
    // add the new pair to the end of the bucket
    this.table[index].push(pair);
    // return true
    return true;
  };
  search = (key) => {
    // hash key to get index
    const index = this.#hash(key);
    // search the bucket at the index
    // if there is no bucket return -1
    if (!this.table[index]) return -1;
    // if there is a bucket, search for the key and return the pair
    const foundPair = this.table[index].find((pair) => pair[0] === key);
    if (foundPair) return foundPair;
    // if there's a bucket but no matching key, return -1
    else return -1;
  };
  delete = (key) => {
    // lookup the key (i.e. hash it to get an index)
    // if the bucket is empty or null return -1
    const index = this.#hash(key);
    if (!this.table[index]) return -1;
    // if the key is, in fact, in the bucket, delete that pair and return it
    const pairIdx = this.table[index].findIndex(
      (bucketPair) => bucketPair[0] === key
    );
    if (pairIdx != -1) {
      const removedPair = this.table[index].splice(pairIdx, 1)[0];
      if (!this.table[index].length) this.table[index] = null;
      return removedPair;
    } else {
      return pairIdx;
    }
  };
  // PRIVATE METHOD //
  #hash = (key) => {
    // for the hash function, calculate and return an integer value based key
    // remember, if you are using modulus, it is recommended to use a prime number to avoid clustering
    let hashValue = 0;
    let primeNum = 13;
    for (let i = 0; i < key.length; i++) {
      hashValue += key[i].charCodeAt(0) * primeNum;
    }
    // returns number from 0-length of our table
    return hashValue % this.size;
  };
}
// CREATE A NEW INSTANCE OF THE HASH TABLE.
// Provide the size of your table instance
// Test your methods
const hashTable = new HashTable(9);
hashTable.insert(["first name", "Topaz"]);
hashTable.insert(["last name", "Rocks"]);
hashTable.insert(["test", "Scores"]);
console.log(hashTable.table);
//console.log(hashTable.delete([2]));
console.log("TABLE: ", hashTable.table);
// console.log(`TABLE: ${hashTable.table}`)
// No touching
module.exports = HashTable;
