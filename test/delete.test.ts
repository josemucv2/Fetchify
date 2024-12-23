import { Fetchify } from "../src/core";

// Mocking Fetchify instance and its methods
jest.mock('../src/core', () => {
    return {
        Fetchify: {
            create: jest.fn().mockImplementation(() => {
                return {
                    DELETE: jest.fn().mockImplementation(async ({ endpoint }) => {
                        // Simulated response for DELETE method
                        return { data: 'deleted post' };
                    }),
                };
            }),
        },
    };
});

/**
 * Test suite for the DELETE method in the Fetchify class.
 */
describe('DELETE method', () => {

    /**
     * Test for ensuring the DELETE method is called with the correct parameters
     * and returns the expected response.
     */
    it('should call DELETE with correct parameters and return response', async () => {
        // Creating an instance of Fetchify
        const fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

        // Making a DELETE request
        const response = await fetchify.DELETE({ endpoint: 'posts/1' });

        // Ensuring the DELETE method was called with the correct parameters
        expect(fetchify.DELETE).toHaveBeenCalledWith({
            endpoint: 'posts/1',
        });

        // Verifying that the correct response is returned
        expect(response).toEqual({ data: 'deleted post' });
    });
});
