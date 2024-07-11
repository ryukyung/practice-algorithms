/* [6] nestedEvenSum
- nestedEvenSum이라는 재귀 함수를 작성하시오. 
- 중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 함수입니다.
- input
  a. {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: 'yup',
        },
      },
    }
  b. {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 2 }, ee: 'car' },
    }
- output
  a. 6
  b. 10
*/
/* -------------------------------- Solution -------------------------------- */
const nestedEvenSum = (obj, sum = 0) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') sum += nestedEvenSum(obj[key]);
    else if (typeof obj[key] === 'number' && obj[key] % 2 === 0)
      sum += obj[key];
  }
  return sum;
};

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));
