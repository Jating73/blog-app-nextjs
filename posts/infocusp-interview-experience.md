---
title: Infocusp Innovations Interview Experience
excerpt: Interview Questions for Senior Frontend Engineer
image: infocusp.webp
isFeatured: false
date: "2024-09-27"
---

## Round 1 (1hr)

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
