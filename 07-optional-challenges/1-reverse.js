/* [1] reverse
- 문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 reverse 함수를 작성합니다.
- input
  a. awesome
  b. rithmschool
- output
  a. emosewa
  b. loohcsmhtir
*/
/* -------------------------------- Solution -------------------------------- */
const reverse = (str) => {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
};

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
