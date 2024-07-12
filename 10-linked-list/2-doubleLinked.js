// [2] Class - DoubleLinked
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      popedNode.prev = null;
    }
    this.length--;
    return popedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  traverse() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    next = null;
    node = this.head;
    for (let i = 0; i < this.length; i++) {
      prev = node.prev;
      node.prev = next;
      next = node;
      node = prev;
    }
  }
  // TODO: DELETE
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new DoublyLinkList();
/* ---------------------------------- push ----------------------------------
LIST: [] -> [ '1번', '2번', '3번', '4번', '5번' ] */
list.push('1번');
list.push('2번');
list.push('3번');
list.push('4번');
list.push('5번');

/* ----------------------------------- pop ----------------------------------
LIST: [ '1번', '2번', '3번', '4번', '5번' ] -> [ '1번', '2번', '3번', '4번' ] */
list.pop(); // Node { val: '5번', next: null, prev: null }

/* ---------------------------------- shift ---------------------------------
LIST: [ '1번', '2번', '3번', '4번' ] -> [ '2번', '3번', '4번' ] */
list.shift(); // Node { val: '1번', next: null, prev: null }

/* --------------------------------- unshift --------------------------------
LIST: [ '2번', '3번', '4번' ] -> [ '0번', '2번', '3번', '4번' ]  */
list.unshift('0번');

/* ----------------------------------- get ----------------------------------
LIST: [ '0번', '2번', '3번', '4번' ] */
list.get(0);
/* working from start
<ref *2> Node {
  val: '0번',
  next: <ref *1> Node {
    val: '2번',
    next: Node { val: '3번', next: [Node], prev: [Circular *1] },
    prev: [Circular *2]
  },
  prev: null
} */
list.get(3);
/* working from end
<ref *1> Node {
  val: '4번',
  next: null,
  prev: <ref *2> Node {
    val: '3번',
    next: [Circular *1],
    prev: Node { val: '2번', next: [Circular *2], prev: [Node] }
  }
} */
list.get(100); // null

/* ----------------------------------- set ----------------------------------
LIST: [ '0번', '2번', '3번', '4번' ] -> [ '0번', '2번', '바꿈1', '4번' ] */
list.set(2, '바꿈1'); // true
list.set(100, '100번'); // false

/* --------------------------------- insert ---------------------------------
LIST: [ '0번', '2번', '바꿈1', '4번' ] ->[ 'FIRST', '0번', '바꿈2', '2번', '바꿈1', '4번', 'LAST' ] */
list.insert(0, 'FIRST');
list.insert(2, '바꿈2');
list.insert(6, 'LAST');

/* --------------------------------- remove ---------------------------------
LIST: [ 'FIRST', '0번', '바꿈2', '2번', '바꿈1', '4번', 'LAST' ] -> [ '0번', '바꿈2', '2번', '바꿈1', '4번' ]*/
list.remove(0); // true
list.remove(5); // true
list.remove(100); // undefined

/* -------------------------------- traverse -------------------------------- 
LIST: [ '0번', '바꿈2', '2번', '바꿈1', '4번' ] */
list.traverse();

/* --------------------------------- reverse --------------------------------
LIST: [ '0번', '바꿈2', '2번', '바꿈1', '4번' ] -> [ '4번', '바꿈1', '2번', '바꿈2', '0번' ] */
list.reverse();
