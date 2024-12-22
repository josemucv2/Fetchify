"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_METHDOS = void 0;
/**
 * Enum representing the available HTTP methods.
 * @readonly
 * @enum {string}
 */
var HTTP_METHDOS;
(function (HTTP_METHDOS) {
    /** HTTP GET method. Used for retrieving data from the server. */
    HTTP_METHDOS["GET"] = "GET";
    /** HTTP POST method. Used for sending data to the server. */
    HTTP_METHDOS["POST"] = "POST";
    /** HTTP PUT method. Used for updating existing data on the server. */
    HTTP_METHDOS["PUT"] = "PUT";
    /** HTTP DELETE method. Used for deleting data from the server. */
    HTTP_METHDOS["DELETE"] = "DELETE";
    /** HTTP PATCH method. Used for partially updating data on the server. */
    HTTP_METHDOS["PATCH"] = "PATCH";
})(HTTP_METHDOS || (exports.HTTP_METHDOS = HTTP_METHDOS = {}));
