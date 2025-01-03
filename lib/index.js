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
exports.FetchifyInscante = void 0;
const core_1 = require("./core");
exports.FetchifyInscante = core_1.Fetchify;
const instasce = exports.FetchifyInscante.create({ baseURL: '', headers: {} });
instasce.setToken({ token: '' });
instasce.setRequestInterceptor((config) => __awaiter(void 0, void 0, void 0, function* () {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.set("Authorization", `Bearer ${token}`);
    }
    console.log("Request Interceptor:", config);
    return config;
}));
