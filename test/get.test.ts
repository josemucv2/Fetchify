import { HTTP_METHDOS } from "../src/core/enums";
import { Fetchify } from "../src/core";

describe('GET method', () => {
    let fetchify: Fetchify;
    const mockRequest = jest.fn();

    beforeEach(() => {
        fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

        fetchify['request'] = mockRequest;
    });

    it('should call request with GET method', async () => {
        mockRequest.mockResolvedValueOnce({ data: 'some data' });

        const response = await fetchify.GET({ endpoint: 'posts/1' });

        expect(mockRequest).toHaveBeenCalledWith({
            token: '',
            baseURL: 'https://jsonplaceholder.typicode.com',
            endpoint: 'posts/1',
            method: HTTP_METHDOS.GET,  
            options: undefined,
            timeOut: 10000,
            headers: undefined,
        });

        expect(response).toEqual({ data: 'some data' });
    });
});
