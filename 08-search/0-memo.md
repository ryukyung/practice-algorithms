### 검색 알고리즘

0. 검색 관련 메소드

- indexOf, includes, find, findIndex

1. 선형 검색(Linear Search)

- 예시: [예시 코드 보러가기](./1-linearSearch.js)
- 데이터가 모인 집합의 처음~끝, 끝~처음까지 하나씩 순서대로 비교하며 원하는 값을 찾아내는 알고리즘
- 데이터가 분류되지 않았을 때 사용

2. 이진 검색(Binary Search)

- 예시: [예시 코드 보러가기](./2-binarySearch.js)
- 원하는 값을 찾을 때까지 검색할 데이터의 범위를 반씩 줄여가며 찾는 알고리즘
- 검색 범위를 반으로 나누어 원하는 값이 나올 때까지 계속 검색하는 것
- 데이터가 분류된 상태에서만 사용

3. (Naive String Search)

- 예시: [예시 코드 보러가기](./3-naiveStringSearch.js)
- 문자열 내에서 특정 패턴을 찾기 위한 단순하고 직관적인 검색 알고리즘
- 텍스트의 각 위치에서 패턴이 일치하는지 확인하는 방법으로 동작
- 직관적이지만 비효율적일 수 있다.
- Keyword: KMP(Knuth Morrise Pratt), Boyer-Moore, Rabin-Karp
