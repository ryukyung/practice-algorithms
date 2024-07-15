// [1] Array Stack
const stack = [];

// push: 받은 value를 stack에 넣기
stack.push('1번');
stack.push('2번');
stack.push('3번');
console.log(stack); // [ '1번', '2번', '3번' ]

// pop: stack의 마지막 value 제거
stack.pop();
stack.pop();
console.log(stack); // [ '1번' ]

// peek: stack의 마지막 value 읽기
console.log(stack[stack.length - 1]); // 1번
