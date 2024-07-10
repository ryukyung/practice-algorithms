// [1] 코드 실행 시간 확인
const addUpTo1 = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

const addUpTo2 = (n) => (n * (n + 1)) / 2;

const startTime1 = performance.now();
const result1 = addUpTo1(100000000);
const endTime1 = performance.now();

const startTime2 = performance.now();
const result2 = addUpTo2(100000000);
const endTime2 = performance.now();

console.log(`[1] result: ${result1} time: ${(endTime1 - startTime1) / 100}s`);
console.log(`[2] result: ${result2} time: ${(endTime2 - startTime2) / 100}s`);

/* 
코드 실행 시간이 짧다고 해서 더 좋은 코드라고 말할 수 없다.
- 기기마다 다른 방식으로 시간을 기록하기 때문에 완전히 믿을 수 없다.
- 똑같은 기계로 다른 시간의 결과가 나올 수 있다.
- 빠른 알고리즘에서는 정말 짧은 시간 안에 모든 것이 처리되기 때문에 속도 측정 정확도가 나쁠 확률이 높다.

<1회차>
[1] result: 5000000050000000 time: 1.580063749998808s
[2] result: 5000000050000000 time: 0.0005333401262760162s
<2회차>
[1] result: 5000000050000000 time: 1.5573941700160503s
[2] result: 5000000050000000 time: 0.000912499874830246s
*/
