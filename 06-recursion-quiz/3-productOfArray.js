/* [3] productOfArray
- 숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오
- input
  a. [1,2,3]
  b. [1,2,3,10]
- output
  a. 6
  b. 60
*/
/* ---------------------------------- Solve --------------------------------- */
const productOfArray = (arr) => {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
