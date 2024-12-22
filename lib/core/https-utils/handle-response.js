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
exports.handleResponse = void 0;
const handleResponse = (_a) => __awaiter(void 0, [_a], void 0, function* ({ response }) {
    try {
        const data = yield response.json();
        if (!response.ok) {
            throw {
                message: (data === null || data === void 0 ? void 0 : data.message) || 'Unknown error',
                status: response.status,
                details: data,
            };
        }
        return data;
    }
    catch (err) {
        throw {
            message: 'Error parsing response',
            status: response.status,
            details: err,
        };
    }
});
exports.handleResponse = handleResponse;
