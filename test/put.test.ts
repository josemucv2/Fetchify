import { Fetchify } from "../src/core";
import { HTTP_METHDOS } from "../src/core/enums";

// Creamos un mock para la solicitud
const mockRequest = jest.fn();

jest.mock('../src/core', () => {
    return {
        Fetchify: {
            create: jest.fn().mockImplementation(() => {
                return {
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

describe('PUT method', () => {
    it('should call request with PUT method', async () => {
        const body = { title: 'foo', body: 'bar', userId: 1 };
        mockRequest.mockResolvedValueOnce({ data: 'updated post' });

        const fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
        const response = await fetchify.PUT({ endpoint: 'posts/1', body });

        // Verificamos que mockRequest haya sido llamado con los parámetros correctos
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

        // Verificamos que la respuesta sea la esperada
        expect(response).toEqual({ data: 'updated post' });
    });
});
