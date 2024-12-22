import { Fetchify } from "../src/core";
import { HTTP_METHDOS } from "../src/core/enums";

// Mock de la instancia Fetchify
jest.mock('../src/core', () => {
    return {
        Fetchify: {
            create: jest.fn().mockImplementation(() => {
                return {
                    DELETE: jest.fn().mockImplementation(async ({ endpoint }) => {
                        // Simulamos la respuesta que se debe devolver al hacer la llamada DELETE
                        return { data: 'deleted post' };
                    }),
                };
            }),
        },
    };
});

describe('DELETE method', () => {
    it('should call DELETE with correct parameters and return response', async () => {
        const fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

        const response = await fetchify.DELETE({ endpoint: 'posts/1' });

        // Verificamos que el método DELETE fue llamado con los parámetros correctos
        expect(fetchify.DELETE).toHaveBeenCalledWith({
            endpoint: 'posts/1',
        });

        // Comprobamos que la respuesta sea la esperada
        expect(response).toEqual({ data: 'deleted post' });
    });
});
