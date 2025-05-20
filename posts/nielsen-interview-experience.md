---
title: Nielsen Interview Experience
excerpt: Interview Questions for Full Stack Engineer (React + NodeJS)
image: nielsen.png
isFeatured: true
date: "2024-08-03"
---

# Round 1 - Technical Round (1 hr)

### Question 1

What is Event Loop? How Nodejs handle concurrency?

**_Answer_**  
**Event Loop**: The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It offloads operations to the system kernel whenever possible.

**Handling Concurrency**: Node.js handles concurrency using an event-driven architecture. When a task is executed, Node.js offloads it to the event loop. This allows Node.js to handle multiple operations concurrently by utilizing callbacks, promises, or async/await, rather than creating multiple threads.

### Question 2

What is REST API? How are they better than old techniques?

**_Answer_**  
**REST API**: REST (Representational State Transfer) is an architectural style for designing networked applications. It uses HTTP requests to perform CRUD (Create, Read, Update, Delete) operations. RESTful APIs are stateless, meaning each request from a client to a server must contain all the information needed to understand and process the request.

**Advantages over Old Techniques**:

- Statelessness: Each request is independent.
- Scalability: Easy to scale as REST APIs can handle multiple types of calls and return different data formats.
- Flexibility: REST APIs are not tied to a client-side technology.
- Simplicity: Based on standard HTTP methods, making them easy to understand and implement.

### Question 3

What is Primary and Unique Key? Difference between them?

**_Answer_**  
**Primary Key**: A primary key is a field (or combination of fields) that uniquely identifies a record in a table. It cannot be NULL and must contain unique values.

**Unique Key**: A unique key also ensures the uniqueness of the column values, but it can have one NULL value.

**Difference**:

- A table can have only one primary key, but multiple unique keys.
- Primary key columns cannot contain NULL values, whereas unique key columns can contain one NULL value.

### Question 4

Lifecycle of ReactJs?

**_Answer_**

1. **Initialization**: Setting up the initial state and props.
2. **Mounting**: Inserting the component into the DOM (**componentDidMount**).
3. **Updating**: When state or props change, causing re-render (**componentDidUpdate**).
4. **Unmounting**: Removing the component from the DOM (**componentWillUnmount**).

### Question 5

What are different hooks?

**_Answer_**

- **useState**: Manages state in functional components.
- **useEffect**: Side-effects management (data fetching, subscriptions).
- **useContext**: Accesses the context API.
- **useReducer**: Manages complex state logic.
- **useCallback**: Memoizes callback functions.
- **useMemo**: Memoizes expensive calculations.
- **useRef**: Accesses DOM elements or keeps a mutable variable.

### Question 6

Explain useMemo and useCallback? what are the difference between them?

**_Answer_**  
**useMemo**:

- Memoizes a value, preventing recalculation on every render unless dependencies change.
- Syntax:

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**useCallback**:

- Memoizes a function, preventing recreation on every render unless dependencies change.
- Syntax:

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**Difference**:

- **useMemo** returns a memoized value, **useCallback** returns a memoized function.

### Question 7

Write a sql query to get exmployees having department = 'IT'

**_Answer_**

```sql
SELECT * FROM Employee WHERE departmentId = (SELECT id FROM Department WHERE name = 'IT');
```

### Question 8

What are different test libraries worked with? Write a basic Chai, Mocha Code.

**_Answer_**  
Libraries: Chai, Mocha.

```js
const chai = require("chai");
const expect = chai.expect;

describe("Array", function () {
  it("should return -1 when the value is not present", function () {
    expect([1, 2, 3].indexOf(4)).to.equal(-1);
  });
});
```

### Question 9

What is regression testing?? What is UAT?? What is STLC?

**_Answer_**  
Regression Testing: Ensures that new code changes do not adversely affect existing functionalities.

UAT (User Acceptance Testing): Final testing performed by end users to ensure the system meets their requirements.

STLC (Software Testing Life Cycle): Series of activities performed during the testing process to ensure software quality.

### Question 10

How to test react code?

**_Answer_**

- Unit Testing: Test individual components using Jest, Enzyme, or React Testing Library.
- Integration Testing: Test how components work together.
- End-to-End Testing: Test the entire application flow using Cypress or Selenium.

### Question 11

Write a python code to reverse a string.

**_Answer_**

```python
def reverse_string(s):
    return s[::-1]

# Example usage:
print(reverse_string("Hello World"))  # Output: "dlroW olleH"
```

# Round 2 - Technical Round (1 hr)

### Question 1

Implement Merge Sort

**_Solution_**

```js
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: array is already sorted
  }

  const middle = Math.floor(arr.length / 2); // Find the middle index
  const left = arr.slice(0, middle); // Divide the array into left half
  const right = arr.slice(middle); // Divide the array into right half

  return merge(mergeSort(left), mergeSort(right)); // Recursively sort and merge
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two arrays while maintaining order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate remaining elements (if any)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
```

### Question 2

How will you represent primary numbers in binary tree?

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inorderTraversal(node, result = []) {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }
}

// Example usage:
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const bst = new BinarySearchTree();

primeNumbers.forEach((num) => bst.insert(num));

const inorderResult = bst.inorderTraversal(bst.root);
console.log("Inorder traversal of the binary tree with prime numbers:");
console.log(inorderResult.join(" "));
```

### Question 3

Given array of strings remove duplicate and print the array

```js
let names = ["brijesh", "vaibhav", "brijesh", "jatin", "vishal", "sachin", "vaibhav", "pratik", "jatin"];

let map = new Map();

let uniqueNames = [];

names.forEach((name) => {
  map.set(name, (map.get(name) || 0) + 1);
});

uniqueNames = map.keys();

