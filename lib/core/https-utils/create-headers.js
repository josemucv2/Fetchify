"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeaders = void 0;
const createHeaders = ({ token, body, options }) => {
    const isFormData = body instanceof FormData;
    const defaultHeaders = {
        'Content-Type': 'application/json',
        Authorization: token || '',
    };
    return isFormData ? { Authorization: token } : Object.assign(Object.assign({}, defaultHeaders), (options.headers || {}));
};
exports.createHeaders = createHeaders;
