// [2] Bubble Sort: O(n^2)
const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};

console.log(bubbleSort([37, 45, 29, 8]));
/* 정렬 과정
array             i  i+1
[ 37, 45, 29, 8 ] 37 45
[ 37, 45, 29, 8 ] 45 29
[ 37, 29, 45, 8 ] 45 8
array             i  i+1
[ 37, 29, 8, 45 ] 37 29
[ 29, 37, 8, 45 ] 37 8
array             i  i+1
[ 29, 8, 37, 45 ] 29 8
array             i  i+1
[ 8, 29, 37, 45 ]
*/

// [2-1] Bubble Sort Optimization: O(n)
const bubbleSortOptimization = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([8, 1, 2, 3, 4]));
console.log(bubbleSortOptimization([8, 1, 2, 3, 4]));

/* 최적화 전(bubbleSort)       최적화 후(bubbleSortOptimization)
array             i  i+1     array             i i+1
[ 8, 1, 2, 3, 4 ] 8 1        [ 8, 1, 2, 3, 4 ] 8 1
[ 1, 8, 2, 3, 4 ] 8 2        [ 1, 8, 2, 3, 4 ] 8 2
[ 1, 2, 8, 3, 4 ] 8 3        [ 1, 2, 8, 3, 4 ] 8 3
[ 1, 2, 3, 8, 4 ] 8 4        [ 1, 2, 3, 8, 4 ] 8 4
array             i  i+1     array             i i+1
[ 1, 2, 3, 4, 8 ] 1 2        [ 1, 2, 3, 4, 8 ] 1 2
[ 1, 2, 3, 4, 8 ] 2 3        [ 1, 2, 3, 4, 8 ] 2 3
[ 1, 2, 3, 4, 8 ] 3 4        [ 1, 2, 3, 4, 8 ] 3 4
array             i  i+1     [ 1, 2, 3, 4, 8 ] 
[ 1, 2, 3, 4, 8 ] 1 2
[ 1, 2, 3, 4, 8 ] 2 3
array             i  i+1
[ 1, 2, 3, 4, 8 ] 1 2
array             i  i+1
[ 1, 2, 3, 4, 8 ]
*/
