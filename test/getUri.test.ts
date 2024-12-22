import { Fetchify } from "../src/core";

jest.mock('../src/core', () => {
    return {
        Fetchify: {
            create: jest.fn().mockImplementation(() => {
                return {
                    getUri: jest.fn().mockImplementation((endpoint: string) => {
                        return `https://jsonplaceholder.typicode.com${endpoint}`;
                    }),
                };
            }),
        },
    };
});

describe('getUri method', () => {
    let fetchify: Fetchify;

    beforeEach(() => {
        fetchify = Fetchify.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
    });

    it('should return the correct full URI', () => {
        const uri = fetchify.getUri('/posts/1');
        expect(uri).toBe('https://jsonplaceholder.typicode.com/posts/1');
    });
});
