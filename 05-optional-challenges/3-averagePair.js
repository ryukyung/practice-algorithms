/* [3] 다중 포인터
- averagePair라는 함수를 작성합니다. 
- 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다. 
- 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.
- Time: O(N)
- Space: O(1)
- input
  a. [1,2,3],2.5
  b. [1,3,3,5,6,7,10,12,19],8
  c. [-1,0,3,4,5,6], 4.1
  d. [],4
- output
  a. true
  b. true
  c. false
  d. false
*/
/* 
a. 2,3
b. 6,10
*/
/* ------------------------------- Solve: O(n) ------------------------------
- 시작 인덱스보다 끝 인덱스가 클 때까지 반복한다.
  - 시작 인덱스와 끝 인덱스의 평균이 avg와 같으면 true를 반환한다.
  - 평균보다 avg가 크다면 시작 인덱스를 다음 칸(시작 인덱스 +1)로 이동한다.
  - 평균보다 avg가 작다면 끝 인덱스를 앞 칸(끝 인덱스 -1)로 이동한다.
- false를 반환한다.
*/
const averagePair = (arr, avg) => {
  let [start, end] = [0, arr.length - 1];
  while (start < end) {
    let temp = (arr[start] + arr[end]) / 2;
    if (temp === avg) return true;
    else if (temp < avg) start++;
    else end--;
  }
  return false;
};
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
