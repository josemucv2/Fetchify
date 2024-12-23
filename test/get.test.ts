import { HTTP_METHDOS } from "../src/core/enums";
import { Fetchify } from "../src/core";

/**
 * Test suite for the GET method in the Fetchify class.
 */
describe('GET method', () => {
    let fetchify: Fetchify;
    const mockRequest = jest.fn();

    /**
     * Setup before each test: creates a new Fetchify instance and mocks the 'request' method.
     */
    beforeEach(() => {
        fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

        // Mocking the 'request' method of the Fetchify instance
        fetchify['request'] = mockRequest;
    });

    /**
     * Test case for ensuring the GET method calls the 'request' method with correct parameters
     * and returns the expected response.
     */
    it('should call request with GET method', async () => {
        // Mocking the resolved value of the 'request' method
        mockRequest.mockResolvedValueOnce({ data: 'some data' });

        // Making a GET request using the Fetchify instance
        const response = await fetchify.GET({ endpoint: 'posts/1' });

        // Asserting that the 'request' method was called with the correct parameters
        expect(mockRequest).toHaveBeenCalledWith({
            token: '',
            baseURL: 'https://jsonplaceholder.typicode.com',
            endpoint: 'posts/1',
            method: HTTP_METHDOS.GET,
            options: undefined,
            timeOut: 10000,
            headers: undefined,
        });

        // Asserting that the correct response was returned
        expect(response).toEqual({ data: 'some data' });
    });
});
