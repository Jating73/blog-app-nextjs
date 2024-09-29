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

### Question 2

What are props? Can you pass data from child to parent??

It is a way to pass data from a parent component to a child component. They are similar to function arguments and are used to transfer data between components, making React applications more modular and dynamic.

**Yes**, you can pass data from a child component to its parent by using callback functions.

```js
// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [childData, setChildData] = useState('');

  // Function to handle data from child
  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from child: {childData}</p>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default ParentComponent;

// ChildComponent.js
import React from 'react';

function ChildComponent({ sendDataToParent }) {
  const sendData = () => {
    const data = "Hello from child!";
    sendDataToParent(data);  // Pass data back to parent
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;

```

### Question 3

How will you optimize your app having heavy computation function in it?

- Use **useMemo** for Expensive Calculations.

```js
import React, { useMemo } from "react";

function ExpensiveComponent({ data }) {
  // Memoize the result of the heavy computation
  const computedResult = useMemo(() => {
    return heavyComputation(data);
  }, [data]); // Only recompute if data changes

  return <div>{computedResult}</div>;
}

function heavyComputation(data) {
  // Simulate heavy computation
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}
```

### Question 4

How will you optimize your web app having search functionality that calls API at every character type? For Eg - 5 character means 5 API calls

- Debouncing the API Calls

Debouncing ensures that the API is only called after a user stops typing for a specified amount of time, avoiding multiple API calls for each character. This is one of the most effective solutions for optimizing search inputs.

```js
import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Debounced function that calls the API
  const fetchSearchResults = debounce((searchTerm) => {
    // Replace with your actual API call
    fetch(`/api/search?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, 300); // Delay API call by 300ms

  useEffect(() => {
    if (query) {
      fetchSearchResults(query);
    }
    // Cleanup debounce on unmount to prevent memory leaks
    return () => {
      fetchSearchResults.cancel();
    };
  }, [query]);

  return <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />;
}
```

- Minimum Query Length

You can avoid making API calls for very short queries (e.g., less than 3 characters). This prevents unnecessary API requests when the search term is too short to return meaningful results.

```js
import React, { useState, useEffect } from "react";

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length >= 3) {
      fetch(`/api/search?q=${query}`)
        .then((response) => response.json())
        .then((data) => setResults(data));
    }
  }, [query]);

  return <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />;
}
```

### Question 5

You want to render your application whenver there is a change in input only. How will you achieve it?

You can use **useState** to handle input updates.

```js
import React, { useState } from "react";

function App() {
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>React Input Change Rendering</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type something..." />
      <p>Your input: {inputValue}</p>
    </div>
  );
}

export default App;
```

### Question 6

Can we use useEffect or useRef as well to handle rendering on input change??

Yes, you can use useEffect and useRef in specific scenarios, but they serve different purposes.

1. Using useEffect -

- You can use useEffect to perform side effects whenever the input changes, but it’s not required just for re-rendering based on input changes. React re-renders automatically on state updates, so you don’t need useEffect to handle basic input changes and re-rendering.

2. Using useRef -

- useRef is generally used to reference DOM elements or store values that persist across renders without triggering re-renders when updated. It does not trigger a re-render when its value changes, so it’s not useful for capturing input changes and re-rendering

### Question 7

How will you manage session in your web application?

Managing sessions in a web application is critical for ensuring secure and persistent user interactions across multiple requests. Depending on your tech stack, there are various ways to manage sessions. Here’s an overview of common strategies to manage sessions in a React application with a backend (e.g., Node.js, Express):

1. Session Management using Cookies (Server-Side Sessions)
   Cookies can be used to store a session identifier on the client side, while the actual session data (such as user info, authentication status, etc.) is stored server-side (typically in memory, a database, or cache like Redis).

Steps:

- Server creates a session: After successful login, the server generates a session ID, stores it in a database (or in memory), and sends the session ID to the client as a cookie.
- Client sends the session ID with each request: The browser automatically sends cookies with each request to the same origin.
- Server validates the session ID: On each request, the server checks the session ID from the cookie against the stored session data and validates the user's session.

## BACKEND CODE -

```bash
npm install express express-session cookie-parser redis
```

```js
const express = require("express");
const session = require("express-session");
const RedisStore = require("connect-redis")(session); // Optional Redis session store
const cookieParser = require("cookie-parser");

const app = express();

// Cookie and session middleware
app.use(cookieParser());
app.use(
  session({
    store: new RedisStore({ client: require("redis").createClient() }), // Optional: Store in Redis
    secret: "your-secret-key", // Keep this secret in production
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60000 }, // Cookie settings (set secure to true in production with HTTPS)
  })
);

app.post("/login", (req, res) => {
  // Validate user credentials (e.g., username/password)
  const user = { id: 1, username: "johndoe" }; // Replace with actual authentication
  req.session.user = user; // Store user data in the session
  res.send("Logged in");
});

