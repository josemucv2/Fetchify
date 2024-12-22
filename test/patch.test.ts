import { Fetchify } from "../src/core";
import { HTTP_METHDOS } from "../src/core/enums";

const fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' })
const mockRequest = jest.fn();
jest.mock('../src/core', () => {
    return {
        Fetchify: {
            create: jest.fn().mockImplementation(() => {
                return {
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

describe('PATCH method', () => {
    it('should call request with PATCH method', async () => {
        const body = { title: 'foo', body: 'bar' };
        mockRequest.mockResolvedValueOnce({ data: 'patched post' });

        const response = await fetchify.PATCH({ endpoint: 'posts/1', body });

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
        expect(response).toEqual({ data: 'patched post' });
    });
});
