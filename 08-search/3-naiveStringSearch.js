/* [3] naive string search
- 긴 문자열에서 짧은 문자열이 몇 번 일치하는지를 반환하는 함수
- input
  a. 'lorie loled', 'lol'
  b. 'lorie loled', 'lol'
- output
  a. 1
  b. 2
*/

const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] != long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
};

console.log(naiveSearch('lorie loled', 'lol')); // 1
console.log(naiveSearch('lorie loled', 'lo')); // 2