app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.send(`Hello ${req.session.user.username}`);
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## FRONTEND CODE -

```js
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
```

2. Token-Based Session Management (JWT - JSON Web Token)
   JWT (JSON Web Token) is a popular method for managing stateless sessions. The token is generated and signed by the server and stored client-side (in localStorage or cookies). The client sends the token with each request, and the server verifies it to authenticate the user.

Steps:

- Client receives a JWT after logging in.
- The client stores the JWT in localStorage or cookies.
- The client sends the JWT in the Authorization header on subsequent requests.
- The server verifies the token and, if valid, allows the request.

## BACKEND CODE-

```bash
npm install express jsonwebtoken cookie-parser
```

```js
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const secretKey = "your-secret-key";

app.use(cookieParser());
app.use(express.json());

// Mock user data
const users = [{ id: 1, username: "johndoe", password: "password" }];

// JWT generation function
function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: "1h" });
}

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const token = generateToken(user);
    res.cookie("token", token, { httpOnly: true }); // Store token in HTTP-only cookie
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.get("/dashboard", (req, res) => {
  const token = req.cookies.token;

  if (token) {
    try {
      const user = jwt.verify(token, secretKey);
      res.send(`Hello ${user.username}`);
    } catch (error) {
      res.status(401).send("Invalid token");
    }
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## FRONTEND CODE -

```js
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
```

### Question 8

How will you secure your web app if i got access to your access token?

OAuth is a widely used authorization framework that allows third-party applications to access a user's resources without sharing the user's credentials. If your app is interacting with external services (like Google, Facebook, GitHub, etc.), you can implement OAuth to offload much of the authentication and token management complexity.

**OAuth Security Advantages :**

1. No credentials sharing: Users authenticate with third-party services (e.g., Google), and your app gets an access token to interact with that service on the user's behalf.
2. Token revocation and introspection: OAuth providers (e.g., Google) allow token revocation, so if a token is compromised, it can be invalidated.
3. Scopes: You can restrict what your application can access on behalf of the user. For example, if you're using Google OAuth, you can limit the app to read-only access to a user's email address.

**How OAuth Works:**

1. The user is redirected to the OAuth provider (e.g., Google) to authenticate.
2. Upon successful authentication, the OAuth provider issues an authorization code.
3. Your server exchanges the authorization code for an access token and optionally a refresh token.
4. The server uses the access token to authenticate requests to the third-party API.

```bash
npm install passport-google-oauth20 passport express-session
```

```js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Configure Passport with Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (token, tokenSecret, profile, done) => {
      // Process Google user profile, check if the user exists, etc.
      return done(null, profile);
    }
  )
);

// Serialize and deserialize user info for session handling
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
  res.redirect("/dashboard"); // Successful authentication
});
```

### Question 9

How will you secure your web application from bots to not able to crawl your website?

CAPTCHA for Bot Protection

CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) is a great tool to mitigate automated attacks, such as brute-force login attempts or malicious scripts trying to abuse forms.

Types of CAPTCHAs:

- Traditional CAPTCHA: Displays an image of distorted characters that the user must type in.
- reCAPTCHA: Google’s reCAPTCHA has multiple versions, such as:
  - reCAPTCHA v2: “I’m not a robot” checkbox.
  - reCAPTCHA v3: Invisible, score-based protection that doesn’t disrupt the user experience.
  - Invisible reCAPTCHA: A hidden CAPTCHA that only triggers a challenge when suspicious activity is detected.

When to Use CAPTCHA:

- Login forms: To prevent automated bots from trying to guess credentials.
- Sign-up forms: To stop bots from creating fake accounts.
- Sensitive actions: Such as password resets or payments.

## FRONTEND CODE -

```bash
npm install react-google-recaptcha
```

```js
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token); // Store the token
  };

  const handleLogin = async () => {
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recaptchaToken }), // Send token to backend for validation
    });

    if (response.ok) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {/* Your form fields here */}
      <ReCAPTCHA sitekey="your-site-key" onChange={handleRecaptchaChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
```

## BACKEND CODE -

```js
const axios = require("axios");

app.post("/api/login", async (req, res) => {
  const { recaptchaToken } = req.body;

  // Verify the reCAPTCHA token with Google
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=your-secret-key&response=${recaptchaToken}`;

  const response = await axios.post(verificationUrl);
  const { success } = response.data;

  if (!success) {
    return res.status(400).json({ error: "reCAPTCHA verification failed" });
  }

  // Proceed with login logic
  res.send("Login successful");
});
```

### Question 10

Write a query to provide list of Customers staying in Los Angeles and age greater than 24? (MySQL)

```sql
SELECT *
FROM Customers
WHERE city = 'Los Angeles'
  AND age > 24;
```

### Question 11

Write a query to provide list of Customers either staying in Log Angeles or New York? (MongoDB)

```js
db.customers.find({
  $or: [{ city: "Los Angeles" }, { city: "New York" }],
});
```
