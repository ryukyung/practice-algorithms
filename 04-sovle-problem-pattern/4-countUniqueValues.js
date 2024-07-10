/* [4] 다중 포인터: 고유값을 세는 도전 과제
- 정렬된 배열을 받아들이고 배열의 고유 값을 계산하는 countUniqueValues라는 함수를 구현합니다.
- 배열에는 음수가 있을 수 있지만 항상 정렬됩니다.
- input
  a. [1,1,1,1,1,2] 
  b. [1,2,3,4,4,4,7,7,12,12,13] 
  c. [] 
  d. [-2,-1,-1,0,1] 
- output
  a. 2
  b. 7
  c. 0
  d. 4
*/
/* ------------------------------- Solve: O(n) ------------------------------
- 받은 배열을 반복한다.
  - Set에 추가한다.
- Set의 크기를 반환한다.
*/
const countUniqueValues = (array) => new Set(array).size;

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

/* ----------------------------- Solution: O(n) -----------------------------
- 받은 배열의 길이가 0이라면 0을 반환한다.
- 배열을 반복한다.
  - count 인덱스와 반복 인덱스의 값이 같으면 아무것도 하지 않는다.
  - 다르다면 count 인덱스에 1을 추가하고 배열의 값을 바꾼다.
- 배열의 0번지를 위해 0으로 시작했기 때문에 count 인덱스에 1을 더한 후 반환한다.
*/
const countUniqueValues1 = (array) => {
  if (array.length === 0) return 0;
  let count = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[count] !== array[j]) {
      count++;
      array[count] = array[j];
    }
  }
  return count + 1;
};

console.log(countUniqueValues1([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues1([])); // 0
console.log(countUniqueValues1([-2, -1, -1, 0, 1])); // 4
