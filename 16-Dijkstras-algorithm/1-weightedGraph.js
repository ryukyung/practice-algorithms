// [1] WeightedGraph

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  // addVertex: 간선 추가하기
  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return false;
    this.adjacencyList[vertex] = [];
    return true;
  }
  // addEdge: 인접 정점 연결 추가(+ 가중치)
  addEdge(vertex1, vertex2, weight) {
    if (!(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]))
      return false;
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
    return true;
  }
  // sort: 가중치에 따른 오름차순 정렬
  sort() {
    this.values.sort((a, b) => a.weight - b.weight);
  }
}
