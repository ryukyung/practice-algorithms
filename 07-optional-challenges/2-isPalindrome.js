/* [2] isPalindrome
- 전달된 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true 를 반환하는 isPalindrome이라는 재귀(recursive) 함수를 작성하시오. 
- 팔린드롬이 아닐 경우 false 를 반환합니다.
- input
  a. awesome
  b. foobar
  c. tacocat
  d. amanaplanacanalpanama
  e. amanaplanacanalpandemonium
- output
  a. false
  d. false
  c. true
  d. true
  e. false
*/
/* -------------------------------- Solution -------------------------------- */
const isPalindrome = (str) => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
};

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
