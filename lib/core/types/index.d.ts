import { HTTP_METHDOS } from "../enums";
/**
 * Type representing the properties for a request without a body (e.g., GET, DELETE).
 * @typedef {Object} PropsMethods
 * @property {string} endpoint - The endpoint for the request.
 * @property {RequestInit} [options] - Optional fetch options (e.g., headers, credentials).
 */
export type PropsMethods = {
    endpoint: string;
    options?: RequestInit;
    timeOut?: number;
};
/**
 * Type representing the properties for a request with a body (e.g., POST, PUT, PATCH).
 * @typedef {Object} PropsMethodsWithBody
 * @property {string} endpoint - The endpoint for the request.
 * @property {unknown} body - The body of the request, usually the data to be sent.
 * @property {RequestInit} [options] - Optional fetch options (e.g., headers, credentials).
 */
export type PropsMethodsWithBody = PropsMethods & {
    body: unknown;
};
export type MakeRequestTypes = {
    endpoint: string;
    method: HTTP_METHDOS;
    body?: unknown;
    options?: RequestInit;
    timeOut?: number;
};
