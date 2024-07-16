// [3] Loop BST

const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
};

const result = (arr, target) => {
  const temp = binarySearch(arr, target, 0, arr.length - 1);
  if (temp === -1) console.log('원소가 존재하지 않습니다.');
  else console.log(temp + 1);
};

result([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 7); // 4
