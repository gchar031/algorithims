class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//INSERT -
// Insert Pseudocode (iteratively)
// - Create a function called insert() that takes a value as an argument
// - Create a new node
// - Starting at the root
// let newNode = new Node(10)

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // - Check if there is a root, if not
  //     - The root now becomes that new node
  //     - Return this (the entire Binary Search Tree)
  //   - Else (if there is a root)
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      //   [Use a while loop, with the condition set to the boolean true]
      //   - Check if the value of the new node is greater than or less than the value of the root
      //   - If the values are equal; return undefined
      //   - If the value passed is less than current value
      //     - Check to see if there is a node to the left
      //        - If there is, move to that node and repeat these steps
      //        - If there is not, add that node as the left property
      //   - If it is greater
      //     - Check to see if there is a node to the right
      //        - If there is, move to that node and repeat these steps
      //        - If there is not, add that node as the right property

      while (true) {
        if (val === current.value) {
          return undefined;
        } else if (val < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else if (current.left) {
            if (val < current.left) {
            } else if (val > current.left) {
              node.right = val;
            }
          }
          return node;
        } else if (val < current.value) {
          if (current.right) {
            if (val < current.right) {
              node.right = current.right;
            } else if (val > current.right) {
              node.left = val;
            }
          } else if (!current.right) {
            node.right = val;
          }
          return node;
        }
      }
    }
  }
  //breadth-first search
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    // - Create a variable to store the values of nodes visited
    let visited = [];
    // - Store the root of the BST in a variable called current
    let current = this.root;
    // - Write a helper function which accepts a node

    function helper(current) {
      // - Push the value of the node to the variable that stores the values
      visited.push(current.value);
      // - If the node has a left property, call the helper function with the left proptery on the node
      if (current.left) helper(current.left);
      if (current.right) helper(current.right);
      // - If the node has a right property, call the helper function with the right property on the node.
    }

    // - Invoke the helper function with the current variable
    helper(current);
    // - Return the array of values
    return visited;
  }

   // - Also practically identical to above DFS methods. This time however, we visit all left nodes and push the value of the last left leaf, then move onto the right
  
  DFSInOrder() {
    // - The order for the helper function is now as follows:
    //     - If the node has a left property (node.left), call (recursively) the helper function with the left property on the node (node.left)
    //     - Push the *value* of the node passed into the function to the data array
    //     - If the node has a right property (node.right), call (recursively) the helper function with the right property on the node (node.right)
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  // DFS - PostOrder
  // - Practically identical to PreOrder, except we insert a node value to the data array after we have traversed the left side (and right side)
  DFSPostOrder() {
    let data = [];
    // - The order for the helper function is now as follows:
    function traverse(node) {
      //  - If the node has a left property (node.left), call (recursively) the helper function with the left property on the node (node.left)
      if (node.left) traverse(node.left);
      //  - If the node has a right property (node.right), call (recursively) the helper function with the right property on the node (node.right)
      if (node.right) traverse(node.right);
      //  - Push the *value* of the node passed into the function to the data array
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  // FIND -
  // Find Pseudocode for BST (iteratively or recursively)
  // - Starting at the root
  //   - Check if there is a root, if not - return false as we’re done searching
  //  [let current = this.root]
  //  [let found = false]
  //   - If there is a root, start a while loop with the following conditional: while there is a current (starting with root) and !found
  //   - Check to see if the value is greater or less than the value of the root
  //   - If it is less
  //     - reassign current to the left node
  //   - If it is greater
  //     - reassign current to the right node
  //   - Else
  //     - reassign found to true
  //   - Outside of the while loop, check to see if not found (!found) return false
  //   - Return current
}

const trying = new BinarySearchTree();
trying.insert(10);
trying.insert(5);
trying.insert(13);
trying.insert(7);
trying.insert(2);
trying.insert(16);
trying.insert(11);
console.log(trying);

// 9:15

// 9:15
// Tree Visual Example:
//      10
//    /    \
//   5      13
//  / \     /  \
// 2   7  11  16
