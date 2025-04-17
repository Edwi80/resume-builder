# Research Summary

## 1. What is a Cloudflare Worker?

A Cloudflare Worker is a serverless function that runs on Cloudflare’s edge network. It allows developers to execute JavaScript or TypeScript code close to users around the world, enabling fast, low-latency web applications without the need for traditional server infrastructure.

## 2. How does a Worker handle HTTP requests and return responses?

A Worker listens for `fetch` events and handles incoming HTTP requests using the `fetch(request)` function. Inside this function, developers can inspect the request, perform logic (like calling APIs or databases), and return a `Response` object to the client.

## 3. What is Cloudflare D1? What are some pros and cons of using it?

Cloudflare D1 is a serverless, lightweight SQL database (based on SQLite) built to work with Workers.  
**Pros:** Easy to use, runs close to the user, integrates seamlessly with Workers.  
**Cons:** Still in beta, limited concurrency and scalability compared to traditional databases.

## 4. How does client-side JavaScript call an external API?

Client-side JavaScript uses the `fetch()` function to send HTTP requests to an API. For example, it can send a POST request with JSON data to a backend API, or fetch data using a GET request and display it on the page.

## 5. What is the benefit of deploying APIs to the edge instead of traditional servers?

Deploying APIs to the edge reduces latency by bringing server logic closer to the user. This leads to faster response times, better scalability, and often lower costs, since requests don’t have to travel long distances to centralized servers.

