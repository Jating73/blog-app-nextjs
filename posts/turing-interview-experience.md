---
title: Turing Interview Experience
excerpt: Interview Questions for Full Stack Developer (NodeJS + Python)
image: turing.png
isFeatured: false
date: "2024-09-27"
---

## Round 1 (1hr 30mins)

### Question 1

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30

```python
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def canFinish(piles, h, k):
            totalHours = 0
            for pile in piles:
                totalHours += ceil(pile / k)
            return totalHours <= h

        low, high = 1, max(piles)

        while low <= high:
            mid = (low + high) // 2
            if canFinish(piles, h, mid):
                high = mid - 1
            else:
                low = mid + 1

        return low
```

### Question 2

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

```js
var isValid = function (s) {
  let bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (bracketMap.hasOwnProperty(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0 || bracketMap[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
```

### Question 3

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

### Question 4

What steps willl you perform to optimize your API in nodejs? ?

- Ensure that all I/O operations (database queries, API calls, file reads/writes) are handled asynchronously using async/await or promises to prevent blocking the event loop.
- Properly index your database tables/collections to speed up query execution.
- Use pagination and limit the number of results returned in each API call to avoid overloading the server.
- Write efficient SQL queries or MongoDB aggregations, and avoid unnecessary data retrieval (e.g., avoid SELECT \*).

### Question 5

How will you secure your nodejs app?

- Use the Helmet middleware in your Express.js app to secure HTTP headers. Helmet helps with:
  Setting the Content Security Policy (CSP)
  Disabling browser features like X-Powered-By
  Protecting against clickjacking with the X-Frame-Options header
  Preventing XSS with X-XSS-Protection
- Use monitoring services like New Relic, Sentry, or Winston with proper alerts to detect suspicious activities, attacks, or performance issues in real-time.
- Use API keys, OAuth tokens, or JWTs to authenticate API consumers. Don't expose internal APIs to the public.
- Hash user passwords using a secure hashing algorithm like bcrypt to store passwords securely. Never store passwords in plain text.
- Use npm audit to check for known vulnerabilities in your project's dependencies.
- Use rate-limiting middleware like express-rate-limit to limit the number of requests from a single IP address within a specified period, protecting against brute force attacks and denial-of-service (DoS) attacks.

### Question 6

How Nodejs Handles concurrency?

Node.js provides solutions like Worker Threads and Cluster to handle true parallelism.

## Worker Threads

- Worker Threads allow you to create multiple threads within a single Node.js process to perform CPU-bound tasks in parallel without blocking the event loop.
- Worker Threads provide true parallelism within a single Node.js instance by running in separate threads, enabling tasks like CPU-intensive computations (e.g., image processing, data crunching).
- Each Worker Thread runs in isolation from the main thread and has its own event loop.

## Cluster Module

- The Cluster module creates multiple instances of the Node.js application, one for each core of the CPU. Each process is called a worker, and they run independently of each other.
- The cluster module creates a master process that manages multiple worker processes. The master process does not handle requests but is responsible for distributing incoming requests to workers.
- Each worker has its own memory space, so they do not share memory with each other. Data sharing between workers is done through IPC (inter-process communication).

### Question 7

Difference between callback and promises? which one will you choose?

**Callback**
A function passed as an argument to another function, to be executed when an asynchronous operation completes.

**Promise**
An object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Choose Callbacks When:

- You are working with simple, short-lived asynchronous operations.
- You don't need extensive error handling or chaining of multiple operations.
- You are dealing with older Node.js APIs that only support callbacks (although you can convert these into promises with util.promisify()).

Choose Promises When:

- You need to manage multiple asynchronous operations, especially when they need to be executed in sequence or parallel.
- You want more readable, maintainable code, avoiding callback hell and nesting.
- You need better error handling with .catch() or using async/await.
- You are working with modern JavaScript, where promises are the standard for handling async operations.
- You prefer a returnable value that can be passed around or further processed.
