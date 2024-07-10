/* [4] 다중 포인터
- 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 
- 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.
- Time: O(n+m)
- Space: O(1)
- input
  a. 'hello', 'hello world'
  b. 'sing', 'sting'
  c. 'abc', abracadabra
  d. 'abc', 'acb'
- output
  a. true
  b. true
  c. true
  d. false
*/
/* ------------------------------- Solve: O(n) ------------------------------
- 첫 번째 배열이 존재하지 않는다면 true를 반환한다.
- 두 번째 배열의 길이가 두 번째 인덱스보다 커질 때까지 반복한다.
  - 첫 번째 배열의 길이와 첫 번째 인덱스와 같다면 true를 반환한다.
  - 첫 번째 배열 인덱스 값과 두 번째 배열 인덱스 값이 같다면 첫 번째 인덱스에 +1을 한다.
- false를 반환한다.
*/
const isSubsequence = (str1, str2) => {
  if (!str1) return true;
  let [strIndex1, strIndex2] = [0, 0];

  while (strIndex2 < str2.length) {
    if (str2[strIndex2] === str1[strIndex1]) strIndex1++;
    if (strIndex1 === str1.length) return true;
    strIndex2++;
  }
  return false;
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false

/* ----------------------------- Solution: O(1) ----------------------------- 
+ 공간이 아닌 재귀
- 첫 번째 배열의 길이가 0이면 true를 반환한다.
- 두 번째 배열의 길이가 0이면 false를 반환한다.
- 두번째 배열의 0번 인덱스의 값과 첫번째 배열의 0번째 인덱스의 값이 같다면 
  첫 번째 배열 및 두 번째 배열의 시작 인덱스를 제외한 문자열로 재귀함수를 반환한다.
- 다르다면 첫 번째 배열과 두 번째 배열의 시작 인덱스를 제외한 문자열로 재귀함수를 반환한다.
*/

const isSubsequence1 = (str1, str2) => {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence1(str1.slice(1), str2.slice(1));
  return isSubsequence1(str1, str2.slice(1));
};

console.log(isSubsequence1('hello', 'hello world')); // true
console.log(isSubsequence1('sing', 'sting')); // true
console.log(isSubsequence1('abc', 'abracadabra')); // true
console.log(isSubsequence1('abc', 'acb')); // false
