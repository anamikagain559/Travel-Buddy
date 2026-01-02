const BACKEND_API_URL =
 "http://localhost:5000/api/v1";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

async function request(
  endpoint: string,
  method: HttpMethod,
  options: RequestInit = {}
): Promise<Response> {
  return fetch(`${BACKEND_API_URL}${endpoint}`, {
    ...options,
    method,
    credentials: "include", // cookies auto included
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
}

export const serverFetch = {
  get: (endpoint: string, options?: RequestInit) =>
    request(endpoint, "GET", options),

  post: (endpoint: string, options?: RequestInit) =>
    request(endpoint, "POST", options),

  put: (endpoint: string, options?: RequestInit) =>
    request(endpoint, "PUT", options),

  patch: (endpoint: string, options?: RequestInit) =>
    request(endpoint, "PATCH", options),

  delete: (endpoint: string, options?: RequestInit) =>
    request(endpoint, "DELETE", options),
};
