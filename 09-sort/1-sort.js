/* [1] sort(a,b)
- 음수를 반환하는 경우 순서는 a,b
- 양수를 반환하는 경우 순서는 b,a
- 0을 반환하는 경우 정렬에 관해서는 a,b동일
*/

const numberCompare = (num1, num2) => num1 - num2;

console.log([6, 4, 5, 15, 10].sort(numberCompare));

const compareByLen = (str1, str2) => str1.length - str2.length;

console.log(
  ['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen)
);
