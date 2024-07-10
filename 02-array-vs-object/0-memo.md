### 배열과 오브젝트의 성능 평가

1. Object

- 모든 것을 빨리 처리하지만 정렬되어 있지 않다.
  | 구분 | Big O |
  | :--: | :---: |
  | 입력 | O(1) |
  | 삭제 | O(1) |
  | 탐색 | O(n) |
  | 접근 | O(1) |

  - 탐색: 어떤 특정한 정보가 어디에 있는지를 확인 하는 것, O(n)[n에 따라서 결정됨 -> 선형시간]
    (ex. true 값이 이 객체에서 어디에 저장되어 있는지)
  - 접근: 어떠한 정보에 접근 (ex. `instructor.firstName`)

- Methods
  | 구분 | Big O |
  | :---: | :---: |
  | Object.keys | O(n) |
  | Object.values | O(n) |
  | Object.entries | O(n) |
  | hasOwnProperty | O(1) |

2. Array

- 정렬되어 있는 데이터를 위해 사용한다.
  | 구분 | Big O |
  | :---: | :---: |
  | 삽입 | O(1) ~O(n) |
  | 삭제 | O(1) ~O(n) |
  | 탐색 | O(n) |
  | 접근 | O(1) |

  - 삽입/삭제에서 복잡해질 수 있다.
  - (비어있는 배열 제외) push/pop하는 작업(`O(1)`)이 shift/unshift하는 작업(`O(n)`)보다 빠르다.

- Methods
  | 구분 | Big O |
  | :---: | :---: |
  | push, pop | O(1) |
  | shift/unshift | O(n) |
  | sort | O(n \* logN) |
  | concat/slice/splice | O(n) |
  | forEacth/map/filter/reduce/etc. | O(n) |
