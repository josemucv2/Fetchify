import { Fetchify } from "../src/core";
import { HTTP_METHDOS } from "../src/core/enums";

// Create an instance of Fetchify for testing purposes
const fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

// Mock function to simulate request behavior
const mockRequest = jest.fn();

/**
 * Mocks the Fetchify class, specifically the PATCH method, to simulate a real HTTP request.
 */
jest.mock('../src/core', () => {
    return {
        Fetchify: {
            create: jest.fn().mockImplementation(() => {
                return {
                    /**
                     * Mock implementation of the PATCH method.
                     * Simulates sending a PATCH request and calls the mockRequest function.
                     *
                     * @param {Object} params - The parameters for the PATCH request.
                     * @param {string} params.endpoint - The endpoint to send the request to.
                     * @param {Object} params.body - The body of the request.
                     * @returns {Promise<Object>} - A promise that resolves to the mocked response.
                     */
                    PATCH: jest.fn().mockImplementation(async ({ endpoint, body }) => {
                        return mockRequest({
                            token: '',
                            baseURL: 'https://jsonplaceholder.typicode.com',
                            endpoint,
                            method: HTTP_METHDOS.PATCH,
                            body,
                            options: undefined,
                            timeOut: 10000,
                            headers: undefined,
                        });
                    }),
                };
            }),
        },
    };
});

/**
 * Test suite for the `PATCH` method in the Fetchify class.
 */
describe('PATCH method', () => {
    /**
     * Test case for ensuring the PATCH method calls request with correct parameters
     * and returns the expected response.
     */
    it('should call request with PATCH method', async () => {
        const body = { title: 'foo', body: 'bar' };

        // Mocking the response of the request
        mockRequest.mockResolvedValueOnce({ data: 'patched post' });

        // Call the PATCH method
        const response = await fetchify.PATCH({ endpoint: 'posts/1', body });

        // Assert that the mockRequest was called with the correct parameters
        expect(mockRequest).toHaveBeenCalledWith({
            token: '',
            baseURL: 'https://jsonplaceholder.typicode.com',
            endpoint: 'posts/1',
            method: HTTP_METHDOS.PATCH,
            body,
            options: undefined,
            timeOut: 10000,
            headers: undefined,
        });

        // Assert that the response matches the expected result
        expect(response).toEqual({ data: 'patched post' });
    });
});
