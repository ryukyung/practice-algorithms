// [1] Fibonacci
const loopFib = (num) => {
  const array = new Array(num + 1);
  array[0] = 0;
  array[1] = 1;
  for (let i = 2; i <= num; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[num];
};

const recursiveFib = (num) => {
  if (num <= 2) return 1;
  return recursiveFib(num - 1) + recursiveFib(num - 2);
};

console.log(loopFib(4), recursiveFib(4)); // 3 3
console.log(loopFib(10), recursiveFib(10)); // 55 55
console.log(loopFib(28), recursiveFib(28)); // 317811 317811
console.log(loopFib(35), recursiveFib(35)); // 9227465 9227465
