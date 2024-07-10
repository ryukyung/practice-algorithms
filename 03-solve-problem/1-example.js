const charCountFirst = (str) => {
  // 1. 마지막에 반환할 객체를 만든다.
  const obj = {};
  // 2. 각 문자에 대해 문자열을 반복한다.
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    //  a. 문자가 다른 것(공백, 마침표 등)인 경우 아무것도 하지 않는다.
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        //  b. 문자가 숫자/문자이고 객체의 키인 경우 개수에 1을 추가한다.
        obj[char]++;
      } else {
        //  c. 문자가 숫자/문자이고 객체에 없으면 객체에 추가하고 값을 1로 설정한다.
        obj[char] = 1;
      }
    }
  }
  // 3. 끝에 객체를 반환한다.
  return obj;
};

console.log('"aaaa"', charCountFirst('aaaa'));
console.log('"hello"', charCountFirst('hello'));
console.log(
  '"Your PIN number is 1234!"',
  charCountFirst('Your PIN number is 1234!')
);

// 4. 리팩토링
const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric(0-9)
    !(code > 64 && code < 91) && // upper alpha(A-Z)
    !(code > 96 && code < 123) // lower alpha(a-z)
  ) {
    return false;
  }
  return true;
};

const charCount = (str) => {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

console.log('"aaaa"', charCount('aaaa'));
console.log('"hello"', charCount('hello'));
console.log(
  '"Your PIN number is 1234!"',
  charCount('Your PIN number is 1234!')
);
