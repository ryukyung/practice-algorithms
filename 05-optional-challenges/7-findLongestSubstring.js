/* [7] Sliding Window - findLongestSubstring
- 문자열을 받아들이고 모든 개별 문자가 포함된 가장 긴 부분 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.
+ 같은 문자가 없는, 긴 부분의 문자열 길이를 반환해라. 
- Time: O(n)
- input
  a. ''
  b. 'rithmschool'
  c. 'thisisawesome'
  d. 'thecatinthehat'
  e. 'bbbbbb'
  f. 'longestsubstring'
  g. 'thisishowwedoit'
- output
  a. 0
  b. 7
  c. 6
  d. 7
  e. 1
  f. 8
  g. 6
*/
/* -------------------------------- Solution -------------------------------- 
- 받은 문자열 길이만큼 반복한다.
  - 중복인 문자가 발생했을 경우 해당 인덱스를 저장한다.
  - 기존에 저장했던 최대 길이와 현재 인덱스 중 큰 값을 저장한다.
  - 중복이면서 마지막에 나타난 문자의 인덱스값을 마지막 인덱스 값으로 저장한다.(마지막 인덱스 값으로 저장하는 것)
- 최대 길이를 반환한다.
*/
const findLongestSubstring = (str) => {
  let maxLength = 0;
  let charIndexList = {};
  let catchIndex = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charIndexList[char])
      catchIndex = Math.max(catchIndex, charIndexList[char]);
    maxLength = Math.max(maxLength, i - catchIndex + 1);
    charIndexList[char] = i + 1; // 마지막에 등장한 문자의 인덱스를 변경함
  }
  return maxLength;
};

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
