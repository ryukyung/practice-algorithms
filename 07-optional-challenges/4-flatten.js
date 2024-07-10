/* [4] flatten
- 배열의 배열을 받아들이고 모든 값이 평활화(flattened)된 새 배열을 반환하는 flatten이라는 재귀(recursive ) 함수를 작성합니다.
- input
  a. [1, 2, 3, [4, 5]]
  b. [1, [2, [3, 4], [[5]]]]
  c. [[1], [2], [3]]
  d. [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]
- output
  a. [1, 2, 3, 4, 5]
  b. [1, 2, 3, 4, 5]
  c. [1,2,3]
  d. [1,2,3]
*/
/* -------------------------------- Solution -------------------------------- */
const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) newArr = newArr.concat(flatten(arr[i]));
    else newArr.push(arr[i]);
  }
  return newArr;
};

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
