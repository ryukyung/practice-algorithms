// [1] BFS: Breadth First Search
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
  // BFS: 부모 -> 형제 -> 형제 -> 자식의(형제 -> 형제 -> 형제)
  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
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

/* ----------------------------------- BFS ----------------------------------
TREE
   10
 6   15
3 8    20

NODE: [10, 15, 6] ->   [6]   -> [15] -> [3] -> [8] -> [20]
DATA:    [10]     -> [10, 6] -> [10, 6, 15]        -> [10,6,15,3,8,20]
LEFT:    [6]      -> [3]
RIGHT:   [15]     -> [8]     -> [20]
RESULT: 부모에서 형제, 자식의 형제 순으로 정렬
*/
tree.BFS(); // [10, 6, 15, 3, 8, 20]
