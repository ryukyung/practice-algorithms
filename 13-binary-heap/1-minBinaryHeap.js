// [1] Min Binary Heap

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  heapifyUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (element >= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let [leftIndex, rightIndex] = [2 * index + 1, 2 * index + 2];
      let leftChild, rightChild;
      let swap = null;
      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild < element) swap = leftIndex;
      }

      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        )
          swap = rightIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

  insert(element) {
    this.values.push(element);
    this.heapifyUp();
  }

  removeMin() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.heapifyDown();
    }
    return min;
  }
}
/* --------------------------- insert & heapifyUp ---------------------------

[INDEX] ELEMENT | PARENT | VALUES
  [1]     39    |   41   | [39, 41]
  [2]     33    |   39   | [33, 41, 39]
  [3]     18    |   41   | [33. 18, 39, 41]
  [1]     18    |   33   | [18, 33, 39, 41] *
  [4]     27    |   33   | [18, 27, 39, 41, 33]
  [1]     27    |   18   | 
  [5]     12    |   39   | [18, 27, 12, 41, 33, 39]
  [2]     12    |   18   | [12, 27, 18, 41, 33, 39]
  [6]     55    |   18   | [12, 27, 18, 41, 33, 39, 55]
-> RESULT: [12, 27, 18, 41, 33, 39, 55]
*
a. 초기 삽입으로 18이 배열의 앞으로 들어감
b. 18과 18의 부모(33) 비교: 18 < 33, 부모와 자식 위치 변경(1번 인덱스)
*/

const heap = new MinBinaryHeap();
heap.insert(41); // [1]
heap.insert(39); // [2]
heap.insert(33); // [3]
heap.insert(18); // [4]
heap.insert(27); // [5]
heap.insert(12); // [6]
heap.insert(55); // [7]
console.log(heap.values);

/* ------------------------- removeMin & heapifyDown ------------------------
[INDEX] ELEMENT | LEFT | RIGHT | SWAP | DELETE_ELEMENT
  [0]     55    |  27  |   18  |  2   | 
  [2]     55    |  39  |       |  5   |
  [5]     55    |      |       | null | 12
  [0]     55    |  27  |   39  |  1   |
  [1]     55    |  41  |   33  |  4   |
  [4]     55    |      |       | null | 18
  [0]     55    |  33  |   39  |  1   |
  [1]     55    |  41  |       |  3   |
  [3]     55    |      |       | null | 27
  [0]     55    |  41  |   39  |  2   |
  [2]     55    |      |       | null | 33
  [0]     55    |  41  |       |  1   |
  [1]     55    |      |       | null | 39
  [0]     55    |      |       | null | 41
  [0]     55    |      |       | null | 55
  [0]           |      |       |      | undefined
*/

heap.removeMin();
heap.removeMin();
heap.removeMin();
heap.removeMin();
heap.removeMin();
heap.removeMin();
heap.removeMin();
heap.removeMin();
