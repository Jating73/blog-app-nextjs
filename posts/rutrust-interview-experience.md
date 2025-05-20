---
title: Rutrust Interview Experience
excerpt: Interview Questions for Senior Full Stack Developer
image: rutrust.png
isFeatured: true
date: "2024-12-06"
---

# Round 1 - Introductory Call (30 min)

- Basic Introduction of Company.
- Self Introduction.
- Basic Questions related to tech stacks.

# Round 2 - Technical Interview (1 hr)

- Self Introduction

### Question 1

Complete the code. Write code of fetchPopulate to fetch results of product and write into the file for each product separately. -

```js
const fs = require("fs");

const fetchProduct = async (id: number) => {
  const res = await fetch(`https://product-list.example.com/product/${id}`);
  return res.json();
};

const productIds = [1, 2, 3, 4, 5];

const fetchPopulate = async (productIds: number[]) => {
  const promises = [];

  for (let i = 0; i < productIds.length; i++) {
    promises.push(fetchProduct(productIds[i]));
  }
  const [...result] = await Promise.allSettled(promises);

  result.forEach((data) => {
    if (data.status === "fulfilled") {
      const fileName = `product-${data.value.id}.json`;
      fs.writeFileSync(fileName, JSON.stringify(data.value));
    }
  });
};
```

### Question 2

Modified Above scenario to add internal rate limiter to hit atmost 3 concurrent calls only ot thiry party server.

```js

const fs = require("fs");

const fetchProduct = async (id: number) => {
  const res = await fetch(`https://product-list.example.com/product/${id}`);
  return res.json();
};

const fetchPopulate = async (productIds: number[]) => {
  const promises = [];

  for (let i = 0; i < productIds.length; i++) {
    promises.push(fetchProduct(productIds[i]));
  }
  const [...result] = await Promise.allSettled(promises);

  result.forEach((data) => {
    if (data.status === "fulfilled") {
      const fileName = `product-${data.value.id}.json`;
      fs.writeFileSync(fileName, JSON.stringify(data.value));
    }
  });
};

const batchSize = 3;
let index = 0;

(aysnc () => {
    do{
        await fetchPopulate(productIds.slice(index, index + batchSize));
        index += batchSize;
    } while(index < productIds.length)
})()

```

### Question 3

Optimize above code to achieve something like this and don't block event loop by using writeFileSync.

```js
Current:

| ====> | 1
| ========> | 2
| ================> | 3
| =============> | 4
| ==> | 5

Ideal:

| ====> | 1
| ========> | 2
| ================> | 3
| =============> | 4
| ==> | 5

```

```js
const fs = require("fs");

const fetchProduct = async (id: number) => {
  const res = await fetch(`https://product-list.example.com/product/${id}`);
  return res.json();
};

const writeProductToFile = async (product) => {
  const fileName = `product-${product.id}.json`;
  try {
    await fs.writeFile(fileName, JSON.stringify(product));
    console.log(`Saved ${fileName}`);
  } catch (err) {
    console.error(`Failed to save ${fileName}:`, err);
  }
};

const fetchPopulate = async (productIds, maxParallel) => {
  const queue = [...productIds]; // Tasks to process
  let running = 0;

  return new Promise((resolve, reject) => {
    const processNext = async () => {
      if (queue.length === 0 && running === 0) {
        // All tasks are processed
        return resolve();
      }

      if (queue.length > 0 && running < maxParallel) {
        const productId = queue.shift(); // Get the next task
        running++;

        try {
          const product = await fetchProduct(productId);
          await writeProductToFile(product); // Asynchronous file write
        } catch (err) {
          console.error(`Error fetching product ${productId}:`, err);
        } finally {
          running--;
          processNext(); // Start the next task
        }
      }
    };

    // Start initial batch of tasks
    for (let i = 0; i < maxParallel; i++) {
      processNext();
    }
  });
};

const productIds = [1, 2, 3, 4, 5];
const maxParallel = 3;

fetchPopulate(productIds, maxParallel).then(() => {
  console.log("All products processed");
});
```

- Feedback: Study about p-map i.e. similar to above for concurrent requests handling
