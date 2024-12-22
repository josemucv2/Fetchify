import { Fetchify } from "../src/core";
import { HTTP_METHDOS } from "../src/core/enums";

// Creamos un mock para la solicitud
const mockRequest = jest.fn();

jest.mock('../src/core', () => {
    return {
        Fetchify: {
            create: jest.fn().mockImplementation(() => {
                return {
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

describe('POST method', () => {
    it('should call request with POST method', async () => {
        const body = { title: 'foo', body: 'bar', userId: 1 };
        mockRequest.mockResolvedValueOnce({ data: 'created post' });

        const fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
        const response = await fetchify.POST({ endpoint: 'posts', body });

        // Verificar que el mockRequest haya sido llamado con los parámetros correctos
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

        // Verificar la respuesta
        expect(response).toEqual({ data: 'created post' });
    });
});
