/* [1] Linear Search
- 배열과 값을 받아들이고 그 값이 배열 안에 존재하는 경우 그 인덱스(0, 1, 2, ... 중 몇 번째에 위치하는지)를 반환하는 linearSearch라는 함수를 작성합니다. 
- 값이 배열 안에 존재하지 않으면 -1을 반환합니다.
- input
  a. [10, 15, 20, 25, 30], 15
  b. [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4
  c. [100], 100
  d. [1,2,3,4,5], 6
  e. [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10
  f. [100], 200
- output
  a. 1
  b. 5
  c. 0
  d. -1
  e. -1
  f. -1
*/
const linearSearchUsedMethod = (arr, target) => arr.indexOf(target);

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1
