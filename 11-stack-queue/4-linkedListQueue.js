// [4] Linked List Queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // enqueue: 받은 value를 queue에 넣기
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // dequeue: 맨 앞의 value 제거
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const queue = new Queue();
/* --------------------------------- enqueue -------------------------------- */
queue.enqueue('1번'); // 1
queue.enqueue('2번'); // 2
queue.enqueue('3번'); // 3

/* --------------------------------- dequeue -------------------------------- */
queue.dequeue(); // 1번
queue.dequeue(); // 2번
queue.dequeue(); // 3번
queue.dequeue(); // null
