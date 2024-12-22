import { Fetchify } from "../src/core";

describe('Fetchify - setToken', () => {
    it('should set the token correctly', () => {
        const fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

        const token = 'sample-token';
        fetchify.setToken({ token });

      
        expect((fetchify as any)._token).toBe(token);
    });
});
