// [1] Class - Single Linked
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/* Node만 사용했을 때
const first = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you');
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prevNode = this.get(index - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return true;
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
    return this;
  }
}

const list = new SinglyLinkedList();
/* ---------------------------------- push ---------------------------------- 
LIST: undefined -> [ '1번', '2번', '3번', '4번', '5번' ] */
list.push('1번');
list.push('2번');
list.push('3번');
list.push('4번');
list.push('5번');

/* ----------------------------------- pop ---------------------------------- 
LIST: [ '1번', '2번', '3번', '4번', '5번' ] -> [ '1번', '2번', '3번', '4번' ] */
list.pop();

/* ---------------------------------- shift ---------------------------------
LIST: [ '1번', '2번', '3번', '4번' ] -> [ '2번', '3번', '4번' ] */
list.shift();

/* --------------------------------- unshift --------------------------------
LIST: [ '2번', '3번', '4번' ] -> [ '0번', '2번', '3번', '4번' ] */
list.unshift('0번');

/* ----------------------------------- get ----------------------------------
LIST: [ '0번', '2번', '3번', '4번' ] */
list.get(0);
/* Node {
  val: '0번',
  next: Node { val: '2번', next: Node { val: '3번', next: [Node] } }
  } */
list.get(3);
// Node { val: '4번', next: null }

/* ----------------------------------- set ----------------------------------
LIST: [ '0번', '2번', '3번', '4번' ] -> [ '0번', '2번', '바꿈', '4번' ] */
list.set(2, '바꿈'); // true
list.set(6, '6번지가 있으면 추가될 걸'); // false

/* --------------------------------- insert ---------------------------------
LIST: [ '0번', '2번', '바꿈', '4번' ] -> [ 'FIRST', '0번', '2번', '바꿈', '4번', 'LAST' ] */
list.insert(0, 'FIRST'); // true
list.insert(5, 'LAST'); // true
list.insert(100, '100번'); // false

/* --------------------------------- remove ---------------------------------
LIST: [ 'FIRST', '0번', '2번', '바꿈', '4번', 'LAST' ] -> [ '0번', '2번', '바꿈', '4번' ] */
list.remove(0); // true
list.remove(4); // true
list.remove(100); // undefined

/* -------------------------------- traverse --------------------------------
LIST: [ '0번', '2번', '바꿈', '4번' ] */
list.traverse(); // [ '0번', '2번', '바꿈', '4번' ]

/* --------------------------------- reverse --------------------------------
LIST: [ '0번', '2번', '바꿈', '4번' ] -> [ '4번', '바꿈', '2번', '0번' ] */
list.reverse(); // [ '4번', '바꿈', '2번', '0번' ]
