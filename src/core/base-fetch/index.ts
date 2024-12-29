import { IBaseFetch } from '../../core/interfaces';

import {
    createBody,
    setupTimeout,
    createHeaders,
    handleResponse
} from '../../core/https-utils';

import { controller } from '../instances';

export abstract class BaseFetch {

    protected async request<T>({ token, baseURL, endpoint, method, options = {}, body, timeOut, headers }: IBaseFetch): Promise<T> {

        try {

            const requestOptions: RequestInit = {
                ...options,
                signal: controller.signal,
                headers: createHeaders({ token, body, options }) || headers,
                method,
                body: createBody({ method, body }),
            };

            const response = await fetch(`${baseURL}/${endpoint}`, requestOptions);

            clearTimeout(setupTimeout({ controller, timeOut }));

            return await handleResponse<T>({ response });

        } catch (error) {

            clearTimeout(setupTimeout({ controller, timeOut }));

            throw error;
        }
    }

}