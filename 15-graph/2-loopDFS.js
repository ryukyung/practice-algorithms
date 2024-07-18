// [2] DFS - Loop
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
  // DFSLoop: 반복문으로 모든 노드 방문
  DFSLoop(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (stack.length) {
      const current = stack.pop();
      result.push(current);

      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
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

/* ------------------------------ 2. DFS - Loop -----------------------------
1. 탐색 지점을 방문한다. (true로 표시)
2. 탐색 지점에 연결된 곳이 있다면 STACK에 저장
3. STACK의 가장 마지막 요소를 방문 (true로 표시)
4. STACK이 빈 배열이 될 때까지 1~3번 과정을 반복한다.
-----------------------------------------------------------------------------
[CURRENT]  STACK  | NEIGHBOR_LIST |    VISITED    | RESULT 
  [A]       [A]   |     [B,C]     |      {A}      | []
  [C]      [B,C]  |     [A,E]     |    {A,B,C}    | [A]
  [E]      [B,E]  |    [C,D,F]    |   {A,B,C,E}   | [A,C]
  [F]     [B,D,F] |     [D,E]     | {A,B,C,E,D,F} | [A,C,E]
  [D]      [B,D]  |    [B,E,F]    | {A,B,C,E,D,F} | [A,C,E,F]
  [B]       [B]   |     [A,D]     | {A,B,C,E,D,F} | [A,C,E,F,D]
-> RESULT: [A,C,E,F,D,B]
*/
graph.DFSLoop('A');
