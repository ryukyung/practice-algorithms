// [1] Class - BST
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
}
/* make Tree
    10
  5    13
2  7 11  16 */
const tree = new BinarySearchTree();
/* --------------------------------- insert --------------------------------- */
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree);
/* ---------------------------------- find ---------------------------------- */
console.log(tree.find(0)); // undefined
console.log(tree.find(10));
/* 
Node {
  value: 10,
  right: Node {
    value: 13,
    right: Node { value: 16, right: null, left: null },
    left: Node { value: 11, right: null, left: null }
  },
  left: Node {
    value: 5,
    right: Node { value: 7, right: null, left: null },
    left: Node { value: 2, right: null, left: null }
  }
}
*/
/* ---------------------------------- contains ---------------------------------- */
console.log(tree.contains(0)); // false
console.log(tree.contains(10)); // true
