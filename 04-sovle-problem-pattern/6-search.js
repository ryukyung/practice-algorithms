/* [6] 분할과 정복 패턴
- 정렬된 정수 배열이 주어지면 search이라는 함수를 작성하세요.
- 이 함수는 값을 받아 함수에 전달된 값이 있는 인덱스를 반환합니다.
- 값을 찾을 수 없으면 -1을 반환합니다.
- input
  a. [1,2,3,4,5,6],4
  b. [1,2,3,4,5,6],6
  c. [1,2,3,4,5,6],11
- output
  a. 3
  b. 5
  c. -1
*/
/* ------------------------------- Solve: O(n) ------------------------------
- 받은 배열에서 n을 찾아 반환한다.
- 만약 n이 없을 경우 -1을 반환한다.
*/
const search = (array, n) => array.indexOf(n);

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

/* ----------------------------- Solution1: O(n) ----------------------------
+ Linear Search
- 받은 배열의 길이만큼 반복한다.
  - 배열의 요소가 val과 같으면 배열의 인덱스를 반환한다.
- -1을 반환한다.
*/
const search1 = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

console.log(search1([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search1([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search1([1, 2, 3, 4, 5, 6], 11)); // -1

/* ----------------------------- Solution2: O(n) ----------------------------
+ Binary Search
- 받은 배열의 길이만큼 반복한다.
  - 시작 인덱스와 끝 인덱스로 중간 인덱스를 구한다.
  - 중간 인덱스가 찾는 값보다 작다면 시작 인덱스를 다음 칸(시작 인덱스 +1)로 이동한다.
  - 중간 인덱스가 찾는 값보다 크다면 끝 인덱스를 앞 칸(끝 인덱스 -1)로 이동한다.
  - 배열의 요소가 val과 같다면 배열의 인덱스를 반환한다.
- -1을 반환한다.
*/
const search2 = (arr, val) => {
  let [min, max] = [0, arr.length - 1];

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < val) min = middle + 1;
    else if (arr[middle] > val) max = middle - 1;
    else return middle;
  }
  return -1;
};

console.log(search2([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search2([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search2([1, 2, 3, 4, 5, 6], 11)); // -1
