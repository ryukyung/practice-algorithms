/* [3] 다중 포인터
- 정렬된 정수 배열을 받아들이는 sumZero라는 함수를 작성하세요. 
- 함수는 합이 0인 첫 번째 쌍을 찾아야 합니다. 
- 합이 0이 되는 두 값을 모두 포함하는 배열을 반환하거나 쌍이 존재하지 않는 경우 정의되지 않은 값을 반환합니다.
- input
  a. [-3, -2, -1, 0, 1, 2, 3]
  b. [-2, 0, 1, 3]
  c. [1, 2, 3]
- output
  a. [-3, 3]
  b. undefined
  c. undefined
*/
/* ------------------------------- Sovle: O(n) ------------------------------
- 받은 숫자 배열을 반복한다.
  - 시작 인덱스와 끝 인덱스가 다르고, 시작 값과 끝 값의 합이 0인 경우, 좌표를 반환한다.
*/
const sumZero = (array) => {
  for (let i = 0; i < array.length; i++) {
    const [start, end] = [i, array.length - (i + 1)];
    if (start !== end && array[start] + array[end] === 0)
      return [array[start], array[end]];
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));

/* ---------------------------- Solution1: O(n^2) ----------------------------
- 받은 배열을 반복한다.
  - 받은 배열을 반복한다.
    - 합이 0인 값들이 있다면 좌표를 반환한다.
*/
const sumZero1 = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) return [array[i], array[j]];
    }
  }
};

console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero1([-2, 0, 1, 3]));
console.log(sumZero1([1, 2, 3]));

/* ----------------------------- Solution2: O(n) ----------------------------
- 받은 배열을 반복한다.
  - 시작값과 끝값의 합이 0이면 좌표를 반환한다.
  - 시작값과 끝값의 합이 0보다 크면 끝 인덱스를 앞으로 이동한다.
  - 시작값과 끝값의 합이 0보다 작으면 시작 인덱스를 뒤로 이동한다.
*/

const sumZero2 = (array) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];

    if (sum === 0) return [array[left], array[right]];
    else if (sum > 0) right--;
    else left++;
  }
};

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero2([-2, 0, 1, 3]));
console.log(sumZero2([1, 2, 3]));
