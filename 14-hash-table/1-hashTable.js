// [1] Hash Table

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // _hash: 문자열 키를 해시 값으로 변환 [비공개 메소드]
  _hash(key) {
    const PRIME = 31;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key[i].charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // set: key, value 쌍을 해시 테이블에 저장
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];

    this.keyMap[index].push([key, value]);
    return [key, value];
  }

  // get: key를 사용해서 해시 테이블에서 값 찾기
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
      return undefined;
    }
  }

  // keys: 해시 테이블의 모든 key를 배열로 반환하는 함수
  keys() {
    const keyList = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyList.includes(this.keyMap[i][j][0]))
            keyList.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keyList;
  }

  // values: 해시 테이블의 모든 value를 배열로 반환하는 함수
  values() {
    const valueList = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueList.includes(this.keyMap[i][j][1]))
            valueList.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valueList;
  }

  // key, value를 합친 함수
  entries() {
    const entries = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          entries.push([this.keyMap[i][j][0], this.keyMap[i][j][1]]);
        }
      }
    }
    return entries;
  }
}

const hash = new HashTable();

/* ----------------------------------- set ---------------------------------- */
hash.set('maroon', '#800000'); // [ 'maroon', '#800000' ]
hash.set('yellow', '#FFFF00'); // [ 'yellow', '#FFFF00' ]
hash.set('olive', '#808000'); // [ 'olive', '#808000' ]
hash.set('salmon', '#FA8072'); // [ 'salmon', '#FA8072' ]
hash.set('lightcoral', '#F08080'); // [ 'lightcoral', '#F08080' ]
hash.set('mediumvioletred', '#C71585'); // [ 'mediumvioletred', '#C71585' ]
hash.set('plum', '#DDA0DD'); // [ 'plum', '#DDA0DD' ]

/* ----------------------------------- get ---------------------------------- */
hash.get('maroon'); // #800000
hash.get('yellow'); // #FFFF00
hash.get('olive'); // #808000
hash.get('salmon'); // #FA8072
hash.get('lightcoral'); // #F08080
hash.get('mediumvioletred'); // #C71585
hash.get('plum'); // #DDA0DD

/* ---------------------------------- keys ---------------------------------- */
hash.keys();
//[ 'yellow', 'olive', 'maroon', 'salmon', 'plum', 'lightcoral', 'mediumvioletred']

/* --------------------------------- values --------------------------------- */
hash.values();
// [ '#FFFF00', '#808000', '#800000', '#FA8072', '#DDA0DD', '#F08080', '#C71585']

/* --------------------------------- entires -------------------------------- */
hash.entries();
/* [
  [ 'yellow', '#FFFF00' ], [ 'olive', '#808000' ], [ 'maroon', '#800000' ],
  [ 'salmon', '#FA8072' ], [ 'plum', '#DDA0DD' ], [ 'lightcoral', '#F08080' ],
  [ 'mediumvioletred', '#C71585' ]
] */
