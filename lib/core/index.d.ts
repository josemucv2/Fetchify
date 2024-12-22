import { BaseFetch } from "./base-fetch";
import { ICustomRequest } from "./interfaces";
import { PropsMethods, PropsMethodsWithBody } from "./types";
export declare class Fetchify extends BaseFetch implements ICustomRequest {
    private static readonly DEFAULT_TIMEOUT;
    private _token;
    private _baseURL;
    private _headers?;
    private static _instance;
    private _interceptors;
    private constructor();
    setToken({ token }: {
        token: string;
    }): void;
    setRequestInterceptor(interceptor: (config: Request) => Promise<Request>): void;
    setResponseInterceptor(interceptor: <T>(response: T) => Promise<T>): void;
    static create({ baseURL, headers }: {
        baseURL: string;
        headers?: HeadersInit;
    }): Fetchify;
    private _makeRequest;
    GET<T>({ endpoint, options, timeOut }: PropsMethods): Promise<T>;
    DELETE<T>({ endpoint, options, timeOut }: PropsMethods): Promise<T>;
    POST<T>({ endpoint, body, options, timeOut }: PropsMethodsWithBody): Promise<T>;
    PUT<T>({ endpoint, body, options, timeOut }: PropsMethodsWithBody): Promise<T>;
    PATCH<T>({ endpoint, body, options, timeOut }: PropsMethodsWithBody): Promise<T>;
    getUri(enpoint: string): string;
}
