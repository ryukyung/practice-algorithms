// [7] DFS - PostOrder

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  // PostOrder: LEFT(child) -> LEFT(parent) -> RIGHT(child) -> RIGHT(parent) -> ROOT
  DFSPostOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
}
const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
/* -------------------------------- PostOrder -------------------------------
TREE
   10
 6   15
3 8    20

NODE:    -> [10] -> [6] -> [3] -> [8] -> [15]     -> [20]
DATA: []                       -> [3] -> [3,8,6]  -> [3,8,6,20,15,10]
LEFT:            -> [6] -> [3]
RIGHT:                         -> [8] -> [15]     -> [20]
RESULT: [ 3, 8, 6, 20, 15, 10 ]
*/
tree.DFSPostOrder(); // [ 3, 8, 6, 20, 15, 10 ]
