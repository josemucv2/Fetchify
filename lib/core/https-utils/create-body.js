"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBody = void 0;
const enums_1 = require("../../core/enums");
const createBody = ({ method, body }) => {
    if ([enums_1.HTTP_METHDOS.POST, enums_1.HTTP_METHDOS.PUT, enums_1.HTTP_METHDOS.PATCH, enums_1.HTTP_METHDOS.DELETE].includes(method)) {
        return body instanceof FormData ? body : JSON.stringify(body);
    }
    return undefined;
};
exports.createBody = createBody;
