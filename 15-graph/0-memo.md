### 그래프(Graphs)

#### 그래프

- 연결 되어있는 원소 간의 관계를 표현한 자료구조
- Terms
  | 정점(vertex, node) | 위치 |
  | --- | --- |
  | 간선(edge) | 위치 간의 관계 |
  | 인접 정점(adjacent vertex) | 간선에 의해 직접 연결된 정점 |
  | 정점의 차수(degree) | 무방향 그래프에서 하나의 정점에 인접한 정점의 수 |
  | 진입 차수(in-degree) | 방향 그래프에서 외부에서 오는 간선의 수 |
  | 진출 차수(out-degree) | 방향 그래프에서 외부로 향하는 간선의 수 |
  | 경로 길이(path length) | 경로를 구성하는 데 사용된 간선의 수 |
  | 단순 경로(simple path) | 경로 중에서 반복되는 정점이 없는 경우 |
  | 사이클(cycle) | 단순 경로의 시작 정점과 종료 정점이 동일한 경우 |

  - 무방향 그래프에 존재하는 정점의 모든 차수의 합 = 그래프의 간선 수의 2배
  - 방향 그래프에 있는 정점의 진입 차수 또는 진출 차수의 합 = 방향 그래프의 간선의 수(내차수 + 외차수)

#### 그래프 유형

- 무방향 vs. 방향 그래프
  - 무방향 그래프(Undirected Graph): 두 정점을 연결하는 간선에 방향이 없는 그래프 ex. `(A,B) === (B,A)`
  - 방향 그래프(Directed Graph): 간선에 방향이 있는 그래프 ex. `(A,B) !== (B,A)`
- 가중치 그래프(Weighted Graph)
  간선에 비용이나 가중치가 할당된 그래프
- 비연결 vs. 연결 그래프
  - 비연결 그래프(Disconnected Graph): 무방향 그래프에 있는 모든 정점쌍에 대해서 항상 경로가 존재하는 경우
  - 연결 그래프(Connected Graph): 무방향 그래프에서 특정 정점쌍 사이에 경로가 존재하지 않는 경우
- 비순환 vs. 순환 그래프
  - 비순환 그래프(Cycle Graph): 단순 경로의 시작 정점과 종료 정점이 동일한 경우
  - 순환 그래프(Acyclic Graph): 사이클이 없는 그래프
- 완전 그래프(Complete Graph)
  - 그래프에 속해 있는 모든 정점이 서로 연결되어 있는 그래프
  - 정점이 n개인 완전 그래프에서 무방향 그래프의 최대 간선 수 `n(n-1)/2`, 방향 그래프의 최대 간선 수 `n(n-1)`

#### 인접 행렬 vs. 인접 리스트

- 인접 행렬(Adjacency Matrix)
  - NxN Boolean 행렬로 matrix[i][j]가 true라면 i->j로의 간선이 있다는 뜻이다.
  - 인접 리스트를 사용한 그래프 알고리즘들 또한 인접 행렬에서도 사용 가능하지만 효율성이 떨어진다.
    (인접한 노드를 찾기 위해서 모든 노드를 전부 순회)
- 인접 리스트(Adjacency List)
  - 각각의 정점에 인접한 정점들을 리스트로 표시한 것
  - 배열과 배열의 각 인덱스마다 존재하는 또 다른 리스트를 이용하여 인접 리스트를 표현한다.
  - 정점의 번호만 알면 이 번호를 배열의 인덱스로 하여 각 정점의 리스트에 쉽게 접근할 수 있다.

#### 깊이 우선 그래프(DFS: Depth First Search)

- 루트 노드 혹은 다른 임의의 노드에서 시작해서 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법
- 넓게 탐색하기 전에 깊게 탐색하므로 모든 노드를 방문하고자 하는 경우에 이 방법을 선택한다.

#### 넓이 우선 그래프 (BFS: Breadth First Search)

- 루트 노드 혹은 다른 임의의 노드에서 시작해서 인접한 노드를 먼저 탐색하는 방법이다.
- 깊게 탐색하기 전에 넓게 탐색하므로 두 노드 사이의 최단 경로 혹은 임의의 경로를 찾을 경우 이 방법을 선택한다.