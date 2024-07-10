### 문제 해결 접근법

### 알고리즘

- 특정 작업을 달성하기 위한 과정이나 일련의 단계

### 문제 이해하기

1. 문제에 들어가는 입력은 무엇인가?
2. 문제에 대한 결과는 무엇인가?
3. 입력에서 출력을 결정할 수 있나?(문제 해결에 충분한 정보가 있나?)
4. 문제의 일부인 데이터의 중요한 부분에 어떻게 라벨을 지정할 수 있나?

### Example

- [예시 코드 바로가기](./1-example.js)
- 문자열을 입력받아 문자열의 각 문자 수를 반환하는 함수를 작성하세요.
- 문자열에 소문자, 숫자인 키가 있는 객체를 반환합니다.
  | input | output |
  | --- | --- |
  | aaaa | {a:4} |
  | hello | {h:1, e:1, l:2, o:1} |
  | Your PIN number is 1234! | {'1':1, '2':1, '3':1, '4':1, y:1, o:1, u:2, r:2, p:1, i:2, n:2, m:1, b:1, e:1, s:1} |

1. 마지막에 반환할 객체를 만든다.
2. 각 문자에 대해 문자열을 반복한다.
   a. 문자가 다른 것(공백, 마침표 등)인 경우 아무것도 하지 않는다.
   b. 문자가 숫자/문자이고 객체의 키인 경우 개수에 1을 추가한다.
   c. 문자가 숫자/문자이고 객체에 없으면 객체에 추가하고 값을 1로 설정한다.
3. 끝에 객체를 반환한다.

```jsx
const charCount = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
};
```

4. 리팩토링

```jsx
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
```
