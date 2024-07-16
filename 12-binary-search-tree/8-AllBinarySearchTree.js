// [8] BST - insert, find, contains, BFS, DFS(InOrder, PreOrder, PostOrder)
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
  // find
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  // contains
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.lright;
      } else {
        return true;
      }
    }
    return false;
  }
  // BFS
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
  // DFS - InOrder
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
  // DFS - PreOrder
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
  // DFS - PostOrder
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
/* --------------------------------- insert ---------------------------------
TREE
   10
 6   15
3 8    20
*/
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree);

/* ---------------------------------- find ---------------------------------- */
console.log(tree.find(0)); // undefined
console.log(tree.find(10));
/* 
Node {
  value: 10,
  right: Node {
    value: 15,
    right: Node { value: 20, right: null, left: null },
    left: null
  },
  left: Node {
    value: 6,
    right: Node { value: 8, right: null, left: null },
    left: Node { value: 3, right: null, left: null }
  }
}
*/
/* ---------------------------------- contains ---------------------------------- */
console.log(tree.contains(0)); // false
console.log(tree.contains(10)); // true

/* ----------------------------------- BFS ---------------------------------- 
[10, 6, 15, 3, 8, 20] */
tree.BFS();

/* ------------------------------ DFS - InOrder -----------------------------
[ 3, 6, 8, 10, 15, 20 ] */
tree.DFSInOrder();

/* ----------------------------- DFS - PreOrder -----------------------------
[ 10, 6, 3, 8, 15, 20 ] */
tree.DFSPreOrder();

/* ----------------------------- DFS - PostOrder ----------------------------
[ 3, 8, 6, 20, 15, 10 ] */
tree.DFSPostOrder();
