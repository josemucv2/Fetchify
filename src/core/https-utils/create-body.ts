import { HTTP_METHDOS } from "../../core/enums";

type CreateBody = {
    method: HTTP_METHDOS,
    body: unknown
}

export const createBody = ({ method, body }: CreateBody) => {
    if ([HTTP_METHDOS.POST, HTTP_METHDOS.PUT, HTTP_METHDOS.PATCH, HTTP_METHDOS.DELETE].includes(method)) {
        return body instanceof FormData ? body : JSON.stringify(body);
    }
    return undefined;
}