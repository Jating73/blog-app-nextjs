---
title: Basic JavaScript Interview Questions
excerpt: Some of the basic Javascript Interview Questions which you might know before your interview!
image: basic-js-interview-questions.png
isFeatured: true
date: "2023-10-15"
---

### Question 1 What will be the output for the following code

```js
function print() {
  let a = 10;
  var b = 20;
  const c = 30;
}

print();
console.log(a);
console.log(b);
console.log(c);

/*
 Output -
 ReferenceError: a is not defined
*/
```

### Question 2 What will be the output for the following code?

```js
let a = [10, 20, 30, 40, 50];
let b = a;

b[1] = 200;

console.log(a);
console.log(b);

/*
 Output -
 [ 10, 200, 30, 40, 50 ]
 [ 10, 200, 30, 40, 50 ]
*/
```

### Question 3 - Memoization Example

```js
function sum(a, b) {
  return a + b;
}

function memoize() {
  let cache = {};
  return function (a, b) {
    let key = `${a}+${b}`;
    if (key in cache) {
      console.log("Caching used....");
      return cache[key];
    } else {
      console.log("Calculating.....");
      cache[key] = sum(a, b);
      return cache[key];
    }
  };
}

const memo = memoize(sum);

console.log(memo(3, 4));
console.log(memo(3, 4));

/*
 Output -
 Calculating.....
 7
 Caching used....
 7
*/
```

### Question 4 - What will be the output for the following code?

```js
setTimeout(() => {
  console.log(1);
});

console.log(2);

setTimeout(() => {
  console.log(3);
});

/*
 Output -
 2
 1
 3
*/
```

### Question 5 - What will be the output for the following code?

```js
setTimeout(() => {
  console.log("Arrow function");
  console.log(this);
});

setTimeout(function () {
  console.log("Simple Function");
  console.log(this);
});

/*
 Output -
    Arrow function
    {}
    Simple Function
    Timeout {
    _idleTimeout: 1,
    _idlePrev: null,
    _idleNext: null,
    _idleStart: 98,
    _onTimeout: [Function (anonymous)],
    _timerArgs: undefined,
    _repeat: null,
    _destroyed: false,
    [Symbol(refed)]: true,
    [Symbol(kHasPrimitive)]: false,
    [Symbol(asyncId)]: 3,
    [Symbol(triggerId)]: 1
    }
*/
```

### Question 6 - What will be the output for the following code?

```js
const person = {
  name: "Jatin",
};

setTimeout(() => {
  console.log("Arrow function");
  console.log(this.person);
});

setTimeout(function () {
  console.log("Simple Function");
  console.log(this.person);
});

/*
 Output -
    Arrow function
    undefined
    Simple Function
    undefined
*/
```

### Question 6 - What will be the output for the following code?

Global variables are those that are available throughout the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable

```js
msg = "Hello";

console.log(msg); 

/*
 Output -
   Hello
*/
```
