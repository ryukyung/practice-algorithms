// [2] Linked List Stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // push: 받은 value를 stack에 넣기
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  // pop: stack의 마지막 value 제거
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  // peek: stack의 마지막 value 읽기
  peek() {
    if (!this.first) return null;
    return this.first.value;
  }
}

const stack = new Stack();

/* ---------------------------------- push ---------------------------------- */
stack.push('1번');
stack.push('2번');
stack.push('3번');

/* ----------------------------------- pop ---------------------------------- */
stack.pop(); // 3번
stack.pop(); // 2번
stack.pop(); // 1번
stack.pop(); // null

/* ---------------------------------- peek ---------------------------------- */
console.log(stack.peek()); // null
stack.push('1번');
console.log(stack.peek()); // 1번
stack.push('2번');
console.log(stack.peek()); // 2번
