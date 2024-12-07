---
title: Criteo Interview Experience
excerpt: Interview Questions for Technical Solution Engineer
image: criteo.webp
isFeatured: false
date: "2024-12-06"
---

# Round 1 - Online Test (1 hr)

(Will Post Questions Soon)

# Round 2 - Technical & Managerial Interview (1 hr)

### Question 1

Where are cookies stored exactly in browser?

Answer-

1. DevTools -> Application -> Cookies
2. Through console

```js
console.log(document.cookie);
```

### Question 2

How will you check the performance of your web application?

### Question 3

Imagine you are a CEO of a tootpaste company. Customer Support Executive comes to tell you regarding a complaint from customer that customer received tootpaste box but no tootpaste inside it. How will you handle this situation?

### Question 4

Imagine you are a Enginner and the CEO approaches you regarding the above situation regarding machinery fault. How will you handle this scenario?

### Question 5

Imagine you only have one machine and it's broken and gone for repair for 7 days. What steps will you take as a CEO?

### Question 6

What are your short and long term goals?

### Question 7

Imagine you got a situation that you are only working on public holiday and your full time is off and there is a client who want a bug to be fixed ad he is getting mad. How will you handle this scenario?

### Question 8

Have you ever felt demotivated during work? What caused that demotivation?

### Question 9

There is a table given below. Find the error in the table and report it out.

```js
--------------------------------------------------------------------------------------------------------------------
| Id | Product Name | Price | In Stocks     | Product Link                     | Image Link                        |
| 1  | Fridge       | $100  | "Available"   | https://www.abc.com/product1     | https://www.abc.com/product1.jpeg |
| 2  | Oven         | $299  | "Unavailable" | https://www.abc.com/product2     | https://www.abc.com/product2.jpeg |
| 3  | Bike         | $349  | "Available"   | https://www.abc.com/product3     | https://www.abc.com/product3.jpeg |
|"4" | Car          | $1000 | "Available"   | httphttps://www.abc.com/product4 | https://www.abc.com/product4.txt  |
| 5  | Hair Dryer   | $50   | "Unavailable" | https://www.abc.com/product5     | https://www.abc.com/product5.jpeg |
--------------------------------------------------------------------------------------------------------------------

```

Answer-
Here are the errors identified in the table:

- Id Column Issue

The Id for the fourth row is written as "4" (with quotes), which is inconsistent with the numeric format used in the rest of the column.

- Product Link Issue

The Product Link for the fourth row has an incorrect URL format: httphttps://... instead of https://....

- Image Link Issue

The Image Link for the fourth row has an incorrect file extension: .txt instead of .jpeg or other valid image formats like .png or .jpg.

### Question 10

Difference between Primary and Foreign Key?

Answer-

- Primary Key: Uniquely identifies each record in a table.
- Foreign Key: Establishes a relationship between two tables by referencing the Primary Key of another table.

### Question 11

Can a Primary key can be a foreign key in other table?

Answer-
Yes, a primary key in one table can act as a foreign key in another table. This is a common practice in relational database design to establish relationships between tables.

### Question 12

Predict the output.

```js
function run(num) {
  let price = num > 0 ? num * 2 : num;

  switch (price) {
    case price < 70:
      console.log("Less than 70");
      break;
    case price > 80 && price > 100:
      console.log("So faster");
      break;
    default:
      console.log("Default Behavior");
  }
}

run(-2);

run(10);

run(50);

run(40);

run("A");


/// Ouput -
Default Behavior
Default Behavior
Default Behavior
Default Behavior
Default Behavior
```
