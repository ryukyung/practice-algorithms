/* [2] 빈도수 세기: 애너그램 도전 과제
- 두 개의 문자열이 주어지면 두 번째 문자열이 첫 번째 문자열의 철자법인지 확인하는 함수를 작성하세요. 
- 아나그램은 아이스맨에서 형성된 시네마와 같은 다른 문자를 재배열하여 형성된 단어, 구문 또는 이름입니다.
- input
  a. '', ''
  b. 'aaz', 'zza'
  c. 'anagram', 'nagaram'
  d. 'rat', 'car'
  e. 'awesome', 'awesom'
  f. 'qwerty', 'qeywrt'
  g. 'texttwisttime', 'timetwisttext'
- output
  a. true
  b. false
  c. true
  d. false
  e. false
  f. true
  g. true
*/

/* ------------------------------- Solve: O(n logn) -------------------------------
- 첫 번째 문자열과 두 번째 문자열의 길이가 다르다면 false를 반환한다.
- 첫 번째 문자열을 한글자씩으로 쪼개고 오름차순으로 정렬한 후 이어붙인다.
- 두 번째 문자열도 한글자씩으로 쪼개고 오름차순으로 정렬한 후 이어붙인다.
- 첫 번째 문자열과 두 번째 문자열이 같은지 비교한다.
*/
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const strList1 = str1.split('').sort().join('');
  const strList2 = str2.split('').sort().join('');
  return strList1 === strList2;
};

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

/* -------------------------------- Solution: -------------------------------
- 첫 번째 문자열과 두 번째 문자열의 길이가 다르다면 false를 반환한다.
- 첫 번째 문자열을 반복한다.
  - 새로운 객체에 첫 번째 문자열의 해당 문자가 몇 번 나오는지 빈도수를 확인한다.
- 두 번째 문자열을 반복한다.
  - 새로운 객체에서 두 번째 문자열과 같은 문자가 없다면 false를 반환한다.
- true를 반환한다.
*/

const validAnagram1 = (first, second) => {
  if (first.length !== second.length) return false;

  const charList = {};
  for (let i = 0; i < first.length; i++) {
    let char = first[i];
    charList[char] ? (charList[char] += 1) : (charList[char] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let char = second[i];
    if (!charList[char]) return false;
    charList[char] -= 1;
  }
  return true;
};

console.log(validAnagram1('', '')); // true
console.log(validAnagram1('aaz', 'zza')); // false
console.log(validAnagram1('anagram', 'nagaram')); // true
console.log(validAnagram1('rat', 'car')); // false
console.log(validAnagram1('awesome', 'awesom')); // false
console.log(validAnagram1('qwerty', 'qeywrt')); // true
console.log(validAnagram1('texttwisttime', 'timetwisttext')); // true
