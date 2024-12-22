import { Fetchify } from "../src/core";
import { HTTP_METHDOS } from "../src/core/enums";

// Mock function to simulate request behavior
const mockRequest = jest.fn();

/**
 * Mocks the Fetchify class, specifically the PUT method, to simulate a real HTTP request.
 */
jest.mock('../src/core', () => {
    return {
        Fetchify: {
            create: jest.fn().mockImplementation(() => {
                return {
                    /**
                     * Mock implementation of the PUT method.
                     * Simulates sending a PUT request and calls the mockRequest function.
                     *
                     * @param {Object} params - The parameters for the PUT request.
                     * @param {string} params.endpoint - The endpoint to send the request to.
                     * @param {Object} params.body - The body of the request.
                     * @returns {Promise<Object>} - A promise that resolves to the mocked response.
                     */
                    PUT: jest.fn().mockImplementation(async ({ endpoint, body }) => {
                        return mockRequest({
                            token: '',
                            baseURL: 'https://jsonplaceholder.typicode.com',
                            endpoint,
                            method: HTTP_METHDOS.PUT,
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
 * Test suite for the `PUT` method in the Fetchify class.
 */
describe('PUT method', () => {
    /**
     * Test case for ensuring the PUT method calls request with correct parameters
     * and returns the expected response.
     */
    it('should call request with PUT method', async () => {
        const body = { title: 'foo', body: 'bar', userId: 1 };

        // Mocking the response of the request
        mockRequest.mockResolvedValueOnce({ data: 'updated post' });

        // Create an instance of Fetchify and call the PUT method
        const fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
        const response = await fetchify.PUT({ endpoint: 'posts/1', body });

        // Assert that the mockRequest was called with the correct parameters
        expect(mockRequest).toHaveBeenCalledWith({
            token: '',
            baseURL: 'https://jsonplaceholder.typicode.com',
            endpoint: 'posts/1',
            method: HTTP_METHDOS.PUT,
            body,
            options: undefined,
            timeOut: 10000,
            headers: undefined,
        });

        // Assert that the response matches the expected result
        expect(response).toEqual({ data: 'updated post' });
    });
});
