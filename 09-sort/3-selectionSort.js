// [3] Selection Sort
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
};

console.log(selectionSort([37, 45, 29, 8]));
/* 정렬 과정
array             i lowest
[ 8, 45, 29, 37 ] 8 37
array             i lowest
[ 8, 29, 45, 37 ] 29 45
array             i lowest
[ 8, 29, 37, 45 ] 37 45
array             i lowest
[ 8, 29, 37, 45 ]
*/

console.log(selectionSort([8, 1, 2, 3, 4]));
/* 정렬 과정
array             i lowest
[ 1, 8, 2, 3, 4 ] 1 8
array             i lowest
[ 1, 2, 8, 3, 4 ] 2 8
array             i lowest
[ 1, 2, 3, 8, 4 ] 3 8
array             i lowest
[ 1, 2, 3, 4, 8 ] 4 8
array             i lowest
[ 1, 2, 3, 4, 8 ] 8 8
 */
