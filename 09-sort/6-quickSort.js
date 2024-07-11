// [6] Quick Sort
const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3
    quickSort(arr, left, pivotIndex - 1); // left
    quickSort(arr, pivotIndex + 1, right); // right
  }
  return arr;
};

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

/* 정렬 순서
Loop: PASS (4 < 6)
Loop: PASS (4 < 9)
Loop: MOVE (4 > 1): 4 [ 4, 6, 9, 1, 2, 5, 3]
Loop: MOVE (4 > 2): 1 [ 4, 1, 9, 6, 2, 5, 3]
Loop: PASS (4 < 5)
Loop: MOVE (4 > 3): 2 [ 4, 1, 2, 6, 9, 5, 3]
TURN1: --------------------------------------- [ 3, 1, 2, 4, 9, 5, 6]
Loop: MOVE (3 > 1): 3 [ 3, 1, 2, 4, 9, 5, 6]
Loop: MOVE (3 > 2): 1 [ 3, 1, 2, 4, 9, 5, 6]
TURN2: --------------------------------------- [ 2, 1, 3, 4, 9, 5, 6]
Loop: MOVE (2 > 1): 2 [ 2, 1, 3, 4, 9, 5, 6]
TURN3: --------------------------------------- [ 1, 2, 3, 4, 9, 5, 6]
Loop: MOVE (9 > 5): 9 [ 1, 2, 3, 4, 9, 5, 6]
Loop: MOVE (9 > 6): 5 [ 1, 2, 3, 4, 9, 5, 6]
TURN4: --------------------------------------- [ 1, 2, 3, 4, 6, 5, 9]
Loop: MOVE (6 > 5): 6 [ 1, 2, 3, 4, 6, 5, 9]
TURN5: --------------------------------------- [ 1, 2, 3, 4, 5, 6, 9]
result: [ 1, 2, 3, 4, 5, 6, 9]
   */
