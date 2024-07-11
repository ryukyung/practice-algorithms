// [7] Radix Sort
const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(nums[i]));
  }
  return maxDigit;
};

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([4, 7, 29, 86, 408, 902, 1556, 4386, 9637]));

/* 정렬 결과
---------------------------------- TURN ----------------------------------
일의 자리에 따른 정렬
[
  [],
  [],
  [ 902 ],
  [],
  [ 4 ],
  [],
  [ 86, 1556, 4386 ],
  [ 7, 9637 ],
  [ 408 ],
  [ 29 ]
]
[ 902, 4, 86, 1556, 4386, 7, 9637,  408, 29]
---------------------------------- TURN ----------------------------------
십의 자리에 따른 정렬
[
  [ 902, 4, 7, 408 ],
  [],
  [ 29 ],
  [ 9637 ],
  [],
  [ 1556 ],
  [],
  [],
  [ 86, 4386 ],
  []
]
[ 902, 4, 7, 408, 29, 9637,1556, 86, 4386]
---------------------------------- TURN ----------------------------------
백의 자리에 따른 정렬
[
  [ 4, 7, 29, 86 ],
  [],
  [],
  [ 4386 ],
  [ 408 ],
  [ 1556 ],
  [ 9637 ],
  [],
  [],
  [ 902 ]
]
[ 4, 7, 29, 86, 4386, 408, 1556, 9637, 902 ]
---------------------------------- TURN ----------------------------------
천의 자리에 따른 정렬
[
  [ 4, 7, 29, 86, 408, 902 ],
  [ 1556 ],
  [],
  [],
  [ 4386 ],
  [],
  [],
  [],
  [],
  [ 9637 ]
]
[ 4, 7, 29, 86, 408, 902, 1556, 4386, 9637 ]
RESULT: [ 4, 7, 29, 86, 408, 902, 1556, 4386, 9637]
*/
