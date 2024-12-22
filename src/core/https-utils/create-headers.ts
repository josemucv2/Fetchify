type CreateHeaders = {
    token: string,
    body: unknown,
    options: RequestInit
}

export const createHeaders = ({ token, body, options }: CreateHeaders) => {

    const isFormData = body instanceof FormData;

    const defaultHeaders = {
        'Content-Type': 'application/json',
        Authorization: token || '',
    };

    return isFormData ? { Authorization: token } : { ...defaultHeaders, ...(options.headers || {}) };
}