/* [1] 빈도수 세기 패턴
- 두 개의 배열을 받아들이는 same이라는 함수를 작성하세요. 
- 배열의 모든 값이 두 번째 배열의 해당 값을 제곱한 경우 함수는 true를 반환해야 합니다. 값의 빈도는 동일해야 합니다.

- input
  a. [1,2,3], [4,1,9]
  b. [1,2,3], [1, 9]
  c. [1,2,1], [4,4,1]
- output
  a. true
  b. false
  c. false (must be same frequency)
 */

/* ---------------------------- Solve: O(n logn) ---------------------------- 
- 첫 번째 배열과 두 번째 배열의 길이가 다르다면 false를 반환한다.
- 2개의 배열을 모두 오름차순으로 정렬한다.
- 첫 번째 배열을 제곱한 배열을 선언한다.
- 새로 선언한 배열을 반복한다.
  - 새로운 배열의 값과 두 번째 배열의 값이 다르면 false를 반환한다.
- true를 반환한다.
*/
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  arr1.sort();
  arr2.sort();
  const newArr = arr1.map((arr) => Math.pow(arr, 2));
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== arr2[i]) return false;
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false

/* ---------------------------- Solution1: O(n^2) ---------------------------
- 첫 번째 배열과 두 번째 배열의 길이가 다르다면 false를 반환한다.
- 첫 번째 배열을 반복한다.
  - 첫 번째 배열의 값을 제곱하고 두 번째 배열에 값이 있는지 확인한다.
  - 없으면 false를 반환한다.
  - 있으면 arr2에서 해당 값을 제거한다.
- true를 반환한다.
*/
const same1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
};

console.log(same1([1, 2, 3], [4, 1, 9])); // true
console.log(same1([1, 2, 3], [1, 9])); // false
console.log(same1([1, 2, 1], [4, 4, 1])); // false

/* ----------------------------- Solution2: O(n) ----------------------------
- 첫 번째 배열과 두 번째 배열의 길이가 다르다면 false를 반환한다.
- 2개의 객체를 선언한다.
- 첫 번째 배열을 반복해서 배열의 값이 몇 개인지 카운트한다.
- 두 번째 배열에서도 배열의 값이 몇 개인지 카운트한다.
- 첫 번째 배열을 반복한다.
  - 첫 번째 배열의 값을 제곱하고 그 값이 두 번째 배열에 없다면 false를 반환한다.
  - 첫 번째 배열에 저장된 빈도와 두 번째 배열에 저장된 빈도가 일치하지 않는다면 false를 반환한다.
- true를 반환한다.
*/
const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
};

console.log(same2([1, 2, 3], [4, 1, 9])); // true
console.log(same2([1, 2, 3], [1, 9])); // false
console.log(same2([1, 2, 1], [4, 4, 1])); // false
