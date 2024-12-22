import { IBaseFetch } from '../../core/interfaces';
export declare abstract class BaseFetch {
    protected request<T>({ token, baseURL, endpoint, method, options, body, timeOut, headers }: IBaseFetch): Promise<T>;
    private _normalizeError;
}
