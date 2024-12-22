import { Fetchify } from "../src/core";

/**
 * Test suite for the `setToken` method in the Fetchify class.
 */
describe('Fetchify - setToken', () => {
    /**
     * Test case for ensuring that the `setToken` method sets the token correctly.
     */
    it('should set the token correctly', () => {
        // Create an instance of Fetchify
        const fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

        // Define a sample token
        const token = 'sample-token';

        // Set the token using the setToken method
        fetchify.setToken({ token });

        // Assert that the token is correctly set in the Fetchify instance
        expect((fetchify as any)._token).toBe(token);
    });
});
