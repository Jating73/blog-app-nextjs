---
title: Wartsila Interview Experience
excerpt: Interview Questions for Senior Software Engineer
image: wartsila.png
isFeatured: true
date: "2024-06-14"
---

## Round 1 (1hr)

### Question 1

**Problem Statement:**
You are given an array of numbers 1 and 0, Your task is to groups all 0's at left and all 1's at right.

**Input:**
numbers = [0, 1, 1, 1, 0, 1, 0, 0]

**Output:**
[0, 0, 0, 0, 1, 1, 1, 1]

1. First I gave **brute force** approach to either directly count or sort the array using sort function

```js
function groupZerosAndOnesBruteForce(arr) {
  let countZeros = 0;
  let countOnes = 0;

  // Count the number of 0's and 1's
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZeros++;
    } else if (arr[i] === 1) {
      countOnes++;
    }
  }

  // Modify the array based on the counts
  for (let i = 0; i < countZeros; i++) {
    arr[i] = 0;
  }
  for (let i = countZeros; i < arr.length; i++) {
    arr[i] = 1;
  }

  return arr;
}

const numbers = [1, 0, 1, 0, 1, 0];
const result = groupZerosAndOnes(numbers);
console.log(result); // Output: [0, 0, 0, 1, 1, 1]
```

2. Then I told approach using 2 pointer left and right for better time complexity and space complexity

```js
function groupZerosAndOnes(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Move the left pointer to the right if the current element is 0
    if (arr[left] === 0) {
      left++;
      // Move the right pointer to the left if the current element is 1
    } else if (arr[right] === 1) {
      right--;
      // Swap elements if left is 1 and right is 0
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
}

const numbers = [1, 0, 1, 0, 1, 0];
const result = groupZerosAndOnes(numbers);
console.log(result); // Output: [0, 0, 0, 1, 1, 1]
```

### Question 2

**Problem Statement:**
Find Middle of the Linked List

**Input:**
numbers = 1 -> 2 -> 3 -> 4 -> 5

**Output:**
3

1. First I gave **brute force** approach to count number of nodes and then take middle one

```js
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddle(head) {
  let count = 0;
  let current = head;

  // First pass to count the number of nodes
  while (current !== null) {
    count++;
    current = current.next;
  }

  // Calculate the middle index
  const middleIndex = Math.floor(count / 2);
  current = head;

  // Second pass to find the middle node
  for (let i = 0; i < middleIndex; i++) {
    current = current.next;
  }

  return current;
}

// Example usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middleNode = findMiddle(head);
console.log(middleNode.value); // Output: 3
```

2. Then I told approach using **slow & fast pointer** for better time complexity and space complexity

```js
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddle(head) {
  let slow = head;
  let fast = head;

  // Move slow pointer one step and fast pointer two steps at a time
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// Example usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middleNodeOptimal = findMiddle(head);
console.log(middleNodeOptimal.value); // Output: 3
```
