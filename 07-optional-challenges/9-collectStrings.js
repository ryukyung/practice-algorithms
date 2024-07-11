/* [9] collectStrings
-  객체를 받아들이고 문자열에 해당하는 모든 값의 배열을 반환하는 collectStrings라는 함수를 작성합니다.
- input
  a. {
        stuff: 'foo',
        data: {
          val: {
            thing: {
              info: 'bar',
              moreInfo: {
                evenMoreInfo: {
                  weMadeIt: 'baz',
                },
              },
            },
          },
        },
      }
- output
  a. ["foo", "bar", "baz"]
*/
/* -------------------------------- Solution -------------------------------- */
const collectStrings = (obj) => {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') arr.push(obj[key]);
    else if (typeof obj[key] === 'object')
      arr = arr.concat(collectStrings(obj[key]));
  }
  return arr;
};

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
