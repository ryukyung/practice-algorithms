/* [1] 빈도수 세기
- sameFrequency라는 함수를 작성하세요. 
- 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
- Time: O(n)

- input
  a. 182,281
  b. 34, 14
  c. 3589578, 5879385
  d. 22, 222
- output
  a. true
  b. false
  c. true
  d. false
*/
/* ------------------------------- Solve: O(n) ------------------------------
- 첫 번째 숫자와 두 번째 숫자의 자릿수가 다르면 false를 반환한다.
- 첫 번째 숫자의 길이만큼 반복한다.
  - 만약 해당 숫자가 존재한다면 그 값에 +1을, 없다면 1을 객체에 저장한다.
- 두 번재 숫자의 길이만큼 반복한다.
  - 만약 두 번째 숫자에 저장한 숫자가 존재하지 않는다면 false를 반환한다.
  - 존재한다면 저장한 값에서 1을 뺀다.
- true를 반환한다.
*/
const sameFrequency = (num1, num2) => {
  const [strNum1, strNum2] = [String(num1), String(num2)];
  if (strNum1.length !== strNum2.length) return false;
  const numList = {};

  for (let i = 0; i < strNum1.length; i++) {
    const temp = strNum1[i];
    numList[temp] ? (numList[temp] += 1) : (numList[temp] = 1);
  }

  for (let i = 0; i < strNum2.length; i++) {
    const temp = strNum2[i];
    if (!numList[temp]) return false;
    numList[temp] -= 1;
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

/* ----------------------------- Solution: O(n) -----------------------------
- 첫 번째 숫자와 두 번째 숫자의 자릿수가 다르다면 false를 반환한다.
- 첫 번째 숫자의 길이만큼 반복한다.
  - 만약 해당 숫자가 존재한다면 그 값에 +1을, 없다면 1을 객체에 저장한다.
- 두 번째 숫자의 길이만큼 반복한다.
  - 만약 해당 숫자가 존재한다면 그 값에 +1을, 없다면 1을 객체에 저장한다.
- 첫 번째 객체의 값을 반복한다.
  - 첫 번째 객체의 값과 두 번째 객체의 값이 다르다면 false를 반환한다.
- true를 반환한다.
*/
const sameFrequency1 = (num1, num2) => {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
};

console.log(sameFrequency1(182, 281)); // true
console.log(sameFrequency1(34, 14)); // false
console.log(sameFrequency1(3589578, 5879385)); // true
console.log(sameFrequency1(22, 222)); // false
