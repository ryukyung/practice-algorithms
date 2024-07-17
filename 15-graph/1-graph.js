// [1] Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // addVertex: 간선 추가하기
  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return false;
    this.adjacencyList[vertex] = [];
    return true;
  }
  // addEdge: 인접 정점 추가
  addEdge(vertex1, vertex2) {
    if (!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]))
      return false;
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return true;
  }
  // removeEdge: 인접 정점 삭제
  removeEdge(vertex1, vertex2) {
    if (!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]))
      return false;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
    return true;
  }
  // removeVertex: 간선 삭제(및 인접 정점 삭제)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return true;
  }
}

const graph = new Graph();

/* -------------------------------- addVertex -------------------------------
adjacencyList: { gaori: [], hamon: [], octopus: [], shark: [], dolphin: [] }
*/
graph.addVertex('gaori');
graph.addVertex('gaori'); // false: 같은 요소를 다시 추가X
graph.addVertex('hamon');
graph.addVertex('octopus');
graph.addVertex('shark');
graph.addVertex('dolphin');

/* --------------------------------- addEdge --------------------------------
BEFORE: { gaori: [], hamon: [], octopus: [], shark: [], dolphin: [] }
AFTER: {
  gaori: [ 'hamon', 'octopus', 'dolphin' ],
  hamon: [ 'gaori' ],
  octopus: [ 'gaori', 'shark' ],
  shark: [ 'dolphin', 'dolphin', 'octopus' ],
  dolphin: [ 'shark', 'gaori', 'shark' ]
}
*/
graph.addEdge('gaori', 'hamon');
graph.addEdge('gaori', 'octopus');
graph.addEdge('dolphin', 'shark');
graph.addEdge('dolphin', 'gaori');
graph.addEdge('shark', 'dolphin');
graph.addEdge('shark', 'octopus');
graph.addEdge('gaori', 'gari'); // false: 없는 요소 존재

/* ------------------------------ removeVertex ------------------------------ 
BEFORE: {
  gaori: [ 'hamon', 'octopus', 'dolphin' ],
  hamon: [ 'gaori' ],
  octopus: [ 'gaori', 'shark' ],
  shark: [ 'dolphin', 'dolphin', 'octopus' ], *
  dolphin: [ 'shark', 'gaori', 'shark' ]      *
}
AFTER: {
  gaori: [ 'hamon', 'octopus' ],
  hamon: [ 'gaori' ],
  octopus: [ 'gaori' ]
}
*/
graph.removeVertex('dolphin');
graph.removeVertex('shark');
graph.removeVertex('gari'); // false: 없는 요소 존재

/* ------------------------------- removeEdge -------------------------------
{
  gaori: [ 'hamon', 'octopus' ], *
  hamon: [ 'gaori' ],
  octopus: [ 'gaori' ]           *
}
{ gaori: [ 'hamon' ], hamon: [ 'gaori' ], octopus: [] }
*/
graph.removeEdge('octopus', 'gaori');
graph.removeEdge('octopus', 'gari'); // false: 없는 요소 존재
