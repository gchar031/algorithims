//source: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  // ...
  let array = numbers.split(" ");
  array.sort((a, b) => b - a);
  return `${array[0]} ${array[array.length - 1]}`;
}

//console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


function towerBuilder(nFloors) {
  // create an array to store floors 
  // create string to concate asteriks to 
  // loop n times, conacate two asteriks to the last string 
  // and push string into array
  let array = [" * "];
  for (let i = 0; i < nFloors - 1; i++) {
    let str = array[i].concat("**")
    array.push(`${str}`)
  }
  return array
}
console.log(towerBuilder(6));
//["  *  ", " *** ", "*****"]