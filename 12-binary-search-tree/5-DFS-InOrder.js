// [5] DFS - InOrder

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
  // InOrder: LEFT(child) -> LEFT(parent) -> ROOT -> RIGHT(parent) -> RIGHT(child)
  DFSInOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
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

/* --------------------------------- InOrder --------------------------------
TREE
   10
 6   15
3 8    20

NODE: [10] -> [6] -> [3]   -> [8]        -> [15]          -> [20]
DATA: []          -> [3,6] -> [3,6,8,10] -> [3,6,8,10,15] -> [3,6,8,10,15,20]
LEFT:         [6] -> [3]
RIGHT:                     -> [8]        -> [15]          -> [20]
RESULT: 오름차순 정렬, [ 3, 6, 8, 10, 15, 20 ]
*/
tree.DFSInOrder(); // [ 3, 6, 8, 10, 15, 20 ]
