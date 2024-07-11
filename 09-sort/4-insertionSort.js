// [4] Insertion Sort
const insertionSort = (arr) => {
  if (arr.length <= 0) return arr;

  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentValue;
    }
  }
  return arr;
};

console.log(insertionSort([37, 45, 29, 8]));
/* 정렬 과정
array            cur j+1
array            cur j+1
[ 37, 29, 45, 8 ] 29 45
[ 29, 37, 45, 8 ] 29 37
array            cur j+1
[ 29, 37, 8, 45 ] 8 45
[ 29, 8, 37, 45 ] 8 37
[ 8, 29, 37, 45 ] 8 29
[ 8, 29, 37, 45 ]
*/

console.log(insertionSort([8, 1, 2, 3, 4]));
/* 정렬 과정
array            cur j+1
[ 1, 8, 2, 3, 4 ] 1 8
array            cur j+1
[ 1, 2, 8, 3, 4 ] 2 8
array            cur j+1
[ 1, 2, 3, 8, 4 ] 3 8
array            cur j+1
[ 1, 2, 3, 4, 8 ] 4 8
[ 1, 2, 3, 4, 8 ] 
*/
