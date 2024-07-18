// [2] Dijkstras - Priority Queue

/* ------------------------------- Class Node ------------------------------- */
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
/* --------------------------- Class PriorityQueue -------------------------- */
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // percolateUp: 새로 삽입된 요소 올바른 위치로 변경
  percolateUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  // percolateDown: 루트 요소를 제거한 후 마지막 요소를 가져와서 올바른 위치로 내린다.
  percolateDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let [leftIndex, rightIndex] = [2 * index + 1, 2 * index + 2];
      let leftChild, rightChild;
      let swap = null;

      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild.priority < element.priority) swap = leftIndex;
      }
      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
  // enqueue: 새로운 요소를 추가 후 percolateUp을 호출하여 속성 유지
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.percolateUp();
  }
  // dequeue: 우선순위가 높은 요소 제거 후 percolateDown을 호출하여 속성 유지
  dequeue() {
    const [min, end] = [this.values[0], this.values.pop()];
    if (this.values.length > 0) {
      this.values[0] = end;
      this.percolateDown();
    }
    return min;
  }
}

/* --------------------------- Class WeightedGraph -------------------------- */
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
  // Dijkstra: 우선순위 큐에서 시작 노드부터 도착 노드까지의 최단 경로
  Dijkstra(start, end) {
    const queue = new PriorityQueue();
    const distances = {};
    const visited = {};
    const movedPath = [];
    let currentValue;
    for (let vertex in this.adjacencyList) {
      // 2. 객체를 만들고 시작 정점은 0을, 나머지는 Infinity로 value를 지정한다.
      const temp = vertex === start ? 0 : Infinity;
      distances[vertex] = temp;
      queue.enqueue(vertex, temp);
      // 3. 또 다른 객체를 만들고 연결된 인접 정점 리스트를 만든다.
      visited[vertex] = null;
    }

    // 4. 우선순위 큐의 길이만큼 반복한다.
    while (queue.values.length) {
      // a. 큐에서 첫 번째 요소를 꺼낸다.
      currentValue = queue.dequeue().val;
      // b. 큐에서 꺼낸 요소와 도착 노드가 같으면 현재 노드부터 시작 노드까지를 배열에 넣는다.
      if (currentValue === end) {
        while (visited[currentValue]) {
          movedPath.push(currentValue);
          currentValue = visited[currentValue];
        }
        break;
      }
      // c. 큐에서 꺼낸 요소와 도착 노드가 다르다면
      if (currentValue || distances[currentValue] !== Infinity) {
        for (let neighbor in this.adjacencyList[currentValue]) {
          // 현재 노드까지의 가중치와 후보지 노드의 가중치를 더한다.
          const nextNode = this.adjacencyList[currentValue][neighbor];
          const currentSum = distances[currentValue] + nextNode.weight;
          const nextValue = nextNode.node;

          // 더 낮은 가중치로 거리 객체와 방문한 객체를 업데이트한다.
          if (currentSum < distances[nextValue]) {
            distances[nextValue] = currentSum;
            visited[nextValue] = currentValue;
            queue.enqueue(nextValue, currentSum);
          }
        }
      }
    }
    // 도착노드부터 시작하기 때문에, 배열을 뒤집고 시작 노드를 추가한 후 반환한다.
    return movedPath.concat(currentValue).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

/*                                                                                                                                                     18:23:48
{
  A: [ { node: 'B', weight: 4 }, { node: 'C', weight: 2 } ],
  B: [ { node: 'A', weight: 4 }, { node: 'E', weight: 3 } ],
  C: [
    { node: 'A', weight: 2 },
    { node: 'D', weight: 2 },
    { node: 'F', weight: 4 }
  ],
  D: [
    { node: 'C', weight: 2 },
    { node: 'E', weight: 3 },
    { node: 'F', weight: 1 }
  ],
  E: [
    { node: 'B', weight: 3 },
    { node: 'D', weight: 3 },
    { node: 'F', weight: 1 }
  ],
  F: [
    { node: 'C', weight: 4 },
    { node: 'D', weight: 1 },
    { node: 'E', weight: 1 }
  ]
} */

console.log(graph.Dijkstra('A', 'E'));
// [ 'A', 'C', 'D', 'F', 'E' ]
