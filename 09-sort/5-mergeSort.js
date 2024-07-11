// [5] Merge Sort
const merge = (arr1, arr2) => {
  let result = [];
  let [i, j] = [0, 0];
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
/* 정렬 과정
i array: 1 []
j array: 2 [ 1 ]
i array: 10 [ 1, 2 ]
j array: 14 [ 1, 2, 10 ]
i array: 50 [ 1, 2, 10, 14 ]
j array: 99 [ 1, 2, 10, 14, 50 ]
j array: 100 [ 1, 2, 10, 14, 50, 99 ]
result: [ 1,  2,  10, 14, 50, 99, 100 ]
*/

console.log(merge([], [1, 3]));
/* 정렬 과정
j array: 1 []
j array: 3 [ 1 ]
result: [ 1, 3 ]
*/

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
};
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
