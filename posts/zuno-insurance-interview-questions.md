---
title: Zuno Insurance Interview Questions
excerpt: Interview Questions for Senior Software Engineer / Tech Lead
image: zuno.png
isFeatured: false
date: "2024-06-25"
---

## Round 1 (1hr 15mins)

Online Coding and MCQ round

## Round 2 (1hr)

### Question 1

What is Event Loop? How does it work?

The event loop is a fundamental concept in JavaScript. It allows JavaScript to perform non-blocking operations despite being single-threaded. It enables JavaScript to perform asynchronous operations, handle I/O operations, and manage concurrency. It allows the program to continue running while waiting for tasks to complete, like network requests or file operations.

To understand how the event loop works, let's break it down into its main components:

1. Call Stack:

The call stack is where JavaScript keeps track of function execution. When a function is called, it is pushed onto the stack, and when it returns, it is popped off the stack.

2. Web APIs:

Browser environments and Node.js provide Web APIs (like setTimeout, fetch, DOM events, etc.) that can handle asynchronous tasks. These APIs run outside the call stack.

3. Callback Queue (or Task Queue):

This queue holds callbacks of asynchronous operations. When an asynchronous task completes, its callback function is added to the callback queue.

4. Event Loop:

The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the callback queue and pushes it onto the call stack for execution.

### Question 2

What is process.nextTick() ?

process.nextTick() is a function in Node.js that is used to schedule a callback function to be invoked in the next iteration of the event loop, before any I/O operations or timers. It is a way to prioritize the execution of certain callbacks and ensure they run as soon as possible, even before other asynchronous tasks.

```js
console.log("Start");

process.nextTick(() => {
  console.log("Next tick callback");
});

console.log("End");

/**
 * Output -
 *
 * Start
 * End
 * Next tick callback
 * */
```

### Question 3

What is currying function?

Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. Instead of passing all arguments to the function at once, you pass them one at a time, and each call returns a new function that takes the next argument until all arguments have been provided.

```js
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // Outputs: 24

// Using ES6 Arrow Functions

const multiply = (a) => (b) => (c) => a * b * c;

console.log(multiply(2)(3)(4)); // Outputs: 24
```

### Question 4

How to implement Inheritance in Vanilla JS?

Vanilla JS Implementation -

```js
// Parent
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a noise.");
};

// Children
function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(this.name + " barks");
};

const dog = new Dog("Rex", "German Shepherd");
dog.speak(); // Rex makes a noise.
dog.bark(); // Rex barks.
```

Using ES6 Classes

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes noise.");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }

  barks() {
    console.log(this.name + " barks.");
  }
}

const dog = new Dog("Annie", "German Shephard");

dog.speak();
dog.barks();
```

### Question 5

How to design REST API for advance query with multiple parameters like name, brand, price, operating system like flipkart which can be shareable as well with another user or friend?

You can design GET API request such that it keeps adding parameters to url as well so it's easy to share with other user as well to save other user time to not applying advance filters again.

```js
GET /products/search?name=laptop&brand=Apple&price_min=1000&price_max=2000&os=MacOS&category=laptops&sort_by=price&page=1&limit=10
```

But there are some **limitations** as well like -

1. Browsers and servers often impose limits on the length of URLs. While this limit varies, it can be around 2,083 characters for some browsers and servers. Exceeding this limit can lead to truncation of URLs or HTTP errors.

In that case what you can use base64 encoding.

**Client Side -**

```js
const params = {
  name: "laptop",
  brand: "Apple Inc.",
  price_min: "1000",
  os: "Mac OS",
  ram: "1GB",
  primary_camera: "32 MP",
  secondary_camera: "12 MP",
  battery: "5000",
  processor: "Intel",
  // Add more parameters as needed
};

const encodedParams = btoa(JSON.stringify(params)); // Base64 encoding
const url = `/products/search?params=${encodedParams}`;
console.log(url);
```

**Server Side -**

```js
const express = require("express");
const app = express();

app.get("/products/search", (req, res) => {
  const encodedParams = req.query.params;
  const decodedParams = JSON.parse(atob(encodedParams)); // Base64 decoding
  console.log("Decoded parameters:", decodedParams);
  // Process the decoded parameters and send back the response
  res.json({ message: "Search results" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

### Question 6

Write a program to To find all combinations that sum to a given target

**Input:**
nums = [1, 2, 3, 4, 5], target = 6

**Output:**
[[1, 2, 3], [1, 5], [2, 4]]

1.  Optimal Approach

```js
function findCombinationsWithTargetSum(arr, target) {
  let result = [];

  function findCombinations(start, combination, sum) {
    if (sum === target) {
      result.push([...combination]);
      return;
    }
    if (sum > target) {
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combination.push(arr[i]);
      findCombinations(i + 1, combination, sum + arr[i]);
      combination.pop();
    }
  }

  findCombinations(0, [], 0);
  return result;
}

let arr = [1, 2, 3, 4, 5];
let target = 6;
console.log(findCombinationsWithTargetSum(arr, target));

// Output: [ [ 1, 2, 3 ], [ 2, 4 ], [ 1, 5 ] ]
```

### Question 7

What are the different phases of Event Loop?

The event loop in JavaScript manages these phases to ensure that tasks, whether they are synchronous or asynchronous, are handled in an organized and efficient manner. Each phase plays a crucial role in processing different types of tasks and ensuring that your applications remain responsive and performant. Understanding these phases helps developers write efficient and non-blocking code that can handle a variety of tasks seamlessly.

The following diagram shows a simplified overview of the event loop's order of operations.

![](event-loop-phases.png)

1. **Timers Phase** -
   This phase handles functions scheduled to run after a certain amount of time using setTimeout() and setInterval().

2. **Pending Callbacks Phase**
   Any functions that are waiting for their execution to be queued (such as callbacks from I/O operations or timers) are handled in this phase.

3. **Idle/Prepare Phase**
   This phase is internal to the event loop and prepares for new events or callbacks.

4. **Poll Phase**
   This phase checks for new I/O events (like incoming data, connections, etc.) and executes their associated callbacks immediately.

5. **Check Phase**
   This phase allows you to execute callbacks scheduled by setImmediate().

6. **Close Callbacks Phase**
   Any functions scheduled to close connections or resources (like closing a file or database connection) are executed in this phase.
