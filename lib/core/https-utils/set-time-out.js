"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupTimeout = void 0;
const setupTimeout = ({ controller, timeOut }) => {
    return setTimeout(() => controller.abort(), timeOut);
};
exports.setupTimeout = setupTimeout;
