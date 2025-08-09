---
title: Mastering JavaScript
excerpt: JavaScript is the most important programming language for web development. You probably don't know it well enough!
image: mastering-js.png
isFeatured: true
date: "2022-01-15"
---

JavaScript powers the web - it's **the** most important programming language you need to know as a web developer.

For example, you should understand code like this:

```js
const basics = 'Okay, that should not be too difficult actually';

function printBasics() {
  console.log(basics):
}

printBasics(); // Okay, that should not be too difficult actually
```

**this** Behavior & Binding

```js
const person = {
  name: "Jatin",
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

person.greet(); // "Hello, I am Jatin"

const greetFn = person.greet;
greetFn(); // "Hello, I am undefined" in strict mode
```

Why?
When you extract person.greet into greetFn, it loses the object context, so this becomes undefined (or global object in non-strict mode).

Fix: Use .bind() or arrow function:

```js
const greetFnBound = person.greet.bind(person);
greetFnBound(); // "Hello, I am Jatin"
```

Closures in Loops

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3
```

Why?
var is function-scoped, so by the time the callbacks run, i is 3.

Fix with let:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2
```

Hoisting & Temporal Dead Zone

```js
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;
```

Why?
var is hoisted with undefined as initial value.
let and const are hoisted but in the temporal dead zone until declaration is reached.

Object References & Copying

```js
const a = { val: 1 };
const b = a;
b.val = 2;
console.log(a.val); // 2
```

Why?
Objects are stored by reference. b points to same memory as a.

Fix: Create a copy:

```js
const bCopy = { ...a };
```

Event Loop & Async Order

```js
console.log("start");

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));

console.log("end");

// Output:
// start
// end
// promise
// timeout
```

Why?
Microtasks (Promises) run before macrotasks (setTimeout).

Object.freeze() vs Object.seal()

```js
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // silently ignored in non-strict mode
console.log(obj.a); // 1
```

Why?
freeze prevents modifications; seal prevents adding/removing keys but allows modifying existing ones.
