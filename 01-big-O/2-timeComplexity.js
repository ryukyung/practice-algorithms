// [2] 시간 복잡도
const timeComplexity1 = (n) => (n * (n + 1)) / 2;

const timeComplexity2 = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

const timeComplexity3 = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
};

const timeComplexity4 = (n) => {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
