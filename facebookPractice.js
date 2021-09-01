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
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //creates nodes
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  //inserts nodes
  insertNode(node, newNode) {
    //check if the new node value is less than or greated than the node value
    if (newNode.value < node.value) {
      //check if the left or right is null then insert value
      //if it is not null recurse till null is found
      if (node.left === null) {
        node.left = newNode.value;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode.value;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      return undefined;
    }
  }

  //find nodes
  find(value) {
    //check to if there is a root
    if (!this.root) {
      return false;
    } else {
      //create boolean to check when node is found
      let found = false;
      let current = this.root;
      console.log(current, value);
      while (current) {
        if (value < current.left) {
          current = current.left;
        } else if (value > current.right) {
          current = current.right;
        } else if (value === current) {
          found = true;
        }
      }
      return !found ? false : current;
    }
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}

function collection(value, depth = 0) {
  
}

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 
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
console.log(JSON.stringify(BST));


//          04
//         /  \
//        07   09
//       / \    \
//      10  02   06
//           \
//            06
//             \
//             02
let tree = new BinarySearchTree()
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.insert(10);
tree.insert(2);
tree.insert(6);
tree.insert(2);
tree.insert(6);
console.log('FB Tree', JSON.stringify(tree), tree)
console.log('See',tree.search(tree, 225))