/* [3] someRecursive
- 배열과 콜백을 받아들이는 someRecursive 라는 재귀(recursive) 함수를 작성하시오. 
- 이 함수는 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다.
- input
  a. [1, 2, 3, 4]
  b. [4, 6, 8, 9]
  c. [4, 6, 8]
  d. [4, 6, 8]
- output
  a. true
  b. true
  c. false
  d. false
*/
/* -------------------------------- Solution -------------------------------- */
const isOdd = (val) => val % 2 !== 0;

const someRecursive = (arr, func) => {
  if (arr.length === 0) return false;
  if (func(arr[0])) return true;
  return someRecursive(arr.slice(1), func);
};

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
