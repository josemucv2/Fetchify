import { HTTP_METHDOS } from "../../core/enums";
type CreateBody = {
    method: HTTP_METHDOS;
    body: unknown;
};
export declare const createBody: ({ method, body }: CreateBody) => string | FormData | undefined;
export {};
