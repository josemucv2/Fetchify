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
exports.BaseFetch = void 0;
const https_utils_1 = require("../../core/https-utils");
const instances_1 = require("../instances");
class BaseFetch {
    request(_a) {
        return __awaiter(this, arguments, void 0, function* ({ token, baseURL, endpoint, method, options = {}, body, timeOut, headers }) {
            try {
                const requestOptions = Object.assign(Object.assign({}, options), { signal: instances_1.controller.signal, headers: (0, https_utils_1.createHeaders)({ token, body, options }) || headers, method, body: (0, https_utils_1.createBody)({ method, body }) });
                const response = yield fetch(`${baseURL}/${endpoint}`, requestOptions);
                clearTimeout((0, https_utils_1.setupTimeout)({ controller: instances_1.controller, timeOut }));
                if (!response.ok) {
                    throw Object.assign(Object.assign({}, response), { status: response.status });
                }
                return yield (0, https_utils_1.handleResponse)({ response });
            }
            catch (error) {
                clearTimeout((0, https_utils_1.setupTimeout)({ controller: instances_1.controller, timeOut }));
                throw this._normalizeError(error);
            }
        });
    }
    _normalizeError(error) {
        if (error instanceof Response) {
            return new Error(`HTTP Error: ${error.status} - ${error.statusText}`);
        }
        return new Error(`Request Error: ${error || 'Unknown error occurred'}`);
    }
}
exports.BaseFetch = BaseFetch;
