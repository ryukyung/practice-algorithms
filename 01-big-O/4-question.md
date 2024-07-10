# BIG O 시간 복잡도 퀴즈

- [퀴즈 코드 보러가기](./4-question.js)

1. [BIG O 시간 복잡도 퀴즈1](#big-o-시간-복잡도-퀴즈1)
2. [BIG O 시간 복잡도 퀴즈2](#big-o-시간-복잡도-퀴즈2)
3. [BIG O 공간 복잡도 퀴즈](#big-o-공간-복잡도-퀴즈)

### BIG O 시간 복잡도 퀴즈1

1. 다음 빅오 표현식을 간단히 해보세요. O(n+10)

- O(n)

2. 다음 빅오 표현식을 간단히 해보세요. O(100\*n)

- O(n)

3. 다음 빅오 표현식을 간단히 해보세요. O(25)

- O(1)

4. 다음 빅오 표현식을 간단히 해보세요. O(n^2 + n^3)

- O(n^3)

5. 다음 빅오 표현식을 간단히 해보세요. O(n+n+n+n)

- O(n)

### BIG O 시간 복잡도 퀴즈2

1. 아래 함수에 대한 시간 복잡도를 구하세요.

```jsx
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

- O(n): for루프가 하나 있기 때문에

2. 아래 함수에 대한 시간 복잡도를 구하세요.

```jsx
function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
```

- O(n): for 루프가 하나 있기 때문에

3. 아래 함수에 대한 시간 복잡도를 구하세요.

```jsx
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[i];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
```

- O(n^2): for루프 안에 for루프가 있어서 `O(n) * O(n)`이 되기 때문에 O(n^2)

4. 아래 함수에 대한 시간 복잡도를 구하세요.

```jsx
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

- O(1): n이 10보다 크면 10을, 10보다 작으면 n을 반환한다.(그러니까 최대 횟수는 10번, '숫자'이므로 O(1))
  - `Math.min(n, 10)`을 사용하여 루프의 최대 반복횟수를 10회로 제한하고 있다. (n이 아무리 커져도 10이다.)
  - 최소 횟수: n이 1일때, 루프는 1번 반복된다.
  - 최대 횟수: n이 10일때, 루프는 10번 반복된다.

5. 아래 함수에 대한 시간 복잡도를 구하세요.

```jsx
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
```

- O(n): for 루프가 하나 있기 때문에

### BIG O 공간 복잡도 퀴즈

1. 아래 함수에 대한 공간 복잡도를 구하세요.

```jsx
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

- O(1): number만 있기 때문에

2. 아래 함수에 대한 공간 복잡도를 구하세요.

```jsx
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

- O(1): number만 있기 때문에

3. 아래 함수에 대한 공간 복잡도를 구하세요.

```jsx
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

- O(1): number만 있기 때문에

4. 아래 함수에 대한 공간 복잡도를 구하세요.

```jsx
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
```

- O(n): 배열이 있기 때문에, 입력받는 array에 따라 newArray의 크기가 달라진다.

5. 아래 함수에 대한 공간 복잡도를 구하세요.

```jsx
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[i];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
```

- O(n): 배열이 있기 때문에 입력받는 array에 따라 subtotalArray의 크기가 달라진다.
