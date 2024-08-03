---
title: ZenTrades Interview Experience
excerpt: Interview Questions for Fullstack Engineer (MERN)
image: zentrades.jpg
isFeatured: false
date: "2024-06-27"
---

## Round 1 (1hr)

### Question 1

You have 2 process which take different time to resolve. Write a function that returns the resolved result of faster process.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2");
  }, 4000);
});

Promise.race([p1, p2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("Error");
  });

//   Output - P1
```

### Question 2

You have 2 process which take different time to resolve. Write a function to throw an error if takes more than 5 seconds.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done p1");
  }, 6000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error in p2");
  }, 4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Exceeded more than 5 seconds");
  }, 5000);
});

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Output-
// /home/runner/ProfuseLawfulFiber/index.js:20
//     throw new Error("Exceeded more than 5 seconds");
//     ^

// Error: Exceeded more than 5 seconds
//     at Timeout._onTimeout (/home/runner/ProfuseLawfulFiber/index.js:20:11)
//     at listOnTimeout (node:internal/timers:573:17)
//     at process.processTimers (node:internal/timers:514:7)

// Node.js v20.12.2
```

### Question 3

You have 2 process which take different time to resolve/reject. Write a function to resolve even if any rejects.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done p1");
  }, 6000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error in p2");
  }, 4000);
});

Promise.any([p1, p2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

//   Output - Done p1
```

### Question 4

Given 2 tables customer_details (id, name, email, phone) and address_details (id, address_line, city, state, country, pincode, customer_id), which are connected by one-to-many relation (customer_details.id = address_details. customer_id) where one customer can have multiple addresses. Write a query to find list of all unique ids of customers having an address with country = Canada.

```sql
SELECT DISTINCT customer_id
FROM address_details
WHERE country = 'Canada';
```

### Question 5

Reverse the letters of each word of a sentence
Eg. Today is a rainy day -> yadoT si a yniar yad

```js
let str = "Today is a rainy day";

function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

let reversedSentence = reverseWords(str);
console.log(reversedSentence);
```

### Question 6

What is Livelock and Deadlock?

Livelock and deadlock are two types of problems that can occur in concurrent systems, such as computer programs, databases, or operating systems when multiple processes or threads need to share resources. Here's a brief overview of each:

Deadlock
Deadlock occurs when two or more processes are unable to proceed because each is waiting for the other to release a resource. In other words, the processes are stuck in a cyclic dependency, where none of them can continue. Deadlock has four necessary conditions, often referred to as the Coffman conditions:

Mutual Exclusion: At least one resource must be held in a non-shareable mode; that is, only one process can use the resource at a time.
Hold and Wait: A process holding at least one resource is waiting to acquire additional resources held by other processes.
No Preemption: Resources cannot be forcibly taken from processes holding them; they must be released voluntarily.
Circular Wait: There is a set of waiting processes, each of which is waiting for a resource held by the next process in the set, forming a closed chain.
Livelock
Livelock is a situation where two or more processes continuously change their state in response to changes in the other processes, without making any real progress. Unlike deadlock, in livelock, the processes are not blocked but are actively engaging in an activity that prevents them from proceeding. An example of livelock is two people trying to pass each other in a hallway but both stepping to the side repeatedly in the same direction to avoid each other.

Differences
State: In a deadlock, the processes are in a waiting state and do not perform any action. In livelock, the processes are active and continuously changing their states.
Progress: Deadlocked processes do not make any progress. In livelock, processes are actively making decisions but still fail to make progress.
Detection and Resolution: Deadlocks can sometimes be detected by system analysis tools and can be resolved by terminating or rolling back one or more processes. Livelocks are harder to detect because the processes appear to be active, but resolution typically involves changing the logic to prevent the continuous state changes.
Understanding and handling these issues are crucial for designing robust and efficient concurrent systems.
