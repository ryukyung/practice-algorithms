// [6] DFS - PreOrder

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
  // PreOrder: ROOT -> LEFT(parent) -> LEFT(child) -> RIGHT(parent) -> RIGHT(child)
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
/* make Tree
    10
  5    13
2  7 11  16 */
const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
/* -------------------------------- PreOrder --------------------------------
TREE
   10
 6   15
3 8    20

NODE: [10]        -> [6]     -> [3]      -> [8]        -> [15]          -> [20]
DATA: []  -> [10] -> [10, 6] -> [10,6,3] -> [10,6,3,8] -> [10,6,3,8,15] -> [10,6,3,8,15,20]
LEFT:             -> [6]     -> [3]
RIGHT:                                                 -> [15]          -> [20]
RESULT: [ 10, 6, 3, 8, 15, 20 ]
*/
tree.DFSPreOrder(); // [ 10, 6, 3, 8, 15, 20 ]
