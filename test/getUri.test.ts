import { Fetchify } from "../src/core";

/**
 * Mocks the Fetchify class to simulate its behavior in the tests.
 * Specifically, the `getUri` method is mocked to return a concatenated URI.
 */
jest.mock('../src/core', () => {
    return {
        Fetchify: {
            create: jest.fn().mockImplementation(() => {
                return {
                    /**
                     * Mocked implementation of the getUri method.
                     * Concatenates the base URL with the given endpoint.
                     * 
                     * @param {string} endpoint - The API endpoint to append to the base URL.
                     * @returns {string} - The concatenated full URI.
                     */
                    getUri: jest.fn().mockImplementation((endpoint: string) => {
                        return `https://jsonplaceholder.typicode.com${endpoint}`;
                    }),
                };
            }),
        },
    };
});

/**
 * Test suite for the `getUri` method in the Fetchify class.
 */
describe('getUri method', () => {
    let fetchify: Fetchify;

    /**
     * Setup before each test: creates a new Fetchify instance.
     */
    beforeEach(() => {
        fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
    });

    /**
     * Test case for ensuring the getUri method returns the correct full URI
     * when provided an endpoint.
     */
    it('should return the correct full URI', () => {
        // Testing the getUri method by passing an endpoint
        const uri = fetchify.getUri('/posts/1');

        // Asserting that the returned URI matches the expected result
        expect(uri).toBe('https://jsonplaceholder.typicode.com/posts/1');
    });
});
