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

  // BFS: 넓게 탐색
  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      const current = queue.shift();
      result.push(current);
      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
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

/* --------------------------------- 2. BFS ---------------------------------
1. 탐색 지점을 방문한다. (true로 표시)
2. 다음 탐색 지점을 QUEUE에 저장
3. QUEUE의 첫번째 요소를 방문 (true로 표시)
4. QUEUE가 빈 배열이 될 때까지 1~3번 과정을 반복한다.
-----------------------------------------------------------------------------
[CURRENT] QUEUE | NEIGHBOR_LIST |    VISITED    | RESULT 
   [A]     []   |     [B,C]     |      {A}      | []
   [B]     [C]  |     [A,D]     |    {A,B,C}    | [A]
   [C]     [D]  |     [A,E]     |   {A,B,C,D}   | [A,B]
   [D]     [E]  |    [B,E,F]    |  {A,B,C,D,E}  | [A,B,C]
   [E]     [F]  |    [C,D,F]    | {A,B,C,D,E,F} | [A,B,C,D]
   [F]     []   |     [D,E]     | {A,B,C,D,E,F} | [A,B,C,D,E]
-> RESULT: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
*/
graph.BFS('A');
