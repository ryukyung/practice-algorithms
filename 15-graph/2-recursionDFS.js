// [2] DFS - RecursionDFS
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return false;
    this.adjacencyList[vertex] = [];
    return true;
  }

  addEdge(vertex1, vertex2) {
    if (!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]))
      return false;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return true;
  }

  // DFSRecursion: 재귀로 모든 노드 방문
  DFSRecursion(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    }
    dfs(start);
    return result;
  }
}

const graph = new Graph();
/* ------------------------------ 1. make graph -----------------------------
  [GRAPH]          [adjacencyList]
     A              A: [ 'B', 'C' ]
   /   \            B: [ 'A', 'D' ]
  B     C           C: [ 'A', 'E' ]
  |     |           D: [ 'B', 'E', 'F' ]
  D --- E           E: [ 'C', 'D', 'F' ]
   \   /            F: [ 'D', 'E' ]
     F              
*/
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

/* ---------------------------- 2. DFS-recursion ----------------------------
1. 탐색 지점을 방문한다. (true로 표시)
2. 탐색 지점에 연결된 곳이 있다면 재귀함수 호출
3. 탐색 지점 리스트 중 첫번째 요소를 방문 (true로 표시)
4. 탐색 지점 리스트가 빈 배열이 될 때까지 1~3번 과정을 반복한다.
-----------------------------------------------------------------------------
[CURRENT]  NEIGHBOR_LIST |   VISITED   | RESULT 
  [A]           [B]      |      {}     | []
  [B]          [A,D]     |     {A}     | [A]
  [D]          [B,E]     |    {A,B}    | [A,B]
  [E]           [C]      |   {A,B,D}   | [A,B,D]
  [C]        [A,E,D,F]   |  {A,B,D,E}  | [A,B,D,E]
  [F]        [D,E,F,C]   | {A,B,D,E,C} | [A,B,D,E,F]
-> RESULT: [ 'A', 'B', 'D', 'E', 'C', 'F' ]
*. NEIGHBOR_LIST의 요소 개수
  - 1개: 바로 재귀함수 호출, 혹은 연결된 요소가 1개뿐
  - n개: 이미 방문한(visited-true)인 지점이 포함됨
*/
graph.DFSRecursion('A');
