import { BaseFetch } from "./base-fetch";
import { ICustomRequest } from "./interfaces";
import { MakeRequestTypes, PropsMethods, PropsMethodsWithBody } from "./types";
import { HTTP_METHDOS } from "./enums";

export class Fetchify extends BaseFetch implements ICustomRequest {
    private static readonly DEFAULT_TIMEOUT = 10000;

    private _token: string;
    private _baseURL: string;
    private _headers?: HeadersInit;
    private static _instance: Fetchify;
    private _interceptors: {
        request?: (config: Request) => Promise<Request>;
        response?: <T>(response: T) => Promise<T>;
    } = {};


    private constructor({ baseURL, headers }: { baseURL: string, headers?: HeadersInit }) {
        super();
        this._token = ""
        this._baseURL = baseURL
        this._headers = headers
    }

    public setToken({ token }: { token: string }) {
        this._token = token;
    }

    public setRequestInterceptor(interceptor: (config: Request) => Promise<Request>): void {
        this._interceptors.request = interceptor;
    }

    public setResponseInterceptor(interceptor: <T>(response: T) => Promise<T>): void {
        this._interceptors.response = interceptor;
    }

    public static create({ baseURL, headers }: { baseURL: string, headers?: HeadersInit }): Fetchify {
        Fetchify._instance = new Fetchify({ baseURL, headers });
        return Fetchify._instance;
    }

    private async _makeRequest<T>({ endpoint, method, body, options, timeOut = Fetchify.DEFAULT_TIMEOUT }: MakeRequestTypes) {

        return await this.request<T>({ token: this._token, baseURL: this._baseURL, endpoint, method, body, options, timeOut, headers: this._headers });
    }

    public async GET<T>({ endpoint, options, timeOut }: PropsMethods) {

        return await this._makeRequest<T>({ endpoint, method: HTTP_METHDOS.GET, options, timeOut });
    }

    public async DELETE<T>({ endpoint, options, timeOut }: PropsMethods) {

        return await this._makeRequest<T>({ endpoint, method: HTTP_METHDOS.DELETE, options, timeOut });
    }

    public async POST<T>({ endpoint, body, options, timeOut }: PropsMethodsWithBody) {

        return await this._makeRequest<T>({ endpoint, method: HTTP_METHDOS.POST, body, options, timeOut });
    }

    public async PUT<T>({ endpoint, body, options, timeOut }: PropsMethodsWithBody) {

        return await this._makeRequest<T>({ endpoint, method: HTTP_METHDOS.PUT, body, options, timeOut });
    }

    public async PATCH<T>({ endpoint, body, options, timeOut }: PropsMethodsWithBody) {

        return await this._makeRequest<T>({ endpoint, method: HTTP_METHDOS.PATCH, body, options, timeOut });
    }

    public getUri(enpoint: string): string {
        return `${this._baseURL}/${enpoint}`
    }
}