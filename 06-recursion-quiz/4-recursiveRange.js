/* [4] recursiveRange
- 숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오.
- input
  a. 6
  b. 10
- output
  a. 21
  b. 55
*/
/* ---------------------------------- Solve --------------------------------- */
const recursiveRange = (num) => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
