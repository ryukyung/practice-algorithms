// [1] Max Binary Heap

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  // heapifyUp: 새로 삽입된 요소를 올바른 위치로 변경
  heapifyUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];
      if (element < parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  // heapifyDown: 루트 요소를 제거한 후 마지막 요소를 루트로 가져와서 올바른 위치로 내린다.
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
        if (leftChild > element) swap = leftIndex;
      }
      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        )
          swap = rightIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = element;
    }
  }
  // insert: 새로운 요소를 Heap의 끝에 추가 후 heapifyUp을 호출하여 힙 속성 유지
  insert(element) {
    this.values.push(element);
    this.heapifyUp();
  }

  // removeMax: 루트 요소를 제거하고, 마지막 요소를 루트로 가져온 후 heapifyDown을 호출하여 힙 속성 유지
  removeMax() {
    const [max, end] = [this.values[0], this.values.pop()];
    if (this.values.length > 0) {
      this.values[0] = end;
      this.heapifyDown();
    }
    return max;
  }
}

const heap = new MaxBinaryHeap();
/* --------------------------- insert & heapifyUp ---------------------------
    55
 39    41
18 27 12 33
[INDEX] ELEMENT | PARENT | VALUES
  [0]      41   |        | [41]
  [1]      39   |   41   | [41, 39]
  [2]      33   |   41   | [41, 39, 33]
  [3]      18   |   39   | [41, 39, 33, 18]
  [4]      27   |   39   | [41, 39, 33, 18, 27]
  [5]      12   |   33   | [41, 39, 33, 18, 27, 12]
  [6]      55   |   33   | [41, 39, 33, 18, 27, 12, 55] *
  [2]      55   |   41   | [41, 39, 55, 18, 27, 12, 33]
  [1]           |        | [55, 39, 41, 18, 27, 12, 33]
-> RESULT: [55, 39, 41, 18, 27, 12, 33]
*
a. 초기 삽입으로 55가 배열의 마지막으로 들어감
b. 55와 55의 부모(33) 비교: 55 > 33, 부모와 자식 위치 변경 (2번 인덱스)
c. 55와 55의 부모(41) 비교: 55 > 41, 부모와 자식 위치 변경 (1번 인덱스)
*/

heap.insert(41); // [1]
heap.insert(39); // [2]
heap.insert(33); // [3]
heap.insert(18); // [4]
heap.insert(27); // [5]
heap.insert(12); // [6]
heap.insert(55); // [7]
console.log(heap.values); // [ 55, 39, 41, 18, 27, 12, 33 ]

/* ------------------------- removeMax & heapifyDown ------------------------
[INDEX] ELEMENT | LEFT | RIGHT | SWAP | DELETE_ELEMENT
  [00]     33   |  39  |   41  |  2   | 
  [33]     33   |      |       | null | 55
  [00]     12   |  39  |   33  |  1   |
  [12]     12   |      |       | null | 41
  [00]     27   |  12  |   33  |  2   |
  [27]     27   |      |       | null | 39
  [00]     18   |  12  |   27  |  2   |
  [18]     18   |      |       | null | 33
  [00]     18   |  12  |       | null | 27
  [00]     18   |  12  |       | null | 18
  [00]     12   |      |       | null | 12
  [00]          |      |       |      | undefined
*/

heap.removeMax(); // 55
heap.removeMax(); // 41
heap.removeMax(); // 39
heap.removeMax(); // 33
heap.removeMax(); // 27
heap.removeMax(); // 18
heap.removeMax(); // 12
heap.removeMax(); // undefined
console.log(heap.values); // []
