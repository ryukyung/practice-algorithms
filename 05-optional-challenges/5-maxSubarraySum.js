/* [5] Sliding Window - maxSubaraySum
- 정수의 배열과 숫자가 주어졌을 때, 함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는 maxSubarraySum이라는 함수를 작성하세요.
- 하위 배열은 원래 배열의 연속적인 요소로 구성되어야 한다는 점에 유의하세요. 
- 아래 첫 번째 예제에서 [100, 200, 300]은 원래 배열의 하위 배열이지만 [100, 300]은 그렇지 않습니다.
- Time: O(n)
- Space: O(1)
- input
  a. [100,200,300,400], 2
  b. [1,4,2,10,23,3,1,0,20], 4
  c. [-3,4,0,-2,6,-1], 2
  d. [3,-2,7,-4,1,-1,4,-2,1],2
  e. [2,3], 3
- output
  a. 700
  b. 39 
  c. 5
  d. 5
  e. null
*/
/* 
a. 300,4000
b. 4,2,10,23
c. 6,-1
d. -2,7
e. 3개가 없음
*/
/* ---------------------------------- Solve ---------------------------------
- 받은 배열의 길이보다 n이 크다면 null을 반환한다.
- 받은 배열을 반복한다.
  - 현재 인덱스 ~ 현재 인덱스 + n인 부분까지의 합을 새로운 배열에 넣는다.
- 새로운 배열의 최댓값을 반환한다.
*/
const maxSubarraySum = (arr, n) => {
  if (n > arr.length) return null;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const sum = arr.slice(i, i + n).reduce((a, b) => a + b);
    newArr.push(sum);
  }

  return Math.max(...newArr);
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

/* -------------------------------- Solution --------------------------------
- 받은 배열의 길이보다 num이 크면 null을 반환한다.
- 0 ~ num번지까지의 합을 변수에 저장한다.
- num ~ 끝번지까지 반복한다.
  - 저장한 변수에서 다음 번지(i)를 더하고 첫 번지(i-num)를 뺀다. 
- 저장한 변수를 반환한다.
*/
const maxSubarraySum1 = (arr, num) => {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;

  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
};

console.log(maxSubarraySum1([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum1([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum1([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum1([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum1([2, 3], 3)); // null
