import { HTTP_METHDOS } from "../enums";
/**
 * Interface representing the common properties required to make a fetch request.
 * @interface
 */
export interface IBaseFetch {
    /**
     * The base URL for the API endpoint.
     * @type {string}
     */
    baseURL: string;
    /**
     * The authentication token to be included in the request headers.
     * @type {string}
     */
    token: string;
    /**
     * The specific endpoint to hit, which will be appended to the baseURL.
     * @type {string}
     */
    endpoint: string;
    /**
     * The HTTP method to be used for the request.
     * @type {HTTP_METHDOS}
     */
    method: HTTP_METHDOS;
    /**
     * Additional options for the fetch request, such as headers, mode, cache, etc.
     * @type {RequestInit|undefined}
     */
    options?: RequestInit;
    /**
     * Optional timeout for the request in milliseconds.
     * The request will fail if it exceeds this time.
     * @type {number|undefined}
     */
    timeOut: number;
    /**
     * The body of the request. Typically used with POST, PUT, PATCH methods.
     * @type {unknown|undefined}
     */
    body?: unknown;
    headers?: HeadersInit;
}
