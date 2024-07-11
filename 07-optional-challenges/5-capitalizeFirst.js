/* [5] capitalizeFirst 
- capitalizeFirst라는 재귀 함수를 작성하시오.
- 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.
- input
  a. ['car','taco','banana']
- output
  a. ['Car','Taco','Banana']
*/
/* ---------------------------------- Solve --------------------------------- */
const capitalizeFirst = (arr) => {
  if (arr.length === 0) return [];

  const restWordList = capitalizeFirst(arr.slice(1));

  return [arr[0][0].toUpperCase() + arr[0].slice(1), ...restWordList];
};

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['car'])); // ['Car']

/* -------------------------------- Solution -------------------------------- */
const capitalizeFirst1 = (arr) => {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  const res = capitalizeFirst(arr.slice(0, -1));
  const string =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].substr(1);
  res.push(string);
  return res;
};

console.log(capitalizeFirst1(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
console.log(capitalizeFirst1(['car'])); // ['Car']
