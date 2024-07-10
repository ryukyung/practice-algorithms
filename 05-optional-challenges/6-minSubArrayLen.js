/* [6] Sliding Window - minSubArrayLen
- 양수 배열과 양수라는 두 개의 매개 변수를 받아들이는 minSubArrayLen이라는 함수를 작성하세요.
- 이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환해야 합니다. 값이 없는 경우 0을 반환합니다.
- Time: O(n)
- Space: O(1)
- input
  a. [2,3,1,2,4,3], 7
  b. [2,1,6,5,4], 9
  c. [3,1,7,11,2,9,8,21,62,33,19], 52
  d. [1,4,16,22,5,7,8,9,10],39
  e. [1,4,16,22,5,7,8,9,10],55
  f. [4, 3, 3, 8, 1, 2, 3], 11
  g. [1,4,16,22,5,7,8,9,10],95
- output
  a. 2 -> because [4,3] is the smallest subarray
  b. 2 -> because [5,4] is the smallest subarray
  c. 1 -> because [62] is greater than 52
  d. 3
  e. 5
  f. 2
  g. 0
*/
/* -------------------------------- Solution --------------------------------
- 시작 인덱스가 배열 길이보다 커지기 전까지 반복한다.
  - 계산한 총합이 양수보다 작고, 끝 인덱스가 배열을 벗어나지 않으면 끝 인덱스를 총합에 더하고 다음 인덱스로 넘어간다.
  - 계산한 총합이 양수와 크거나 같다면 현재의 최소 길이와 지금의 최소 길이 중 작은 값을 저장한다.
    - 총합에서 시작 인덱스의 값을 빼고, 다음 인덱스로 넘어간다.
  - 위의 2가지 경우가 아나리면 break로 무한루프에서 빠져 나온다.
- 최소 길이가 있다면 최소 길이를, 없다면 0을 반환한다.
*/
const minSubArrayLen = (arr, total) => {
  let nearTotal = 0;
  let [startIndex, endIndex] = [0, 0];
  let minLength = Infinity;

  while (startIndex < arr.length) {
    if (nearTotal < total && endIndex < arr.length) {
      nearTotal += arr[endIndex];
      endIndex++;
    } else if (nearTotal >= total) {
      minLength = Math.min(minLength, endIndex - startIndex);
      nearTotal -= arr[startIndex];
      startIndex++;
    } else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