console.log(uniqueNames);
```

### Question 4

Given array of strings remove duplicate and print the array. Implement without map

```js
let names = ["brijesh", "vaibhav", "brijesh", "jatin", "vishal", "sachin", "vaibhav", "pratik", "jatin"];

let uniqueNames = [];

names.forEach((name) => {
  if (uniqueNames.indexOf(name) < 0) {
    uniqueNames.push(name);
  }
});

console.log(uniqueNames);
```

### Question 5

Reverse a Linked List and Implement Linked List from scratch.

```js
class LinkedList {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}

function reverseList(head) {
  let temp = [];

  let current = head;

  while (current != null) {
    temp.push(current.val);
    current = current.next;
  }

  while (current != null) {
    current.val = temp.pop();
    console.log(temp);
    current = current.next;
  }

  return head;
}

let head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next = new LinkedList(3);
head.next.next.next = new LinkedList(4);
head.next.next.next.next = new LinkedList(5);

console.log("Linked List Before Reverse");
console.log(head);
console.log("Linked List After Reverse");
console.log(JSON.stringify(reverseList(head)));
```

### Question 6

Write a sql query to find top 3 employees of a specific department?

```sql
SELECT emp_name
FROM Employees
WHERE dept = "IT"
ORDER BY SALARY DESC
LIMIT 3
```

### Question 7

What is localstorage? Difference between localstorage and sessionstorage?

**Answer**
LocalStorage and SessionStorage are both part of the Web Storage API, which provides a way for web applications to store data in a web browser. They are used to store data that persists across page reloads and browser sessions (in the case of LocalStorage) or for the duration of the page session (in the case of SessionStorage).

- LocalStorage

  - Persistence: Data stored in LocalStorage has no expiration time. It remains stored even when the browser is closed and reopened.
  - Scope: Data is accessible across different pages in the same domain.
  - Capacity: Typically, LocalStorage allows for about 5MB of storage per domain.
  - Use Case: Suitable for storing user preferences, settings, and other data that needs to persist between sessions.

- SessionStorage

  - Persistence: Data stored in SessionStorage is only available for the duration of the page session. Once the tab or browser window is closed, the data is cleared.
  - Scope: Data is accessible only within the same tab or window.
  - Capacity: Typically, SessionStorage also allows for about 5MB of storage per domain.
  - Use Case: Suitable for temporary data storage, such as form data, that only needs to persist for the duration of the user's interaction with a single page or tab.

```js
localStorage.setItem("key", "value");
let value = localStorage.getItem("key");
```

### Question 8

Create a paginated component

```js
import React, { useState, useEffect } from "react";
import axios from "axios";

const PaginatedList = ({ apiEndpoint, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiEndpoint, {
          params: {
            _page: currentPage,
            _limit: itemsPerPage,
          },
        });
        setItems(response.data);
        const totalItems = parseInt(response.headers["x-total-count"], 10);
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [apiEndpoint, currentPage, itemsPerPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
```

### Question 9

How will you optimize your frontend code??

- Code Splitting and Lazy Loading

  - Code Splitting: Use dynamic import() statements to split your code into smaller chunks, which are loaded on demand.
  - Lazy Loading: Use React’s React.lazy and Suspense to lazy load components.

  ```js
  const LazyComponent = React.lazy(() => import("./LazyComponent"));
  // Usage
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>;
  ```

- Optimizing Asset Loading

  - Image Optimization: Use optimized images (e.g., WebP format) and load images only when they are visible on the screen (lazy loading).
  - Minification: Minify CSS, JavaScript, and HTML files.
  - Compression: Use Gzip or Brotli compression to reduce the size of files sent to the client.
  - Content Delivery Network (CDN): Serve static assets via a CDN.

- Caching

  - Service Workers: Use service workers to cache static assets and API responses for offline access and faster load times.
  - HTTP Caching: Utilize browser caching by setting appropriate cache headers on your server.

- Performance Optimization

  - Memoization: Use React.memo, useMemo, and useCallback to memoize expensive computations and avoid unnecessary re-renders

- Performance Monitoring and Analysis

  - Profiling: Use React DevTools and browser profiling tools to identify performance bottlenecks.

- Server-Side Rendering (SSR) and Static Site Generation (SSG)

  - SSR: Use frameworks like Next.js to render pages on the server, improving load times and SEO.

- Avoiding Inline Styles and Large Inline Scripts
  - External CSS: Move inline styles to external CSS files to improve caching.
  - Defer Scripts: Use defer or async attributes for non-critical scripts.

### Question 10

How will you identify memory leak? how to fix it?

- Monitoring Memory Usage

  - Tools: Use tools like pm2, New Relic, Dynatrace, or built-in Node.js tools to monitor memory usage over time.

  ```js
      node --inspect app.js
  ```

- Analyzing Memory Usage

  - Node.js Built-in Tools: Use the built-in Node.js inspector and Chrome DevTools for memory profiling

- Fixing a memory leak -
  - Caused by event listeners

```js
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

function addListener() {
  myEmitter.on("event", () => {
    console.log("Event triggered");
  });
}

// Fix by removing listeners
function removeListener() {
  myEmitter.removeAllListeners("event");
}

// Usage
addListener();
removeListener();
```

### Question 11

Write query to get top 3 largest salary from all departments

Tables-

- Employee - emp_id, emp_name, salary,
- Dept - dept_id, dep_name,
- RelationShip - Empid, Deptid

```sql
SELECT DISTINCT
    e.emp_id,
    e.emp_name,
    e.salary,
    d.dept_id,
    d.dep_name
FROM
    Employee e
JOIN
    Relationship r ON e.emp_id = r.emp_id
JOIN
    Dept d ON r.dept_id = d.dept_id
ORDER BY
    e.salary DESC
LIMIT 3;

```
