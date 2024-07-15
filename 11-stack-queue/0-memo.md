### 스택(Stacks)과 큐(Queues)

1. 스택(Stack)

- 예시: [예시 코드 보러가기(배열)](./1-arrayStack.js)
- 예시: [예시 코드 보러가기(클래스)](./2-linkedListStack.js)
- LIFO(:Last In First Out), 가장 마지막에 쌓인 요소가 먼저 나오게 되는 원리
- 스택을 배열로 구현한다고 했을 때, shift/unshift를 사용하는 것 보다는 push/pop을 사용하는 것이 더 좋다.
  - shift/unshift는 맨 앞에 값을 추가/삭제하므로 사용할 때마다 모든 인덱스를 변경해줘야 하기 때문이다.
- 관련 메소드
  - `push`: 순서대로 데이터 넣기
  - `pop`: 제일 마지막 데이터 제거
  - `peek`: 스택에 쌓인 데이터의 가장 마지막 데이터 읽기

2. 큐(Queue)

- 예시: [예시 코드 보러가기(배열)](./3-arrayQueue.js)
- 예시: [예시 코드 보러가기(클래스)](./4-linkedListQueue.js)
- FIFO(: First In First Out), 가장 먼저 들어온 요소가 가장 먼저 나오게 되는 원리
- 관련 메소드
  - `enqueue`: 데이터 넣기
  - `dequeue`: 데이터 제거
