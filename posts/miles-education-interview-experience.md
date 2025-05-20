---
title: Miles Education Interview Experience
excerpt: Interview Questions for Full Stack Engineer (NestJS)
image: miles-education.png
isFeatured: true
date: "2024-08-02"
---

# Round 1 - Technical Round (30 mins)

### Question 1

Difference between NestJS and ExpressJS? Why to prefer NestJS?

### Question 2

What is a Guard?

### Question 3

What is a Pipe?

### Question 4

What is the usecase of canActivate?

### Question 5

What is typeORM?

### Question 6

What is a Module?

### Question 7

What is a Interceptor?

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

- ```sql
  SELECT customer_id, COUNT(*) FROM transactions GROUP BY customer_id HAVING COUNT( *)> 10
  ```
- ```sql
  SELECT customer_id, COUNT(*) AS transactions FROM transactions GROUP BY customer_id HAVING transactions > 10.
  ```
- ```sql
  SELECT customer id, COUNT(*) AS transactions FROM transactions WHERE transactions > 10 GROUP BY customer id
  ```
- ```sql
  SELECT customer_id, COUNT(*) AS transactions FROM transactions GROUP BY 1 HAVING transactions > 10
  ```

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

- [ ] When JavaScript code is executed in a browser, it uses client computational resources rather than server resources.
- [ ] Angular, React, and Vue are popular JavaScript frameworks used in Web development.
- [ ] JavaScript is a strongly typed language. This implies that adding a number to a string is not possible and will result in a runtime error.
- [ ] JavaScript does not support recursion.

**Correct Answer:**

### Question 9

```js
let arr = [1, 2, 3];
// complete the missing Javascript code on this line
console.log(arr); // outputs [1, 2, 3, 4]
```

- [ ] arr[arr.length + 1] = value
- [ ] arr[arr.length] = value
- [ ] arr[arr.length - 1] = value
- [ ] arr = arr + value

**Correct Answer:**

### Question 10

Consider the following JavaScript code snippet:

```js
function foo() {
  return 5;
}
```

What will be the code let myVar = foo; do?

- [ ] Assign the integer value 5 to the variable myVar
- [ ] Assign a reference to the foo function to the variable myVar
- [ ] Throw an exception
- [ ] Nothing

**Correct Answer:**

## Section 2 (SQL QUERY)

## Section 3 (Complete the Code)

this bid is successful, and C claims the item.

Implement the program with the following methods:

- startAuction(auctions: object, entity: string, startingPrice: number): void - This function initializes an auction for an item at the starting price. It takes in three parameters:

  - auctions: an object that holds the auction details
  - entity: the name of the item
  - startingPrice: the minimum starting bid
  - The function does not return any value but updates the 'auctions' object with the details for the entity.

- updatePrice(auctions: object, entity: string, bidPrice: number): void - This function updates the current bid price if the new bid is higher than the current bid and the starting price. It takes in three parameters:

  - auctions: an object that holds the auction details
  - entity: the name of the item
  - bidPrice: the new bid
  - The function does not return any value but modifies the 'auctions' object with the updated bid amount.

- callBid(auctions: object, entity: string, callPrice: number): string - This function evaluates a bid for an item based on the call price. It takes in three parameters:

  - auctions. the item details
  - entity, the name of the item
  - callPrice: the price at which the bid is called
  - The function returns a string, either "successful" if the bid is valid, or "unsuccessful" if it does not meet the criteria

```js
// Initialize an auction object to hold auction details
let auctions = {};

// Function to start an auction for an item
function startAuction(auctions, entity, startingPrice) {
  // Implement your code
  auctions[entity] = {
    currentBid: startingPrice,
    startingPrice: startingPrice,
  };
}

// Function to update the current bid price
function updatePrice(auctions, entity, bidPrice) {
  // Implement your code
  if (auctions[entity]) {
    if (bidPrice > auctions[entity].currentBid) {
      auctions[entity].currentBid = bidPrice;
    }
  }
}

// Function to evaluate a bid for an item
function callBid(auctions, entity, callPrice) {
  // Implement your code
  if (auctions[entity]) {
    if (callPrice > auctions[entity].currentBid) {
      updatePrice(auctions, entity, callPrice);
      return "successful";
    } else {
      return "unsuccessful";
    }
  } else {
    return "unsuccessful";
  }
}

// Main function to demonstrate the auction system
function main() {
  // Start an auction for an item "car" with a starting price of 5000
  startAuction(auctions, "car", 5000);

  // Test cases
  console.log(callBid(auctions, "car", 4500)); // should return "unsuccessful"
  console.log(callBid(auctions, "car", 5000)); // should return "unsuccessful"

  // Additional test cases
  console.log(callBid(auctions, "car", 5500)); // should return "successful"
  console.log(callBid(auctions, "car", 6000)); // should return "successful"
  console.log(callBid(auctions, "car", 5500)); // should return "unsuccessful"
  console.log(callBid(auctions, "non_existent", 5500)); // should return "unsuccessful"
}

main();
```

# Round 3 - Technical Round (1hr)

### Question 1

What is Observable?

### Question 2

How to add validation?

### Question 3

What is a typeORM and how does it works?

### Question 4

How to catch Exceptions in NestJS?

### Question 5

What is a Middleware in NestJS? Different ways of implementing it?

### Question 6

What is Injectable?

### Question 7

What is Execution Context in NestJS?

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
