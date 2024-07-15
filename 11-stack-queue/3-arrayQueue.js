// [3] Array Queue

const queue = [];
// enqueue: 받은 value를 queue에 넣기
queue.push('1번');
queue.push('2번');
queue.push('3번');
console.log(queue); // [ '1번', '2번', '3번' ]

// dequeue: 맨 앞의 value 제거
queue.shift(); // 1번
queue.shift(); // 2번
queue.shift(); // 3번
console.log(queue); // []
