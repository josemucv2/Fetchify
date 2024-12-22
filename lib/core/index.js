"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetchify = void 0;
const base_fetch_1 = require("./base-fetch");
const enums_1 = require("./enums");
class Fetchify extends base_fetch_1.BaseFetch {
    constructor({ baseURL, headers }) {
        super();
        this._interceptors = {};
        this._token = "";
        this._baseURL = baseURL;
        this._headers = headers;
    }
    setToken({ token }) {
        this._token = token;
    }
    setRequestInterceptor(interceptor) {
        this._interceptors.request = interceptor;
    }
    setResponseInterceptor(interceptor) {
        this._interceptors.response = interceptor;
    }
    static create({ baseURL, headers }) {
        Fetchify._instance = new Fetchify({ baseURL, headers });
        return Fetchify._instance;
    }
    _makeRequest(_a) {
        return __awaiter(this, arguments, void 0, function* ({ endpoint, method, body, options, timeOut = Fetchify.DEFAULT_TIMEOUT }) {
            return yield this.request({ token: this._token, baseURL: this._baseURL, endpoint, method, body, options, timeOut, headers: this._headers });
        });
    }
    GET(_a) {
        return __awaiter(this, arguments, void 0, function* ({ endpoint, options, timeOut }) {
            return yield this._makeRequest({ endpoint, method: enums_1.HTTP_METHDOS.GET, options, timeOut });
        });
    }
    DELETE(_a) {
        return __awaiter(this, arguments, void 0, function* ({ endpoint, options, timeOut }) {
            return yield this._makeRequest({ endpoint, method: enums_1.HTTP_METHDOS.DELETE, options, timeOut });
        });
    }
    POST(_a) {
        return __awaiter(this, arguments, void 0, function* ({ endpoint, body, options, timeOut }) {
            return yield this._makeRequest({ endpoint, method: enums_1.HTTP_METHDOS.POST, body, options, timeOut });
        });
    }
    PUT(_a) {
        return __awaiter(this, arguments, void 0, function* ({ endpoint, body, options, timeOut }) {
            return yield this._makeRequest({ endpoint, method: enums_1.HTTP_METHDOS.PUT, body, options, timeOut });
        });
    }
    PATCH(_a) {
        return __awaiter(this, arguments, void 0, function* ({ endpoint, body, options, timeOut }) {
            return yield this._makeRequest({ endpoint, method: enums_1.HTTP_METHDOS.PATCH, body, options, timeOut });
        });
    }
    getUri(enpoint) {
        return `${this._baseURL}/${enpoint}`;
    }
}
exports.Fetchify = Fetchify;
Fetchify.DEFAULT_TIMEOUT = 10000;
