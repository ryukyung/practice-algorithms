/* [7] capitalizeWord
- capitalizeWords라는 재귀 함수를 작성하시오.
- 단어 배열이 주어지면 각 단어가 대문자로 표시된 새 배열을 반환합니다.
- input
  a. ['car','taco','banana']
- output
  a. ['CAR', 'TACO', 'BANANA]  
*/
/* ---------------------------------- Solve --------------------------------- */
const capitalizeWords = (arr) => {
  if (arr.length === 0) return [];
  const firstWord = arr[0].toUpperCase();
  const restWord = capitalizeWords(arr.slice(1));
  return [firstWord, ...restWord];
};

console.log(capitalizeWords(['car', 'taco', 'banana']));
