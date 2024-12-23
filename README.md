# @jmfetchify/fetchify

**@jmfetchify/fetchify** is a lightweight and flexible HTTP request library for JavaScript/TypeScript applications. It provides simple configuration management, token-based authentication, and supports request and response interceptors. It works seamlessly on both client and server sides.

## Features

- Customizable HTTP request methods (GET, POST, PUT, PATCH, DELETE).
- Token management for authentication.
- Request and response interceptors.
- Supports both client-side (browser) and server-side (Node.js) usage.

## Installation

To install the library, run:

```bash
npm install @jmfetchify/fetchify
```
or
```bash
pnpm install @jmfetchify/fetchify
```

## USAGE

```typescript

import { Fetchify } from "@jmfetchify/fetchify";

const fetchifyInstance = Fetchify.create({
    baseURL: 'https://your-api-url.com',
    headers: {}
});

fetchifyInstance.setToken({ token: 'your-auth-token' });

fetchifyInstance.setRequestInterceptor(async (config) => {

    const token = localStorage.getItem("accessToken");

    if (token) {
        config.headers.set("Authorization", `Bearer ${token}`);
    }

    console.log("Request Interceptor:", config);

    return config;
});

// Example GET request
fetchifyInstance.GET({ endpoint: 'users' }).then(response => {

    console.log('Users:', response);

}).catch(error => {

    console.error('Error fetching users:', error);

});
```

## API Methods

### setToken
Sets the authentication token for the requests.

```typescript
setToken({ token: string })
```

### `setRequestInterceptor`
Sets a request interceptor to modify the request before it is sent.

```typescript
setRequestInterceptor(interceptor: (config: Request) => Promise<Request>)
```

### setResponseInterceptor
Sets a response interceptor to modify the response before it is returned to the caller.
```typescript
setResponseInterceptor(interceptor: <T>(response: T) => Promise<T>)
```

### GET
Sends a GET request to the specified endpoint.
```typescript
GET<T>({ endpoint: string, options?: RequestInit, timeOut?: number })
```

### POST
Sends a POST request to the specified endpoint with the given body.
```typescript
POST<T>({ endpoint: string, body?: unknown, options?: RequestInit, timeOut?: number })
```

### PUT
Sends a PUT request to the specified endpoint with the given body.

```typescript
PUT<T>({ endpoint: string, body?: unknown, options?: RequestInit, timeOut?: number })
```

### PATCH
Sends a PATCH request to the specified endpoint with the given body.
```typescript
PATCH<T>({ endpoint: string, body?: unknown, options?: RequestInit, timeOut?: number })
```

### DELETE
Sends a DELETE request to the specified endpoint.
```typescript
DELETE<T>({ endpoint: string, options?: RequestInit, timeOut?: number })
```
## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
