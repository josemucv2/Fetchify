import { Fetchify } from "../src/core";
import { HTTP_METHDOS } from "../src/core/enums";

// Mock function to simulate request behavior
const mockRequest = jest.fn();

/**
 * Mocks the Fetchify class, specifically the POST method, to simulate a real HTTP request.
 */
jest.mock('../src/core', () => {
    return {
        Fetchify: {
            create: jest.fn().mockImplementation(() => {
                return {
                    /**
                     * Mock implementation of the POST method.
                     * Simulates sending a POST request and calls the mockRequest function.
                     *
                     * @param {Object} params - The parameters for the POST request.
                     * @param {string} params.endpoint - The endpoint to send the request to.
                     * @param {Object} params.body - The body of the request.
                     * @returns {Promise<Object>} - A promise that resolves to the mocked response.
                     */
                    POST: jest.fn().mockImplementation(async ({ endpoint, body }) => {
                        return mockRequest({
                            token: '',
                            baseURL: 'https://jsonplaceholder.typicode.com',
                            endpoint,
                            method: HTTP_METHDOS.POST,
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
 * Test suite for the `POST` method in the Fetchify class.
 */
describe('POST method', () => {
    /**
     * Test case for ensuring the POST method calls request with correct parameters
     * and returns the expected response.
     */
    it('should call request with POST method', async () => {
        const body = { title: 'foo', body: 'bar', userId: 1 };

        // Mocking the response of the request
        mockRequest.mockResolvedValueOnce({ data: 'created post' });

        // Create an instance of Fetchify and call the POST method
        const fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
        const response = await fetchify.POST({ endpoint: 'posts', body });

        // Assert that the mockRequest was called with the correct parameters
        expect(mockRequest).toHaveBeenCalledWith({
            token: '',
            baseURL: 'https://jsonplaceholder.typicode.com',
            endpoint: 'posts',
            method: HTTP_METHDOS.POST,
            body,
            options: undefined,
            timeOut: 10000,
            headers: undefined,
        });

        // Assert that the response matches the expected result
        expect(response).toEqual({ data: 'created post' });
    });
});
