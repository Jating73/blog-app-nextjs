---
title: Eggoz Interview Experience
excerpt: Interview Questions for Technical Lead Engineer (Python/Django)
image: eggoz.jpg
isFeatured: false
date: "2024-06-16"
---

## Round 1 (1hr)

### Question 1

**Problem Statement:**
You are given an array of strings and your task is to groups anagrams together.

**Input:**
strs = ["eat","tea","tan","ate","nat","bat"]

**Output:**
[["bat"],["nat","tan"],["ate","eat","tea"]]

```js
function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    // Sort the string to get the anagram key
    const sortedStr = str.split("").sort().join("");
    // Check if this anagram key already exists in the map
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    // Add the original string to the corresponding anagram group
    map.get(sortedStr).push(str);
  }

  // Return the grouped anagrams as an array of arrays
  return Array.from(map.values());
}

// Example usage
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(strs);
console.log(groupedAnagrams);
```

### Question 2

What is the command to build an image in docker?

```js
docker build -t <image_name>:<tag> <path_to_dockerfile>
```

### Question 3

What is the command to list containers in docker?

```js
docker ps // List all running containers
docker ps -a // List all containers either running or stopped
```

### Question 4

What is the command to remove a docker image?

```js
docker rmi <image_name>
```

### Question 5

What is prop drilling in react?

Prop drilling is a term used in React (and similar component-based frameworks) to describe the process of passing data from a parent component to a deeply nested child component through intermediate components that do not need the data themselves but are required to pass it down.

```js
function App() {
  const data = "Hello, World!";
  return <Parent data={data} />;
}

function Parent({ data }) {
  return <Child data={data} />;
}

function Child({ data }) {
  return <div>{data}</div>;
}
```

### Question 6

What is callback hell?

Callback hell refers to the situation where multiple nested callbacks make the code difficult to read and maintain.

```js
doSomething(function (err, result) {
  if (err) {
    // handle error
  } else {
    doSomethingElse(result, function (err, result2) {
      if (err) {
        // handle error
      } else {
        doAnotherThing(result2, function (err, result3) {
          if (err) {
            // handle error
          } else {
            doYetAnotherThing(result3, function (err, finalResult) {
              if (err) {
                // handle error
              } else {
                console.log(finalResult);
              }
            });
          }
        });
      }
    });
  }
});
```

### Question 7

What is Higher-Order Component (HOC)? What are its advantages?

Higher-Order Component (HOC) is a pattern in React that allows you to reuse component logic. An HOC is a function that takes a component and returns a new component with additional props or behavior.

```js
import React from "react";

// HOC that adds a prop
function withExtraProp(WrappedComponent) {
  return function (props) {
    return <WrappedComponent extraProp="I am an extra prop!" {...props} />;
  };
}

// Regular component
function MyComponent(props) {
  return <div>{props.extraProp}</div>;
}

// Wrapped component with extra prop
const EnhancedComponent = withExtraProp(MyComponent);

function App() {
  return <EnhancedComponent />;
}

export default App;
```

Advantages of HOCs:

1. Code Reusability: Encapsulate common logic and share it across multiple components.
2. Separation of Concerns: Keep your component logic separate from your UI components.
3. Enhanced Composability: Combine multiple HOCs to enhance your components in different ways.

### Question 8

What is difference between Context API and Redux?

When comparing Redux and the Context API in React Application both are used for state management.

**Redux** is a centralized state management solution. In Redux:

1. Single Source of Truth: All application state is stored in a single, central store. This makes it easy to manage and debug.
2. Global Store: The state is globally accessible, and components subscribe to the store to get updates.
3. Predictable State Updates: State updates are predictable due to the strict unidirectional data flow and pure reducer functions.
4. Middleware: Can be extended with middleware (like redux-thunk or redux-saga) for handling asynchronous actions, logging, and other side effects.

**Context API** is more decentralized compared to Redux. In Context API:

1. Scoped State: State can be scoped to specific parts of the component tree, avoiding a single, global store.
2. Multiple Contexts: Multiple contexts can be created, each managing different pieces of state independently.
3. Simple State Management: It's simpler to set up and use, especially for smaller applications or for managing simple state like themes, user preferences, or localization.

### Question 9

Create a Counter Application using react-redux

1. Create a store.

```js
// store.js

import { createStore } from "redux";

// Initial state
const initialState = {
  count: 0,
};

// Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Create store
const store = createStore(counterReducer);

export default store;
```

2. Create action

```js
// action.js
export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});
```

3. Create React Components

```js
// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
```

```js
// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
```
