import { HTTP_METHDOS } from "../enums";

export interface IHttpRequestConfig {
    /**
     * Configures a timeout to abort the request.
     * @param {AbortController} controller - Abort controller to handle the request cancellation.
     * @param {number} timeOut - Timeout duration in milliseconds.
     * @returns {NodeJS.Timeout} The timeout ID.
     */
    setupTimeout(controller: AbortController, timeOut: number): NodeJS.Timeout;

    /**
     * Creates the request headers.
     * @param {string} token - Authentication token.
     * @param {unknown} body - Request body (if necessary).
     * @param {RequestInit} options - Additional request options.
     * @returns {HeadersInit} Configured headers for the request.
     */
    createHeaders(token: string, body: unknown, options: RequestInit): HeadersInit;

    /**
     * Prepares the request body based on the HTTP method.
     * @param {HTTP_METHDOS} method - The HTTP method being used (POST, PUT, etc.).
     * @param {unknown} body - The request body.
     * @returns {string | FormData | undefined} The prepared request body, or undefined if not needed.
     */
    prepareBody(method: HTTP_METHDOS, body: unknown): string | FormData | undefined;

    /**
     * Handles the response from the HTTP request.
     * @param {Response} response - The HTTP response object.
     * @returns {Promise<T>} A promise with the processed response data.
     * @throws Will throw an error if the response status is not OK.
     */
    handleResponse<T>(response: Response): Promise<T>;
}
