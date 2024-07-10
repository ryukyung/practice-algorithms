/* [2] factorial
- 숫자를 받아 해당 숫자의 계승(팩토리얼)을 반환하는 팩토리얼 함수를 작성하시오.
- 팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.
- 예를 들어, 4 팩토리얼 (4!)은 4 * 3 * 2 * 1 = 2입니다. 팩토리얼 0(0!)은 항상 1입니다.
- input
  a. 1
  b. 2
  c. 4
  d. 7
- output
  a. 1
  b. 2
  c. 24
  d. 5040
*/
/* ---------------------------------- Solve --------------------------------- */
const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

/* -------------------------------- Solution -------------------------------- */
const factorial1 = (x) => {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial1(x - 1);
};

console.log(factorial1(1)); // 1
console.log(factorial1(2)); // 2
console.log(factorial1(4)); // 24
console.log(factorial1(7)); // 5040
