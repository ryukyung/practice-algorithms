// [2] Priority Queue

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // percolateUp: 새로 삽입된 요소 올바른 위치로 변경
  percolateUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];
      console.log('parent', parent);
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  // percolateDown: 루트 요소를 제거한 후 마지막 요소를 가져와서 올바른 위치로 내린다.
  percolateDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let [leftIndex, rightIndex] = [2 * index + 1, 2 * index + 2];
      let leftChild, rightChild;

      let swap = null;
      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild.priority < element.priority) swap = leftIndex;
      }
      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = element;
    }
  }
  // enqueue: 새로운 요소를 추가 후 percolateUp을 호출하여 속성 유지
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.percolateUp();
  }
  // dequeue: 우선순위가 높은 요소 제거 후 percolateDown을 호출하여 속성 유지
  dequeue() {
    const [min, end] = [this.values[0], this.values.pop()];
    if (this.values.length > 0) {
      this.values[0] = end;
      this.percolateDown();
    }
    return min;
  }
}
// priority
/* -------------------------- enqueue & percolateUp -------------------------
[INDEX]  ELEMENT  |  PARENT   | VALUES[value.priority]
  [1]    hamon.2  |  gaori.5  | [hamon.2, gaori.5]
  [2]   octopus.1 |  hamon.2  | [octopus.1,  gaori.5, hamon.2]
  [3]    shark.4  |  gaori.5  | [octopus.1, shark.4, hamon.2, gaori.5]
  [1]    shark.4  | octopus.1 | BREAK
  [4]   dolphin.3 |  shark.4  | [octopus.1, dolphin.3, hamon.2, gaori.5, shark.4]
  [1]   dolphin.3 | octopus.1 | [octopus.1, dolphin.3, hamon.2, gaori.5, shark.4]
-> RESULT [octopus.1. dolphin.3, hamon.2, gaori.5, shark.4]
*/

const pq = new PriorityQueue();
pq.enqueue('gaori', 5);
pq.enqueue('hamon', 2);
pq.enqueue('octopus', 1);
pq.enqueue('shark', 4);
pq.enqueue('dolphin', 3);

/* ------------------------- dequeue & percolateDown ------------------------
[INDEX]   ELEMENT |    LEFT   |  RIGHT  | SWAP | DELETE_ELEMENT | VALUES
  [0]     shark.4 | dolphin.3 | hamon.2 |   2  |                | [shark.4, dolphin.3, hamon.2, gaori.5]
[shark.4] shark.4 |           |         | null |    octopus.1   | [hamon.2, dolphin.3, shark.4, gaori.5]
  [0]     gaori.5 | dolphin.3 | shark.4 |   1  |                | [gaori.5, dolphin.3, shark.4]
[gaori.5] gaori.5 |           |         | null |     hamon.2    |[dolphin.3, gaori.5, shark.4]
  [0]     shark.4 | gaori.5   |         | null |    dolphin.3   | [shark.4, gaori.5]
  [0]     gaori.5 |           |         | null |     shark.4    | [gaori.5]
  [0]     gaori.5 |           |         |      |     gaori.5    | []
  [0]             |           |         |      |                | undefined
*/

pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();
