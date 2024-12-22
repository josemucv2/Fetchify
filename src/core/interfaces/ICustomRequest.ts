import { PropsMethods, PropsMethodsWithBody } from "../types";

/**
 * Interface representing a custom HTTP request handler with interceptors and common HTTP methods.
 */
export interface ICustomRequest {
    /**
     * Sets a new token for the request.
     * @param {Object} param - Object containing the new token.
     * @param {string} param.token - The new authentication token to set.
     */
    setToken({ token }: { token: string }): void;

    /**
     * Sets an interceptor for modifying request configurations before the request is sent.
     * @param {Function} interceptor - A function to modify the request configuration.
     * @returns {void}
     */
    setRequestInterceptor(interceptor: (config: Request) => Promise<Request>): void;

    /**
     * Sets an interceptor for modifying response data after the response is received.
     * @param {Function} interceptor - A function to modify the response data.
     * @returns {void}
     */
    setResponseInterceptor(interceptor: <T>(response: T) => Promise<T>): void;

    /**
     * Sends a GET request to the specified endpoint.
     * @param {PropsMethods} props - Object containing the endpoint and request options.
     * @returns {Promise<T>} A promise with the response data.
     */
    GET<T>(props: PropsMethods): Promise<T>;

    /**
     * Sends a POST request to the specified endpoint with a request body.
     * @param {PropsMethodsWithBody} props - Object containing the endpoint, request body, and options.
     * @returns {Promise<T>} A promise with the response data.
     */
    POST<T>(props: PropsMethodsWithBody): Promise<T>;

    /**
     * Sends a PUT request to the specified endpoint with a request body.
     * @param {PropsMethodsWithBody} props - Object containing the endpoint, request body, and options.
     * @returns {Promise<T>} A promise with the response data.
     */
    PUT<T>(props: PropsMethodsWithBody): Promise<T>;

    /**
     * Sends a DELETE request to the specified endpoint.
     * @param {PropsMethods} props - Object containing the endpoint and request options.
     * @returns {Promise<T>} A promise with the response data.
     */
    DELETE<T>(props: PropsMethods): Promise<T>;

    /**
     * Sends a PATCH request to the specified endpoint with a request body.
     * @param {PropsMethodsWithBody} props - Object containing the endpoint, request body, and options.
     * @returns {Promise<T>} A promise with the response data.
     */
    PATCH<T>(props: PropsMethodsWithBody): Promise<T>;

    /**
     * Returns the complete URI for a given endpoint.
     * @param {string} endpoint - The endpoint to build the URI for.
     * @returns {string} The full URI.
     */
    getUri(endpoint: string): string;
}
