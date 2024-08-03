---
title: Miles Education Interview Experience
excerpt: Interview Questions for Full Stack Engineer (NestJS)
image: miles-education.png
isFeatured: false
date: "2024-08-02"
---

# Round 1 - Technical Round (30 mins)

### Question 1

Difference between NestJS and ExpressJS? Why to prefer NestJS?

# Round 2 - Hackerrank Coding Round (1hr)

## Section 1 (MCQ)

### Question 1

Which of the following is a new feature introduced in ES6(ECMAScript 20115)?

- [ ] Hoisting
- [ ] Inheritance
- [ ] Arrow functions
- [ ] HttpRequest

**Correct Answer:**

### Question 2

What is the purpose of using async and await in Javascript?

- [ ] To enable multi-threading in JavaScript.
- [ ] To handle asynchronous operations more cleanly and avoid callback hell.
- [ ] To convert synchronous code into synchronous execution.
- [ ] To provide a mechanism for synchronous error handling in asynchronous code.

**Correct Answer:**

### Question 3

What is the purpose of the package-lock.json file in a Node.js project?

- [ ] To list all available packages in the Node.js ecosystem.
- [ ] To specify the exact versions of dependencies and ensure onsistent installs across environments.
- [ ] To define the scripts and commands for package management.
- [ ] To provide metadata about the project's author and license.

**Correct Answer:**

### Question 4

How does the event loop work in Node.is?

- [ ] It processes all requests in a single, synchronous loop, blocking the execution until each operation completes.
- [ ] It uses multiple threads to handle asynchronous operations and distributes the load across these threads.
- [ ] It uses a priority queue to han de synchronous operations before asynchronous operations.
- [ ] It offloads asynchronous operations to the system and continues executing the remaining code, then processes the callbacks when the operations complete

**Correct Answer:**

### Question 5

In an Express.js application, what is the primary purpose of middleware functions?

- [ ] To handle HTTP request and response routing
- [ ] To process requests and responses, perform operations like logging or authentication, and then pass control to the next middleware function.
- [ ] To manage the database connections and queries.
- [ ] To define static file serving configurations

**Correct Answer:**

### Question 6

Select the expressions that cause a MySQL error.

- [ ] SELECT customer_id, COUNT( *) FROM transactions GROUP BY customer_id HAVING COUNT( *)> 10
- [ ] SELECT customer_id, COUNT(*) AS transactions FROM transactions GROUP BY customer_id HAVING transactions > 10.
- [ ] SELECT customer id, COUNT(*) AS transactions FROM transactions WHERE transactions > 10 GROUP BY customer id 
- [ ] SELECT customer_id, COUNT( *) AS transactions FROM transactions GROUP BY 1 HAVING transactions > 10 

**Correct Answer:**

### Question 7

Declare variables with const keyword in JavaScript One way to declare a variable in JavaScript is to use the keyword const. Which of the following are true about const?

- [ ] A variable declared with const is always globally scoped.
- [ ] A variable declared with const is always block-scoped.
- [ ] A variable declared with const can be re-declared. 
- [ ] A variable declared with const can be assigned to later.

**Correct Answer:**


### Question 8

JavaScript is perhaps the most widely used programming language for Web client purposes. All modern Web browsers use it. Which of the following are true?

- [ ] JavaScript is a strongly typed language.
- [ ] A variable declared with const is always block-scoped.
- [ ] A variable declared with const can be re-declared. 
- [ ] A variable declared with const can be assigned to later.

**Correct Answer:**

## Section 2

# Round 3 - Technical Round (1hr)

### Question 1

# Round 4 - Technical Round (1hr)

### Question 1

Difference between Access Token and Refresh Token?

### Question 2

What is Passport.js?

### Question 3

What is TypeORM?

### Question 4

**Problem Statement:**
Write a generic function such that it accepts 2 parameters, i.e. array and a number
Get largest Element from the array

**Input:**
arr = [4, 2, 20, 19, 3, 2, 20], largest = 2

**Output:**
Ouput - 19

```js
function f(a = [], b = 1) {
  let obj = {};
  a.forEach((a) => {
    obj[a] = 1;
  });

  a = Object.keys(obj);

  a.sort((a, b) => a - b);

  return a[a.length - 1 - (b - 1)] ? a[a.length - 1 - (b - 1)] : -1;
}

let arr = [4, 2, 20, 19, 3, 2, 20];
let largest = 2;

console.log(f(arr, largest));
```
