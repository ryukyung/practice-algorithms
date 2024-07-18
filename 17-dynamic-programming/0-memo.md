### 동적 프로그래밍(Dynamic Programming)

#### 다이나믹 프로그래밍

- 복잡한 문제를 더 작은 하위 문제로 나누어 해결하는 알고리즘 설계 기법

#### 하향식 접근 vs. 상향식 접근

- 하향식(top-down): Memoization
  - 큰 문제를 작은 부분 문제로 나누어 해결하는 방식, 주로 재귀적 호출을 사용한다.
  - 중복 계산을 피하기 위해 이전에 계산한 값을 저장하는 Memoization을 활용한다.
    (Memoization은 캐싱을 통해 이전 계산 결과를 저장하여 중복 계산을 피하는 것)
  - 재귀를 사용하므로 구현이 더 간단할 수 있고 필요한 부분 문제만 해결하므로 계산 시간을 절약할 수 있다.
  - '재귀 호출'로 인한 오버헤드가 발생할 수 있다.
- 상향식(bottom-up): Tabulation
  - 작은 부분 문제부터 차례대로 해결하여 전체 문제를 해결하는 방식, 주로 반복문을 사용한다.
  - 반복문을 사용하여 반복적으로 부분 문제들을 해결하고, 결과를 배열 등에 저장한다.
  - 일반적으로 더 직관적이고 이해하기 쉬우며, 모든 작은 부분 문제를 해결하므로 최적 부분 구조를 보장한다.

#### 피보나치 수열

- 예시: [예시 코드 보러가기](./1-fib.js)

- 하향식 접근 방식
  ```jsx
  const loopFib = (num) => {
    const array = new Array(num + 1);
    array[0] = 0;
    array[1] = 1;
    for (let i = 2; i <= num; i++) {
      array[i] = array[i - 1] + array[i - 2];
    }
    return array[num];
  };
  ```
- 상향식 접근 방식
  ```jsx
  const recursiveFib = (num) => {
    if (num <= 2) return 1;
    return recursiveFib(num - 1) + recursiveFib(num - 2);
  };
  ```
