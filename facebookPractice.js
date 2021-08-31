//Given a binary tree, get the average value at each level of the tree
//Input:
  /* 4
    / \
    7 9
  / \ \
  10 2  6
      \
      6
      /
    2
  Input can be null and inputs are only integers.
    */
class Node{
  constructor(val) {
    this.value = val
    this.right = null
    this.left = null
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //insert nodes
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode
      return this;
    } else {
      let current
      if (newNode.left) {
        if (val < newNode.left) {
          newNode.right = newNode.left
          newNode.left = val
        } else if (val > newNode.left){
          newNode.right = val;
        }
      } else newNode.left = val
      if (!newNode.right) {
        
      }
    }
  }
}



// create an object for the BinarySearchTree
var BST = new BinarySearchTree();
  
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
                          
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 