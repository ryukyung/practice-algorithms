/* [2] 빈도수 세기 / 다중 포인터
- 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.
- 빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.
- Time: O(n)
- Space: O(n)

- input
  a. 1,2,3
  b. 1,2,2
  c. 'a', 'b', 'c', 'a'
- output
  a. false
  b. true
  c. true
 */

/* ------------------------------- Solve: O(n) ------------------------------
- 받은 인수들을 반복한다.
  - 만약 해당 값이 존재하면 +1을, 존재하지 않다면 1을 객체에 저장한다.
- 객체의 값들 중 2이상인 것이 있다면 true, 없다면 false를 반환한다.
*/
const areThereDuplicates = (...rest) => {
  const list = {};
  for (let i = 0; i < rest.length; i++) {
    const temp = rest[i];
    list[temp] ? (list[temp] += 1) : (list[temp] = 1);
  }
  return Object.values(list).filter((i) => i >= 2).length ? true : false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

/* ----------------------------- Solution1: O(n) ----------------------------
+ 빈도 수 세기
- 인수를 반복한다.
  - 해당 값이 존재하면 +1을, 존재하지 않는다면 1을 객체에 저장한다.
- 객체의 키가 1보다 크다면 true를 반환한다.
- false를 반환한다.
*/
function areThereDuplicates1() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates1(1, 2, 3)); // false
console.log(areThereDuplicates1(1, 2, 2)); // true
console.log(areThereDuplicates1('a', 'b', 'c', 'a')); // true

/* ----------------------------- Solution2: O(n) ----------------------------
+ One Liner
- 받은 인수를 Set에 넣는다.
- Set의 크기와 인수의 길이가 같다면 true, 다르다면 false를 반환한다.
*/
function areThereDuplicates2() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true
