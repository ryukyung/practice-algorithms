/* [5] 기준점 간 이동 배열 패턴
- 정수 배열과 n이라는 숫자를 받아들이는 maxSubarraySum이라는 함수를 작성하세요.
- 이 함수는 배열에 있는 n 연속 요소의 최대 합계를 계산해야 합니다. 
- input
  a. [1,2,5,2,8,1,5],2
  b. [1,2,5,2,8,1,5],4
  c. [4,2,1,6],1
  d. [4,2,1,6,2],4
  e. [],4
- output
  a. 10
  b. 17
  c. 6
  d. 13
  e. null
*/
/* ------------------------------ Solve: O(n^2) -----------------------------
- 받은 배열의 길이보다 n이 크다면 null을 반환한다.
- 받은 배열을 반복한다.
  - 현재 인덱스 ~ 현재 인덱스 + n인 부분까지의 합을 새로운 배열에 넣는다.
- 새로운 배열의 최댓값을 반환한다.
*/
const maxSubarraySum = (array, n) => {
  if (n > array.length) return null;
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    const sum = array.slice(i, i + n).reduce((a, b) => a + b);
    newArr.push(sum);
  }

  return Math.max(...newArr);
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

/* ---------------------------- Solution: O(n^2) ----------------------------
- 받은 배열의 길이보다 num이 크다면 null을 반환한다.
- num에 맞게 마지막으로 시작할 수 있는 인덱스만큼 반복한다. (arr.length - num +1)
  - 새로운 변수에 현재 인덱스 ~ num까지의 합을 더한다.
  - 기존의 최댓값과 비교해서 큰 값을 넣는다.
- 최댓값을 반환한다.
*/
const maxSubarraySum1 = (arr, num) => {
  if (num > arr.length) return null;
  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
};

console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum1([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum1([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum1([], 4)); // null

/* ----------------------------- Solution2: O(n) ----------------------------
- 받은 배열의 길이보다 num이 크다면 null을 반환한다.
- 0번 인덱스 ~ num번 인덱스의 합을 변수에 저장한다.
- 배열을 반복한다.
  - 저장한 변수에서 시작 인덱스의 값을 빼고, 끝 인덱스의 값을 추가한다.
  - 기존의 최댓값과 현재의 최댓값을 비교해서 큰 값을 저장한다.
- 최댓값을 반환한다.
*/
const maxSubarraySum2 = (arr, num) => {
  if (arr.length < num) return null;
  let [maxSum, tempSum] = [0, 0];

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum2([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum2([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum2([], 4)); // null
