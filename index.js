var statuses = {
	"100": "Continue",
	"101": "Switching Protocols",
	"102": "Processing",
	"103": "Early Hints",
	"200": "OK",
	"201": "Created",
	"202": "Accepted",
	"203": "Non-Authoritative Information",
	"204": "No Content",
	"205": "Reset Content",
	"206": "Partial Content",
	"207": "Multi-Status",
	"208": "Already Reported",
	"226": "IM Used",
	"300": "Multiple Choices",
	"301": "Moved Permanently",
	"302": "Found",
	"303": "See Other",
	"304": "Not Modified",
	"305": "Use Proxy",
	"307": "Temporary Redirect",
	"308": "Permanent Redirect",
	"400": "Bad Request",
	"401": "Unauthorized",
	"402": "Payment Required",
	"403": "Forbidden",
	"404": "Not Found",
	"405": "Method Not Allowed",
	"406": "Not Acceptable",
	"407": "Proxy Authentication Required",
	"408": "Request Timeout",
	"409": "Conflict",
	"410": "Gone",
	"411": "Length Required",
	"412": "Precondition Failed",
	"413": "Payload Too Large",
	"414": "URI Too Long",
	"415": "Unsupported Media Type",
	"416": "Range Not Satisfiable",
	"417": "Expectation Failed",
	"418": "I'm a Teapot",
	"421": "Misdirected Request",
	"422": "Unprocessable Entity",
	"423": "Locked",
	"424": "Failed Dependency",
	"425": "Too Early",
	"426": "Upgrade Required",
	"428": "Precondition Required",
	"429": "Too Many Requests",
	"431": "Request Header Fields Too Large",
	"451": "Unavailable For Legal Reasons",
	"500": "Internal Server Error",
	"501": "Not Implemented",
	"502": "Bad Gateway",
	"503": "Service Unavailable",
	"504": "Gateway Timeout",
	"505": "HTTP Version Not Supported",
	"506": "Variant Also Negotiates",
	"507": "Insufficient Storage",
	"508": "Loop Detected",
	"509": "Bandwidth Limit Exceeded",
	"510": "Not Extended",
	"511": "Network Authentication Required"
};

/**
 * Sets a response status code and text.
 * @example
 * res(ctx.status(301))
 * res(ctx.status(400, 'Custom status text'))
 * @see {@link https://mswjs.io/docs/api/context/status `ctx.status()`}
 */
const status = (statusCode, statusText) => {
    return (res) => {
        res.status = statusCode;
        res.statusText =
            statusText || statuses[String(statusCode)];
        return res;
    };
};

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var lib$1$1 = {};

var Headers$1 = {};

var normalizeHeaderName$1$1 = {};

Object.defineProperty(normalizeHeaderName$1$1, "__esModule", { value: true });
normalizeHeaderName$1$1.normalizeHeaderName = void 0;
var HEADERS_INVALID_CHARACTERS$1 = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function normalizeHeaderName$2(name) {
    if (typeof name !== 'string') {
        name = String(name);
    }
    if (HEADERS_INVALID_CHARACTERS$1.test(name) || name.trim() === '') {
        throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
}
normalizeHeaderName$1$1.normalizeHeaderName = normalizeHeaderName$2;

var normalizeHeaderValue$1$1 = {};

Object.defineProperty(normalizeHeaderValue$1$1, "__esModule", { value: true });
normalizeHeaderValue$1$1.normalizeHeaderValue = void 0;
function normalizeHeaderValue$2(value) {
    if (typeof value !== 'string') {
        value = String(value);
    }
    return value;
}
normalizeHeaderValue$1$1.normalizeHeaderValue = normalizeHeaderValue$2;

var __generator$4 = (commonjsGlobal$1 && commonjsGlobal$1.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read$3$1 = (commonjsGlobal$1 && commonjsGlobal$1.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values$2 = (commonjsGlobal$1 && commonjsGlobal$1.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(Headers$1, "__esModule", { value: true });
var normalizeHeaderName_1$1 = normalizeHeaderName$1$1;
var normalizeHeaderValue_1$1 = normalizeHeaderValue$1$1;
var HeadersPolyfill$1 = /** @class */ (function () {
    function HeadersPolyfill(init) {
        var _this = this;
        // Normalized header {"name":"a, b"} storage.
        this._headers = {};
        // Keeps the mapping between the raw header name
        // and the normalized header name to ease the lookup.
        this._names = new Map();
        /**
         * @note Cannot check if the `init` is an instance of the `Headers`
         * because that class is only defined in the browser.
         */
        if (['Headers', 'HeadersPolyfill'].includes(init === null || init === void 0 ? void 0 : init.constructor.name) ||
            init instanceof HeadersPolyfill) {
            var initialHeaders = init;
            initialHeaders.forEach(function (value, name) {
                _this.append(name, value);
            }, this);
        }
        else if (Array.isArray(init)) {
            init.forEach(function (_a) {
                var _b = __read$3$1(_a, 2), name = _b[0], value = _b[1];
                _this.append(name, Array.isArray(value) ? value.join(', ') : value);
            });
        }
        else if (init) {
            Object.getOwnPropertyNames(init).forEach(function (name) {
                var value = init[name];
                _this.append(name, Array.isArray(value) ? value.join(', ') : value);
            });
        }
    }
    HeadersPolyfill.prototype[Symbol.iterator] = function () {
        return this.entries();
    };
    HeadersPolyfill.prototype.keys = function () {
        var _a, _b, name_1, e_1_1;
        var e_1, _c;
        return __generator$4(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values$2(Object.keys(this._headers)), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    name_1 = _b.value;
                    return [4 /*yield*/, name_1];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    HeadersPolyfill.prototype.values = function () {
        var _a, _b, value, e_2_1;
        var e_2, _c;
        return __generator$4(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values$2(Object.values(this._headers)), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    value = _b.value;
                    return [4 /*yield*/, value];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    HeadersPolyfill.prototype.entries = function () {
        var _a, _b, name_2, e_3_1;
        var e_3, _c;
        return __generator$4(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values$2(Object.keys(this._headers)), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    name_2 = _b.value;
                    return [4 /*yield*/, [name_2, this.get(name_2)]];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_3_1 = _d.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    /**
     * Returns a `ByteString` sequence of all the values of a header with a given name.
     */
    HeadersPolyfill.prototype.get = function (name) {
        return this._headers[normalizeHeaderName_1$1.normalizeHeaderName(name)] || null;
    };
    /**
     * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    HeadersPolyfill.prototype.set = function (name, value) {
        var normalizedName = normalizeHeaderName_1$1.normalizeHeaderName(name);
        this._headers[normalizedName] = normalizeHeaderValue_1$1.normalizeHeaderValue(value);
        this._names.set(normalizedName, name);
    };
    /**
     * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    HeadersPolyfill.prototype.append = function (name, value) {
        var resolvedValue = this.has(name) ? this.get(name) + ", " + value : value;
        this.set(name, resolvedValue);
    };
    /**
     * Deletes a header from the `Headers` object.
     */
    HeadersPolyfill.prototype.delete = function (name) {
        if (!this.has(name)) {
            return this;
        }
        var normalizedName = normalizeHeaderName_1$1.normalizeHeaderName(name);
        delete this._headers[normalizedName];
        this._names.delete(normalizedName);
        return this;
    };
    /**
     * Returns the object of all the normalized headers.
     */
    HeadersPolyfill.prototype.all = function () {
        return this._headers;
    };
    /**
     * Returns the object of all the raw headers.
     */
    HeadersPolyfill.prototype.raw = function () {
        var _this = this;
        return Object.entries(this._headers).reduce(function (headers, _a) {
            var _b = __read$3$1(_a, 2), name = _b[0], value = _b[1];
            headers[_this._names.get(name)] = value;
            return headers;
        }, {});
    };
    /**
     * Returns a boolean stating whether a `Headers` object contains a certain header.
     */
    HeadersPolyfill.prototype.has = function (name) {
        return this._headers.hasOwnProperty(normalizeHeaderName_1$1.normalizeHeaderName(name));
    };
    /**
     * Traverses the `Headers` object,
     * calling the given callback for each header.
     */
    HeadersPolyfill.prototype.forEach = function (callback, thisArg) {
        for (var name_3 in this._headers) {
            if (this._headers.hasOwnProperty(name_3)) {
                callback.call(thisArg, this._headers[name_3], name_3, this);
            }
        }
    };
    return HeadersPolyfill;
}());
Headers$1.default = HeadersPolyfill$1;

var headersToString$1$1 = {};

var headersToList$1$1 = {};

Object.defineProperty(headersToList$1$1, "__esModule", { value: true });
headersToList$1$1.headersToList = void 0;
function headersToList$2(headers) {
    var headersList = [];
    headers.forEach(function (value, name) {
        var resolvedValue = value.includes(',')
            ? value.split(',').map(function (value) { return value.trim(); })
            : value;
        headersList.push([name, resolvedValue]);
    });
    return headersList;
}
headersToList$1$1.headersToList = headersToList$2;

var __read$2$1 = (commonjsGlobal$1 && commonjsGlobal$1.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(headersToString$1$1, "__esModule", { value: true });
headersToString$1$1.headersToString = void 0;
var headersToList_1$1 = headersToList$1$1;
/**
 * Converts a given `Headers` instance to its string representation.
 */
function headersToString$2(headers) {
    var list = headersToList_1$1.headersToList(headers);
    var lines = list.map(function (_a) {
        var _b = __read$2$1(_a, 2), name = _b[0], value = _b[1];
        var values = [].concat(value);
        return name + ": " + values.join(', ');
    });
    return lines.join('\r\n');
}
headersToString$1$1.headersToString = headersToString$2;

var headersToObject$1$1 = {};

Object.defineProperty(headersToObject$1$1, "__esModule", { value: true });
headersToObject$1$1.headersToObject = void 0;
// List of headers that cannot have multiple values,
// while potentially having a comma in their single value.
var singleValueHeaders$1 = ['user-agent'];
/**
 * Converts a given `Headers` instance into a plain object.
 * Respects headers with multiple values.
 */
function headersToObject$2(headers) {
    var headersObject = {};
    headers.forEach(function (value, name) {
        var isMultiValue = !singleValueHeaders$1.includes(name.toLowerCase()) && value.includes(',');
        headersObject[name] = isMultiValue
            ? value.split(',').map(function (s) { return s.trim(); })
            : value;
    });
    return headersObject;
}
headersToObject$1$1.headersToObject = headersToObject$2;

var stringToHeaders$1$1 = {};

Object.defineProperty(stringToHeaders$1$1, "__esModule", { value: true });
stringToHeaders$1$1.stringToHeaders = void 0;
var Headers_1$2$1 = Headers$1;
/**
 * Converts a string representation of headers (i.e. from XMLHttpRequest)
 * to a new `Headers` instance.
 */
function stringToHeaders$2(str) {
    var lines = str.trim().split(/[\r\n]+/);
    return lines.reduce(function (headers, line) {
        if (line.trim() === '') {
            return headers;
        }
        var parts = line.split(': ');
        var name = parts.shift();
        var value = parts.join(': ');
        headers.append(name, value);
        return headers;
    }, new Headers_1$2$1.default());
}
stringToHeaders$1$1.stringToHeaders = stringToHeaders$2;

var listToHeaders$1$1 = {};

var __read$1$1 = (commonjsGlobal$1 && commonjsGlobal$1.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(listToHeaders$1$1, "__esModule", { value: true });
listToHeaders$1$1.listToHeaders = void 0;
var Headers_1$1$1 = Headers$1;
function listToHeaders$2(list) {
    var headers = new Headers_1$1$1.default();
    list.forEach(function (_a) {
        var _b = __read$1$1(_a, 2), name = _b[0], value = _b[1];
        var values = [].concat(value);
        values.forEach(function (value) {
            headers.append(name, value);
        });
    });
    return headers;
}
listToHeaders$1$1.listToHeaders = listToHeaders$2;

var objectToHeaders$1$1 = {};

var reduceHeadersObject$1$1 = {};

Object.defineProperty(reduceHeadersObject$1$1, "__esModule", { value: true });
reduceHeadersObject$1$1.reduceHeadersObject = void 0;
/**
 * Reduces given headers object instnace.
 */
function reduceHeadersObject$2(headers, reducer, initialState) {
    return Object.keys(headers).reduce(function (nextHeaders, name) {
        return reducer(nextHeaders, name, headers[name]);
    }, initialState);
}
reduceHeadersObject$1$1.reduceHeadersObject = reduceHeadersObject$2;

Object.defineProperty(objectToHeaders$1$1, "__esModule", { value: true });
objectToHeaders$1$1.objectToHeaders = void 0;
var Headers_1$3 = Headers$1;
var reduceHeadersObject_1$1$1 = reduceHeadersObject$1$1;
/**
 * Converts a given headers object to a new `Headers` instance.
 */
function objectToHeaders$2(headersObject) {
    return reduceHeadersObject_1$1$1.reduceHeadersObject(headersObject, function (headers, name, value) {
        var values = [].concat(value).filter(Boolean);
        values.forEach(function (value) {
            headers.append(name, value);
        });
        return headers;
    }, new Headers_1$3.default());
}
objectToHeaders$1$1.objectToHeaders = objectToHeaders$2;

var flattenHeadersList$1$1 = {};

var __read$6 = (commonjsGlobal$1 && commonjsGlobal$1.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(flattenHeadersList$1$1, "__esModule", { value: true });
flattenHeadersList$1$1.flattenHeadersList = void 0;
function flattenHeadersList$2(list) {
    return list.map(function (_a) {
        var _b = __read$6(_a, 2), name = _b[0], values = _b[1];
        return [name, [].concat(values).join('; ')];
    });
}
flattenHeadersList$1$1.flattenHeadersList = flattenHeadersList$2;

var flattenHeadersObject$1$1 = {};

Object.defineProperty(flattenHeadersObject$1$1, "__esModule", { value: true });
flattenHeadersObject$1$1.flattenHeadersObject = void 0;
var reduceHeadersObject_1$2 = reduceHeadersObject$1$1;
function flattenHeadersObject$2(headersObject) {
    return reduceHeadersObject_1$2.reduceHeadersObject(headersObject, function (headers, name, value) {
        headers[name] = [].concat(value).join('; ');
        return headers;
    }, {});
}
flattenHeadersObject$1$1.flattenHeadersObject = flattenHeadersObject$2;

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenHeadersObject = exports.flattenHeadersList = exports.reduceHeadersObject = exports.objectToHeaders = exports.listToHeaders = exports.stringToHeaders = exports.headersToObject = exports.headersToList = exports.headersToString = exports.Headers = void 0;
var Headers_1 = Headers$1;
Object.defineProperty(exports, "Headers", { enumerable: true, get: function () { return Headers_1.default; } });
var headersToString_1 = headersToString$1$1;
Object.defineProperty(exports, "headersToString", { enumerable: true, get: function () { return headersToString_1.headersToString; } });
var headersToList_1 = headersToList$1$1;
Object.defineProperty(exports, "headersToList", { enumerable: true, get: function () { return headersToList_1.headersToList; } });
var headersToObject_1 = headersToObject$1$1;
Object.defineProperty(exports, "headersToObject", { enumerable: true, get: function () { return headersToObject_1.headersToObject; } });
var stringToHeaders_1 = stringToHeaders$1$1;
Object.defineProperty(exports, "stringToHeaders", { enumerable: true, get: function () { return stringToHeaders_1.stringToHeaders; } });
var listToHeaders_1 = listToHeaders$1$1;
Object.defineProperty(exports, "listToHeaders", { enumerable: true, get: function () { return listToHeaders_1.listToHeaders; } });
var objectToHeaders_1 = objectToHeaders$1$1;
Object.defineProperty(exports, "objectToHeaders", { enumerable: true, get: function () { return objectToHeaders_1.objectToHeaders; } });
var reduceHeadersObject_1 = reduceHeadersObject$1$1;
Object.defineProperty(exports, "reduceHeadersObject", { enumerable: true, get: function () { return reduceHeadersObject_1.reduceHeadersObject; } });
var flattenHeadersList_1 = flattenHeadersList$1$1;
Object.defineProperty(exports, "flattenHeadersList", { enumerable: true, get: function () { return flattenHeadersList_1.flattenHeadersList; } });
var flattenHeadersObject_1 = flattenHeadersObject$1$1;
Object.defineProperty(exports, "flattenHeadersObject", { enumerable: true, get: function () { return flattenHeadersObject_1.flattenHeadersObject; } });
}(lib$1$1));

/**
 * Sets one or multiple response headers.
 * @example
 * ctx.set('Content-Type', 'text/plain')
 * ctx.set({
 *   'Accept': 'application/javascript',
 *   'Content-Type': "text/plain"
 * })
 * @see {@link https://mswjs.io/docs/api/context/set `ctx.set()`}
 */
function set(...args) {
    return (res) => {
        const [name, value] = args;
        if (typeof name === 'string') {
            res.headers.append(name, value);
        }
        else {
            const headers = lib$1$1.objectToHeaders(name);
            headers.forEach((value, name) => {
                res.headers.append(name, value);
            });
        }
        return res;
    };
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse$5;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse$5(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(';');
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var index = pair.indexOf('=');

    // skip things that don't look like key=value
    if (index < 0) {
      continue;
    }

    var key = pair.substring(0, index).trim();

    // only assign once
    if (undefined == obj[key]) {
      var val = pair.substring(index + 1, pair.length).trim();

      // quoted values
      if (val[0] === '"') {
        val = val.slice(1, -1);
      }

      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

/**
 * Sets a given cookie on the mocked response.
 * @example res(ctx.cookie('name', 'value'))
 */
const cookie = (name, value, options) => {
    return (res) => {
        const serializedCookie = serialize_1(name, value, options);
        res.headers.set('Set-Cookie', serializedCookie);
        if (typeof document !== 'undefined') {
            document.cookie = serializedCookie;
        }
        return res;
    };
};

/**
 * Parses a given value into a JSON.
 * Does not throw an exception on an invalid JSON string.
 */
function jsonParse(value) {
    try {
        return JSON.parse(value);
    }
    catch (error) {
        return undefined;
    }
}

/**
 * Sets the given value as the JSON body of the response.
 * Appends a `Content-Type: application/json` header on the
 * mocked response.
 * @example
 * res(ctx.json('Some string'))
 * res(ctx.json({ key: 'value' }))
 * res(ctx.json([1, '2', false, { ok: true }]))
 * @see {@link https://mswjs.io/docs/api/context/json `ctx.json()`}
 */
const json = (body) => {
    return (res) => {
        res.headers.set('Content-Type', 'application/json');
        res.body = JSON.stringify(body);
        return res;
    };
};

var lib$a = {exports: {}};

(function (module, exports) {
(function (global, factory) {
  factory(exports) ;
}(commonjsGlobal$1, (function (exports) {
  /**
   * Determines if the current process is a Node.js process.
   */
  function isNodeProcess() {
      if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
          return true;
      }
      return !!(typeof process !== 'undefined' &&
          process.versions &&
          process.versions.node);
  }

  exports.isNodeProcess = isNodeProcess;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
}(lib$a, lib$a.exports));

const SET_TIMEOUT_MAX_ALLOWED_INT = 2147483647;
const MIN_SERVER_RESPONSE_TIME = 100;
const MAX_SERVER_RESPONSE_TIME = 400;
const NODE_SERVER_RESPONSE_TIME = 5;
const getRandomServerResponseTime = () => {
    if (lib$a.exports.isNodeProcess()) {
        return NODE_SERVER_RESPONSE_TIME;
    }
    return Math.floor(Math.random() * (MAX_SERVER_RESPONSE_TIME - MIN_SERVER_RESPONSE_TIME) +
        MIN_SERVER_RESPONSE_TIME);
};
/**
 * Delays the response by the given duration (ms).
 * @example
 * res(ctx.delay(1200)) // delay response by 1200ms
 * res(ctx.delay()) // emulate realistic server response time
 * res(ctx.delay('infinite')) // delay response infinitely
 * @see {@link https://mswjs.io/docs/api/context/delay `ctx.delay()`}
 */
const delay = (durationOrMode) => {
    return (res) => {
        let delayTime;
        if (typeof durationOrMode === 'string') {
            switch (durationOrMode) {
                case 'infinite': {
                    // Using `Infinity` as a delay value executes the response timeout immediately.
                    // Instead, use the maximum allowed integer for `setTimeout`.
                    delayTime = SET_TIMEOUT_MAX_ALLOWED_INT;
                    break;
                }
                case 'real': {
                    delayTime = getRandomServerResponseTime();
                    break;
                }
                default: {
                    throw new Error(`Failed to delay a response: unknown delay mode "${durationOrMode}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`);
                }
            }
        }
        else if (typeof durationOrMode === 'undefined') {
            // Use random realistic server response time when no explicit delay duration was provided.
            delayTime = getRandomServerResponseTime();
        }
        else {
            // Guard against passing values like `Infinity` or `Number.MAX_VALUE`
            // as the response delay duration. They don't produce the result you may expect.
            if (durationOrMode > SET_TIMEOUT_MAX_ALLOWED_INT) {
                throw new Error(`Failed to delay a response: provided delay duration (${durationOrMode}) exceeds the maximum allowed duration for "setTimeout" (${SET_TIMEOUT_MAX_ALLOWED_INT}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);
            }
            delayTime = durationOrMode;
        }
        res.delay = delayTime;
        return res;
    };
};

const useFetch = lib$a.exports.isNodeProcess() ? require('node-fetch') : window.fetch;
const augmentRequestInit = (requestInit) => {
    const headers = new lib$1$1.Headers(requestInit.headers);
    headers.set('x-msw-bypass', 'true');
    return Object.assign(Object.assign({}, requestInit), { headers: headers.all() });
};
const createFetchRequestParameters = (input) => {
    const { body, method } = input;
    const requestParameters = Object.assign(Object.assign({}, input), { body: undefined });
    if (['GET', 'HEAD'].includes(method)) {
        return requestParameters;
    }
    if (typeof body === 'object' ||
        typeof body === 'number' ||
        typeof body === 'boolean') {
        requestParameters.body = JSON.stringify(body);
    }
    else {
        requestParameters.body = body;
    }
    return requestParameters;
};
/**
 * Performs a bypassed request inside a request handler.
 * @example
 * const originalResponse = await ctx.fetch(req)
 * @see {@link https://mswjs.io/docs/api/context/fetch `ctx.fetch()`}
 */
const fetch$1 = (input, requestInit = {}) => {
    if (typeof input === 'string') {
        return useFetch(input, augmentRequestInit(requestInit));
    }
    const requestParameters = createFetchRequestParameters(input);
    const derivedRequestInit = augmentRequestInit(requestParameters);
    return useFetch(input.url.href, derivedRequestInit);
};

/**
 * Sets a raw response body. Does not append any `Content-Type` headers.
 * @example
 * res(ctx.body('Successful response'))
 * res(ctx.body(JSON.stringify({ key: 'value' })))
 * @see {@link https://mswjs.io/docs/api/context/body `ctx.body()`}
 */
const body = (value) => {
    return (res) => {
        res.body = value;
        return res;
    };
};

/**
 * Sets a textual response body. Appends a `Content-Type: text/plain`
 * header on the mocked response.
 * @example res(ctx.text('Successful response'))
 * @see {@link https://mswjs.io/docs/api/context/text `ctx.text()`}
 */
const text = (body) => {
    return (res) => {
        res.headers.set('Content-Type', 'text/plain');
        res.body = body;
        return res;
    };
};

/**
 * Sets an XML response body. Appends a `Content-Type: text/xml` header
 * on the mocked response.
 * @example
 * res(ctx.xml('<node key="value">Content</node>'))
 * @see {@link https://mswjs.io/docs/api/context/xml `ctx.xml()`}
 */
const xml = (body) => {
    return (res) => {
        res.headers.set('Content-Type', 'text/xml');
        res.body = body;
        return res;
    };
};

/**
 * Determines if the given value is an object.
 */
function isObject(value) {
    return value != null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Deeply merges two given objects with the right one
 * having a priority during property assignment.
 */
function mergeRight(left, right) {
    return Object.entries(right).reduce((result, [key, rightValue]) => {
        const leftValue = result[key];
        if (Array.isArray(leftValue) && Array.isArray(rightValue)) {
            result[key] = leftValue.concat(rightValue);
            return result;
        }
        if (isObject(leftValue) && isObject(rightValue)) {
            result[key] = mergeRight(leftValue, rightValue);
            return result;
        }
        result[key] = rightValue;
        return result;
    }, Object.assign({}, left));
}

/**
 * Sets a given payload as a GraphQL response body.
 * @example
 * res(ctx.data({ user: { firstName: 'John' }}))
 * @see {@link https://mswjs.io/docs/api/context/data `ctx.data()`}
 */
const data = (payload) => {
    return (res) => {
        const prevBody = jsonParse(res.body) || {};
        const nextBody = mergeRight(prevBody, { data: payload });
        return json(nextBody)(res);
    };
};

/**
 * Sets the GraphQL extensions on a given response.
 * @example
 * res(ctx.extensions({ tracing: { version: 1 }}))
 * @see {@link https://mswjs.io/docs/api/context/extensions `ctx.extensions()`}
 */
const extensions = (payload) => {
    return (res) => {
        const prevBody = jsonParse(res.body) || {};
        const nextBody = mergeRight(prevBody, { extensions: payload });
        return json(nextBody)(res);
    };
};

/**
 * Sets a given list of GraphQL errors on the mocked response.
 * @example res(ctx.errors([{ message: 'Unauthorized' }]))
 * @see {@link https://mswjs.io/docs/api/context/errors}
 */
const errors = (errorsList) => {
    return (res) => {
        if (errorsList == null) {
            return res;
        }
        const prevBody = jsonParse(res.body) || {};
        const nextBody = mergeRight(prevBody, { errors: errorsList });
        return json(nextBody)(res);
    };
};

var index = /*#__PURE__*/Object.freeze({
	__proto__: null,
	status: status,
	set: set,
	cookie: cookie,
	body: body,
	data: data,
	extensions: extensions,
	delay: delay,
	errors: errors,
	fetch: fetch$1,
	json: json,
	text: text,
	xml: xml
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var getCleanUrl$1 = {};

Object.defineProperty(getCleanUrl$1, "__esModule", { value: true });
var getCleanUrl_2 = getCleanUrl$1.getCleanUrl = void 0;
/**
 * Removes query parameters and hashes from a given URL.
 */
function getCleanUrl(url, isAbsolute) {
    if (isAbsolute === void 0) { isAbsolute = true; }
    return [isAbsolute && url.origin, url.pathname].filter(Boolean).join('');
}
getCleanUrl_2 = getCleanUrl$1.getCleanUrl = getCleanUrl;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter$3(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var lib$9 = {};

var invariant$1$1 = {};

var format$1$1 = {};

Object.defineProperty(format$1$1, "__esModule", { value: true });
format$1$1.format = void 0;
var POSITIONALS_EXP$1 = /(%?)(%([sdjo]))/g;
function serializePositional$1(positional, flag) {
    switch (flag) {
        // Strings.
        case 's':
            return positional;
        // Digits.
        case 'd':
        case 'i':
            return Number(positional);
        // JSON.
        case 'j':
            return JSON.stringify(positional);
        // Objects.
        case 'o': {
            // Preserve stings to prevent extra quotes around them.
            if (typeof positional === 'string') {
                return positional;
            }
            var json = JSON.stringify(positional);
            // If the positional isn't serializable, return it as-is.
            if (json === '{}' || json === '[]' || /^\[object .+?\]$/.test(json)) {
                return positional;
            }
            return json;
        }
    }
}
function format$2(message) {
    var positionals = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positionals[_i - 1] = arguments[_i];
    }
    if (positionals.length === 0) {
        return message;
    }
    var positionalIndex = 0;
    var formattedMessage = message.replace(POSITIONALS_EXP$1, function (match, isEscaped, _, flag) {
        var positional = positionals[positionalIndex];
        var value = serializePositional$1(positional, flag);
        if (!isEscaped) {
            positionalIndex++;
            return value;
        }
        return match;
    });
    // Append unresolved positionals to string as-is.
    if (positionalIndex < positionals.length) {
        formattedMessage += " " + positionals.slice(positionalIndex).join(' ');
    }
    formattedMessage = formattedMessage.replace(/%{2,2}/g, '%');
    return formattedMessage;
}
format$1$1.format = format$2;

var __extends$4 = (commonjsGlobal$1 && commonjsGlobal$1.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray$1 = (commonjsGlobal$1 && commonjsGlobal$1.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(invariant$1$1, "__esModule", { value: true });
invariant$1$1.invariant = invariant$1$1.InvariantError = void 0;
var format_1$1 = format$1$1;
var STACK_FRAMES_TO_IGNORE$1 = 2;
var InvariantError$1 = /** @class */ (function (_super) {
    __extends$4(InvariantError, _super);
    function InvariantError(message) {
        var positionals = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            positionals[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, message) || this;
        _this.name = 'Invariant Violation';
        _this.message = format_1$1.format.apply(void 0, __spreadArray$1([message], positionals));
        if (_this.stack) {
            var nextStack = _this.stack.split('\n');
            nextStack.splice(1, STACK_FRAMES_TO_IGNORE$1);
            _this.stack = nextStack.join('\n');
        }
        return _this;
    }
    return InvariantError;
}(Error));
invariant$1$1.InvariantError = InvariantError$1;
function invariant$3(predicate, message) {
    var positionals = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        positionals[_i - 2] = arguments[_i];
    }
    if (!predicate) {
        throw new (InvariantError$1.bind.apply(InvariantError$1, __spreadArray$1([void 0, message], positionals)))();
    }
}
invariant$1$1.invariant = invariant$3;

(function (exports) {
var __createBinding = (commonjsGlobal$1 && commonjsGlobal$1.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal$1 && commonjsGlobal$1.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(invariant$1$1, exports);
__exportStar(format$1$1, exports);
}(lib$9));

const LIBRARY_PREFIX = '[MSW]';
/**
 * Formats a given message by appending the library's prefix string.
 */
function formatMessage(message, ...positionals) {
    const interpolatedMessage = lib$9.format(message, ...positionals);
    return `${LIBRARY_PREFIX} ${interpolatedMessage}`;
}
/**
 * Prints a library-specific warning.
 */
function warn(message, ...positionals) {
    console.warn(formatMessage(message, ...positionals));
}
/**
 * Prints a library-specific error.
 */
function error(message, ...positionals) {
    console.error(formatMessage(message, ...positionals));
}
const devUtils = {
    formatMessage,
    warn,
    error,
};

class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

function parseContentHeaders(headersString) {
    var _a, _b;
    const headers = lib$1$1.stringToHeaders(headersString);
    const contentType = headers.get('content-type') || 'text/plain';
    const disposition = headers.get('content-disposition');
    if (!disposition) {
        throw new Error('"Content-Disposition" header is required.');
    }
    const directives = disposition.split(';').reduce((acc, chunk) => {
        const [name, ...rest] = chunk.trim().split('=');
        acc[name] = rest.join('=');
        return acc;
    }, {});
    const name = (_a = directives.name) === null || _a === void 0 ? void 0 : _a.slice(1, -1);
    const filename = (_b = directives.filename) === null || _b === void 0 ? void 0 : _b.slice(1, -1);
    return {
        name,
        filename,
        contentType,
    };
}
/**
 * Parses a given string as a multipart/form-data.
 * Does not throw an exception on an invalid multipart string.
 */
function parseMultipartData(data, headers) {
    const contentType = headers === null || headers === void 0 ? void 0 : headers.get('content-type');
    if (!contentType) {
        return undefined;
    }
    const [, ...directives] = contentType.split(/; */);
    const boundary = directives
        .filter((d) => d.startsWith('boundary='))
        .map((s) => s.replace(/^boundary=/, ''))[0];
    if (!boundary) {
        return undefined;
    }
    const boundaryRegExp = new RegExp(`--+${boundary}`);
    const fields = data
        .split(boundaryRegExp)
        .filter((chunk) => chunk.startsWith('\r\n') && chunk.endsWith('\r\n'))
        .map((chunk) => chunk.trimStart().replace(/\r\n$/, ''));
    if (!fields.length) {
        return undefined;
    }
    const parsedBody = {};
    try {
        for (const field of fields) {
            const [contentHeaders, ...rest] = field.split('\r\n\r\n');
            const contentBody = rest.join('\r\n\r\n');
            const { contentType, filename, name } = parseContentHeaders(contentHeaders);
            const value = filename === undefined
                ? contentBody
                : new File([contentBody], filename, { type: contentType });
            const parsedValue = parsedBody[name];
            if (parsedValue === undefined) {
                parsedBody[name] = value;
            }
            else if (Array.isArray(parsedValue)) {
                parsedBody[name] = [...parsedValue, value];
            }
            else {
                parsedBody[name] = [parsedValue, value];
            }
        }
        return parsedBody;
    }
    catch (error) {
        return undefined;
    }
}

/**
 * Parses a given request/response body based on the "Content-Type" header.
 */
function parseBody(body, headers) {
    var _a;
    // Return whatever falsey body value is given.
    if (!body) {
        return body;
    }
    const contentType = ((_a = headers === null || headers === void 0 ? void 0 : headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
    // If the body has a Multipart Content-Type
    // parse it into an object.
    const hasMultipartContent = contentType.startsWith('multipart/form-data');
    if (hasMultipartContent && typeof body !== 'object') {
        return parseMultipartData(body.toString(), headers) || body;
    }
    // If the intercepted request's body has a JSON Content-Type
    // parse it into an object.
    const hasJsonContent = contentType.includes('json');
    if (hasJsonContent && typeof body !== 'object') {
        return jsonParse(body.toString()) || body;
    }
    // Otherwise leave as-is.
    return body;
}

/**
 * Returns a relative URL if the given request URL is relative to the current origin.
 * Otherwise returns an absolute URL.
 */
const getPublicUrlFromRequest = (request) => {
    return request.referrer.startsWith(request.url.origin)
        ? request.url.pathname
        : new URL(request.url.pathname, `${request.url.protocol}//${request.url.host}`).href;
};

var StatusCodeColor;
(function (StatusCodeColor) {
    StatusCodeColor["Success"] = "#69AB32";
    StatusCodeColor["Warning"] = "#F0BB4B";
    StatusCodeColor["Danger"] = "#E95F5D";
})(StatusCodeColor || (StatusCodeColor = {}));
/**
 * Returns a HEX color for a given response status code number.
 */
function getStatusCodeColor(status) {
    if (status < 300) {
        return StatusCodeColor.Success;
    }
    if (status < 400) {
        return StatusCodeColor.Warning;
    }
    return StatusCodeColor.Danger;
}

/**
 * Returns a timestamp string in a "HH:MM:SS" format.
 */
function getTimestamp() {
    const now = new Date();
    return [now.getHours(), now.getMinutes(), now.getSeconds()]
        .map(String)
        .map((chunk) => chunk.slice(0, 2))
        .map((chunk) => chunk.padStart(2, '0'))
        .join(':');
}

/**
 * Formats a mocked request for introspection in browser's console.
 */
function prepareRequest(request) {
    return Object.assign(Object.assign({}, request), { headers: request.headers.all() });
}

/**
 * Formats a mocked response for introspection in the browser's console.
 */
function prepareResponse(res) {
    const responseHeaders = lib$1$1.objectToHeaders(res.headers);
    return Object.assign(Object.assign({}, res), { 
        // Parse a response JSON body for preview in the logs
        body: parseBody(res.body, responseHeaders) });
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse$4(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse$4(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}

const REDUNDANT_CHARACTERS_EXP = /[\?|#].*$/g;
function getSearchParams(path) {
    return new URL(`/${path}`, 'http://localhost').searchParams;
}
/**
 * Removes query parameters and hashes from a given URL string.
 */
function cleanUrl(path) {
    return path.replace(REDUNDANT_CHARACTERS_EXP, '');
}

/**
 * Determines if the given URL string is an absolute URL.
 */
function isAbsoluteUrl(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}

/**
 * Returns an absolute URL based on the given path.
 */
function getAbsoluteUrl(path, baseUrl) {
    // already absolute URL
    if (isAbsoluteUrl(path)) {
        return path;
    }
    // Ignore path with pattern start with *
    if (path.startsWith('*')) {
        return path;
    }
    // Resolve a relative request URL against a given custom "baseUrl"
    // or the document baseURI (in the case of browser/browser-like environments).
    const origin = baseUrl || (typeof document !== 'undefined' && document.baseURI);
    return origin
        ? // Encode and decode the path to preserve escaped characters.
            decodeURI(new URL(encodeURI(path), origin).href)
        : path;
}

/**
 * Normalizes a given request handler path:
 * - Preserves RegExp.
 * - Removes query parameters and hashes.
 * - Rebases relative URLs against the "baseUrl" or the current location.
 * - Preserves relative URLs in Node.js, unless specified otherwise.
 */
function normalizePath(path, baseUrl) {
    // RegExp paths do not need normalization.
    if (path instanceof RegExp) {
        return path;
    }
    const maybeAbsoluteUrl = getAbsoluteUrl(path, baseUrl);
    return cleanUrl(maybeAbsoluteUrl);
}

/**
 * Coerce a path supported by MSW into a path
 * supported by "path-to-regexp".
 */
function coercePath(path) {
    return (path
        /**
         * Replace wildcards ("*") with unnamed capturing groups
         * because "path-to-regexp" doesn't support wildcards.
         * Ignore path parameter' modifiers (i.e. ":name*").
         */
        .replace(/([:a-zA-Z_-]*)(\*{1,2})+/g, (_, parameterName, wildcard) => {
        const expression = '(.*)';
        if (!parameterName) {
            return expression;
        }
        return parameterName.startsWith(':')
            ? `${parameterName}${wildcard}`
            : `${parameterName}${expression}`;
    })
        /**
         * Escape the port so that "path-to-regexp" can match
         * absolute URLs including port numbers.
         */
        .replace(/([^\/])(:)(?=\d+)/, '$1\\$2')
        /**
         * Escape the protocol so that "path-to-regexp" could match
         * absolute URL.
         * @see https://github.com/pillarjs/path-to-regexp/issues/259
         */
        .replace(/^([^\/]+)(:)(?=\/\/)/, '$1\\$2'));
}
/**
 * Returns the result of matching given request URL against a mask.
 */
function matchRequestUrl(url, path, baseUrl) {
    const normalizedPath = normalizePath(path, baseUrl);
    const cleanPath = typeof normalizedPath === 'string'
        ? coercePath(normalizedPath)
        : normalizedPath;
    const cleanUrl = getCleanUrl_2(url);
    const result = match(cleanPath, { decode: decodeURIComponent })(cleanUrl);
    const params = (result && result.params) || {};
    return {
        matches: result !== false,
        params,
    };
}

/**
 * Composes a given list of functions into a new function that
 * executes from right to left.
 */
function compose(...fns) {
    return (...args) => {
        return fns.reduceRight((leftFn, rightFn) => {
            return leftFn instanceof Promise
                ? Promise.resolve(leftFn).then(rightFn)
                : rightFn(leftFn);
        }, args[0]);
    };
}

const defaultResponse = {
    status: 200,
    statusText: 'OK',
    body: null,
    delay: 0,
    once: false,
};
const defaultResponseTransformers = [];
function createResponseComposition(responseOverrides, defaultTransformers = defaultResponseTransformers) {
    return (...transformers) => __awaiter$3(this, void 0, void 0, function* () {
        const initialResponse = Object.assign({}, defaultResponse, {
            headers: new lib$1$1.Headers({
                'x-powered-by': 'msw',
            }),
        }, responseOverrides);
        const resolvedTransformers = [
            ...defaultTransformers,
            ...transformers,
        ].filter(Boolean);
        const resolvedResponse = resolvedTransformers.length > 0
            ? compose(...resolvedTransformers)(initialResponse)
            : initialResponse;
        return resolvedResponse;
    });
}
const response = Object.assign(createResponseComposition(), {
    once: createResponseComposition({ once: true }),
    networkError(message) {
        throw new NetworkError(message);
    },
});

const BUILD_FRAME = /(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;
/**
 * Return the stack trace frame of a function's invocation.
 */
function getCallFrame(error) {
    // In <IE11, new Error may return an undefined stack
    const stack = error.stack;
    if (!stack) {
        return;
    }
    const frames = stack.split('\n').slice(1);
    // Get the first frame that doesn't reference the library's internal trace.
    // Assume that frame is the invocation frame.
    const declarationFrame = frames.find((frame) => {
        return !BUILD_FRAME.test(frame);
    });
    if (!declarationFrame) {
        return;
    }
    // Extract file reference from the stack frame.
    const declarationPath = declarationFrame
        .replace(/\s*at [^()]*\(([^)]+)\)/, '$1')
        .replace(/^@/, '');
    return declarationPath;
}

/**
 * Determines if the given function is an iterator.
 */
function isIterable(fn) {
    if (!fn) {
        return false;
    }
    return typeof fn[Symbol.iterator] == 'function';
}

const defaultContext = {
    status,
    set,
    delay,
    fetch: fetch$1,
};
class RequestHandler {
    constructor(options) {
        this.shouldSkip = false;
        this.ctx = options.ctx || defaultContext;
        this.resolver = options.resolver;
        const callFrame = getCallFrame(new Error());
        this.info = Object.assign(Object.assign({}, options.info), { callFrame });
    }
    /**
     * Parse the captured request to extract additional information from it.
     * Parsed result is then exposed to other methods of this request handler.
     */
    parse(_request, _resolutionContext) {
        return null;
    }
    /**
     * Test if this handler matches the given request.
     */
    test(request, resolutionContext) {
        return this.predicate(request, this.parse(request, resolutionContext), resolutionContext);
    }
    /**
     * Derive the publicly exposed request (`req`) instance of the response resolver
     * from the captured request and its parsed result.
     */
    getPublicRequest(request, _parsedResult) {
        return request;
    }
    markAsSkipped(shouldSkip = true) {
        this.shouldSkip = shouldSkip;
    }
    /**
     * Execute this request handler and produce a mocked response
     * using the given resolver function.
     */
    run(request, resolutionContext) {
        return __awaiter$3(this, void 0, void 0, function* () {
            if (this.shouldSkip) {
                return null;
            }
            const parsedResult = this.parse(request, resolutionContext);
            const shouldIntercept = this.predicate(request, parsedResult, resolutionContext);
            if (!shouldIntercept) {
                return null;
            }
            const publicRequest = this.getPublicRequest(request, parsedResult);
            // Create a response extraction wrapper around the resolver
            // since it can be both an async function and a generator.
            const executeResolver = this.wrapResolver(this.resolver);
            const mockedResponse = yield executeResolver(publicRequest, response, this.ctx);
            return this.createExecutionResult(parsedResult, publicRequest, mockedResponse);
        });
    }
    wrapResolver(resolver) {
        return (req, res, ctx) => __awaiter$3(this, void 0, void 0, function* () {
            const result = this.resolverGenerator || (yield resolver(req, res, ctx));
            if (isIterable(result)) {
                const { value, done } = result[Symbol.iterator]().next();
                const nextResponse = yield value;
                // If the generator is done and there is no next value,
                // return the previous generator's value.
                if (!nextResponse && done) {
                    return this.resolverGeneratorResult;
                }
                if (!this.resolverGenerator) {
                    this.resolverGenerator = result;
                }
                this.resolverGeneratorResult = nextResponse;
                return nextResponse;
            }
            return result;
        });
    }
    createExecutionResult(parsedResult, request, response) {
        return {
            handler: this,
            parsedResult: parsedResult || null,
            request,
            response: response || null,
        };
    }
}

var lib$8 = {};

var CookieStore = {};

var setCookie = {exports: {}};

var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false,
};

function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}

function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValue = parts.shift().split("=");
  var name = nameValue.shift();
  var value = nameValue.join("="); // everything after the first =, joined by a "=" if there was more than one part

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  try {
    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" +
        value +
        "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }

  var cookie = {
    name: name, // grab everything before the first =
    value: value,
  };

  parts.forEach(function (part) {
    var sides = part.split("=");
    var key = sides.shift().trimLeft().toLowerCase();
    var value = sides.join("=");
    if (key === "expires") {
      cookie.expires = new Date(value);
    } else if (key === "max-age") {
      cookie.maxAge = parseInt(value, 10);
    } else if (key === "secure") {
      cookie.secure = true;
    } else if (key === "httponly") {
      cookie.httpOnly = true;
    } else if (key === "samesite") {
      cookie.sameSite = value;
    } else {
      cookie[key] = value;
    }
  });

  return cookie;
}

function parse$3(input, options) {
  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }

  if (input.headers && input.headers["set-cookie"]) {
    // fast-path for node.js (which automatically normalizes header names to lower-case
    input = input.headers["set-cookie"];
  } else if (input.headers) {
    // slow-path for other environments - see #25
    var sch =
      input.headers[
        Object.keys(input.headers).find(function (key) {
          return key.toLowerCase() === "set-cookie";
        })
      ];
    // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn(
        "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
      );
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!options.map) {
    return input.filter(isNonEmptyString).map(function (str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
      var cookie = parseString(str, options);
      cookies[cookie.name] = cookie;
      return cookies;
    }, cookies);
  }
}

/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.

  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.

  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }

  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;

  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }

  function notSpecialChar() {
    ch = cookiesString.charAt(pos);

    return ch !== "=" && ch !== ";" && ch !== ",";
  }

  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;

    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        // ',' is a cookie separator if we have later first '=', not ';' or ','
        lastComma = pos;
        pos += 1;

        skipWhitespace();
        nextStart = pos;

        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }

        // currently special character
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          // we found cookies separator
          cookiesSeparatorFound = true;
          // pos is inside the next cookie, so back up and return it.
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          // in param ',' or param separator ';',
          // we continue from that comma
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }

    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }

  return cookiesStrings;
}

setCookie.exports = parse$3;
setCookie.exports.parse = parse$3;
setCookie.exports.parseString = parseString;
setCookie.exports.splitCookiesString = splitCookiesString;

(function (exports) {
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.PERSISTENCY_KEY = void 0;
const set_cookie_parser_1 = setCookie.exports;
exports.PERSISTENCY_KEY = 'MSW_COOKIE_STORE';
function supportsLocalStorage() {
    try {
        if (localStorage == null) {
            return false;
        }
        localStorage.setItem('test', 'test');
        localStorage.getItem('test');
        return true;
    }
    catch (error) {
        return false;
    }
}
class CookieStore {
    constructor() {
        this.store = new Map();
    }
    /**
     * Sets the given request cookies into the store.
     * Respects the `request.credentials` policy.
     */
    add(request, response) {
        if (request.credentials === 'omit') {
            return;
        }
        const requestUrl = new URL(request.url);
        const responseCookies = response.headers.get('set-cookie');
        if (!responseCookies) {
            return;
        }
        const now = Date.now();
        const parsedResponseCookies = set_cookie_parser_1.parse(responseCookies).map((_a) => {
            var { maxAge } = _a, cookie = __rest(_a, ["maxAge"]);
            return (Object.assign(Object.assign({}, cookie), { expires: maxAge === undefined ? cookie.expires : new Date(now + maxAge * 1000), maxAge }));
        });
        const prevCookies = this.store.get(requestUrl.origin) || new Map();
        parsedResponseCookies.forEach((cookie) => {
            this.store.set(requestUrl.origin, prevCookies.set(cookie.name, cookie));
        });
    }
    /**
     * Returns cookies relevant to the given request
     * and its `request.credentials` policy.
     */
    get(request) {
        this.deleteExpiredCookies();
        const requestUrl = new URL(request.url);
        const originCookies = this.store.get(requestUrl.origin) || new Map();
        switch (request.credentials) {
            case 'include': {
                const documentCookies = set_cookie_parser_1.parse(document.cookie);
                documentCookies.forEach((cookie) => {
                    originCookies.set(cookie.name, cookie);
                });
                return originCookies;
            }
            case 'same-origin': {
                return originCookies;
            }
            default:
                return new Map();
        }
    }
    /**
     * Returns a collection of all stored cookies.
     */
    getAll() {
        this.deleteExpiredCookies();
        return this.store;
    }
    /**
     * Deletes all cookies associated with the given request.
     */
    deleteAll(request) {
        const requestUrl = new URL(request.url);
        this.store.delete(requestUrl.origin);
    }
    /**
     * Clears the entire cookie store.
     */
    clear() {
        this.store.clear();
    }
    /**
     * Hydrates the virtual cookie store from the `localStorage` if defined.
     */
    hydrate() {
        if (!supportsLocalStorage()) {
            return;
        }
        const persistedCookies = localStorage.getItem(exports.PERSISTENCY_KEY);
        if (!persistedCookies) {
            return;
        }
        try {
            const parsedCookies = JSON.parse(persistedCookies);
            parsedCookies.forEach(([origin, cookies]) => {
                this.store.set(origin, new Map(cookies.map((_a) => {
                    var [token, _b] = _a, { expires } = _b, cookie = __rest(_b, ["expires"]);
                    return [
                        token,
                        expires === undefined
                            ? cookie
                            : Object.assign(Object.assign({}, cookie), { expires: new Date(expires) }),
                    ];
                })));
            });
        }
        catch (error) {
            console.warn(`
[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${exports.PERSISTENCY_KEY}").

Stored value:
${localStorage.getItem(exports.PERSISTENCY_KEY)}

Thrown exception:
${error}

Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`);
            localStorage.removeItem(exports.PERSISTENCY_KEY);
        }
    }
    /**
     * Persists the current virtual cookies into the `localStorage` if defined,
     * so they are available on the next page load.
     */
    persist() {
        if (!supportsLocalStorage()) {
            return;
        }
        const serializedCookies = Array.from(this.store.entries()).map(([origin, cookies]) => {
            return [origin, Array.from(cookies.entries())];
        });
        localStorage.setItem(exports.PERSISTENCY_KEY, JSON.stringify(serializedCookies));
    }
    deleteExpiredCookies() {
        const now = Date.now();
        this.store.forEach((originCookies, origin) => {
            originCookies.forEach(({ expires, name }) => {
                if (expires !== undefined && expires.getTime() <= now) {
                    originCookies.delete(name);
                }
            });
            if (originCookies.size === 0) {
                this.store.delete(origin);
            }
        });
    }
}
exports.store = new CookieStore();
}(CookieStore));

(function (exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(CookieStore, exports);
}(lib$8));

/**
 * Performs a case-insensitive comparison of two given strings.
 */
function isStringEqual(actual, expected) {
    return actual.toLowerCase() === expected.toLowerCase();
}

var RESTMethods;
(function (RESTMethods) {
    RESTMethods["HEAD"] = "HEAD";
    RESTMethods["GET"] = "GET";
    RESTMethods["POST"] = "POST";
    RESTMethods["PUT"] = "PUT";
    RESTMethods["PATCH"] = "PATCH";
    RESTMethods["OPTIONS"] = "OPTIONS";
    RESTMethods["DELETE"] = "DELETE";
})(RESTMethods || (RESTMethods = {}));
const restContext = {
    set,
    status,
    cookie,
    body,
    text,
    json,
    xml,
    delay,
    fetch: fetch$1,
};
/**
 * Request handler for REST API requests.
 * Provides request matching based on method and URL.
 */
class RestHandler extends RequestHandler {
    constructor(method, path, resolver) {
        super({
            info: {
                header: `${method} ${path}`,
                path,
                method,
            },
            ctx: restContext,
            resolver,
        });
        this.checkRedundantQueryParameters();
    }
    checkRedundantQueryParameters() {
        const { method, path } = this.info;
        if (path instanceof RegExp) {
            return;
        }
        const url = cleanUrl(path);
        // Bypass request handler URLs that have no redundant characters.
        if (url === path) {
            return;
        }
        const searchParams = getSearchParams(path);
        searchParams.forEach((_, paramName) => {
        });
        devUtils.warn(`Found a redundant usage of query parameters in the request handler URL for "${method} ${path}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`);
    }
    parse(request, resolutionContext) {
        return matchRequestUrl(request.url, this.info.path, resolutionContext === null || resolutionContext === void 0 ? void 0 : resolutionContext.baseUrl);
    }
    getPublicRequest(request, parsedResult) {
        return Object.assign(Object.assign({}, request), { params: parsedResult.params || {} });
    }
    predicate(request, parsedResult) {
        const matchesMethod = this.info.method instanceof RegExp
            ? this.info.method.test(request.method)
            : isStringEqual(this.info.method, request.method);
        return matchesMethod && parsedResult.matches;
    }
    log(request, response) {
        const publicUrl = getPublicUrlFromRequest(request);
        const loggedRequest = prepareRequest(request);
        const loggedResponse = prepareResponse(response);
        const statusColor = getStatusCodeColor(response.status);
        console.groupCollapsed(devUtils.formatMessage('%s %s %s (%c%s%c)'), getTimestamp(), request.method, publicUrl, `color:${statusColor}`, `${response.status} ${response.statusText}`, 'color:inherit');
        console.log('Request', loggedRequest);
        console.log('Handler:', {
            mask: this.info.path,
            resolver: this.resolver,
        });
        console.log('Response', loggedResponse);
        console.groupEnd();
    }
}

function createRestHandler(method) {
    return (path, resolver) => {
        return new RestHandler(method, path, resolver);
    };
}
const rest = {
    all: createRestHandler(/.+/),
    head: createRestHandler(RESTMethods.HEAD),
    get: createRestHandler(RESTMethods.GET),
    post: createRestHandler(RESTMethods.POST),
    put: createRestHandler(RESTMethods.PUT),
    delete: createRestHandler(RESTMethods.DELETE),
    patch: createRestHandler(RESTMethods.PATCH),
    options: createRestHandler(RESTMethods.OPTIONS),
};

function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return typeof value == 'object' && value !== null;
}

function invariant$2(condition, message) {
  const booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(
      message != null ? message : 'Unexpected invariant triggered.',
    );
  }
}

const LineRegExp = /\r\n|[\n\r]/g;
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;

  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === 'number' || invariant$2(false);

    if (match.index >= position) {
      break;
    }

    lastLineStart = match.index + match[0].length;
    line += 1;
  }

  return {
    line,
    column: position + 1 - lastLineStart,
  };
}

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start),
  );
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = ''.padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];

    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return (
      locationStr +
      printPrefixedLines([
        [`${lineNum} |`, subLines[0]],
        ...subLines.slice(1, subLineIndex + 1).map((subLine) => ['|', subLine]),
        ['|', '^'.padStart(subLineColumnNum)],
        ['|', subLines[subLineIndex + 1]],
      ])
    );
  }

  return (
    locationStr +
    printPrefixedLines([
      // Lines specified like this: ["prefix", "string"],
      [`${lineNum - 1} |`, lines[lineIndex - 1]],
      [`${lineNum} |`, locationLine],
      ['|', '^'.padStart(columnNum)],
      [`${lineNum + 1} |`, lines[lineIndex + 1]],
    ])
  );
}

function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== undefined);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines
    .map(([prefix, line]) => prefix.padStart(padLen) + (line ? ' ' + line : ''))
    .join('\n');
}

function toNormalizedArgs(args) {
  const firstArg = args[0];

  if (firstArg == null || 'kind' in firstArg || 'length' in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5],
    };
  }

  return firstArg;
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

class GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */

  /**
   * @deprecated Please use the `GraphQLErrorArgs` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;

    const { nodes, source, positions, path, originalError, extensions } =
      toNormalizedArgs(rawArgs);
    super(message);
    this.name = 'GraphQLError';
    this.path = path !== null && path !== void 0 ? path : undefined;
    this.originalError =
      originalError !== null && originalError !== void 0
        ? originalError
        : undefined; // Compute list of blame nodes.

    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : undefined,
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0
        ? void 0
        : _this$nodes.map((node) => node.loc).filter((loc) => loc != null),
    ); // Compute locations in the source for the given nodes/positions.

    this.source =
      source !== null && source !== void 0
        ? source
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : (_nodeLocations$ = nodeLocations[0]) === null ||
          _nodeLocations$ === void 0
        ? void 0
        : _nodeLocations$.source;
    this.positions =
      positions !== null && positions !== void 0
        ? positions
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => loc.start);
    this.locations =
      positions && source
        ? positions.map((pos) => getLocation(source, pos))
        : nodeLocations === null || nodeLocations === void 0
        ? void 0
        : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(
      originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions,
    )
      ? originalError === null || originalError === void 0
        ? void 0
        : originalError.extensions
      : undefined;
    this.extensions =
      (_ref =
        extensions !== null && extensions !== void 0
          ? extensions
          : originalExtensions) !== null && _ref !== void 0
        ? _ref
        : Object.create(null); // Only properties prescribed by the spec should be enumerable.
    // Keep the rest as non-enumerable.

    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true,
      },
      name: {
        enumerable: false,
      },
      nodes: {
        enumerable: false,
      },
      source: {
        enumerable: false,
      },
      positions: {
        enumerable: false,
      },
      originalError: {
        enumerable: false,
      },
    }); // Include (non-enumerable) stack trace.

    /* c8 ignore start */
    // FIXME: https://github.com/graphql/graphql-js/issues/2317

    if (
      originalError !== null &&
      originalError !== void 0 &&
      originalError.stack
    ) {
      Object.defineProperty(this, 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true,
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true,
      });
    }
    /* c8 ignore stop */
  }

  get [Symbol.toStringTag]() {
    return 'GraphQLError';
  }

  toString() {
    let output = this.message;

    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += '\n\n' + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += '\n\n' + printSourceLocation(this.source, location);
      }
    }

    return output;
  }

  toJSON() {
    const formattedError = {
      message: this.message,
    };

    if (this.locations != null) {
      formattedError.locations = this.locations;
    }

    if (this.path != null) {
      formattedError.path = this.path;
    }

    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }

    return formattedError;
  }
}

function undefinedIfEmpty(array) {
  return array === undefined || array.length === 0 ? undefined : array;
}

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, undefined, source, [
    position,
  ]);
}

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
class Location {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  get [Symbol.toStringTag]() {
    return 'Location';
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
    };
  }
}
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

class Token {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

    this.value = value;
    this.prev = null;
    this.next = null;
  }

  get [Symbol.toStringTag]() {
    return 'Token';
  }

  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column,
    };
  }
}
/** Name */

let OperationTypeNode;

(function (OperationTypeNode) {
  OperationTypeNode['QUERY'] = 'query';
  OperationTypeNode['MUTATION'] = 'mutation';
  OperationTypeNode['SUBSCRIPTION'] = 'subscription';
})(OperationTypeNode || (OperationTypeNode = {}));

/**
 * The set of allowed directive location values.
 */
let DirectiveLocation;
/**
 * The enum type representing the directive location values.
 *
 * @deprecated Please use `DirectiveLocation`. Will be remove in v17.
 */

(function (DirectiveLocation) {
  DirectiveLocation['QUERY'] = 'QUERY';
  DirectiveLocation['MUTATION'] = 'MUTATION';
  DirectiveLocation['SUBSCRIPTION'] = 'SUBSCRIPTION';
  DirectiveLocation['FIELD'] = 'FIELD';
  DirectiveLocation['FRAGMENT_DEFINITION'] = 'FRAGMENT_DEFINITION';
  DirectiveLocation['FRAGMENT_SPREAD'] = 'FRAGMENT_SPREAD';
  DirectiveLocation['INLINE_FRAGMENT'] = 'INLINE_FRAGMENT';
  DirectiveLocation['VARIABLE_DEFINITION'] = 'VARIABLE_DEFINITION';
  DirectiveLocation['SCHEMA'] = 'SCHEMA';
  DirectiveLocation['SCALAR'] = 'SCALAR';
  DirectiveLocation['OBJECT'] = 'OBJECT';
  DirectiveLocation['FIELD_DEFINITION'] = 'FIELD_DEFINITION';
  DirectiveLocation['ARGUMENT_DEFINITION'] = 'ARGUMENT_DEFINITION';
  DirectiveLocation['INTERFACE'] = 'INTERFACE';
  DirectiveLocation['UNION'] = 'UNION';
  DirectiveLocation['ENUM'] = 'ENUM';
  DirectiveLocation['ENUM_VALUE'] = 'ENUM_VALUE';
  DirectiveLocation['INPUT_OBJECT'] = 'INPUT_OBJECT';
  DirectiveLocation['INPUT_FIELD_DEFINITION'] = 'INPUT_FIELD_DEFINITION';
})(DirectiveLocation || (DirectiveLocation = {}));

/**
 * The set of allowed kind values for AST nodes.
 */
let Kind;
/**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */

(function (Kind) {
  Kind['NAME'] = 'Name';
  Kind['DOCUMENT'] = 'Document';
  Kind['OPERATION_DEFINITION'] = 'OperationDefinition';
  Kind['VARIABLE_DEFINITION'] = 'VariableDefinition';
  Kind['SELECTION_SET'] = 'SelectionSet';
  Kind['FIELD'] = 'Field';
  Kind['ARGUMENT'] = 'Argument';
  Kind['FRAGMENT_SPREAD'] = 'FragmentSpread';
  Kind['INLINE_FRAGMENT'] = 'InlineFragment';
  Kind['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
  Kind['VARIABLE'] = 'Variable';
  Kind['INT'] = 'IntValue';
  Kind['FLOAT'] = 'FloatValue';
  Kind['STRING'] = 'StringValue';
  Kind['BOOLEAN'] = 'BooleanValue';
  Kind['NULL'] = 'NullValue';
  Kind['ENUM'] = 'EnumValue';
  Kind['LIST'] = 'ListValue';
  Kind['OBJECT'] = 'ObjectValue';
  Kind['OBJECT_FIELD'] = 'ObjectField';
  Kind['DIRECTIVE'] = 'Directive';
  Kind['NAMED_TYPE'] = 'NamedType';
  Kind['LIST_TYPE'] = 'ListType';
  Kind['NON_NULL_TYPE'] = 'NonNullType';
  Kind['SCHEMA_DEFINITION'] = 'SchemaDefinition';
  Kind['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
  Kind['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
  Kind['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
  Kind['FIELD_DEFINITION'] = 'FieldDefinition';
  Kind['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
  Kind['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
  Kind['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
  Kind['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
  Kind['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
  Kind['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
  Kind['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
  Kind['SCHEMA_EXTENSION'] = 'SchemaExtension';
  Kind['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
  Kind['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
  Kind['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
  Kind['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
  Kind['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
  Kind['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
})(Kind || (Kind = {}));

/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */
function isWhiteSpace(code) {
  return code === 0x0009 || code === 0x0020;
}
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */

function isDigit(code) {
  return code >= 0x0030 && code <= 0x0039;
}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */

function isLetter(code) {
  return (
    (code >= 0x0061 && code <= 0x007a) || // A-Z
    (code >= 0x0041 && code <= 0x005a) // a-z
  );
}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */

function isNameStart(code) {
  return isLetter(code) || code === 0x005f;
}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */

function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 0x005f;
}

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */

function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;

  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;

  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;

    const line = lines[i];
    const indent = leadingWhitespace(line);

    if (indent === line.length) {
      continue; // skip empty lines
    }

    firstNonEmptyLine =
      (_firstNonEmptyLine = firstNonEmptyLine) !== null &&
      _firstNonEmptyLine !== void 0
        ? _firstNonEmptyLine
        : i;
    lastNonEmptyLine = i;

    if (i !== 0 && indent < commonIndent) {
      commonIndent = indent;
    }
  }

  return lines // Remove common indentation from all lines but first.
    .map((line, i) => (i === 0 ? line : line.slice(commonIndent))) // Remove leading and trailing blank lines.
    .slice(
      (_firstNonEmptyLine2 = firstNonEmptyLine) !== null &&
        _firstNonEmptyLine2 !== void 0
        ? _firstNonEmptyLine2
        : 0,
      lastNonEmptyLine + 1,
    );
}

function leadingWhitespace(str) {
  let i = 0;

  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }

  return i;
}

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
let TokenKind;
/**
 * The enum type representing the token kinds values.
 *
 * @deprecated Please use `TokenKind`. Will be remove in v17.
 */

(function (TokenKind) {
  TokenKind['SOF'] = '<SOF>';
  TokenKind['EOF'] = '<EOF>';
  TokenKind['BANG'] = '!';
  TokenKind['DOLLAR'] = '$';
  TokenKind['AMP'] = '&';
  TokenKind['PAREN_L'] = '(';
  TokenKind['PAREN_R'] = ')';
  TokenKind['SPREAD'] = '...';
  TokenKind['COLON'] = ':';
  TokenKind['EQUALS'] = '=';
  TokenKind['AT'] = '@';
  TokenKind['BRACKET_L'] = '[';
  TokenKind['BRACKET_R'] = ']';
  TokenKind['BRACE_L'] = '{';
  TokenKind['PIPE'] = '|';
  TokenKind['BRACE_R'] = '}';
  TokenKind['NAME'] = 'Name';
  TokenKind['INT'] = 'Int';
  TokenKind['FLOAT'] = 'Float';
  TokenKind['STRING'] = 'String';
  TokenKind['BLOCK_STRING'] = 'BlockString';
  TokenKind['COMMENT'] = 'Comment';
})(TokenKind || (TokenKind = {}));

/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

class Lexer {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }

  get [Symbol.toStringTag]() {
    return 'Lexer';
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */

  advance() {
    this.lastToken = this.token;
    const token = (this.token = this.lookahead());
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */

  lookahead() {
    let token = this.token;

    if (token.kind !== TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          // Read the next token and form a link in the token linked-list.
          const nextToken = readNextToken(this, token.end); // @ts-expect-error next is only mutable during parsing.

          token.next = nextToken; // @ts-expect-error prev is only mutable during parsing.

          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === TokenKind.COMMENT);
    }

    return token;
  }
}
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return (
    kind === TokenKind.BANG ||
    kind === TokenKind.DOLLAR ||
    kind === TokenKind.AMP ||
    kind === TokenKind.PAREN_L ||
    kind === TokenKind.PAREN_R ||
    kind === TokenKind.SPREAD ||
    kind === TokenKind.COLON ||
    kind === TokenKind.EQUALS ||
    kind === TokenKind.AT ||
    kind === TokenKind.BRACKET_L ||
    kind === TokenKind.BRACKET_R ||
    kind === TokenKind.BRACE_L ||
    kind === TokenKind.PIPE ||
    kind === TokenKind.BRACE_R
  );
}
/**
 * A Unicode scalar value is any Unicode code point except surrogate code
 * points. In other words, the inclusive ranges of values 0x0000 to 0xD7FF and
 * 0xE000 to 0x10FFFF.
 *
 * SourceCharacter ::
 *   - "Any Unicode scalar value"
 */

function isUnicodeScalarValue(code) {
  return (
    (code >= 0x0000 && code <= 0xd7ff) || (code >= 0xe000 && code <= 0x10ffff)
  );
}
/**
 * The GraphQL specification defines source text as a sequence of unicode scalar
 * values (which Unicode defines to exclude surrogate code points). However
 * JavaScript defines strings as a sequence of UTF-16 code units which may
 * include surrogates. A surrogate pair is a valid source character as it
 * encodes a supplementary code point (above U+FFFF), but unpaired surrogate
 * code points are not valid source characters.
 */

function isSupplementaryCodePoint(body, location) {
  return (
    isLeadingSurrogate(body.charCodeAt(location)) &&
    isTrailingSurrogate(body.charCodeAt(location + 1))
  );
}

function isLeadingSurrogate(code) {
  return code >= 0xd800 && code <= 0xdbff;
}

function isTrailingSurrogate(code) {
  return code >= 0xdc00 && code <= 0xdfff;
}
/**
 * Prints the code point (or end of file reference) at a given location in a
 * source for use in error messages.
 *
 * Printable ASCII is printed quoted, while other points are printed in Unicode
 * code point form (ie. U+1234).
 */

function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);

  if (code === undefined) {
    return TokenKind.EOF;
  } else if (code >= 0x0020 && code <= 0x007e) {
    // Printable ASCII
    const char = String.fromCodePoint(code);
    return char === '"' ? "'\"'" : `"${char}"`;
  } // Unicode code point

  return 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
}
/**
 * Create a token with line and column location information.
 */

function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */

function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // SourceCharacter

    switch (code) {
      // Ignored ::
      //   - UnicodeBOM
      //   - WhiteSpace
      //   - LineTerminator
      //   - Comment
      //   - Comma
      //
      // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
      //
      // WhiteSpace ::
      //   - "Horizontal Tab (U+0009)"
      //   - "Space (U+0020)"
      //
      // Comma :: ,
      case 0xfeff: // <BOM>

      case 0x0009: // \t

      case 0x0020: // <space>

      case 0x002c:
        // ,
        ++position;
        continue;
      // LineTerminator ::
      //   - "New Line (U+000A)"
      //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
      //   - "Carriage Return (U+000D)" "New Line (U+000A)"

      case 0x000a:
        // \n
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;

      case 0x000d:
        // \r
        if (body.charCodeAt(position + 1) === 0x000a) {
          position += 2;
        } else {
          ++position;
        }

        ++lexer.line;
        lexer.lineStart = position;
        continue;
      // Comment

      case 0x0023:
        // #
        return readComment(lexer, position);
      // Token ::
      //   - Punctuator
      //   - Name
      //   - IntValue
      //   - FloatValue
      //   - StringValue
      //
      // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }

      case 0x0021:
        // !
        return createToken(lexer, TokenKind.BANG, position, position + 1);

      case 0x0024:
        // $
        return createToken(lexer, TokenKind.DOLLAR, position, position + 1);

      case 0x0026:
        // &
        return createToken(lexer, TokenKind.AMP, position, position + 1);

      case 0x0028:
        // (
        return createToken(lexer, TokenKind.PAREN_L, position, position + 1);

      case 0x0029:
        // )
        return createToken(lexer, TokenKind.PAREN_R, position, position + 1);

      case 0x002e:
        // .
        if (
          body.charCodeAt(position + 1) === 0x002e &&
          body.charCodeAt(position + 2) === 0x002e
        ) {
          return createToken(lexer, TokenKind.SPREAD, position, position + 3);
        }

        break;

      case 0x003a:
        // :
        return createToken(lexer, TokenKind.COLON, position, position + 1);

      case 0x003d:
        // =
        return createToken(lexer, TokenKind.EQUALS, position, position + 1);

      case 0x0040:
        // @
        return createToken(lexer, TokenKind.AT, position, position + 1);

      case 0x005b:
        // [
        return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);

      case 0x005d:
        // ]
        return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);

      case 0x007b:
        // {
        return createToken(lexer, TokenKind.BRACE_L, position, position + 1);

      case 0x007c:
        // |
        return createToken(lexer, TokenKind.PIPE, position, position + 1);

      case 0x007d:
        // }
        return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
      // StringValue

      case 0x0022:
        // "
        if (
          body.charCodeAt(position + 1) === 0x0022 &&
          body.charCodeAt(position + 2) === 0x0022
        ) {
          return readBlockString(lexer, position);
        }

        return readString(lexer, position);
    } // IntValue | FloatValue (Digit | -)

    if (isDigit(code) || code === 0x002d) {
      return readNumber(lexer, position, code);
    } // Name

    if (isNameStart(code)) {
      return readName(lexer, position);
    }

    throw syntaxError(
      lexer.source,
      position,
      code === 0x0027
        ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?'
        : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position)
        ? `Unexpected character: ${printCodePointAt(lexer, position)}.`
        : `Invalid character: ${printCodePointAt(lexer, position)}.`,
    );
  }

  return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
/**
 * Reads a comment token from the source file.
 *
 * ```
 * Comment :: # CommentChar* [lookahead != CommentChar]
 *
 * CommentChar :: SourceCharacter but not LineTerminator
 * ```
 */

function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // LineTerminator (\n | \r)

    if (code === 0x000a || code === 0x000d) {
      break;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }

  return createToken(
    lexer,
    TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position),
  );
}
/**
 * Reads a number token from the source file, either a FloatValue or an IntValue
 * depending on whether a FractionalPart or ExponentPart is encountered.
 *
 * ```
 * IntValue :: IntegerPart [lookahead != {Digit, `.`, NameStart}]
 *
 * IntegerPart ::
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit Digit*
 *
 * NegativeSign :: -
 *
 * NonZeroDigit :: Digit but not `0`
 *
 * FloatValue ::
 *   - IntegerPart FractionalPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart FractionalPart [lookahead != {Digit, `.`, NameStart}]
 *   - IntegerPart ExponentPart [lookahead != {Digit, `.`, NameStart}]
 *
 * FractionalPart :: . Digit+
 *
 * ExponentPart :: ExponentIndicator Sign? Digit+
 *
 * ExponentIndicator :: one of `e` `E`
 *
 * Sign :: one of + -
 * ```
 */

function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false; // NegativeSign (-)

  if (code === 0x002d) {
    code = body.charCodeAt(++position);
  } // Zero (0)

  if (code === 0x0030) {
    code = body.charCodeAt(++position);

    if (isDigit(code)) {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // Full stop (.)

  if (code === 0x002e) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // E e

  if (code === 0x0045 || code === 0x0065) {
    isFloat = true;
    code = body.charCodeAt(++position); // + -

    if (code === 0x002b || code === 0x002d) {
      code = body.charCodeAt(++position);
    }

    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart

  if (code === 0x002e || isNameStart(code)) {
    throw syntaxError(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position,
      )}.`,
    );
  }

  return createToken(
    lexer,
    isFloat ? TokenKind.FLOAT : TokenKind.INT,
    start,
    position,
    body.slice(start, position),
  );
}
/**
 * Returns the new position in the source after reading one or more digits.
 */

function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start,
      )}.`,
    );
  }

  const body = lexer.source.body;
  let position = start + 1; // +1 to skip first firstCode

  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }

  return position;
}
/**
 * Reads a single-quote string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `""` [lookahead != `"`]
 *   - `"` StringCharacter+ `"`
 *
 * StringCharacter ::
 *   - SourceCharacter but not `"` or `\` or LineTerminator
 *   - `\u` EscapedUnicode
 *   - `\` EscapedCharacter
 *
 * EscapedUnicode ::
 *   - `{` HexDigit+ `}`
 *   - HexDigit HexDigit HexDigit HexDigit
 *
 * EscapedCharacter :: one of `"` `\` `/` `b` `f` `n` `r` `t`
 * ```
 */

function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = '';

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // Closing Quote (")

    if (code === 0x0022) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, TokenKind.STRING, start, position + 1, value);
    } // Escape Sequence (\)

    if (code === 0x005c) {
      value += body.slice(chunkStart, position);
      const escape =
        body.charCodeAt(position + 1) === 0x0075 // u
          ? body.charCodeAt(position + 2) === 0x007b // {
            ? readEscapedUnicodeVariableWidth(lexer, position)
            : readEscapedUnicodeFixedWidth(lexer, position)
          : readEscapedCharacter(lexer, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    } // LineTerminator (\n | \r)

    if (code === 0x000a || code === 0x000d) {
      break;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  }

  throw syntaxError(lexer.source, position, 'Unterminated string.');
} // The string value and lexed size of an escape sequence.

function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3; // Cannot be larger than 12 chars (\u{00000000}).

  while (size < 12) {
    const code = body.charCodeAt(position + size++); // Closing Brace (})

    if (code === 0x007d) {
      // Must be at least 5 chars (\u{0}) and encode a Unicode scalar value.
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }

      return {
        value: String.fromCodePoint(point),
        size,
      };
    } // Append this hex digit to the code point.

    point = (point << 4) | readHexDigit(code);

    if (point < 0) {
      break;
    }
  }

  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size,
    )}".`,
  );
}

function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);

  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6,
    };
  } // GraphQL allows JSON-style surrogate pair escape sequences, but only when
  // a valid pair is formed.

  if (isLeadingSurrogate(code)) {
    // \u
    if (
      body.charCodeAt(position + 6) === 0x005c &&
      body.charCodeAt(position + 7) === 0x0075
    ) {
      const trailingCode = read16BitHexCode(body, position + 8);

      if (isTrailingSurrogate(trailingCode)) {
        // JavaScript defines strings as a sequence of UTF-16 code units and
        // encodes Unicode code points above U+FFFF using a surrogate pair of
        // code units. Since this is a surrogate pair escape sequence, just
        // include both codes into the JavaScript string value. Had JavaScript
        // not been internally based on UTF-16, then this surrogate pair would
        // be decoded to retrieve the supplementary code point.
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12,
        };
      }
    }
  }

  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`,
  );
}
/**
 * Reads four hexadecimal characters and returns the positive integer that 16bit
 * hexadecimal string represents. For example, "000f" will return 15, and "dead"
 * will return 57005.
 *
 * Returns a negative number if any char was not a valid hexadecimal digit.
 */

function read16BitHexCode(body, position) {
  // readHexDigit() returns -1 on error. ORing a negative value with any other
  // value always produces a negative value.
  return (
    (readHexDigit(body.charCodeAt(position)) << 12) |
    (readHexDigit(body.charCodeAt(position + 1)) << 8) |
    (readHexDigit(body.charCodeAt(position + 2)) << 4) |
    readHexDigit(body.charCodeAt(position + 3))
  );
}
/**
 * Reads a hexadecimal character and returns its positive integer value (0-15).
 *
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 if the provided character code was not a valid hexadecimal digit.
 *
 * HexDigit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 *   - `A` `B` `C` `D` `E` `F`
 *   - `a` `b` `c` `d` `e` `f`
 */

function readHexDigit(code) {
  return code >= 0x0030 && code <= 0x0039 // 0-9
    ? code - 0x0030
    : code >= 0x0041 && code <= 0x0046 // A-F
    ? code - 0x0037
    : code >= 0x0061 && code <= 0x0066 // a-f
    ? code - 0x0057
    : -1;
}
/**
 * | Escaped Character | Code Point | Character Name               |
 * | ----------------- | ---------- | ---------------------------- |
 * | `"`               | U+0022     | double quote                 |
 * | `\`               | U+005C     | reverse solidus (back slash) |
 * | `/`               | U+002F     | solidus (forward slash)      |
 * | `b`               | U+0008     | backspace                    |
 * | `f`               | U+000C     | form feed                    |
 * | `n`               | U+000A     | line feed (new line)         |
 * | `r`               | U+000D     | carriage return              |
 * | `t`               | U+0009     | horizontal tab               |
 */

function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);

  switch (code) {
    case 0x0022:
      // "
      return {
        value: '\u0022',
        size: 2,
      };

    case 0x005c:
      // \
      return {
        value: '\u005c',
        size: 2,
      };

    case 0x002f:
      // /
      return {
        value: '\u002f',
        size: 2,
      };

    case 0x0062:
      // b
      return {
        value: '\u0008',
        size: 2,
      };

    case 0x0066:
      // f
      return {
        value: '\u000c',
        size: 2,
      };

    case 0x006e:
      // n
      return {
        value: '\u000a',
        size: 2,
      };

    case 0x0072:
      // r
      return {
        value: '\u000d',
        size: 2,
      };

    case 0x0074:
      // t
      return {
        value: '\u0009',
        size: 2,
      };
  }

  throw syntaxError(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2,
    )}".`,
  );
}
/**
 * Reads a block string token from the source file.
 *
 * ```
 * StringValue ::
 *   - `"""` BlockStringCharacter* `"""`
 *
 * BlockStringCharacter ::
 *   - SourceCharacter but not `"""` or `\"""`
 *   - `\"""`
 * ```
 */

function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = '';
  const blockLines = [];

  while (position < bodyLength) {
    const code = body.charCodeAt(position); // Closing Triple-Quote (""")

    if (
      code === 0x0022 &&
      body.charCodeAt(position + 1) === 0x0022 &&
      body.charCodeAt(position + 2) === 0x0022
    ) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        TokenKind.BLOCK_STRING,
        start,
        position + 3, // Return a string of the lines joined with U+000A.
        dedentBlockStringLines(blockLines).join('\n'),
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    } // Escaped Triple-Quote (\""")

    if (
      code === 0x005c &&
      body.charCodeAt(position + 1) === 0x0022 &&
      body.charCodeAt(position + 2) === 0x0022 &&
      body.charCodeAt(position + 3) === 0x0022
    ) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1; // skip only slash

      position += 4;
      continue;
    } // LineTerminator

    if (code === 0x000a || code === 0x000d) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);

      if (code === 0x000d && body.charCodeAt(position + 1) === 0x000a) {
        position += 2;
      } else {
        ++position;
      }

      currentLine = '';
      chunkStart = position;
      lineStart = position;
      continue;
    } // SourceCharacter

    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position,
        )}.`,
      );
    }
  }

  throw syntaxError(lexer.source, position, 'Unterminated string.');
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * ```
 * Name ::
 *   - NameStart NameContinue* [lookahead != NameContinue]
 * ```
 */

function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;

  while (position < bodyLength) {
    const code = body.charCodeAt(position);

    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }

  return createToken(
    lexer,
    TokenKind.NAME,
    start,
    position,
    body.slice(start, position),
  );
}

const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (typeof value) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? `[function ${value.name}]` : '[function]';

    case 'object':
      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return 'null';
  }

  if (previouslySeenValues.includes(value)) {
    return '[Circular]';
  }

  const seenValues = [...previouslySeenValues, value];

  if (isJSONable(value)) {
    const jsonValue = value.toJSON(); // check for infinite recursion

    if (jsonValue !== value) {
      return typeof jsonValue === 'string'
        ? jsonValue
        : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function isJSONable(value) {
  return typeof value.toJSON === 'function';
}

function formatObject(object, seenValues) {
  const entries = Object.entries(object);

  if (entries.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  const properties = entries.map(
    ([key, value]) => key + ': ' + formatValue(value, seenValues),
  );
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];

  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }

  return '[' + items.join(', ') + ']';
}

function getObjectTag(object) {
  const tag = Object.prototype.toString
    .call(object)
    .replace(/^\[object /, '')
    .replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    const name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 * See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
 * See: https://webpack.js.org/guides/production/
 */

const instanceOf =
  /* c8 ignore next 5 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  function instanceOf(value, constructor) {
        if (value instanceof constructor) {
          return true;
        }

        if (typeof value === 'object' && value !== null) {
          var _value$constructor;

          // Prefer Symbol.toStringTag since it is immune to minification.
          const className = constructor.prototype[Symbol.toStringTag];
          const valueClassName = // We still need to support constructor's name to detect conflicts with older versions of this library.
            Symbol.toStringTag in value // @ts-expect-error TS bug see, https://github.com/microsoft/TypeScript/issues/38009
              ? value[Symbol.toStringTag]
              : (_value$constructor = value.constructor) === null ||
                _value$constructor === void 0
              ? void 0
              : _value$constructor.name;

          if (className === valueClassName) {
            const stringifiedValue = inspect(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
          }
        }

        return false;
      };

/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
class Source {
  constructor(
    body,
    name = 'GraphQL request',
    locationOffset = {
      line: 1,
      column: 1,
    },
  ) {
    typeof body === 'string' ||
      devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 ||
      devAssert(
        false,
        'line in locationOffset is 1-indexed and must be positive.',
      );
    this.locationOffset.column > 0 ||
      devAssert(
        false,
        'column in locationOffset is 1-indexed and must be positive.',
      );
  }

  get [Symbol.toStringTag]() {
    return 'Source';
  }
}
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

function isSource(source) {
  return instanceOf(source, Source);
}

/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse$2(source, options) {
  const parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

class Parser {
  constructor(source, options) {
    const sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */

  parseName() {
    const token = this.expectToken(TokenKind.NAME);
    return this.node(token, {
      kind: Kind.NAME,
      value: token.value,
    });
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */

  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Kind.DOCUMENT,
      definitions: this.many(
        TokenKind.SOF,
        this.parseDefinition,
        TokenKind.EOF,
      ),
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */

  parseDefinition() {
    if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } // Many definitions begin with a description and require a lookahead.

    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription
      ? this._lexer.lookahead()
      : this._lexer.token;

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }

      if (hasDescription) {
        throw syntaxError(
          this._lexer.source,
          this._lexer.token.start,
          'Unexpected description, descriptions are supported only on type definitions.',
        );
      }

      switch (keywordToken.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    }

    throw this.unexpected(keywordToken);
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */

  parseOperationDefinition() {
    const start = this._lexer.token;

    if (this.peek(TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
      });
    }

    const operation = this.parseOperationType();
    let name;

    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }

    return this.node(start, {
      kind: Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */

  parseOperationType() {
    const operationToken = this.expectToken(TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return OperationTypeNode.QUERY;

      case 'mutation':
        return OperationTypeNode.MUTATION;

      case 'subscription':
        return OperationTypeNode.SUBSCRIPTION;
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */

  parseVariableDefinitions() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseVariableDefinition,
      TokenKind.PAREN_R,
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */

  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS)
        ? this.parseConstValueLiteral()
        : undefined,
      directives: this.parseConstDirectives(),
    });
  }
  /**
   * Variable : $ Name
   */

  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return this.node(start, {
      kind: Kind.VARIABLE,
      name: this.parseName(),
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */

  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Kind.SELECTION_SET,
      selections: this.many(
        TokenKind.BRACE_L,
        this.parseSelection,
        TokenKind.BRACE_R,
      ),
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */

  parseSelection() {
    return this.peek(TokenKind.SPREAD)
      ? this.parseFragment()
      : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */

  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;

    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return this.node(start, {
      kind: Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L)
        ? this.parseSelectionSet()
        : undefined,
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */

  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */

  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst),
    });
  }

  parseConstArgument() {
    return this.parseArgument(true);
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */

  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return this.node(start, {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
      });
    }

    return this.node(start, {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */

  parseFragmentDefinition() {
    var _this$_options;

    const start = this._lexer.token;
    this.expectKeyword('fragment'); // Legacy support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (
      ((_this$_options = this._options) === null || _this$_options === void 0
        ? void 0
        : _this$_options.allowLegacyFragmentVariables) === true
    ) {
      return this.node(start, {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
      });
    }

    return this.node(start, {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
    });
  }
  /**
   * FragmentName : Name but not `on`
   */

  parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */

  parseValueLiteral(isConst) {
    const token = this._lexer.token;

    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case TokenKind.INT:
        this._lexer.advance();

        return this.node(token, {
          kind: Kind.INT,
          value: token.value,
        });

      case TokenKind.FLOAT:
        this._lexer.advance();

        return this.node(token, {
          kind: Kind.FLOAT,
          value: token.value,
        });

      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case TokenKind.NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: true,
            });

          case 'false':
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: false,
            });

          case 'null':
            return this.node(token, {
              kind: Kind.NULL,
            });

          default:
            return this.node(token, {
              kind: Kind.ENUM,
              value: token.value,
            });
        }

      case TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(TokenKind.DOLLAR);

          if (this._lexer.token.kind === TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Unexpected variable "$${varName}" in constant value.`,
            );
          } else {
            throw this.unexpected(token);
          }
        }

        return this.parseVariable();

      default:
        throw this.unexpected();
    }
  }

  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }

  parseStringLiteral() {
    const token = this._lexer.token;

    this._lexer.advance();

    return this.node(token, {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING,
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */

  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);

    return this.node(this._lexer.token, {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */

  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);

    return this.node(this._lexer.token, {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */

  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst),
    });
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */

  parseDirectives(isConst) {
    const directives = [];

    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }

  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */

  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return this.node(start, {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
    });
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */

  parseTypeReference() {
    const start = this._lexer.token;
    let type;

    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: Kind.LIST_TYPE,
        type: innerType,
      });
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(TokenKind.BANG)) {
      return this.node(start, {
        kind: Kind.NON_NULL_TYPE,
        type,
      });
    }

    return type;
  }
  /**
   * NamedType : Name
   */

  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Kind.NAMED_TYPE,
      name: this.parseName(),
    });
  } // Implements the parsing rules in the Type Definition section.

  peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */

  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */

  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('schema');
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R,
    );
    return this.node(start, {
      kind: Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes,
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */

  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type,
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */

  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('scalar');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives,
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */

  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('type');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */

  parseImplementsInterfaces() {
    return this.expectOptionalKeyword('implements')
      ? this.delimitedMany(TokenKind.AMP, this.parseNamedType)
      : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */

  parseFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseFieldDefinition,
      TokenKind.BRACE_R,
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */

  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives,
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */

  parseArgumentDefs() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseInputValueDef,
      TokenKind.PAREN_R,
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */

  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;

    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }

    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives,
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */

  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('interface');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */

  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('union');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types,
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */

  parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS)
      ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType)
      : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */

  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('enum');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values,
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */

  parseEnumValuesDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseEnumValueDefinition,
      TokenKind.BRACE_R,
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */

  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives,
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */

  parseEnumValueName() {
    if (
      this._lexer.token.value === 'true' ||
      this._lexer.token.value === 'false' ||
      this._lexer.token.value === 'null'
    ) {
      throw syntaxError(
        this._lexer.source,
        this._lexer.token.start,
        `${getTokenDesc(
          this._lexer.token,
        )} is reserved and cannot be used for an enum value.`,
      );
    }

    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */

  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('input');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields,
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */

  parseInputFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseInputValueDef,
      TokenKind.BRACE_R,
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */

  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */

  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R,
    );

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes,
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */

  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    const name = this.parseName();
    const directives = this.parseConstDirectives();

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives,
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */

  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();

    if (
      interfaces.length === 0 &&
      directives.length === 0 &&
      fields.length === 0
    ) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */

  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();

    if (
      interfaces.length === 0 &&
      directives.length === 0 &&
      fields.length === 0
    ) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields,
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */

  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types,
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */

  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values,
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */

  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields,
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */

  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations,
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */

  parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */

  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();

    if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */

  node(startToken, node) {
    var _this$_options2;

    if (
      ((_this$_options2 = this._options) === null || _this$_options2 === void 0
        ? void 0
        : _this$_options2.noLocation) !== true
    ) {
      node.loc = new Location(
        startToken,
        this._lexer.lastToken,
        this._lexer.source,
      );
    }

    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */

  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */

  expectToken(kind) {
    const token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw syntaxError(
      this._lexer.source,
      token.start,
      `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`,
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */

  expectOptionalToken(kind) {
    const token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */

  expectKeyword(value) {
    const token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw syntaxError(
        this._lexer.source,
        token.start,
        `Expected "${value}", found ${getTokenDesc(token)}.`,
      );
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */

  expectOptionalKeyword(value) {
    const token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */

  unexpected(atToken) {
    const token =
      atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(
      this._lexer.source,
      token.start,
      `Unexpected ${getTokenDesc(token)}.`,
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */

  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */

  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  }
}
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */

function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}

function parseDocumentNode(node) {
    var _a;
    const operationDef = node.definitions.find((def) => {
        return def.kind === 'OperationDefinition';
    });
    return {
        operationType: operationDef === null || operationDef === void 0 ? void 0 : operationDef.operation,
        operationName: (_a = operationDef === null || operationDef === void 0 ? void 0 : operationDef.name) === null || _a === void 0 ? void 0 : _a.value,
    };
}
function parseQuery(query) {
    try {
        const ast = parse$2(query);
        return parseDocumentNode(ast);
    }
    catch (error) {
        return error;
    }
}
function extractMultipartVariables(variables, map, files) {
    const operations = { variables };
    for (const [key, pathArray] of Object.entries(map)) {
        if (!(key in files)) {
            throw new Error(`Given files do not have a key '${key}' .`);
        }
        for (const dotPath of pathArray) {
            const [lastPath, ...reversedPaths] = dotPath.split('.').reverse();
            const paths = reversedPaths.reverse();
            let target = operations;
            for (const path of paths) {
                if (!(path in target)) {
                    throw new Error(`Property '${paths}' is not in operations.`);
                }
                target = target[path];
            }
            target[lastPath] = files[key];
        }
    }
    return operations.variables;
}
function getGraphQLInput(request) {
    var _a, _b;
    switch (request.method) {
        case 'GET': {
            const query = request.url.searchParams.get('query');
            const variables = request.url.searchParams.get('variables') || '';
            return {
                query,
                variables: jsonParse(variables),
            };
        }
        case 'POST': {
            if ((_a = request.body) === null || _a === void 0 ? void 0 : _a.query) {
                const { query, variables } = request.body;
                return {
                    query,
                    variables,
                };
            }
            // Handle multipart body operations.
            if ((_b = request.body) === null || _b === void 0 ? void 0 : _b.operations) {
                const _c = request.body, { operations, map } = _c, files = __rest(_c, ["operations", "map"]);
                const parsedOperations = jsonParse(operations) || {};
                if (!parsedOperations.query) {
                    return null;
                }
                const parsedMap = jsonParse(map || '') || {};
                const variables = parsedOperations.variables
                    ? extractMultipartVariables(parsedOperations.variables, parsedMap, files)
                    : {};
                return {
                    query: parsedOperations.query,
                    variables,
                };
            }
        }
        default:
            return null;
    }
}
/**
 * Determines if a given request can be considered a GraphQL request.
 * Does not parse the query and does not guarantee its validity.
 */
function parseGraphQLRequest(request) {
    const input = getGraphQLInput(request);
    if (!input || !input.query) {
        return undefined;
    }
    const { query, variables } = input;
    const parsedResult = parseQuery(query);
    if (parsedResult instanceof Error) {
        const requestPublicUrl = getPublicUrlFromRequest(request);
        throw new Error(devUtils.formatMessage('Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.\n\n%s', request.method, requestPublicUrl, parsedResult.message));
    }
    return {
        operationType: parsedResult.operationType,
        operationName: parsedResult.operationName,
        variables,
    };
}

function tryCatch(fn, onException) {
    try {
        const result = fn();
        return result;
    }
    catch (error) {
        onException === null || onException === void 0 ? void 0 : onException(error);
    }
}

const graphqlContext = {
    set,
    status,
    delay,
    fetch: fetch$1,
    data,
    extensions,
    errors,
    cookie,
};
function isDocumentNode(value) {
    if (value == null) {
        return false;
    }
    return typeof value === 'object' && 'kind' in value && 'definitions' in value;
}
class GraphQLHandler extends RequestHandler {
    constructor(operationType, operationName, endpoint, resolver) {
        let resolvedOperationName = operationName;
        if (isDocumentNode(operationName)) {
            const parsedNode = parseDocumentNode(operationName);
            if (parsedNode.operationType !== operationType) {
                throw new Error(`Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "${operationType}", but got "${parsedNode.operationType}").`);
            }
            if (!parsedNode.operationName) {
                throw new Error(`Failed to create a GraphQL handler: provided a DocumentNode with no operation name.`);
            }
            resolvedOperationName = parsedNode.operationName;
        }
        const header = operationType === 'all'
            ? `${operationType} (origin: ${endpoint.toString()})`
            : `${operationType} ${resolvedOperationName} (origin: ${endpoint.toString()})`;
        super({
            info: {
                header,
                operationType,
                operationName: resolvedOperationName,
            },
            ctx: graphqlContext,
            resolver,
        });
        this.endpoint = endpoint;
    }
    parse(request) {
        return tryCatch(() => parseGraphQLRequest(request), (error) => console.error(error.message));
    }
    getPublicRequest(request, parsedResult) {
        return Object.assign(Object.assign({}, request), { variables: (parsedResult === null || parsedResult === void 0 ? void 0 : parsedResult.variables) || {} });
    }
    predicate(request, parsedResult) {
        if (!parsedResult) {
            return false;
        }
        if (!parsedResult.operationName && this.info.operationType !== 'all') {
            const publicUrl = getPublicUrlFromRequest(request);
            devUtils.warn(`\
Failed to intercept a GraphQL request at "${request.method} ${publicUrl}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation\
      `);
            return false;
        }
        const hasMatchingUrl = matchRequestUrl(request.url, this.endpoint);
        const hasMatchingOperationType = this.info.operationType === 'all' ||
            parsedResult.operationType === this.info.operationType;
        const hasMatchingOperationName = this.info.operationName instanceof RegExp
            ? this.info.operationName.test(parsedResult.operationName || '')
            : parsedResult.operationName === this.info.operationName;
        return (hasMatchingUrl.matches &&
            hasMatchingOperationType &&
            hasMatchingOperationName);
    }
    log(request, response, handler, parsedRequest) {
        const loggedRequest = prepareRequest(request);
        const loggedResponse = prepareResponse(response);
        const statusColor = getStatusCodeColor(response.status);
        const requestInfo = (parsedRequest === null || parsedRequest === void 0 ? void 0 : parsedRequest.operationName)
            ? `${parsedRequest === null || parsedRequest === void 0 ? void 0 : parsedRequest.operationType} ${parsedRequest === null || parsedRequest === void 0 ? void 0 : parsedRequest.operationName}`
            : `anonymous ${parsedRequest === null || parsedRequest === void 0 ? void 0 : parsedRequest.operationType}`;
        console.groupCollapsed(devUtils.formatMessage('%s %s (%c%s%c)'), getTimestamp(), `${requestInfo}`, `color:${statusColor}`, `${response.status} ${response.statusText}`, 'color:inherit');
        console.log('Request:', loggedRequest);
        console.log('Handler:', this);
        console.log('Response:', loggedResponse);
        console.groupEnd();
    }
}

function createScopedGraphQLHandler(operationType, url) {
    return (operationName, resolver) => {
        return new GraphQLHandler(operationType, operationName, url, resolver);
    };
}
function createGraphQLOperationHandler(url) {
    return (resolver) => {
        return new GraphQLHandler('all', new RegExp('.*'), url, resolver);
    };
}
const standardGraphQLHandlers = {
    /**
     * Captures any GraphQL operation, regardless of its name, under the current scope.
     * @example
     * graphql.operation((req, res, ctx) => {
     *   return res(ctx.data({ name: 'John' }))
     * })
     * @see {@link https://mswjs.io/docs/api/graphql/operation `graphql.operation()`}
     */
    operation: createGraphQLOperationHandler('*'),
    /**
     * Captures a GraphQL query by a given name.
     * @example
     * graphql.query('GetUser', (req, res, ctx) => {
     *   return res(ctx.data({ user: { name: 'John' } }))
     * })
     * @see {@link https://mswjs.io/docs/api/graphql/query `graphql.query()`}
     */
    query: createScopedGraphQLHandler(OperationTypeNode.QUERY, '*'),
    /**
     * Captures a GraphQL mutation by a given name.
     * @example
     * graphql.mutation('SavePost', (req, res, ctx) => {
     *   return res(ctx.data({ post: { id: 'abc-123' } }))
     * })
     * @see {@link https://mswjs.io/docs/api/graphql/mutation `graphql.mutation()`}
     */
    mutation: createScopedGraphQLHandler(OperationTypeNode.MUTATION, '*'),
};
function createGraphQLLink(url) {
    return {
        operation: createGraphQLOperationHandler(url),
        query: createScopedGraphQLHandler(OperationTypeNode.QUERY, url),
        mutation: createScopedGraphQLHandler(OperationTypeNode.MUTATION, url),
    };
}
const graphql = Object.assign(Object.assign({}, standardGraphQLHandlers), { link: createGraphQLLink });

var lib$7 = {};

var createInterceptor$1 = {};

var lib$6 = {};

var StrictEventEmitter$3 = {};

var events$1 = {exports: {}};

var R$1 = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply$1 = R$1 && typeof R$1.apply === 'function'
  ? R$1.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };

var ReflectOwnKeys$1;
if (R$1 && typeof R$1.ownKeys === 'function') {
  ReflectOwnKeys$1 = R$1.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys$1 = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys$1 = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning$1(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN$1 = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter$1() {
  EventEmitter$1.init.call(this);
}
events$1.exports = EventEmitter$1;
events$1.exports.once = once$1;

// Backwards-compat with node 0.10.x
EventEmitter$1.EventEmitter = EventEmitter$1;

EventEmitter$1.prototype._events = undefined;
EventEmitter$1.prototype._eventsCount = 0;
EventEmitter$1.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners$1 = 10;

function checkListener$1(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter$1, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners$1;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN$1(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners$1 = arg;
  }
});

EventEmitter$1.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter$1.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN$1(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners$1(that) {
  if (that._maxListeners === undefined)
    return EventEmitter$1.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter$1.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners$1(this);
};

EventEmitter$1.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply$1(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone$1(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply$1(listeners[i], this, args);
  }

  return true;
};

function _addListener$1(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener$1(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners$1(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning$1(w);
    }
  }

  return target;
}

EventEmitter$1.prototype.addListener = function addListener(type, listener) {
  return _addListener$1(this, type, listener, false);
};

EventEmitter$1.prototype.on = EventEmitter$1.prototype.addListener;

EventEmitter$1.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener$1(this, type, listener, true);
    };

function onceWrapper$1() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap$1(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper$1.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter$1.prototype.once = function once(type, listener) {
  checkListener$1(listener);
  this.on(type, _onceWrap$1(this, type, listener));
  return this;
};

EventEmitter$1.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener$1(listener);
      this.prependListener(type, _onceWrap$1(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter$1.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener$1(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne$1(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter$1.prototype.off = EventEmitter$1.prototype.removeListener;

EventEmitter$1.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners$1(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners$1(evlistener) : arrayClone$1(evlistener, evlistener.length);
}

EventEmitter$1.prototype.listeners = function listeners(type) {
  return _listeners$1(this, type, true);
};

EventEmitter$1.prototype.rawListeners = function rawListeners(type) {
  return _listeners$1(this, type, false);
};

EventEmitter$1.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount$1.call(emitter, type);
  }
};

EventEmitter$1.prototype.listenerCount = listenerCount$1;
function listenerCount$1(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter$1.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys$1(this._events) : [];
};

function arrayClone$1(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne$1(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners$1(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once$1(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }
    eventTargetAgnosticAddListener$1(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter$1(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter$1(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener$1(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener$1(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

var __extends$3 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays$1 = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
StrictEventEmitter$3.__esModule = true;
StrictEventEmitter$3.StrictEventEmitter = void 0;
var events_1$1 = events$1.exports;
var StrictEventEmitter$2 = /** @class */ (function (_super) {
    __extends$3(StrictEventEmitter, _super);
    function StrictEventEmitter() {
        return _super.call(this) || this;
    }
    StrictEventEmitter.prototype.on = function (event, listener) {
        return _super.prototype.on.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.once = function (event, listener) {
        return _super.prototype.on.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.off = function (event, listener) {
        return _super.prototype.off.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.emit = function (event) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        return _super.prototype.emit.apply(this, __spreadArrays$1([event.toString()], data));
    };
    StrictEventEmitter.prototype.addListener = function (event, listener) {
        return _super.prototype.addListener.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.removeListener = function (event, listener) {
        return _super.prototype.removeListener.call(this, event.toString(), listener);
    };
    return StrictEventEmitter;
}(events_1$1.EventEmitter));
StrictEventEmitter$3.StrictEventEmitter = StrictEventEmitter$2;

(function (exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.StrictEventEmitter = void 0;
var StrictEventEmitter_1 = StrictEventEmitter$3;
__createBinding(exports, StrictEventEmitter_1, "StrictEventEmitter");
}(lib$6));

Object.defineProperty(createInterceptor$1, "__esModule", { value: true });
createInterceptor$1.createInterceptor = void 0;
var strict_event_emitter_1$1 = lib$6;
function createInterceptor(options) {
    var observer = new strict_event_emitter_1$1.StrictEventEmitter();
    var cleanupFns = [];
    return {
        apply: function () {
            cleanupFns = options.modules.map(function (interceptor) {
                return interceptor(observer, options.resolver);
            });
        },
        on: function (event, listener) {
            observer.addListener(event, listener);
        },
        restore: function () {
            observer.removeAllListeners();
            if (cleanupFns.length === 0) {
                throw new Error("Failed to restore patched modules: no patches found. Did you forget to run \".apply()\"?");
            }
            cleanupFns.forEach(function (restore) { return restore(); });
        },
    };
}
createInterceptor$1.createInterceptor = createInterceptor;

var remote = {};

var lib$5 = {};

var Headers = {};

var normalizeHeaderName$1 = {};

Object.defineProperty(normalizeHeaderName$1, "__esModule", { value: true });
normalizeHeaderName$1.normalizeHeaderName = void 0;
var HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function normalizeHeaderName(name) {
    if (typeof name !== 'string') {
        name = String(name);
    }
    if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === '') {
        throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
}
normalizeHeaderName$1.normalizeHeaderName = normalizeHeaderName;

var normalizeHeaderValue$1 = {};

Object.defineProperty(normalizeHeaderValue$1, "__esModule", { value: true });
normalizeHeaderValue$1.normalizeHeaderValue = void 0;
function normalizeHeaderValue(value) {
    if (typeof value !== 'string') {
        value = String(value);
    }
    return value;
}
normalizeHeaderValue$1.normalizeHeaderValue = normalizeHeaderValue;

var __generator$3 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read$5 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values$1 = (commonjsGlobal && commonjsGlobal.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(Headers, "__esModule", { value: true });
var normalizeHeaderName_1 = normalizeHeaderName$1;
var normalizeHeaderValue_1 = normalizeHeaderValue$1;
var HeadersPolyfill = /** @class */ (function () {
    function HeadersPolyfill(init) {
        var _this = this;
        // Normalized header {"name":"a, b"} storage.
        this._headers = {};
        // Keeps the mapping between the raw header name
        // and the normalized header name to ease the lookup.
        this._names = new Map();
        /**
         * @note Cannot check if the `init` is an instance of the `Headers`
         * because that class is only defined in the browser.
         */
        if (['Headers', 'HeadersPolyfill'].includes(init === null || init === void 0 ? void 0 : init.constructor.name) ||
            init instanceof HeadersPolyfill) {
            var initialHeaders = init;
            initialHeaders.forEach(function (value, name) {
                _this.append(name, value);
            }, this);
        }
        else if (Array.isArray(init)) {
            init.forEach(function (_a) {
                var _b = __read$5(_a, 2), name = _b[0], value = _b[1];
                _this.append(name, Array.isArray(value) ? value.join(', ') : value);
            });
        }
        else if (init) {
            Object.getOwnPropertyNames(init).forEach(function (name) {
                var value = init[name];
                _this.append(name, Array.isArray(value) ? value.join(', ') : value);
            });
        }
    }
    HeadersPolyfill.prototype[Symbol.iterator] = function () {
        return this.entries();
    };
    HeadersPolyfill.prototype.keys = function () {
        var _a, _b, name_1, e_1_1;
        var e_1, _c;
        return __generator$3(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values$1(Object.keys(this._headers)), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    name_1 = _b.value;
                    return [4 /*yield*/, name_1];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    HeadersPolyfill.prototype.values = function () {
        var _a, _b, value, e_2_1;
        var e_2, _c;
        return __generator$3(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values$1(Object.values(this._headers)), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    value = _b.value;
                    return [4 /*yield*/, value];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    HeadersPolyfill.prototype.entries = function () {
        var _a, _b, name_2, e_3_1;
        var e_3, _c;
        return __generator$3(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values$1(Object.keys(this._headers)), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    name_2 = _b.value;
                    return [4 /*yield*/, [name_2, this.get(name_2)]];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_3_1 = _d.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    /**
     * Returns a `ByteString` sequence of all the values of a header with a given name.
     */
    HeadersPolyfill.prototype.get = function (name) {
        return this._headers[normalizeHeaderName_1.normalizeHeaderName(name)] || null;
    };
    /**
     * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    HeadersPolyfill.prototype.set = function (name, value) {
        var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
        this._headers[normalizedName] = normalizeHeaderValue_1.normalizeHeaderValue(value);
        this._names.set(normalizedName, name);
    };
    /**
     * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    HeadersPolyfill.prototype.append = function (name, value) {
        var resolvedValue = this.has(name) ? this.get(name) + ", " + value : value;
        this.set(name, resolvedValue);
    };
    /**
     * Deletes a header from the `Headers` object.
     */
    HeadersPolyfill.prototype.delete = function (name) {
        if (!this.has(name)) {
            return this;
        }
        var normalizedName = normalizeHeaderName_1.normalizeHeaderName(name);
        delete this._headers[normalizedName];
        this._names.delete(normalizedName);
        return this;
    };
    /**
     * Returns the object of all the normalized headers.
     */
    HeadersPolyfill.prototype.all = function () {
        return this._headers;
    };
    /**
     * Returns the object of all the raw headers.
     */
    HeadersPolyfill.prototype.raw = function () {
        var _this = this;
        return Object.entries(this._headers).reduce(function (headers, _a) {
            var _b = __read$5(_a, 2), name = _b[0], value = _b[1];
            headers[_this._names.get(name)] = value;
            return headers;
        }, {});
    };
    /**
     * Returns a boolean stating whether a `Headers` object contains a certain header.
     */
    HeadersPolyfill.prototype.has = function (name) {
        return this._headers.hasOwnProperty(normalizeHeaderName_1.normalizeHeaderName(name));
    };
    /**
     * Traverses the `Headers` object,
     * calling the given callback for each header.
     */
    HeadersPolyfill.prototype.forEach = function (callback, thisArg) {
        for (var name_3 in this._headers) {
            if (this._headers.hasOwnProperty(name_3)) {
                callback.call(thisArg, this._headers[name_3], name_3, this);
            }
        }
    };
    return HeadersPolyfill;
}());
Headers.default = HeadersPolyfill;

var headersToString$1 = {};

var headersToList$1 = {};

Object.defineProperty(headersToList$1, "__esModule", { value: true });
headersToList$1.headersToList = void 0;
function headersToList(headers) {
    var headersList = [];
    headers.forEach(function (value, name) {
        var resolvedValue = value.includes(',')
            ? value.split(',').map(function (value) { return value.trim(); })
            : value;
        headersList.push([name, resolvedValue]);
    });
    return headersList;
}
headersToList$1.headersToList = headersToList;

var __read$4 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(headersToString$1, "__esModule", { value: true });
headersToString$1.headersToString = void 0;
var headersToList_1 = headersToList$1;
/**
 * Converts a given `Headers` instance to its string representation.
 */
function headersToString(headers) {
    var list = headersToList_1.headersToList(headers);
    var lines = list.map(function (_a) {
        var _b = __read$4(_a, 2), name = _b[0], value = _b[1];
        var values = [].concat(value);
        return name + ": " + values.join(', ');
    });
    return lines.join('\r\n');
}
headersToString$1.headersToString = headersToString;

var headersToObject$1 = {};

Object.defineProperty(headersToObject$1, "__esModule", { value: true });
headersToObject$1.headersToObject = void 0;
// List of headers that cannot have multiple values,
// while potentially having a comma in their single value.
var singleValueHeaders = ['user-agent'];
/**
 * Converts a given `Headers` instance into a plain object.
 * Respects headers with multiple values.
 */
function headersToObject(headers) {
    var headersObject = {};
    headers.forEach(function (value, name) {
        var isMultiValue = !singleValueHeaders.includes(name.toLowerCase()) && value.includes(',');
        headersObject[name] = isMultiValue
            ? value.split(',').map(function (s) { return s.trim(); })
            : value;
    });
    return headersObject;
}
headersToObject$1.headersToObject = headersToObject;

var stringToHeaders$1 = {};

Object.defineProperty(stringToHeaders$1, "__esModule", { value: true });
stringToHeaders$1.stringToHeaders = void 0;
var Headers_1$2 = Headers;
/**
 * Converts a string representation of headers (i.e. from XMLHttpRequest)
 * to a new `Headers` instance.
 */
function stringToHeaders(str) {
    var lines = str.trim().split(/[\r\n]+/);
    return lines.reduce(function (headers, line) {
        if (line.trim() === '') {
            return headers;
        }
        var parts = line.split(': ');
        var name = parts.shift();
        var value = parts.join(': ');
        headers.append(name, value);
        return headers;
    }, new Headers_1$2.default());
}
stringToHeaders$1.stringToHeaders = stringToHeaders;

var listToHeaders$1 = {};

var __read$3 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(listToHeaders$1, "__esModule", { value: true });
listToHeaders$1.listToHeaders = void 0;
var Headers_1$1 = Headers;
function listToHeaders(list) {
    var headers = new Headers_1$1.default();
    list.forEach(function (_a) {
        var _b = __read$3(_a, 2), name = _b[0], value = _b[1];
        var values = [].concat(value);
        values.forEach(function (value) {
            headers.append(name, value);
        });
    });
    return headers;
}
listToHeaders$1.listToHeaders = listToHeaders;

var objectToHeaders$1 = {};

var reduceHeadersObject$1 = {};

Object.defineProperty(reduceHeadersObject$1, "__esModule", { value: true });
reduceHeadersObject$1.reduceHeadersObject = void 0;
/**
 * Reduces given headers object instnace.
 */
function reduceHeadersObject(headers, reducer, initialState) {
    return Object.keys(headers).reduce(function (nextHeaders, name) {
        return reducer(nextHeaders, name, headers[name]);
    }, initialState);
}
reduceHeadersObject$1.reduceHeadersObject = reduceHeadersObject;

Object.defineProperty(objectToHeaders$1, "__esModule", { value: true });
objectToHeaders$1.objectToHeaders = void 0;
var Headers_1 = Headers;
var reduceHeadersObject_1$1 = reduceHeadersObject$1;
/**
 * Converts a given headers object to a new `Headers` instance.
 */
function objectToHeaders(headersObject) {
    return reduceHeadersObject_1$1.reduceHeadersObject(headersObject, function (headers, name, value) {
        var values = [].concat(value).filter(Boolean);
        values.forEach(function (value) {
            headers.append(name, value);
        });
        return headers;
    }, new Headers_1.default());
}
objectToHeaders$1.objectToHeaders = objectToHeaders;

var flattenHeadersList$1 = {};

var __read$2 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(flattenHeadersList$1, "__esModule", { value: true });
flattenHeadersList$1.flattenHeadersList = void 0;
function flattenHeadersList(list) {
    return list.map(function (_a) {
        var _b = __read$2(_a, 2), name = _b[0], values = _b[1];
        return [name, [].concat(values).join('; ')];
    });
}
flattenHeadersList$1.flattenHeadersList = flattenHeadersList;

var flattenHeadersObject$1 = {};

Object.defineProperty(flattenHeadersObject$1, "__esModule", { value: true });
flattenHeadersObject$1.flattenHeadersObject = void 0;
var reduceHeadersObject_1 = reduceHeadersObject$1;
function flattenHeadersObject(headersObject) {
    return reduceHeadersObject_1.reduceHeadersObject(headersObject, function (headers, name, value) {
        headers[name] = [].concat(value).join('; ');
        return headers;
    }, {});
}
flattenHeadersObject$1.flattenHeadersObject = flattenHeadersObject;

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenHeadersObject = exports.flattenHeadersList = exports.reduceHeadersObject = exports.objectToHeaders = exports.listToHeaders = exports.stringToHeaders = exports.headersToObject = exports.headersToList = exports.headersToString = exports.Headers = void 0;
var Headers_1 = Headers;
Object.defineProperty(exports, "Headers", { enumerable: true, get: function () { return Headers_1.default; } });
var headersToString_1 = headersToString$1;
Object.defineProperty(exports, "headersToString", { enumerable: true, get: function () { return headersToString_1.headersToString; } });
var headersToList_1 = headersToList$1;
Object.defineProperty(exports, "headersToList", { enumerable: true, get: function () { return headersToList_1.headersToList; } });
var headersToObject_1 = headersToObject$1;
Object.defineProperty(exports, "headersToObject", { enumerable: true, get: function () { return headersToObject_1.headersToObject; } });
var stringToHeaders_1 = stringToHeaders$1;
Object.defineProperty(exports, "stringToHeaders", { enumerable: true, get: function () { return stringToHeaders_1.stringToHeaders; } });
var listToHeaders_1 = listToHeaders$1;
Object.defineProperty(exports, "listToHeaders", { enumerable: true, get: function () { return listToHeaders_1.listToHeaders; } });
var objectToHeaders_1 = objectToHeaders$1;
Object.defineProperty(exports, "objectToHeaders", { enumerable: true, get: function () { return objectToHeaders_1.objectToHeaders; } });
var reduceHeadersObject_1 = reduceHeadersObject$1;
Object.defineProperty(exports, "reduceHeadersObject", { enumerable: true, get: function () { return reduceHeadersObject_1.reduceHeadersObject; } });
var flattenHeadersList_1 = flattenHeadersList$1;
Object.defineProperty(exports, "flattenHeadersList", { enumerable: true, get: function () { return flattenHeadersList_1.flattenHeadersList; } });
var flattenHeadersObject_1 = flattenHeadersObject$1;
Object.defineProperty(exports, "flattenHeadersObject", { enumerable: true, get: function () { return flattenHeadersObject_1.flattenHeadersObject; } });
}(lib$5));

var lib$4 = {};

var invariant$1 = {};

var format$1 = {};

Object.defineProperty(format$1, "__esModule", { value: true });
format$1.format = void 0;
var POSITIONALS_EXP = /(%?)(%([sdjo]))/g;
function serializePositional(positional, flag) {
    switch (flag) {
        // Strings.
        case 's':
            return positional;
        // Digits.
        case 'd':
        case 'i':
            return Number(positional);
        // JSON.
        case 'j':
            return JSON.stringify(positional);
        // Objects.
        case 'o': {
            // Preserve stings to prevent extra quotes around them.
            if (typeof positional === 'string') {
                return positional;
            }
            var json = JSON.stringify(positional);
            // If the positional isn't serializable, return it as-is.
            if (json === '{}' || json === '[]' || /^\[object .+?\]$/.test(json)) {
                return positional;
            }
            return json;
        }
    }
}
function format(message) {
    var positionals = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positionals[_i - 1] = arguments[_i];
    }
    if (positionals.length === 0) {
        return message;
    }
    var positionalIndex = 0;
    var formattedMessage = message.replace(POSITIONALS_EXP, function (match, isEscaped, _, flag) {
        var positional = positionals[positionalIndex];
        var value = serializePositional(positional, flag);
        if (!isEscaped) {
            positionalIndex++;
            return value;
        }
        return match;
    });
    // Append unresolved positionals to string as-is.
    if (positionalIndex < positionals.length) {
        formattedMessage += " " + positionals.slice(positionalIndex).join(' ');
    }
    formattedMessage = formattedMessage.replace(/%{2,2}/g, '%');
    return formattedMessage;
}
format$1.format = format;

var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(invariant$1, "__esModule", { value: true });
invariant$1.invariant = invariant$1.InvariantError = void 0;
var format_1 = format$1;
var STACK_FRAMES_TO_IGNORE = 2;
var InvariantError = /** @class */ (function (_super) {
    __extends$2(InvariantError, _super);
    function InvariantError(message) {
        var positionals = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            positionals[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, message) || this;
        _this.name = 'Invariant Violation';
        _this.message = format_1.format.apply(void 0, __spreadArray([message], positionals));
        if (_this.stack) {
            var nextStack = _this.stack.split('\n');
            nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
            _this.stack = nextStack.join('\n');
        }
        return _this;
    }
    return InvariantError;
}(Error));
invariant$1.InvariantError = InvariantError;
function invariant(predicate, message) {
    var positionals = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        positionals[_i - 2] = arguments[_i];
    }
    if (!predicate) {
        throw new (InvariantError.bind.apply(InvariantError, __spreadArray([void 0, message], positionals)))();
    }
}
invariant$1.invariant = invariant;

(function (exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(invariant$1, exports);
__exportStar(format$1, exports);
}(lib$4));

var toIsoResponse$1 = {};

Object.defineProperty(toIsoResponse$1, "__esModule", { value: true });
toIsoResponse$1.toIsoResponse = void 0;
var headers_polyfill_1$3 = lib$5;
/**
 * Converts a given mocked response object into an isomorphic response.
 */
function toIsoResponse(response) {
    return {
        status: response.status || 200,
        statusText: response.statusText || 'OK',
        headers: headers_polyfill_1$3.objectToHeaders(response.headers || {}),
        body: response.body,
    };
}
toIsoResponse$1.toIsoResponse = toIsoResponse;

var __assign$1 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var __awaiter$2 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$2 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read$1 = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(remote, "__esModule", { value: true });
remote.createRemoteResolver = remote.createRemoteInterceptor = void 0;
var headers_polyfill_1$2 = lib$5;
var outvariant_1 = lib$4;
var strict_event_emitter_1 = lib$6;
var createInterceptor_1 = createInterceptor$1;
var toIsoResponse_1$2 = toIsoResponse$1;
function requestReviver(key, value) {
    switch (key) {
        case 'url':
            return new URL(value);
        case 'headers':
            return new headers_polyfill_1$2.Headers(value);
        default:
            return value;
    }
}
/**
 * Creates a remote request interceptor that delegates
 * the mocked response resolution to the parent process.
 * The parent process must establish a remote resolver
 * by calling `createRemoteResolver` function.
 */
function createRemoteInterceptor(options) {
    outvariant_1.invariant(process.connected, "Failed to create a remote interceptor: the current process (%s) does not have a parent. Please make sure you're spawning this process as a child process in order to use remote request interception.", process.pid);
    if (typeof process.send === 'undefined') {
        throw new Error("Failed to create a remote interceptor: the current process (" + process.pid + ") does not have the IPC enabled. Please make sure you're spawning this process with the \"ipc\" stdio value set:\n\nspawn('node', ['module.js'], { stdio: ['ipc'] })");
    }
    var handleParentMessage;
    var interceptor = createInterceptor_1.createInterceptor(__assign$1(__assign$1({}, options), { resolver: function (request) {
            var _a;
            var serializedRequest = JSON.stringify(request);
            (_a = process.send) === null || _a === void 0 ? void 0 : _a.call(process, "request:" + serializedRequest);
            return new Promise(function (resolve) {
                handleParentMessage = function (message) {
                    if (typeof message !== 'string') {
                        return;
                    }
                    if (message.startsWith("response:" + request.id)) {
                        var _a = __read$1(message.match(/^response:.+?:(.+)$/) || [], 2), responseString = _a[1];
                        if (!responseString) {
                            return resolve();
                        }
                        var mockedResponse = JSON.parse(responseString);
                        return resolve(mockedResponse);
                    }
                };
                process.addListener('message', handleParentMessage);
            });
        } }));
    return __assign$1(__assign$1({}, interceptor), { restore: function () {
            interceptor.restore();
            process.removeListener('message', handleParentMessage);
        } });
}
remote.createRemoteInterceptor = createRemoteInterceptor;
/**
 * Creates a response resolver function attached to the given `ChildProcess`.
 * The child process must establish a remote interceptor by calling `createRemoteInterceptor` function.
 */
function createRemoteResolver(options) {
    var _this = this;
    var observer = new strict_event_emitter_1.StrictEventEmitter();
    var handleChildMessage = function (message) { return __awaiter$2(_this, void 0, void 0, function () {
        var _a, requestString, isoRequest_1, mockedResponse_1, serializedResponse;
        return __generator$2(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (typeof message !== 'string') {
                        return [2 /*return*/];
                    }
                    if (!message.startsWith('request:')) return [3 /*break*/, 2];
                    _a = __read$1(message.match(/^request:(.+)$/) || [], 2), requestString = _a[1];
                    if (!requestString) {
                        return [2 /*return*/];
                    }
                    isoRequest_1 = JSON.parse(requestString, requestReviver);
                    observer.emit('request', isoRequest_1);
                    return [4 /*yield*/, options.resolver(isoRequest_1, undefined)
                        // Send the mocked response to the child process.
                    ];
                case 1:
                    mockedResponse_1 = _b.sent();
                    serializedResponse = JSON.stringify(mockedResponse_1);
                    options.process.send("response:" + isoRequest_1.id + ":" + serializedResponse, function (error) {
                        if (error) {
                            return;
                        }
                        if (mockedResponse_1) {
                            // Emit an optimisting "response" event at this point,
                            // not to rely on the back-and-forth signaling for the sake of the event.
                            observer.emit('response', isoRequest_1, toIsoResponse_1$2.toIsoResponse(mockedResponse_1));
                        }
                    });
                    _b.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var cleanup = function () {
        options.process.removeListener('message', handleChildMessage);
    };
    options.process.addListener('message', handleChildMessage);
    options.process.addListener('disconnect', cleanup);
    options.process.addListener('error', cleanup);
    options.process.addListener('exit', cleanup);
    return {
        on: function (event, listener) {
            observer.addListener(event, listener);
        },
    };
}
remote.createRemoteResolver = createRemoteResolver;

(function (exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCleanUrl = void 0;
__exportStar(createInterceptor$1, exports);
__exportStar(remote, exports);
/* Utils */
var getCleanUrl_1 = getCleanUrl$1;
Object.defineProperty(exports, "getCleanUrl", { enumerable: true, get: function () { return getCleanUrl_1.getCleanUrl; } });

}(lib$7));

var fetch = {};

var uuid = {};

Object.defineProperty(uuid, "__esModule", { value: true });
uuid.uuidv4 = void 0;
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        var v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
uuid.uuidv4 = uuidv4;

var browser = {exports: {}};

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse$1(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse$1(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = ms;
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

var common = setup;

/* eslint-env browser */

(function (module, exports) {
/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};
}(browser, browser.exports));

var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter$1 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(fetch, "__esModule", { value: true });
var interceptFetch_1 = fetch.interceptFetch = void 0;
var headers_polyfill_1$1 = lib$5;
var toIsoResponse_1$1 = toIsoResponse$1;
var uuid_1$1 = uuid;
var debug$1 = browser.exports('fetch');
var interceptFetch = function (observer, resolver) {
    var pureFetch = window.fetch;
    debug$1('replacing "window.fetch"...');
    window.fetch = function (input, init) { return __awaiter$1(void 0, void 0, void 0, function () {
        var request, url, method, isoRequest, response, isomorphicResponse;
        var _a;
        return __generator$1(this, function (_b) {
            switch (_b.label) {
                case 0:
                    request = new Request(input, init);
                    url = typeof input === 'string' ? input : input.url;
                    method = request.method;
                    debug$1('[%s] %s', method, url);
                    _a = {
                        id: uuid_1$1.uuidv4(),
                        url: new URL(url, location.origin),
                        method: method,
                        headers: new headers_polyfill_1$1.Headers(request.headers),
                        credentials: request.credentials
                    };
                    return [4 /*yield*/, request.clone().text()];
                case 1:
                    isoRequest = (_a.body = _b.sent(),
                        _a);
                    debug$1('isomorphic request', isoRequest);
                    observer.emit('request', isoRequest);
                    debug$1('awaiting for the mocked response...');
                    return [4 /*yield*/, resolver(isoRequest, request)];
                case 2:
                    response = _b.sent();
                    debug$1('mocked response', response);
                    if (response) {
                        isomorphicResponse = toIsoResponse_1$1.toIsoResponse(response);
                        debug$1('derived isomorphic response', isomorphicResponse);
                        observer.emit('response', isoRequest, isomorphicResponse);
                        return [2 /*return*/, new Response(response.body, __assign(__assign({}, isomorphicResponse), { 
                                // `Response.headers` cannot be instantiated with the `Headers` polyfill.
                                // Apparently, it halts if the `Headers` class contains unknown properties
                                // (i.e. the internal `Headers.map`).
                                headers: headers_polyfill_1$1.flattenHeadersObject(response.headers || {}) }))];
                    }
                    debug$1('no mocked response found, bypassing...');
                    return [2 /*return*/, pureFetch(request).then(function (response) { return __awaiter$1(void 0, void 0, void 0, function () {
                            var cloneResponse, _a, _b, _c;
                            return __generator$1(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        cloneResponse = response.clone();
                                        debug$1('original fetch performed', cloneResponse);
                                        _b = (_a = observer).emit;
                                        _c = ['response',
                                            isoRequest];
                                        return [4 /*yield*/, normalizeFetchResponse(cloneResponse)];
                                    case 1:
                                        _b.apply(_a, _c.concat([_d.sent()]));
                                        return [2 /*return*/, response];
                                }
                            });
                        }); })];
            }
        });
    }); };
    return function () {
        debug$1('restoring modules...');
        window.fetch = pureFetch;
    };
};
interceptFetch_1 = fetch.interceptFetch = interceptFetch;
function normalizeFetchResponse(response) {
    return __awaiter$1(this, void 0, void 0, function () {
        var _a;
        return __generator$1(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = {
                        status: response.status,
                        statusText: response.statusText,
                        headers: headers_polyfill_1$1.objectToHeaders(headers_polyfill_1$1.headersToObject(response.headers))
                    };
                    return [4 /*yield*/, response.text()];
                case 1: return [2 /*return*/, (_a.body = _b.sent(),
                        _a)];
            }
        });
    });
}

var XMLHttpRequest = {};

var XMLHttpRequestOverride = {};

var lib$3 = {};

var until$2 = {};

Object.defineProperty(until$2, "__esModule", { value: true });
/**
 * Gracefully handles a given Promise factory.
 * @example
 * cosnt [error, data] = await until(() => asyncAction())
 */
until$2.until = async (promise) => {
    try {
        const data = await promise().catch((error) => {
            throw error;
        });
        return [null, data];
    }
    catch (error) {
        return [error, null];
    }
};

Object.defineProperty(lib$3, "__esModule", { value: true });
var until_1$2 = until$2;
lib$3.until = until_1$2.until;

var lib$2 = {};

var dom$2 = {};

var conventions$2 = {};

/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * @template T
 * @param {T} object the object to freeze
 * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
 * 				allows to inject custom object constructor for tests
 * @returns {Readonly<T>}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
function freeze(object, oc) {
	if (oc === undefined) {
		oc = Object;
	}
	return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
 * @see DOMParser.prototype.parseFromString
 */
var MIME_TYPE = freeze({
	/**
	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
	 *
	 * @see DOMParser.SupportedType.isHTML
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
	 */
	HTML: 'text/html',

	/**
	 * Helper method to check a mime type if it indicates an HTML document
	 *
	 * @param {string} [value]
	 * @returns {boolean}
	 *
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
	isHTML: function (value) {
		return value === MIME_TYPE.HTML
	},

	/**
	 * `application/xml`, the standard mime type for XML documents.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_APPLICATION: 'application/xml',

	/**
	 * `text/html`, an alias for `application/xml`.
	 *
	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_TEXT: 'text/xml',

	/**
	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
	 * but is parsed as an XML document.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
	 */
	XML_XHTML_APPLICATION: 'application/xhtml+xml',

	/**
	 * `image/svg+xml`,
	 *
	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
	 */
	XML_SVG_IMAGE: 'image/svg+xml',
});

/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE$3 = freeze({
	/**
	 * The XHTML namespace.
	 *
	 * @see http://www.w3.org/1999/xhtml
	 */
	HTML: 'http://www.w3.org/1999/xhtml',

	/**
	 * Checks if `uri` equals `NAMESPACE.HTML`.
	 *
	 * @param {string} [uri]
	 *
	 * @see NAMESPACE.HTML
	 */
	isHTML: function (uri) {
		return uri === NAMESPACE$3.HTML
	},

	/**
	 * The SVG namespace.
	 *
	 * @see http://www.w3.org/2000/svg
	 */
	SVG: 'http://www.w3.org/2000/svg',

	/**
	 * The `xml:` namespace.
	 *
	 * @see http://www.w3.org/XML/1998/namespace
	 */
	XML: 'http://www.w3.org/XML/1998/namespace',

	/**
	 * The `xmlns:` namespace
	 *
	 * @see https://www.w3.org/2000/xmlns/
	 */
	XMLNS: 'http://www.w3.org/2000/xmlns/',
});

conventions$2.freeze = freeze;
conventions$2.MIME_TYPE = MIME_TYPE;
conventions$2.NAMESPACE = NAMESPACE$3;

var conventions$1 = conventions$2;

var NAMESPACE$2 = conventions$1.NAMESPACE;

/**
 * A prerequisite for `[].filter`, to drop elements that are empty
 * @param {string} input
 * @returns {boolean}
 */
function notEmptyString (input) {
	return input !== ''
}
/**
 * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * @param {string} input
 * @returns {string[]} (can be empty)
 */
function splitOnASCIIWhitespace(input) {
	// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
	return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : []
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * @param {string} element
 * @returns {Record<string, boolean | undefined>}
 */
function orderedSetReducer (current, element) {
	if (!current.hasOwnProperty(element)) {
		current[element] = true;
	}
	return current;
}

/**
 * @see https://infra.spec.whatwg.org/#ordered-set
 * @param {string} input
 * @returns {string[]}
 */
function toOrderedSet(input) {
	if (!input) return [];
	var list = splitOnASCIIWhitespace(input);
	return Object.keys(list.reduce(orderedSetReducer, {}))
}

/**
 * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
 * which we can not rely on being available.
 *
 * @param {any[]} list
 * @returns {function(any): boolean}
 */
function arrayIncludes (list) {
	return function(element) {
		return list && list.indexOf(element) !== -1;
	}
}

function copy(src,dest){
	for(var p in src){
		dest[p] = src[p];
	}
}

/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class,Super){
	var pt = Class.prototype;
	if(!(pt instanceof Super)){
		function t(){}		t.prototype = Super.prototype;
		t = new t();
		copy(pt,t);
		Class.prototype = pt = t;
	}
	if(pt.constructor != Class){
		if(typeof Class != 'function'){
			console.error("unknown Class:"+Class);
		}
		pt.constructor = Class;
	}
}

// Node Types
var NodeType = {};
var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

// ExceptionCode
var ExceptionCode = {};
var ExceptionMessage = {};
ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
//level2
ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);

/**
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(code, message) {
	if(message instanceof Error){
		var error = message;
	}else {
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if(message) this.message = this.message + ": " + message;
	return error;
}DOMException.prototype = Error.prototype;
copy(ExceptionCode,DOMException);

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {
}NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */
	length:0, 
	/**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long 
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
	 */
	item: function(index) {
		return this[index] || null;
	},
	toString:function(isHTML,nodeFilter){
		for(var buf = [], i = 0;i<this.length;i++){
			serializeToString(this[i],buf,isHTML,nodeFilter);
		}
		return buf.join('');
	}
};

function LiveNodeList(node,refresh){
	this._node = node;
	this._refresh = refresh;
	_updateLiveList(this);
}
function _updateLiveList(list){
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if(list._inc != inc){
		var ls = list._refresh(list._node);
		//console.log(ls.length)
		__set__(list,'length',ls.length);
		copy(ls,list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function(i){
	_updateLiveList(this);
	return this[i];
};

_extends(LiveNodeList,NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used
 * to represent collections of nodes that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities 
 */
function NamedNodeMap() {
}
function _findNodeIndex(list,node){
	var i = list.length;
	while(i--){
		if(list[i] === node){return i}
	}
}

function _addNamedNode(el,list,newAttr,oldAttr){
	if(oldAttr){
		list[_findNodeIndex(list,oldAttr)] = newAttr;
	}else {
		list[list.length++] = newAttr;
	}
	if(el){
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if(doc){
			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
			_onAddAttribute(doc,el,newAttr);
		}
	}
}
function _removeNamedNode(el,list,attr){
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list,attr);
	if(i>=0){
		var lastIndex = list.length-1;
		while(i<lastIndex){
			list[i] = list[++i];
		}
		list.length = lastIndex;
		if(el){
			var doc = el.ownerDocument;
			if(doc){
				_onRemoveAttribute(doc,el,attr);
				attr.ownerElement = null;
			}
		}
	}else {
		throw DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
	}
}
NamedNodeMap.prototype = {
	length:0,
	item:NodeList.prototype.item,
	getNamedItem: function(key) {
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
		//console.log()
		var i = this.length;
		while(i--){
			var attr = this[i];
			//console.log(attr.nodeName,key)
			if(attr.nodeName == key){
				return attr;
			}
		}
	},
	setNamedItem: function(attr) {
		var el = attr.ownerElement;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement, oldAttr;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
		
		
	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
	
	//for level2
	removeNamedItemNS:function(namespaceURI,localName){
		var attr = this.getNamedItemNS(namespaceURI,localName);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
	},
	getNamedItemNS: function(namespaceURI, localName) {
		var i = this.length;
		while(i--){
			var node = this[i];
			if(node.localName == localName && node.namespaceURI == namespaceURI){
				return node;
			}
		}
		return null;
	}
};

/**
 * The DOMImplementation interface represents an object providing methods
 * which are not dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * __The individual methods describe the differences compared to the specs.__
 *
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 */
function DOMImplementation$1() {
}

DOMImplementation$1.prototype = {
	/**
	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
	 * The different implementations fairly diverged in what kind of features were reported.
	 * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
	 *
	 * @deprecated It is deprecated and modern browsers return true in all cases.
	 *
	 * @param {string} feature
	 * @param {string} [version]
	 * @returns {boolean} always true
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
	 */
	hasFeature: function(feature, version) {
			return true;
	},
	/**
	 * Creates an XML Document object of the specified type with its document element.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
	 * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string|null} namespaceURI
	 * @param {string} qualifiedName
	 * @param {DocumentType=null} doctype
	 * @returns {Document}
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocument: function(namespaceURI,  qualifiedName, doctype){
		var doc = new Document();
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype || null;
		if (doctype){
			doc.appendChild(doctype);
		}
		if (qualifiedName){
			var root = doc.createElementNS(namespaceURI, qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	/**
	 * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
	 *
	 * __This behavior is slightly different from the in the specs__:
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string} qualifiedName
	 * @param {string} [publicId]
	 * @param {string} [systemId]
	 * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
	 * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocumentType: function(qualifiedName, publicId, systemId){
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId || '';
		node.systemId = systemId || '';

		return node;
	}
};


/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {
}
Node.prototype = {
	firstChild : null,
	lastChild : null,
	previousSibling : null,
	nextSibling : null,
	attributes : null,
	parentNode : null,
	childNodes : null,
	ownerDocument : null,
	nodeValue : null,
	namespaceURI : null,
	prefix : null,
	localName : null,
	// Modified in DOM Level 2:
	insertBefore:function(newChild, refChild){//raises 
		return _insertBefore(this,newChild,refChild);
	},
	replaceChild:function(newChild, oldChild){//raises 
		this.insertBefore(newChild,oldChild);
		if(oldChild){
			this.removeChild(oldChild);
		}
	},
	removeChild:function(oldChild){
		return _removeChild(this,oldChild);
	},
	appendChild:function(newChild){
		return this.insertBefore(newChild,null);
	},
	hasChildNodes:function(){
		return this.firstChild != null;
	},
	cloneNode:function(deep){
		return cloneNode(this.ownerDocument||this,this,deep);
	},
	// Modified in DOM Level 2:
	normalize:function(){
		var child = this.firstChild;
		while(child){
			var next = child.nextSibling;
			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
				this.removeChild(next);
				child.appendData(next.data);
			}else {
				child.normalize();
				child = next;
			}
		}
	},
  	// Introduced in DOM Level 2:
	isSupported:function(feature, version){
		return this.ownerDocument.implementation.hasFeature(feature,version);
	},
    // Introduced in DOM Level 2:
    hasAttributes:function(){
    	return this.attributes.length>0;
    },
	/**
	 * Look up the prefix associated to the given namespace URI, starting from this node.
	 * **The default namespace declarations are ignored by this method.**
	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
	 *
	 * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
	 *
	 * @param {string | null} namespaceURI
	 * @returns {string | null}
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
	 * @see https://github.com/xmldom/xmldom/issues/322
	 */
    lookupPrefix:function(namespaceURI){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			for(var n in map){
    				if(map[n] == namespaceURI){
    					return n;
    				}
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI:function(prefix){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			if(prefix in map){
    				return map[prefix] ;
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace:function(namespaceURI){
    	var prefix = this.lookupPrefix(namespaceURI);
    	return prefix == null;
    }
};


function _xmlEncoder(c){
	return c == '<' && '&lt;' ||
         c == '>' && '&gt;' ||
         c == '&' && '&amp;' ||
         c == '"' && '&quot;' ||
         '&#'+c.charCodeAt()+';'
}


copy(NodeType,Node);
copy(NodeType,Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node,callback){
	if(callback(node)){
		return true;
	}
	if(node = node.firstChild){
		do{
			if(_visitNode(node,callback)){return true}
        }while(node=node.nextSibling)
    }
}



function Document(){
}

function _onAddAttribute(doc,el,newAttr){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE$2.XMLNS){
		//update namespace
		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value;
	}
}

function _onRemoveAttribute(doc,el,newAttr,remove){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE$2.XMLNS){
		//update namespace
		delete el._nsMap[newAttr.prefix?newAttr.localName:''];
	}
}

function _onUpdateChild(doc,el,newChild){
	if(doc && doc._inc){
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if(newChild){
			cs[cs.length++] = newChild;
		}else {
			//console.log(1)
			var child = el.firstChild;
			var i = 0;
			while(child){
				cs[i++] = child;
				child =child.nextSibling;
			}
			cs.length = i;
		}
	}
}

/**
 * attributes;
 * children;
 * 
 * writeable properties:
 * nodeValue,Attr:value,CharacterData:data
 * prefix
 */
function _removeChild(parentNode,child){
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if(previous){
		previous.nextSibling = next;
	}else {
		parentNode.firstChild = next;
	}
	if(next){
		next.previousSibling = previous;
	}else {
		parentNode.lastChild = previous;
	}
	_onUpdateChild(parentNode.ownerDocument,parentNode);
	return child;
}
/**
 * preformance key(refChild == null)
 */
function _insertBefore(parentNode,newChild,nextChild){
	var cp = newChild.parentNode;
	if(cp){
		cp.removeChild(newChild);//remove and update
	}
	if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
		var newFirst = newChild.firstChild;
		if (newFirst == null) {
			return newChild;
		}
		var newLast = newChild.lastChild;
	}else {
		newFirst = newLast = newChild;
	}
	var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = nextChild;
	
	
	if(pre){
		pre.nextSibling = newFirst;
	}else {
		parentNode.firstChild = newFirst;
	}
	if(nextChild == null){
		parentNode.lastChild = newLast;
	}else {
		nextChild.previousSibling = newLast;
	}
	do{
		newFirst.parentNode = parentNode;
	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
	_onUpdateChild(parentNode.ownerDocument||parentNode,parentNode);
	//console.log(parentNode.lastChild.nextSibling == null)
	if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
		newChild.firstChild = newChild.lastChild = null;
	}
	return newChild;
}
function _appendSingleChild(parentNode,newChild){
	var cp = newChild.parentNode;
	if(cp){
		var pre = parentNode.lastChild;
		cp.removeChild(newChild);//remove and update
		var pre = parentNode.lastChild;
	}
	var pre = parentNode.lastChild;
	newChild.parentNode = parentNode;
	newChild.previousSibling = pre;
	newChild.nextSibling = null;
	if(pre){
		pre.nextSibling = newChild;
	}else {
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument,parentNode,newChild);
	return newChild;
	//console.log("__aa",parentNode.lastChild.nextSibling == null)
}
Document.prototype = {
	//implementation : null,
	nodeName :  '#document',
	nodeType :  DOCUMENT_NODE,
	/**
	 * The DocumentType node of the document.
	 *
	 * @readonly
	 * @type DocumentType
	 */
	doctype :  null,
	documentElement :  null,
	_inc : 1,

	insertBefore :  function(newChild, refChild){//raises
		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
			var child = newChild.firstChild;
			while(child){
				var next = child.nextSibling;
				this.insertBefore(child,refChild);
				child = next;
			}
			return newChild;
		}
		if(this.documentElement == null && newChild.nodeType == ELEMENT_NODE){
			this.documentElement = newChild;
		}

		return _insertBefore(this,newChild,refChild),(newChild.ownerDocument = this),newChild;
	},
	removeChild :  function(oldChild){
		if(this.documentElement == oldChild){
			this.documentElement = null;
		}
		return _removeChild(this,oldChild);
	},
	// Introduced in DOM Level 2:
	importNode : function(importedNode,deep){
		return importNode(this,importedNode,deep);
	},
	// Introduced in DOM Level 2:
	getElementById :	function(id){
		var rtv = null;
		_visitNode(this.documentElement,function(node){
			if(node.nodeType == ELEMENT_NODE){
				if(node.getAttribute('id') == id){
					rtv = node;
					return true;
				}
			}
		});
		return rtv;
	},

	/**
	 * The `getElementsByClassName` method of `Document` interface returns an array-like object
	 * of all child elements which have **all** of the given class name(s).
	 *
	 * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
	 *
	 *
	 * Warning: This is a live LiveNodeList.
	 * Changes in the DOM will reflect in the array as the changes occur.
	 * If an element selected by this array no longer qualifies for the selector,
	 * it will automatically be removed. Be aware of this for iteration purposes.
	 *
	 * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
	 */
	getElementsByClassName: function(classNames) {
		var classNamesSet = toOrderedSet(classNames);
		return new LiveNodeList(this, function(base) {
			var ls = [];
			if (classNamesSet.length > 0) {
				_visitNode(base.documentElement, function(node) {
					if(node !== base && node.nodeType === ELEMENT_NODE) {
						var nodeClassNames = node.getAttribute('class');
						// can be null if the attribute does not exist
						if (nodeClassNames) {
							// before splitting and iterating just compare them for the most common case
							var matches = classNames === nodeClassNames;
							if (!matches) {
								var nodeClassNamesSet = toOrderedSet(nodeClassNames);
								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
							}
							if(matches) {
								ls.push(node);
							}
						}
					}
				});
			}
			return ls;
		});
	},

	//document factory method:
	createElement :	function(tagName){
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.localName = tagName;
		node.childNodes = new NodeList();
		var attrs	= node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment :	function(){
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode :	function(data){
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data);
		return node;
	},
	createComment :	function(data){
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data);
		return node;
	},
	createCDATASection :	function(data){
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data);
		return node;
	},
	createProcessingInstruction :	function(target,data){
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.target = target;
		node.nodeValue= node.data = data;
		return node;
	},
	createAttribute :	function(name){
		var node = new Attr();
		node.ownerDocument	= this;
		node.name = name;
		node.nodeName	= name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference :	function(name){
		var node = new EntityReference();
		node.ownerDocument	= this;
		node.nodeName	= name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS :	function(namespaceURI,qualifiedName){
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs	= node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else {
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS :	function(namespaceURI,qualifiedName){
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else {
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document,Node);


function Element() {
	this._nsMap = {};
}Element.prototype = {
	nodeType : ELEMENT_NODE,
	hasAttribute : function(name){
		return this.getAttributeNode(name)!=null;
	},
	getAttribute : function(name){
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode : function(name){
		return this.attributes.getNamedItem(name);
	},
	setAttribute : function(name, value){
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr);
	},
	removeAttribute : function(name){
		var attr = this.getAttributeNode(name);
		attr && this.removeAttributeNode(attr);
	},
	
	//four real opeartion method
	appendChild:function(newChild){
		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
			return this.insertBefore(newChild,null);
		}else {
			return _appendSingleChild(this,newChild);
		}
	},
	setAttributeNode : function(newAttr){
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS : function(newAttr){
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode : function(oldAttr){
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS : function(namespaceURI, localName){
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},
	
	hasAttributeNS : function(namespaceURI, localName){
		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
	},
	getAttributeNS : function(namespaceURI, localName){
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS : function(namespaceURI, qualifiedName, value){
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr);
	},
	getAttributeNodeNS : function(namespaceURI, localName){
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},
	
	getElementsByTagName : function(tagName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS : function(namespaceURI, localName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
					ls.push(node);
				}
			});
			return ls;
			
		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


_extends(Element,Node);
function Attr() {
}Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr,Node);


function CharacterData() {
}CharacterData.prototype = {
	data : '',
	substringData : function(offset, count) {
		return this.data.substring(offset, offset+count);
	},
	appendData: function(text) {
		text = this.data+text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function(offset,text) {
		this.replaceData(offset,0,text);
	
	},
	appendChild:function(newChild){
		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
	},
	deleteData: function(offset, count) {
		this.replaceData(offset,count,"");
	},
	replaceData: function(offset, count, text) {
		var start = this.data.substring(0,offset);
		var end = this.data.substring(offset+count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
};
_extends(CharacterData,Node);
function Text() {
}Text.prototype = {
	nodeName : "#text",
	nodeType : TEXT_NODE,
	splitText : function(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if(this.parentNode){
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
};
_extends(Text,CharacterData);
function Comment() {
}Comment.prototype = {
	nodeName : "#comment",
	nodeType : COMMENT_NODE
};
_extends(Comment,CharacterData);

function CDATASection() {
}CDATASection.prototype = {
	nodeName : "#cdata-section",
	nodeType : CDATA_SECTION_NODE
};
_extends(CDATASection,CharacterData);


function DocumentType() {
}DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType,Node);

function Notation() {
}Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation,Node);

function Entity() {
}Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity,Node);

function EntityReference() {
}EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference,Node);

function DocumentFragment() {
}DocumentFragment.prototype.nodeName =	"#document-fragment";
DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment,Node);


function ProcessingInstruction() {
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction,Node);
function XMLSerializer(){}
XMLSerializer.prototype.serializeToString = function(node,isHtml,nodeFilter){
	return nodeSerializeToString.call(node,isHtml,nodeFilter);
};
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml,nodeFilter){
	var buf = [];
	var refNode = this.nodeType == 9 && this.documentElement || this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;
	
	if(uri && prefix == null){
		//console.log(prefix)
		var prefix = refNode.lookupPrefix(uri);
		if(prefix == null){
			//isHTML = true;
			var visibleNamespaces=[
			{namespace:uri,prefix:null}
			//{namespace:uri,prefix:''}
			];
		}
	}
	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
	return buf.join('');
}

function needNamespaceDefine(node, isHTML, visibleNamespaces) {
	var prefix = node.prefix || '';
	var uri = node.namespaceURI;
	// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
	// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
	// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
	// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
	// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
	// > [...] Furthermore, the attribute value [...] must not be an empty string.
	// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
	if (!uri) {
		return false;
	}
	if (prefix === "xml" && uri === NAMESPACE$2.XML || uri === NAMESPACE$2.XMLNS) {
		return false;
	}
	
	var i = visibleNamespaces.length; 
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		if (ns.prefix === prefix) {
			return ns.namespace !== uri;
		}
	}
	return true;
}
/**
 * Well-formed constraint: No < in Attribute Values
 * The replacement text of any entity referred to directly or indirectly in an attribute value must not contain a <.
 * @see https://www.w3.org/TR/xml/#CleanAttrVals
 * @see https://www.w3.org/TR/xml/#NT-AttValue
 */
function addSerializedAttribute(buf, qualifiedName, value) {
	buf.push(' ', qualifiedName, '="', value.replace(/[<&"]/g,_xmlEncoder), '"');
}

function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
	if (!visibleNamespaces) {
		visibleNamespaces = [];
	}

	if(nodeFilter){
		node = nodeFilter(node);
		if(node){
			if(typeof node == 'string'){
				buf.push(node);
				return;
			}
		}else {
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}

	switch(node.nodeType){
	case ELEMENT_NODE:
		var attrs = node.attributes;
		var len = attrs.length;
		var child = node.firstChild;
		var nodeName = node.tagName;
		
		isHTML = NAMESPACE$2.isHTML(node.namespaceURI) || isHTML;

		var prefixedNodeName = nodeName;
		if (!isHTML && !node.prefix && node.namespaceURI) {
			var defaultNS;
			// lookup current default ns from `xmlns` attribute
			for (var ai = 0; ai < attrs.length; ai++) {
				if (attrs.item(ai).name === 'xmlns') {
					defaultNS = attrs.item(ai).value;
					break
				}
			}
			if (!defaultNS) {
				// lookup current default ns in visibleNamespaces
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi];
					if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
						defaultNS = namespace.namespace;
						break
					}
				}
			}
			if (defaultNS !== node.namespaceURI) {
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi];
					if (namespace.namespace === node.namespaceURI) {
						if (namespace.prefix) {
							prefixedNodeName = namespace.prefix + ':' + nodeName;
						}
						break
					}
				}
			}
		}

		buf.push('<', prefixedNodeName);

		for(var i=0;i<len;i++){
			// add namespaces for attributes
			var attr = attrs.item(i);
			if (attr.prefix == 'xmlns') {
				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
			}else if(attr.nodeName == 'xmlns'){
				visibleNamespaces.push({ prefix: '', namespace: attr.value });
			}
		}

		for(var i=0;i<len;i++){
			var attr = attrs.item(i);
			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
				var prefix = attr.prefix||'';
				var uri = attr.namespaceURI;
				addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
				visibleNamespaces.push({ prefix: prefix, namespace:uri });
			}
			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
		}

		// add namespace for current node		
		if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
			var prefix = node.prefix||'';
			var uri = node.namespaceURI;
			addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
			visibleNamespaces.push({ prefix: prefix, namespace:uri });
		}
		
		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
			buf.push('>');
			//if is cdata child node
			if(isHTML && /^script$/i.test(nodeName)){
				while(child){
					if(child.data){
						buf.push(child.data);
					}else {
						serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					}
					child = child.nextSibling;
				}
			}else
			{
				while(child){
					serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					child = child.nextSibling;
				}
			}
			buf.push('</',prefixedNodeName,'>');
		}else {
			buf.push('/>');
		}
		// remove added visible namespaces
		//visibleNamespaces.length = startVisibleNamespaces;
		return;
	case DOCUMENT_NODE:
	case DOCUMENT_FRAGMENT_NODE:
		var child = node.firstChild;
		while(child){
			serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
			child = child.nextSibling;
		}
		return;
	case ATTRIBUTE_NODE:
		return addSerializedAttribute(buf, node.name, node.value);
	case TEXT_NODE:
		/**
		 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
		 * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
		 * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
		 * `&amp;` and `&lt;` respectively.
		 * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
		 * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
		 * when that string is not marking the end of a CDATA section.
		 *
		 * In the content of elements, character data is any string of characters
		 * which does not contain the start-delimiter of any markup
		 * and does not include the CDATA-section-close delimiter, `]]>`.
		 *
		 * @see https://www.w3.org/TR/xml/#NT-CharData
		 */
		return buf.push(node.data
			.replace(/[<&]/g,_xmlEncoder)
			.replace(/]]>/g, ']]&gt;')
		);
	case CDATA_SECTION_NODE:
		return buf.push( '<![CDATA[',node.data,']]>');
	case COMMENT_NODE:
		return buf.push( "<!--",node.data,"-->");
	case DOCUMENT_TYPE_NODE:
		var pubid = node.publicId;
		var sysid = node.systemId;
		buf.push('<!DOCTYPE ',node.name);
		if(pubid){
			buf.push(' PUBLIC ', pubid);
			if (sysid && sysid!='.') {
				buf.push(' ', sysid);
			}
			buf.push('>');
		}else if(sysid && sysid!='.'){
			buf.push(' SYSTEM ', sysid, '>');
		}else {
			var sub = node.internalSubset;
			if(sub){
				buf.push(" [",sub,"]");
			}
			buf.push(">");
		}
		return;
	case PROCESSING_INSTRUCTION_NODE:
		return buf.push( "<?",node.target," ",node.data,"?>");
	case ENTITY_REFERENCE_NODE:
		return buf.push( '&',node.nodeName,';');
	//case ENTITY_NODE:
	//case NOTATION_NODE:
	default:
		buf.push('??',node.nodeName);
	}
}
function importNode(doc,node,deep){
	var node2;
	switch (node.nodeType) {
	case ELEMENT_NODE:
		node2 = node.cloneNode(false);
		node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
	case DOCUMENT_FRAGMENT_NODE:
		break;
	case ATTRIBUTE_NODE:
		deep = true;
		break;
	//case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}
	if(!node2){
		node2 = node.cloneNode(false);//false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(importNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc,node,deep){
	var node2 = new node.constructor();
	for(var n in node){
		var v = node[n];
		if(typeof v != 'object' ){
			if(v != node2[n]){
				node2[n] = v;
			}
		}
	}
	if(node.childNodes){
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
	case ELEMENT_NODE:
		var attrs	= node.attributes;
		var attrs2	= node2.attributes = new NamedNodeMap();
		var len = attrs.length;
		attrs2._ownerElement = node2;
		for(var i=0;i<len;i++){
			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
		}
		break;	case ATTRIBUTE_NODE:
		deep = true;
	}
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(cloneNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object,key,value){
	object[key] = value;
}
//do dynamic
try{
	if(Object.defineProperty){
		Object.defineProperty(LiveNodeList.prototype,'length',{
			get:function(){
				_updateLiveList(this);
				return this.$$length;
			}
		});

		Object.defineProperty(Node.prototype,'textContent',{
			get:function(){
				return getTextContent(this);
			},

			set:function(data){
				switch(this.nodeType){
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					while(this.firstChild){
						this.removeChild(this.firstChild);
					}
					if(data || String(data)){
						this.appendChild(this.ownerDocument.createTextNode(data));
					}
					break;

				default:
					this.data = data;
					this.value = data;
					this.nodeValue = data;
				}
			}
		});
		
		function getTextContent(node){
			switch(node.nodeType){
			case ELEMENT_NODE:
			case DOCUMENT_FRAGMENT_NODE:
				var buf = [];
				node = node.firstChild;
				while(node){
					if(node.nodeType!==7 && node.nodeType !==8){
						buf.push(getTextContent(node));
					}
					node = node.nextSibling;
				}
				return buf.join('');
			default:
				return node.nodeValue;
			}
		}

		__set__ = function(object,key,value){
			//console.log(value)
			object['$$'+key] = value;
		};
	}
}catch(e){//ie8
}

//if(typeof require == 'function'){
	dom$2.DocumentType = DocumentType;
	dom$2.DOMException = DOMException;
	dom$2.DOMImplementation = DOMImplementation$1;
	dom$2.Element = Element;
	dom$2.Node = Node;
	dom$2.NodeList = NodeList;
	dom$2.XMLSerializer = XMLSerializer;

var domParser = {};

var entities$1 = {};

(function (exports) {
var freeze = conventions$2.freeze;

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
 */
exports.XML_ENTITIES = freeze({amp:'&', apos:"'", gt:'>', lt:'<', quot:'"'});

/**
 * A map of currently 241 entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see XML_ENTITIES
 * @see DOMParser.parseFromString
 * @see DOMImplementation.prototype.createHTMLDocument
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
       lt: '<',
       gt: '>',
       amp: '&',
       quot: '"',
       apos: "'",
       Agrave: "À",
       Aacute: "Á",
       Acirc: "Â",
       Atilde: "Ã",
       Auml: "Ä",
       Aring: "Å",
       AElig: "Æ",
       Ccedil: "Ç",
       Egrave: "È",
       Eacute: "É",
       Ecirc: "Ê",
       Euml: "Ë",
       Igrave: "Ì",
       Iacute: "Í",
       Icirc: "Î",
       Iuml: "Ï",
       ETH: "Ð",
       Ntilde: "Ñ",
       Ograve: "Ò",
       Oacute: "Ó",
       Ocirc: "Ô",
       Otilde: "Õ",
       Ouml: "Ö",
       Oslash: "Ø",
       Ugrave: "Ù",
       Uacute: "Ú",
       Ucirc: "Û",
       Uuml: "Ü",
       Yacute: "Ý",
       THORN: "Þ",
       szlig: "ß",
       agrave: "à",
       aacute: "á",
       acirc: "â",
       atilde: "ã",
       auml: "ä",
       aring: "å",
       aelig: "æ",
       ccedil: "ç",
       egrave: "è",
       eacute: "é",
       ecirc: "ê",
       euml: "ë",
       igrave: "ì",
       iacute: "í",
       icirc: "î",
       iuml: "ï",
       eth: "ð",
       ntilde: "ñ",
       ograve: "ò",
       oacute: "ó",
       ocirc: "ô",
       otilde: "õ",
       ouml: "ö",
       oslash: "ø",
       ugrave: "ù",
       uacute: "ú",
       ucirc: "û",
       uuml: "ü",
       yacute: "ý",
       thorn: "þ",
       yuml: "ÿ",
       nbsp: "\u00a0",
       iexcl: "¡",
       cent: "¢",
       pound: "£",
       curren: "¤",
       yen: "¥",
       brvbar: "¦",
       sect: "§",
       uml: "¨",
       copy: "©",
       ordf: "ª",
       laquo: "«",
       not: "¬",
       shy: "­­",
       reg: "®",
       macr: "¯",
       deg: "°",
       plusmn: "±",
       sup2: "²",
       sup3: "³",
       acute: "´",
       micro: "µ",
       para: "¶",
       middot: "·",
       cedil: "¸",
       sup1: "¹",
       ordm: "º",
       raquo: "»",
       frac14: "¼",
       frac12: "½",
       frac34: "¾",
       iquest: "¿",
       times: "×",
       divide: "÷",
       forall: "∀",
       part: "∂",
       exist: "∃",
       empty: "∅",
       nabla: "∇",
       isin: "∈",
       notin: "∉",
       ni: "∋",
       prod: "∏",
       sum: "∑",
       minus: "−",
       lowast: "∗",
       radic: "√",
       prop: "∝",
       infin: "∞",
       ang: "∠",
       and: "∧",
       or: "∨",
       cap: "∩",
       cup: "∪",
       'int': "∫",
       there4: "∴",
       sim: "∼",
       cong: "≅",
       asymp: "≈",
       ne: "≠",
       equiv: "≡",
       le: "≤",
       ge: "≥",
       sub: "⊂",
       sup: "⊃",
       nsub: "⊄",
       sube: "⊆",
       supe: "⊇",
       oplus: "⊕",
       otimes: "⊗",
       perp: "⊥",
       sdot: "⋅",
       Alpha: "Α",
       Beta: "Β",
       Gamma: "Γ",
       Delta: "Δ",
       Epsilon: "Ε",
       Zeta: "Ζ",
       Eta: "Η",
       Theta: "Θ",
       Iota: "Ι",
       Kappa: "Κ",
       Lambda: "Λ",
       Mu: "Μ",
       Nu: "Ν",
       Xi: "Ξ",
       Omicron: "Ο",
       Pi: "Π",
       Rho: "Ρ",
       Sigma: "Σ",
       Tau: "Τ",
       Upsilon: "Υ",
       Phi: "Φ",
       Chi: "Χ",
       Psi: "Ψ",
       Omega: "Ω",
       alpha: "α",
       beta: "β",
       gamma: "γ",
       delta: "δ",
       epsilon: "ε",
       zeta: "ζ",
       eta: "η",
       theta: "θ",
       iota: "ι",
       kappa: "κ",
       lambda: "λ",
       mu: "μ",
       nu: "ν",
       xi: "ξ",
       omicron: "ο",
       pi: "π",
       rho: "ρ",
       sigmaf: "ς",
       sigma: "σ",
       tau: "τ",
       upsilon: "υ",
       phi: "φ",
       chi: "χ",
       psi: "ψ",
       omega: "ω",
       thetasym: "ϑ",
       upsih: "ϒ",
       piv: "ϖ",
       OElig: "Œ",
       oelig: "œ",
       Scaron: "Š",
       scaron: "š",
       Yuml: "Ÿ",
       fnof: "ƒ",
       circ: "ˆ",
       tilde: "˜",
       ensp: " ",
       emsp: " ",
       thinsp: " ",
       zwnj: "‌",
       zwj: "‍",
       lrm: "‎",
       rlm: "‏",
       ndash: "–",
       mdash: "—",
       lsquo: "‘",
       rsquo: "’",
       sbquo: "‚",
       ldquo: "“",
       rdquo: "”",
       bdquo: "„",
       dagger: "†",
       Dagger: "‡",
       bull: "•",
       hellip: "…",
       permil: "‰",
       prime: "′",
       Prime: "″",
       lsaquo: "‹",
       rsaquo: "›",
       oline: "‾",
       euro: "€",
       trade: "™",
       larr: "←",
       uarr: "↑",
       rarr: "→",
       darr: "↓",
       harr: "↔",
       crarr: "↵",
       lceil: "⌈",
       rceil: "⌉",
       lfloor: "⌊",
       rfloor: "⌋",
       loz: "◊",
       spades: "♠",
       clubs: "♣",
       hearts: "♥",
       diams: "♦"
});

/**
 * @deprecated use `HTML_ENTITIES` instead
 * @see HTML_ENTITIES
 */
exports.entityMap = exports.HTML_ENTITIES;
}(entities$1));

var sax$1 = {};

var NAMESPACE$1 = conventions$2.NAMESPACE;

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;//\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0;//tag name offerring
var S_ATTR = 1;//attr name offerring 
var S_ATTR_SPACE=2;//attr name end and space offer
var S_EQ = 3;//=space?
var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
var S_ATTR_END = 5;//attr value end and no space(quot end)
var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7;//closed el<el />

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @param {string} message
 * @param {any?} locator Optional, can provide details about the location in the source
 * @constructor
 */
function ParseError$1(message, locator) {
	this.message = message;
	this.locator = locator;
	if(Error.captureStackTrace) Error.captureStackTrace(this, ParseError$1);
}
ParseError$1.prototype = new Error();
ParseError$1.prototype.name = ParseError$1.name;

function XMLReader$1(){
	
}

XMLReader$1.prototype = {
	parse:function(source,defaultNSMap,entityMap){
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap ,defaultNSMap = {});
		parse(source,defaultNSMap,entityMap,
				domBuilder,this.errorHandler);
		domBuilder.endDocument();
	}
};
function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10)
				, surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a){
		var k = a.slice(1,-1);
		if(k in entityMap){
			return entityMap[k]; 
		}else if(k.charAt(0) === '#'){
			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
		}else {
			errorHandler.error('entity not found:'+a);
			return a;
		}
	}
	function appendText(end){//has some bugs
		if(end>start){
			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
			locator&&position(start);
			domBuilder.characters(xt,0,end-start);
			start = end;
		}
	}
	function position(p,m){
		while(p>=lineEnd && (m = linePattern.exec(source))){
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = p-lineStart+1;
	}
	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g;
	var locator = domBuilder.locator;
	
	var parseStack = [{currentNSMap:defaultNSMapCopy}];
	var closeMap = {};
	var start = 0;
	while(true){
		try{
			var tagStart = source.indexOf('<',start);
			if(tagStart<0){
				if(!source.substr(start).match(/^\s*$/)){
					var doc = domBuilder.doc;
	    			var text = doc.createTextNode(source.substr(start));
	    			doc.appendChild(text);
	    			domBuilder.currentElement = text;
				}
				return;
			}
			if(tagStart>start){
				appendText(tagStart);
			}
			switch(source.charAt(tagStart+1)){
			case '/':
				var end = source.indexOf('>',tagStart+3);
				var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, '');
				var config = parseStack.pop();
				if(end<0){
					
	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
	        		end = tagStart+1+tagName.length;
	        	}else if(tagName.match(/\s</)){
	        		tagName = tagName.replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
	        		end = tagStart+1+tagName.length;
				}
				var localNSMap = config.localNSMap;
				var endMatch = config.tagName == tagName;
				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase();
		        if(endIgnoreCaseMach){
		        	domBuilder.endElement(config.uri,config.localName,tagName);
					if(localNSMap){
						for(var prefix in localNSMap){
							domBuilder.endPrefixMapping(prefix) ;
						}
					}
					if(!endMatch){
		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName ); // No known test case
					}
		        }else {
		        	parseStack.push(config);
		        }
				
				end++;
				break;
				// end elment
			case '?':// <?...?>
				locator&&position(tagStart);
				end = parseInstruction(source,tagStart,domBuilder);
				break;
			case '!':// <!doctype,<![CDATA,<!--
				locator&&position(tagStart);
				end = parseDCC(source,tagStart,domBuilder,errorHandler);
				break;
			default:
				locator&&position(tagStart);
				var el = new ElementAttributes();
				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
				//elStartEnd
				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
				var len = el.length;
				
				
				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
					el.closed = true;
					if(!entityMap.nbsp){
						errorHandler.warning('unclosed xml attribute');
					}
				}
				if(locator && len){
					var locator2 = copyLocator(locator,{});
					//try{//attribute position fixed
					for(var i = 0;i<len;i++){
						var a = el[i];
						position(a.offset);
						a.locator = copyLocator(locator,{});
					}
					domBuilder.locator = locator2;
					if(appendElement$1(el,domBuilder,currentNSMap)){
						parseStack.push(el);
					}
					domBuilder.locator = locator;
				}else {
					if(appendElement$1(el,domBuilder,currentNSMap)){
						parseStack.push(el);
					}
				}

				if (NAMESPACE$1.isHTML(el.uri) && !el.closed) {
					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder);
				} else {
					end++;
				}
			}
		}catch(e){
			if (e instanceof ParseError$1) {
				throw e;
			}
			errorHandler.error('element parse error: '+e);
			end = -1;
		}
		if(end>start){
			start = end;
		}else {
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(Math.max(tagStart,start)+1);
		}
	}
}
function copyLocator(f,t){
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){

	/**
	 * @param {string} qname
	 * @param {string} value
	 * @param {number} startIndex
	 */
	function addAttribute(qname, value, startIndex) {
		if (el.attributeNames.hasOwnProperty(qname)) {
			errorHandler.fatalError('Attribute ' + qname + ' redefined');
		}
		el.addValue(qname, value, startIndex);
	}
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG;//status
	while(true){
		var c = source.charAt(p);
		switch(c){
		case '=':
			if(s === S_ATTR){//attrName
				attrName = source.slice(start,p);
				s = S_EQ;
			}else if(s === S_ATTR_SPACE){
				s = S_EQ;
			}else {
				//fatalError: equal must after attrName or space after attrName
				throw new Error('attribute equal must after attrName'); // No known test case
			}
			break;
		case '\'':
		case '"':
			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
				){//equal
				if(s === S_ATTR){
					errorHandler.warning('attribute value must after "="');
					attrName = source.slice(start,p);
				}
				start = p+1;
				p = source.indexOf(c,start);
				if(p>0){
					value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
					addAttribute(attrName, value, start-1);
					s = S_ATTR_END;
				}else {
					//fatalError: no end quot match
					throw new Error('attribute value no end \''+c+'\' match');
				}
			}else if(s == S_ATTR_NOQUOT_VALUE){
				value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
				//console.log(attrName,value,start,p)
				addAttribute(attrName, value, start);
				//console.dir(el)
				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
				start = p+1;
				s = S_ATTR_END;
			}else {
				//fatalError: no equal before
				throw new Error('attribute value must after "="'); // No known test case
			}
			break;
		case '/':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				s =S_TAG_CLOSE;
				el.closed = true;
			case S_ATTR_NOQUOT_VALUE:
			case S_ATTR:
			case S_ATTR_SPACE:
				break;
			//case S_EQ:
			default:
				throw new Error("attribute invalid close char('/')") // No known test case
			}
			break;
		case ''://end document
			errorHandler.error('unexpected end of input');
			if(s == S_TAG){
				el.setTagName(source.slice(start,p));
			}
			return p;
		case '>':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				break;//normal
			case S_ATTR_NOQUOT_VALUE://Compatible state
			case S_ATTR:
				value = source.slice(start,p);
				if(value.slice(-1) === '/'){
					el.closed  = true;
					value = value.slice(0,-1);
				}
			case S_ATTR_SPACE:
				if(s === S_ATTR_SPACE){
					value = attrName;
				}
				if(s == S_ATTR_NOQUOT_VALUE){
					errorHandler.warning('attribute "'+value+'" missed quot(")!');
					addAttribute(attrName, value.replace(/&#?\w+;/g,entityReplacer), start);
				}else {
					if(!NAMESPACE$1.isHTML(currentNSMap['']) || !value.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!');
					}
					addAttribute(value, value, start);
				}
				break;
			case S_EQ:
				throw new Error('attribute value missed!!');
			}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
			return p;
		/*xml space '\x20' | #x9 | #xD | #xA; */
		case '\u0080':
			c = ' ';
		default:
			if(c<= ' '){//space
				switch(s){
				case S_TAG:
					el.setTagName(source.slice(start,p));//tagName
					s = S_TAG_SPACE;
					break;
				case S_ATTR:
					attrName = source.slice(start,p);
					s = S_ATTR_SPACE;
					break;
				case S_ATTR_NOQUOT_VALUE:
					var value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					addAttribute(attrName, value, start);
				case S_ATTR_END:
					s = S_TAG_SPACE;
					break;
				//case S_TAG_SPACE:
				//case S_EQ:
				//case S_ATTR_SPACE:
				//	void();break;
				//case S_TAG_CLOSE:
					//ignore warning
				}
			}else {//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
				switch(s){
				//case S_TAG:void();break;
				//case S_ATTR:void();break;
				//case S_ATTR_NOQUOT_VALUE:void();break;
				case S_ATTR_SPACE:
					el.tagName;
					if (!NAMESPACE$1.isHTML(currentNSMap['']) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!');
					}
					addAttribute(attrName, attrName, start);
					start = p;
					s = S_ATTR;
					break;
				case S_ATTR_END:
					errorHandler.warning('attribute space is required"'+attrName+'"!!');
				case S_TAG_SPACE:
					s = S_ATTR;
					start = p;
					break;
				case S_EQ:
					s = S_ATTR_NOQUOT_VALUE;
					start = p;
					break;
				case S_TAG_CLOSE:
					throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
		}//end outer switch
		//console.log('p++',p)
		p++;
	}
}
/**
 * @return true if has new namespace define
 */
function appendElement$1(el,domBuilder,currentNSMap){
	var tagName = el.tagName;
	var localNSMap = null;
	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while(i--){
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if(nsp>0){
			var prefix = a.prefix = qName.slice(0,nsp);
			var localName = qName.slice(nsp+1);
			var nsPrefix = prefix === 'xmlns' && localName;
		}else {
			localName = qName;
			prefix = null;
			nsPrefix = qName === 'xmlns' && '';
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName ;
		//prefix == null for no ns prefix attribute 
		if(nsPrefix !== false){//hack!!
			if(localNSMap == null){
				localNSMap = {};
				//console.log(currentNSMap,0)
				_copy(currentNSMap,currentNSMap={});
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = NAMESPACE$1.XMLNS;
			domBuilder.startPrefixMapping(nsPrefix, value); 
		}
	}
	var i = el.length;
	while(i--){
		a = el[i];
		var prefix = a.prefix;
		if(prefix){//no prefix attribute has no namespace
			if(prefix === 'xml'){
				a.uri = NAMESPACE$1.XML;
			}if(prefix !== 'xmlns'){
				a.uri = currentNSMap[prefix || ''];
				
				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if(nsp>0){
		prefix = el.prefix = tagName.slice(0,nsp);
		localName = el.localName = tagName.slice(nsp+1);
	}else {
		prefix = null;//important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns,localName,tagName,el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){
		domBuilder.endElement(ns,localName,tagName);
		if(localNSMap){
			for(prefix in localNSMap){
				domBuilder.endPrefixMapping(prefix); 
			}
		}
	}else {
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}
function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
	if(/^(?:script|textarea)$/i.test(tagName)){
		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
		var text = source.substring(elStartEnd+1,elEndStart);
		if(/[&<]/.test(text)){
			if(/^script$/i.test(tagName)){
				//if(!/\]\]>/.test(text)){
					//lexHandler.startCDATA();
					domBuilder.characters(text,0,text.length);
					//lexHandler.endCDATA();
					return elEndStart;
				//}
			}//}else{//text area
				text = text.replace(/&#?\w+;/g,entityReplacer);
				domBuilder.characters(text,0,text.length);
				return elEndStart;
			//}
			
		}
	}
	return elStartEnd+1;
}
function fixSelfClosed(source,elStartEnd,tagName,closeMap){
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if(pos == null){
		//console.log(tagName)
		pos =  source.lastIndexOf('</'+tagName+'>');
		if(pos<elStartEnd){//忘记闭合
			pos = source.lastIndexOf('</'+tagName);
		}
		closeMap[tagName] =pos;
	}
	return pos<elStartEnd;
	//} 
}
function _copy(source,target){
	for(var n in source){target[n] = source[n];}
}
function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
	var next= source.charAt(start+2);
	switch(next){
	case '-':
		if(source.charAt(start + 3) === '-'){
			var end = source.indexOf('-->',start+4);
			//append comment source.substring(4,end)//<!--
			if(end>start){
				domBuilder.comment(source,start+4,end-start-4);
				return end+3;
			}else {
				errorHandler.error("Unclosed comment");
				return -1;
			}
		}else {
			//error
			return -1;
		}
	default:
		if(source.substr(start+3,6) == 'CDATA['){
			var end = source.indexOf(']]>',start+9);
			domBuilder.startCDATA();
			domBuilder.characters(source,start+9,end-start-9);
			domBuilder.endCDATA(); 
			return end+3;
		}
		//<!DOCTYPE
		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
		var matchs = split(source,start);
		var len = matchs.length;
		if(len>1 && /!doctype/i.test(matchs[0][0])){
			var name = matchs[1][0];
			var pubid = false;
			var sysid = false;
			if(len>3){
				if(/^public$/i.test(matchs[2][0])){
					pubid = matchs[3][0];
					sysid = len>4 && matchs[4][0];
				}else if(/^system$/i.test(matchs[2][0])){
					sysid = matchs[3][0];
				}
			}
			var lastMatch = matchs[len-1];
			domBuilder.startDTD(name, pubid, sysid);
			domBuilder.endDTD();
			
			return lastMatch.index+lastMatch[0].length
		}
	}
	return -1;
}



function parseInstruction(source,start,domBuilder){
	var end = source.indexOf('?>',start);
	if(end){
		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if(match){
			match[0].length;
			domBuilder.processingInstruction(match[1], match[2]) ;
			return end+2;
		}else {//error
			return -1;
		}
	}
	return -1;
}

function ElementAttributes(){
	this.attributeNames = {};
}
ElementAttributes.prototype = {
	setTagName:function(tagName){
		if(!tagNamePattern.test(tagName)){
			throw new Error('invalid tagName:'+tagName)
		}
		this.tagName = tagName;
	},
	addValue:function(qName, value, offset) {
		if(!tagNamePattern.test(qName)){
			throw new Error('invalid attribute:'+qName)
		}
		this.attributeNames[qName] = this.length;
		this[this.length++] = {qName:qName,value:value,offset:offset};
	},
	length:0,
	getLocalName:function(i){return this[i].localName},
	getLocator:function(i){return this[i].locator},
	getQName:function(i){return this[i].qName},
	getURI:function(i){return this[i].uri},
	getValue:function(i){return this[i].value}
//	,getIndex:function(uri, localName)){
//		if(localName){
//			
//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
};



function split(source,start){
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source);//skip <
	while(match = reg.exec(source)){
		buf.push(match);
		if(match[1])return buf;
	}
}

sax$1.XMLReader = XMLReader$1;
sax$1.ParseError = ParseError$1;

var conventions = conventions$2;
var dom$1 = dom$2;
var entities = entities$1;
var sax = sax$1;

var DOMImplementation = dom$1.DOMImplementation;

var NAMESPACE = conventions.NAMESPACE;

var ParseError = sax.ParseError;
var XMLReader = sax.XMLReader;

function DOMParser(options){
	this.options = options ||{locator:{}};
}

DOMParser.prototype.parseFromString = function(source,mimeType){
	var options = this.options;
	var sax =  new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns||{};
	var isHTML = /\/x?html?$/.test(mimeType);//mimeType.toLowerCase().indexOf('html') > -1;
  	var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
	if(locator){
		domBuilder.setDocumentLocator(locator);
	}

	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if(isHTML){
		defaultNSMap[''] = NAMESPACE.HTML;
	}
	defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
	if(source && typeof source === 'string'){
		sax.parse(source,defaultNSMap,entityMap);
	}else {
		sax.errorHandler.error("invalid doc source");
	}
	return domBuilder.doc;
};
function buildErrorHandler(errorImpl,domBuilder,locator){
	if(!errorImpl){
		if(domBuilder instanceof DOMHandler){
			return domBuilder;
		}
		errorImpl = domBuilder ;
	}
	var errorHandler = {};
	var isCallback = errorImpl instanceof Function;
	locator = locator||{};
	function build(key){
		var fn = errorImpl[key];
		if(!fn && isCallback){
			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg);}:errorImpl;
		}
		errorHandler[key] = fn && function(msg){
			fn('[xmldom '+key+']\t'+msg+_locator(locator));
		}||function(){};
	}
	build('warning');
	build('error');
	build('fatalError');
	return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler
 *
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
    this.cdata = false;
}
function position(locator,node){
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */
DOMHandler.prototype = {
	startDocument : function() {
    	this.doc = new DOMImplementation().createDocument(null, null, null);
    	if (this.locator) {
        	this.doc.documentURI = this.locator.systemId;
    	}
	},
	startElement:function(namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
	    var el = doc.createElementNS(namespaceURI, qName||localName);
	    var len = attrs.length;
	    appendElement(this, el);
	    this.currentElement = el;

		this.locator && position(this.locator,el);
	    for (var i = 0 ; i < len; i++) {
	        var namespaceURI = attrs.getURI(i);
	        var value = attrs.getValue(i);
	        var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator &&position(attrs.getLocator(i),attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr);
	    }
	},
	endElement:function(namespaceURI, localName, qName) {
		var current = this.currentElement;
		current.tagName;
		this.currentElement = current.parentNode;
	},
	startPrefixMapping:function(prefix, uri) {
	},
	endPrefixMapping:function(prefix) {
	},
	processingInstruction:function(target, data) {
	    var ins = this.doc.createProcessingInstruction(target, data);
	    this.locator && position(this.locator,ins);
	    appendElement(this, ins);
	},
	ignorableWhitespace:function(ch, start, length) {
	},
	characters:function(chars, start, length) {
		chars = _toString.apply(this,arguments);
		//console.log(chars)
		if(chars){
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if(this.currentElement){
				this.currentElement.appendChild(charNode);
			}else if(/^\s*$/.test(chars)){
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator,charNode);
		}
	},
	skippedEntity:function(name) {
	},
	endDocument:function() {
		this.doc.normalize();
	},
	setDocumentLocator:function (locator) {
	    if(this.locator = locator){// && !('lineNumber' in locator)){
	    	locator.lineNumber = 0;
	    }
	},
	//LexicalHandler
	comment:function(chars, start, length) {
		chars = _toString.apply(this,arguments);
	    var comm = this.doc.createComment(chars);
	    this.locator && position(this.locator,comm);
	    appendElement(this, comm);
	},

	startCDATA:function() {
	    //used in characters() methods
	    this.cdata = true;
	},
	endCDATA:function() {
	    this.cdata = false;
	},

	startDTD:function(name, publicId, systemId) {
		var impl = this.doc.implementation;
	    if (impl && impl.createDocumentType) {
	        var dt = impl.createDocumentType(name, publicId, systemId);
	        this.locator && position(this.locator,dt);
	        appendElement(this, dt);
					this.doc.doctype = dt;
	    }
	},
	/**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning:function(error) {
		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
	},
	error:function(error) {
		console.error('[xmldom error]\t'+error,_locator(this.locator));
	},
	fatalError:function(error) {
		throw new ParseError(error, this.locator);
	}
};
function _locator(l){
	if(l){
		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
	}
}
function _toString(chars,start,length){
	if(typeof chars == 'string'){
		return chars.substr(start,length)
	}else {//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if(chars.length >= start+length || start){
			return new java.lang.String(chars,start,length)+'';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
	DOMHandler.prototype[key] = function(){return null};
});

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement (hander,node) {
    if (!hander.currentElement) {
        hander.doc.appendChild(node);
    } else {
        hander.currentElement.appendChild(node);
    }
}//appendChild and setAttributeNS are preformance key

domParser.__DOMHandler = DOMHandler;
domParser.DOMParser = DOMParser;

/**
 * @deprecated Import/require from main entry point instead
 */
domParser.DOMImplementation = dom$1.DOMImplementation;

/**
 * @deprecated Import/require from main entry point instead
 */
domParser.XMLSerializer = dom$1.XMLSerializer;

var dom = dom$2;
lib$2.DOMImplementation = dom.DOMImplementation;
lib$2.XMLSerializer = dom.XMLSerializer;
lib$2.DOMParser = domParser.DOMParser;

var parseJson$1 = {};

Object.defineProperty(parseJson$1, "__esModule", { value: true });
parseJson$1.parseJson = void 0;
/**
 * Parses a given string into JSON.
 * Gracefully handles invalid JSON by returning `null`.
 */
function parseJson(data) {
    try {
        var json = JSON.parse(data);
        return json;
    }
    catch (_) {
        return null;
    }
}
parseJson$1.parseJson = parseJson;

var bufferFrom$1 = {};

Object.defineProperty(bufferFrom$1, "__esModule", { value: true });
bufferFrom$1.bufferFrom = void 0;
/**
 * Convert a given string into a `Uint8Array`.
 * We don't use `TextEncoder` because it's unavailable in some environments.
 */
function bufferFrom(init) {
    var encodedString = encodeURIComponent(init);
    var binaryString = encodedString.replace(/%([0-9A-F]{2})/g, function (_, char) {
        return String.fromCharCode(('0x' + char));
    });
    var buffer = new Uint8Array(binaryString.length);
    Array.prototype.forEach.call(binaryString, function (char, index) {
        buffer[index] = char.charCodeAt(0);
    });
    return buffer;
}
bufferFrom$1.bufferFrom = bufferFrom;

var createEvent$1 = {};

var EventPolyfill$1 = {};

Object.defineProperty(EventPolyfill$1, "__esModule", { value: true });
EventPolyfill$1.EventPolyfill = void 0;
var EventPolyfill = /** @class */ (function () {
    function EventPolyfill(type, options) {
        this.AT_TARGET = 0;
        this.BUBBLING_PHASE = 0;
        this.CAPTURING_PHASE = 0;
        this.NONE = 0;
        this.type = '';
        this.srcElement = null;
        this.currentTarget = null;
        this.eventPhase = 0;
        this.isTrusted = true;
        this.composed = false;
        this.cancelable = true;
        this.defaultPrevented = false;
        this.bubbles = true;
        this.lengthComputable = true;
        this.loaded = 0;
        this.total = 0;
        this.cancelBubble = false;
        this.returnValue = true;
        this.type = type;
        this.target = (options === null || options === void 0 ? void 0 : options.target) || null;
        this.currentTarget = (options === null || options === void 0 ? void 0 : options.currentTarget) || null;
        this.timeStamp = Date.now();
    }
    EventPolyfill.prototype.composedPath = function () {
        return [];
    };
    EventPolyfill.prototype.initEvent = function (type, bubbles, cancelable) {
        this.type = type;
        this.bubbles = !!bubbles;
        this.cancelable = !!cancelable;
    };
    EventPolyfill.prototype.preventDefault = function () {
        this.defaultPrevented = true;
    };
    EventPolyfill.prototype.stopPropagation = function () { };
    EventPolyfill.prototype.stopImmediatePropagation = function () { };
    return EventPolyfill;
}());
EventPolyfill$1.EventPolyfill = EventPolyfill;

var ProgressEventPolyfill$1 = {};

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(ProgressEventPolyfill$1, "__esModule", { value: true });
ProgressEventPolyfill$1.ProgressEventPolyfill = void 0;
var EventPolyfill_1$1 = EventPolyfill$1;
var ProgressEventPolyfill = /** @class */ (function (_super) {
    __extends$1(ProgressEventPolyfill, _super);
    function ProgressEventPolyfill(type, init) {
        var _this = _super.call(this, type) || this;
        _this.lengthComputable = (init === null || init === void 0 ? void 0 : init.lengthComputable) || false;
        _this.composed = (init === null || init === void 0 ? void 0 : init.composed) || false;
        _this.loaded = (init === null || init === void 0 ? void 0 : init.loaded) || 0;
        _this.total = (init === null || init === void 0 ? void 0 : init.total) || 0;
        return _this;
    }
    return ProgressEventPolyfill;
}(EventPolyfill_1$1.EventPolyfill));
ProgressEventPolyfill$1.ProgressEventPolyfill = ProgressEventPolyfill;

Object.defineProperty(createEvent$1, "__esModule", { value: true });
createEvent$1.createEvent = void 0;
var EventPolyfill_1 = EventPolyfill$1;
var ProgressEventPolyfill_1 = ProgressEventPolyfill$1;
var SUPPORTS_PROGRESS_EVENT = typeof ProgressEvent !== 'undefined';
function createEvent(target, type, init) {
    var progressEvents = [
        'error',
        'progress',
        'loadstart',
        'loadend',
        'load',
        'timeout',
        'abort',
    ];
    /**
     * `ProgressEvent` is not supported in React Native.
     * @see https://github.com/mswjs/interceptors/issues/40
     */
    var ProgressEventClass = SUPPORTS_PROGRESS_EVENT
        ? ProgressEvent
        : ProgressEventPolyfill_1.ProgressEventPolyfill;
    var event = progressEvents.includes(type)
        ? new ProgressEventClass(type, {
            lengthComputable: true,
            loaded: (init === null || init === void 0 ? void 0 : init.loaded) || 0,
            total: (init === null || init === void 0 ? void 0 : init.total) || 0,
        })
        : new EventPolyfill_1.EventPolyfill(type, {
            target: target,
            currentTarget: target,
        });
    return event;
}
createEvent$1.createEvent = createEvent;

var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (commonjsGlobal && commonjsGlobal.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(XMLHttpRequestOverride, "__esModule", { value: true });
XMLHttpRequestOverride.createXMLHttpRequestOverride = void 0;
/**
 * XMLHttpRequest override class.
 * Inspired by https://github.com/marvinhagemeister/xhr-mocklet.
 */
var until_1$1 = lib$3;
var headers_polyfill_1 = lib$5;
var xmldom_1 = lib$2;
var parseJson_1 = parseJson$1;
var toIsoResponse_1 = toIsoResponse$1;
var uuid_1 = uuid;
var bufferFrom_1 = bufferFrom$1;
var createEvent_1 = createEvent$1;
var createDebug = browser.exports;
var createXMLHttpRequestOverride = function (options) {
    var _a;
    var pureXMLHttpRequest = options.pureXMLHttpRequest, observer = options.observer, resolver = options.resolver;
    var debug = createDebug('XHR');
    return _a = /** @class */ (function () {
            function XMLHttpRequestOverride() {
                // Collection of events modified by `addEventListener`/`removeEventListener` calls.
                this._events = [];
                this.UNSENT = 0;
                this.OPENED = 1;
                this.HEADERS_RECEIVED = 2;
                this.LOADING = 3;
                this.DONE = 4;
                this.onreadystatechange = null;
                /* Events */
                this.onabort = null;
                this.onerror = null;
                this.onload = null;
                this.onloadend = null;
                this.onloadstart = null;
                this.onprogress = null;
                this.ontimeout = null;
                this.url = '';
                this.method = 'GET';
                this.readyState = this.UNSENT;
                this.withCredentials = false;
                this.status = 200;
                this.statusText = 'OK';
                this.data = '';
                this.response = '';
                this.responseType = 'text';
                this.responseText = '';
                this.responseXML = null;
                this.responseURL = '';
                this.upload = {};
                this.timeout = 0;
                this._requestHeaders = new headers_polyfill_1.Headers();
                this._responseHeaders = new headers_polyfill_1.Headers();
            }
            XMLHttpRequestOverride.prototype.setReadyState = function (nextState) {
                if (nextState === this.readyState) {
                    return;
                }
                debug('readyState change %d -> %d', this.readyState, nextState);
                this.readyState = nextState;
                if (nextState !== this.UNSENT) {
                    debug('triggerring readystate change...');
                    this.trigger('readystatechange');
                }
            };
            /**
             * Triggers both direct callback and attached event listeners
             * for the given event.
             */
            XMLHttpRequestOverride.prototype.trigger = function (eventName, options) {
                var e_1, _a;
                debug('trigger "%s" (%d)', eventName, this.readyState);
                debug('resolve listener for event "%s"', eventName);
                // @ts-expect-error XMLHttpRequest class has no index signature.
                var callback = this["on" + eventName];
                callback === null || callback === void 0 ? void 0 : callback.call(this, createEvent_1.createEvent(this, eventName, options));
                try {
                    for (var _b = __values(this._events), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var event_1 = _c.value;
                        if (event_1.name === eventName) {
                            debug('calling mock event listener "%s" (%d)', eventName, this.readyState);
                            event_1.listener.call(this, createEvent_1.createEvent(this, eventName, options));
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return this;
            };
            XMLHttpRequestOverride.prototype.reset = function () {
                debug('reset');
                this.setReadyState(this.UNSENT);
                this.status = 200;
                this.statusText = 'OK';
                this.data = '';
                this.response = null;
                this.responseText = null;
                this.responseXML = null;
                this._requestHeaders = new headers_polyfill_1.Headers();
                this._responseHeaders = new headers_polyfill_1.Headers();
            };
            XMLHttpRequestOverride.prototype.open = function (method, url, async, user, password) {
                if (async === void 0) { async = true; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        debug = createDebug("XHR " + method + " " + url);
                        debug('open', { method: method, url: url, async: async, user: user, password: password });
                        this.reset();
                        this.setReadyState(this.OPENED);
                        if (typeof url === 'undefined') {
                            this.url = method;
                            this.method = 'GET';
                        }
                        else {
                            this.url = url;
                            this.method = method;
                            this.async = async;
                            this.user = user;
                            this.password = password;
                        }
                        return [2 /*return*/];
                    });
                });
            };
            XMLHttpRequestOverride.prototype.send = function (data) {
                var _this = this;
                debug('send %s %s', this.method, this.url);
                this.data = data || '';
                var url;
                try {
                    url = new URL(this.url);
                }
                catch (error) {
                    // Assume a relative URL, if construction of a new `URL` instance fails.
                    // Since `XMLHttpRequest` always executed in a DOM-like environment,
                    // resolve the relative request URL against the current window location.
                    url = new URL(this.url, window.location.href);
                }
                debug('request headers', this._requestHeaders);
                // Create an intercepted request instance exposed to the request intercepting middleware.
                var isoRequest = {
                    id: uuid_1.uuidv4(),
                    url: url,
                    method: this.method,
                    headers: this._requestHeaders,
                    credentials: this.withCredentials ? 'include' : 'omit',
                    body: this.data,
                };
                observer.emit('request', isoRequest);
                debug('awaiting mocked response...');
                Promise.resolve(until_1$1.until(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, resolver(isoRequest, this)];
                }); }); })).then(function (_a) {
                    var _b;
                    var _c = __read(_a, 2), middlewareException = _c[0], mockedResponse = _c[1];
                    // When the request middleware throws an exception, error the request.
                    // This cancels the request and is similar to a network error.
                    if (middlewareException) {
                        debug('middleware function threw an exception!', middlewareException);
                        // No way to propagate the actual error message.
                        _this.trigger('error');
                        _this.abort();
                        return;
                    }
                    // Return a mocked response, if provided in the middleware.
                    if (mockedResponse) {
                        debug('received mocked response', mockedResponse);
                        // Trigger a loadstart event to indicate the initialization of the fetch.
                        _this.trigger('loadstart');
                        _this.status = mockedResponse.status || 200;
                        _this.statusText = mockedResponse.statusText || 'OK';
                        _this._responseHeaders = mockedResponse.headers
                            ? headers_polyfill_1.objectToHeaders(mockedResponse.headers)
                            : new headers_polyfill_1.Headers();
                        debug('set response status', _this.status, _this.statusText);
                        debug('set response headers', _this._responseHeaders);
                        // Mark that response headers has been received
                        // and trigger a ready state event to reflect received headers
                        // in a custom `onreadystatechange` callback.
                        _this.setReadyState(_this.HEADERS_RECEIVED);
                        debug('response type', _this.responseType);
                        _this.response = _this.getResponseBody(mockedResponse.body);
                        _this.responseText = mockedResponse.body || '';
                        _this.responseXML = _this.getResponseXML();
                        debug('set response body', _this.response);
                        if (mockedResponse.body && _this.response) {
                            _this.setReadyState(_this.LOADING);
                            // Presense of the mocked response implies a response body (not null).
                            // Presense of the coerced `this.response` implies the mocked body is valid.
                            var bodyBuffer = bufferFrom_1.bufferFrom(mockedResponse.body);
                            // Trigger a progress event based on the mocked response body.
                            _this.trigger('progress', {
                                loaded: bodyBuffer.length,
                                total: bodyBuffer.length,
                            });
                        }
                        /**
                         * Explicitly mark the request as done so its response never hangs.
                         * @see https://github.com/mswjs/interceptors/issues/13
                         */
                        _this.setReadyState(_this.DONE);
                        // Trigger a load event to indicate the fetch has succeeded.
                        _this.trigger('load');
                        // Trigger a loadend event to indicate the fetch has completed.
                        _this.trigger('loadend');
                        observer.emit('response', isoRequest, toIsoResponse_1.toIsoResponse(mockedResponse));
                    }
                    else {
                        debug('no mocked response received!');
                        // Perform an original request, when the request middleware returned no mocked response.
                        var originalRequest_1 = new pureXMLHttpRequest();
                        debug('opening an original request %s %s', _this.method, _this.url);
                        originalRequest_1.open(_this.method, _this.url, (_b = _this.async) !== null && _b !== void 0 ? _b : true, _this.user, _this.password);
                        // Reflect a successful state of the original request
                        // on the patched instance.
                        originalRequest_1.addEventListener('load', function () {
                            debug('original "onload"');
                            _this.status = originalRequest_1.status;
                            _this.statusText = originalRequest_1.statusText;
                            _this.responseURL = originalRequest_1.responseURL;
                            _this.responseType = originalRequest_1.responseType;
                            _this.response = originalRequest_1.response;
                            _this.responseText = originalRequest_1.responseText;
                            _this.responseXML = originalRequest_1.responseXML;
                            debug('set mock request readyState to DONE');
                            // Explicitly mark the mocked request instance as done
                            // so the response never hangs.
                            /**
                             * @note `readystatechange` listener is called TWICE
                             * in the case of unhandled request.
                             */
                            _this.setReadyState(_this.DONE);
                            debug('received original response', _this.status, _this.statusText);
                            debug('original response body:', _this.response);
                            var responseHeaders = originalRequest_1.getAllResponseHeaders();
                            debug('original response headers:\n', responseHeaders);
                            _this._responseHeaders = headers_polyfill_1.stringToHeaders(responseHeaders);
                            debug('original response headers (normalized)', _this._responseHeaders);
                            debug('original response finished');
                            observer.emit('response', isoRequest, {
                                status: originalRequest_1.status,
                                statusText: originalRequest_1.statusText,
                                headers: _this._responseHeaders,
                                body: originalRequest_1.response,
                            });
                        });
                        // Assign callbacks and event listeners from the intercepted XHR instance
                        // to the original XHR instance.
                        _this.propagateCallbacks(originalRequest_1);
                        _this.propagateListeners(originalRequest_1);
                        _this.propagateHeaders(originalRequest_1, _this._requestHeaders);
                        if (_this.async) {
                            originalRequest_1.timeout = _this.timeout;
                        }
                        debug('send', _this.data);
                        originalRequest_1.send(_this.data);
                    }
                });
            };
            XMLHttpRequestOverride.prototype.abort = function () {
                debug('abort');
                if (this.readyState > this.UNSENT && this.readyState < this.DONE) {
                    this.setReadyState(this.UNSENT);
                    this.trigger('abort');
                }
            };
            XMLHttpRequestOverride.prototype.dispatchEvent = function () {
                return false;
            };
            XMLHttpRequestOverride.prototype.setRequestHeader = function (name, value) {
                debug('set request header "%s" to "%s"', name, value);
                this._requestHeaders.append(name, value);
            };
            XMLHttpRequestOverride.prototype.getResponseHeader = function (name) {
                debug('get response header "%s"', name);
                if (this.readyState < this.HEADERS_RECEIVED) {
                    debug('cannot return a header: headers not received (state: %s)', this.readyState);
                    return null;
                }
                var headerValue = this._responseHeaders.get(name);
                debug('resolved response header "%s" to "%s"', name, headerValue, this._responseHeaders);
                return headerValue;
            };
            XMLHttpRequestOverride.prototype.getAllResponseHeaders = function () {
                debug('get all response headers');
                if (this.readyState < this.HEADERS_RECEIVED) {
                    debug('cannot return headers: headers not received (state: %s)', this.readyState);
                    return '';
                }
                return headers_polyfill_1.headersToString(this._responseHeaders);
            };
            XMLHttpRequestOverride.prototype.addEventListener = function (name, listener) {
                debug('addEventListener', name, listener);
                this._events.push({
                    name: name,
                    listener: listener,
                });
            };
            XMLHttpRequestOverride.prototype.removeEventListener = function (name, listener) {
                debug('removeEventListener', name, listener);
                this._events = this._events.filter(function (storedEvent) {
                    return storedEvent.name !== name && storedEvent.listener !== listener;
                });
            };
            XMLHttpRequestOverride.prototype.overrideMimeType = function () { };
            /**
             * Resolves the response based on the `responseType` value.
             */
            XMLHttpRequestOverride.prototype.getResponseBody = function (body) {
                // Handle an improperly set "null" value of the mocked response body.
                var textBody = body !== null && body !== void 0 ? body : '';
                debug('coerced response body to', textBody);
                switch (this.responseType) {
                    case 'json': {
                        debug('resolving response body as JSON');
                        return parseJson_1.parseJson(textBody);
                    }
                    case 'blob': {
                        var blobType = this.getResponseHeader('content-type') || 'text/plain';
                        debug('resolving response body as Blob', { type: blobType });
                        return new Blob([textBody], {
                            type: blobType,
                        });
                    }
                    case 'arraybuffer': {
                        debug('resolving response body as ArrayBuffer');
                        var arrayBuffer = bufferFrom_1.bufferFrom(textBody);
                        return arrayBuffer;
                    }
                    default:
                        return textBody;
                }
            };
            XMLHttpRequestOverride.prototype.getResponseXML = function () {
                var contentType = this.getResponseHeader('Content-Type');
                if (contentType === 'application/xml' || contentType === 'text/xml') {
                    return new xmldom_1.DOMParser().parseFromString(this.responseText, contentType);
                }
                return null;
            };
            /**
             * Propagates mock XMLHttpRequest instance callbacks
             * to the given XMLHttpRequest instance.
             */
            XMLHttpRequestOverride.prototype.propagateCallbacks = function (request) {
                request.onabort = this.abort;
                request.onerror = this.onerror;
                request.ontimeout = this.ontimeout;
                request.onload = this.onload;
                request.onloadstart = this.onloadstart;
                request.onloadend = this.onloadend;
                request.onprogress = this.onprogress;
                request.onreadystatechange = this.onreadystatechange;
            };
            /**
             * Propagates the mock XMLHttpRequest instance listeners
             * to the given XMLHttpRequest instance.
             */
            XMLHttpRequestOverride.prototype.propagateListeners = function (request) {
                debug('propagating request listeners (%d) to the original request', this._events.length, this._events);
                this._events.forEach(function (_a) {
                    var name = _a.name, listener = _a.listener;
                    request.addEventListener(name, listener);
                });
            };
            XMLHttpRequestOverride.prototype.propagateHeaders = function (request, headers) {
                debug('propagating request headers to the original request', headers);
                // Preserve the request headers casing.
                Object.entries(headers.raw()).forEach(function (_a) {
                    var _b = __read(_a, 2), name = _b[0], value = _b[1];
                    debug('setting "%s" (%s) header on the original request', name, value);
                    request.setRequestHeader(name, value);
                });
            };
            return XMLHttpRequestOverride;
        }()),
        /* Request state */
        _a.UNSENT = 0,
        _a.OPENED = 1,
        _a.HEADERS_RECEIVED = 2,
        _a.LOADING = 3,
        _a.DONE = 4,
        _a;
};
XMLHttpRequestOverride.createXMLHttpRequestOverride = createXMLHttpRequestOverride;

Object.defineProperty(XMLHttpRequest, "__esModule", { value: true });
var interceptXMLHttpRequest_1 = XMLHttpRequest.interceptXMLHttpRequest = void 0;
var XMLHttpRequestOverride_1 = XMLHttpRequestOverride;
var debug = browser.exports('XHR');
var pureXMLHttpRequest = 
// Although executed in node, certain processes emulate the DOM-like environment
// (i.e. `js-dom` in Jest). The `window` object would be avilable in such environments.
typeof window === 'undefined' ? undefined : window.XMLHttpRequest;
/**
 * Intercepts requests issued via `XMLHttpRequest`.
 */
var interceptXMLHttpRequest = function (observer, resolver) {
    if (pureXMLHttpRequest) {
        debug('patching "XMLHttpRequest" module...');
        var XMLHttpRequestOverride = XMLHttpRequestOverride_1.createXMLHttpRequestOverride({
            pureXMLHttpRequest: pureXMLHttpRequest,
            observer: observer,
            resolver: resolver,
        });
        window.XMLHttpRequest = XMLHttpRequestOverride;
    }
    return function () {
        if (pureXMLHttpRequest) {
            debug('restoring modules...');
            window.XMLHttpRequest = pureXMLHttpRequest;
        }
    };
};
interceptXMLHttpRequest_1 = XMLHttpRequest.interceptXMLHttpRequest = interceptXMLHttpRequest;

var lib$1 = {};

var StrictEventEmitter$1 = {};

var events = {exports: {}};

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
events.exports = EventEmitter;
events.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }
    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

var __extends = (commonjsGlobal$1 && commonjsGlobal$1.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (commonjsGlobal$1 && commonjsGlobal$1.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
StrictEventEmitter$1.__esModule = true;
StrictEventEmitter$1.StrictEventEmitter = void 0;
var events_1 = events.exports;
var StrictEventEmitter = /** @class */ (function (_super) {
    __extends(StrictEventEmitter, _super);
    function StrictEventEmitter() {
        return _super.call(this) || this;
    }
    StrictEventEmitter.prototype.on = function (event, listener) {
        return _super.prototype.on.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.once = function (event, listener) {
        return _super.prototype.on.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.off = function (event, listener) {
        return _super.prototype.off.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.emit = function (event) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        return _super.prototype.emit.apply(this, __spreadArrays([event.toString()], data));
    };
    StrictEventEmitter.prototype.addListener = function (event, listener) {
        return _super.prototype.addListener.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.removeListener = function (event, listener) {
        return _super.prototype.removeListener.call(this, event.toString(), listener);
    };
    return StrictEventEmitter;
}(events_1.EventEmitter));
StrictEventEmitter$1.StrictEventEmitter = StrictEventEmitter;

(function (exports) {
var __createBinding = (commonjsGlobal$1 && commonjsGlobal$1.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.StrictEventEmitter = void 0;
var StrictEventEmitter_1 = StrictEventEmitter$1;
__createBinding(exports, StrictEventEmitter_1, "StrictEventEmitter");
}(lib$1));

var lib = {};

var until$1 = {};

Object.defineProperty(until$1, "__esModule", { value: true });
/**
 * Gracefully handles a given Promise factory.
 * @example
 * cosnt [error, data] = await until(() => asyncAction())
 */
until$1.until = async (promise) => {
    try {
        const data = await promise().catch((error) => {
            throw error;
        });
        return [null, data];
    }
    catch (error) {
        return [error, null];
    }
};

Object.defineProperty(lib, "__esModule", { value: true });
var until_1 = until$1;
var until = lib.until = until_1.until;

/**
 * Attempts to resolve a Service Worker instance from a given registration,
 * regardless of its state (active, installing, waiting).
 */
const getWorkerByRegistration = (registration, absoluteWorkerUrl, findWorker) => {
    const allStates = [
        registration.active,
        registration.installing,
        registration.waiting,
    ];
    const existingStates = allStates.filter(Boolean);
    const mockWorker = existingStates.find((worker) => {
        return findWorker(worker.scriptURL, absoluteWorkerUrl);
    });
    return mockWorker || null;
};

/**
 * Returns an absolute Service Worker URL based on the given
 * relative URL (known during the registration).
 */
function getAbsoluteWorkerUrl(relativeUrl) {
    return new URL(relativeUrl, location.origin).href;
}

/**
 * Returns an active Service Worker instance.
 * When not found, registers a new Service Worker.
 */
const getWorkerInstance = (url, options = {}, findWorker) => __awaiter$3(void 0, void 0, void 0, function* () {
    // Resolve the absolute Service Worker URL.
    const absoluteWorkerUrl = getAbsoluteWorkerUrl(url);
    const mockRegistrations = yield navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => registrations.filter((registration) => getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker)));
    if (!navigator.serviceWorker.controller && mockRegistrations.length > 0) {
        // Reload the page when it has associated workers, but no active controller.
        // The absence of a controller can mean either:
        // - page has no Service Worker associated with it
        // - page has been hard-reloaded and its workers won't be used until the next reload.
        // Since we've checked that there are registrations associated with this page,
        // at this point we are sure it's hard reload that falls into this clause.
        location.reload();
    }
    const [existingRegistration] = mockRegistrations;
    if (existingRegistration) {
        // When the Service Worker is registered, update it and return the reference.
        return existingRegistration.update().then(() => {
            return [
                getWorkerByRegistration(existingRegistration, absoluteWorkerUrl, findWorker),
                existingRegistration,
            ];
        });
    }
    // When the Service Worker wasn't found, register it anew and return the reference.
    const [error, instance] = yield until(() => __awaiter$3(void 0, void 0, void 0, function* () {
        const registration = yield navigator.serviceWorker.register(url, options);
        return [
            // Compare existing worker registration by its worker URL,
            // to prevent irrelevant workers to resolve here (such as Codesandbox worker).
            getWorkerByRegistration(registration, absoluteWorkerUrl, findWorker),
            registration,
        ];
    }));
    // Handle Service Worker registration errors.
    if (error) {
        const isWorkerMissing = error.message.includes('(404)');
        // Produce a custom error message when given a non-existing Service Worker url.
        // Suggest developers to check their setup.
        if (isWorkerMissing) {
            const scopeUrl = new URL((options === null || options === void 0 ? void 0 : options.scope) || '/', location.href);
            throw new Error(devUtils.formatMessage(`\
Failed to register a Service Worker for scope ('${scopeUrl.href}') with script ('${absoluteWorkerUrl}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`));
        }
        // Fallback error message for any other registration errors.
        throw new Error(devUtils.formatMessage('Failed to register the Service Worker:\n\n%s', error.message));
    }
    return instance;
});

/**
 * Prints a worker activation message in the browser's console.
 */
function printStartMessage(args = {}) {
    if (args.quiet) {
        return;
    }
    const message = args.message || 'Mocking enabled.';
    console.groupCollapsed(`%c${devUtils.formatMessage(message)}`, 'color:orangered;font-weight:bold;');
    console.log('%cDocumentation: %chttps://mswjs.io/docs', 'font-weight:bold', 'font-weight:normal');
    console.log('Found an issue? https://github.com/mswjs/msw/issues');
    console.groupEnd();
}

/**
 * Signals the worker to enable the interception of requests.
 */
function enableMocking(context, options) {
    return __awaiter$3(this, void 0, void 0, function* () {
        context.workerChannel.send('MOCK_ACTIVATE');
        return context.events.once('MOCKING_ENABLED').then(() => {
            printStartMessage({ quiet: options.quiet });
        });
    });
}

/**
 * Creates a communication channel between the client
 * and the Service Worker associated with the given event.
 */
const createBroadcastChannel = (event) => {
    const port = event.ports[0];
    return {
        /**
         * Sends a text message to the connected Service Worker.
         */
        send(message) {
            if (port) {
                port.postMessage(message);
            }
        },
    };
};

function getAllCookies() {
    return parse_1(document.cookie);
}
/**
 * Returns relevant document cookies based on the request `credentials` option.
 */
function getRequestCookies(request) {
    /**
     * @note No cookies persist on the document in Node.js: no document.
     */
    if (typeof document === 'undefined' || typeof location === 'undefined') {
        return {};
    }
    switch (request.credentials) {
        case 'same-origin': {
            // Return document cookies only when requested a resource
            // from the same origin as the current document.
            return location.origin === request.url.origin ? getAllCookies() : {};
        }
        case 'include': {
            // Return all document cookies.
            return getAllCookies();
        }
        default: {
            return {};
        }
    }
}

/**
 * Sets relevant cookies on the request.
 * Request cookies are taken from the following sources:
 * - Immediate (own) request cookies (those in the "Cookie" request header);
 * - From the `document.cookie` based on the request's `credentials` value;
 * - From the internal cookie store that persists/hydrates cookies in Node.js
 */
function setRequestCookies(request) {
    var _a;
    // Set mocked request cookies from the `cookie` header of the original request.
    // No need to take `credentials` into account, because in Node.js requests are intercepted
    // _after_ they happen. Request issuer should have already taken care of sending relevant cookies.
    // Unlike browser, where interception is on the worker level, _before_ the request happens.
    const requestCookiesString = request.headers.get('cookie');
    lib$8.store.hydrate();
    const cookiesFromStore = Array.from((_a = lib$8.store.get(Object.assign(Object.assign({}, request), { url: request.url.toString() }))) === null || _a === void 0 ? void 0 : _a.entries()).reduce((cookies, [name, { value }]) => {
        return Object.assign(cookies, { [name.trim()]: value });
    }, {});
    const cookiesFromDocument = getRequestCookies(request);
    const forwardedCookies = Object.assign(Object.assign({}, cookiesFromDocument), cookiesFromStore);
    // Ensure the persisted (document) cookies are propagated to the request.
    // Propagated the cookies persisted in the Cookuie Store to the request headers.
    // This forwards relevant request cookies based on the request's credentials.
    for (const [name, value] of Object.entries(forwardedCookies)) {
        request.headers.append('cookie', `${name}=${value}`);
    }
    const ownCookies = requestCookiesString
        ? parse_1(requestCookiesString)
        : {};
    request.cookies = Object.assign(Object.assign(Object.assign({}, request.cookies), forwardedCookies), ownCookies);
}

/**
 * Ensures that an empty GET request body is always represented as `undefined`.
 */
function pruneGetRequestBody(request) {
    if (request.method &&
        isStringEqual(request.method, 'GET') &&
        request.body === '') {
        return undefined;
    }
    return request.body;
}

/**
 * Converts a given request received from the Service Worker
 * into a `MockedRequest` instance.
 */
function parseWorkerRequest(rawRequest) {
    const request = {
        id: rawRequest.id,
        cache: rawRequest.cache,
        credentials: rawRequest.credentials,
        method: rawRequest.method,
        url: new URL(rawRequest.url),
        referrer: rawRequest.referrer,
        referrerPolicy: rawRequest.referrerPolicy,
        redirect: rawRequest.redirect,
        mode: rawRequest.mode,
        params: {},
        cookies: {},
        integrity: rawRequest.integrity,
        keepalive: rawRequest.keepalive,
        destination: rawRequest.destination,
        body: pruneGetRequestBody(rawRequest),
        bodyUsed: rawRequest.bodyUsed,
        headers: new lib$1$1.Headers(rawRequest.headers),
    };
    // Set document cookies on the request.
    setRequestCookies(request);
    // Parse the request's body based on the "Content-Type" header.
    request.body = parseBody(request.body, request.headers);
    return request;
}

/**
 * Returns a mocked response for a given request using following request handlers.
 */
const getResponse = (request, handlers, resolutionContext) => __awaiter$3(void 0, void 0, void 0, function* () {
    const relevantHandlers = handlers.filter((handler) => {
        return handler.test(request, resolutionContext);
    });
    if (relevantHandlers.length === 0) {
        return {
            handler: undefined,
            response: undefined,
        };
    }
    const result = yield relevantHandlers.reduce((executionResult, handler) => __awaiter$3(void 0, void 0, void 0, function* () {
        const previousResults = yield executionResult;
        if (!!(previousResults === null || previousResults === void 0 ? void 0 : previousResults.response)) {
            return executionResult;
        }
        const result = yield handler.run(request, resolutionContext);
        if (result === null || result.handler.shouldSkip) {
            return null;
        }
        if (!result.response) {
            return {
                request: result.request,
                handler: result.handler,
                response: undefined,
                parsedResult: result.parsedResult,
            };
        }
        if (result.response.once) {
            handler.markAsSkipped(true);
        }
        return result;
    }), Promise.resolve(null));
    // Although reducing a list of relevant request handlers, it's possible
    // that in the end there will be no handler associted with the request
    // (i.e. if relevant handlers are fall-through).
    if (!result) {
        return {
            handler: undefined,
            response: undefined,
        };
    }
    return {
        handler: result.handler,
        publicRequest: result.request,
        parsedRequest: result.parsedResult,
        response: result.response,
    };
});

var jsLevenshtein = (function()
{
  function _min(d0, d1, d2, bx, ay)
  {
    return d0 < d1 || d2 < d1
        ? d0 > d2
            ? d2 + 1
            : d0 + 1
        : bx === ay
            ? d1
            : d1 + 1;
  }

  return function(a, b)
  {
    if (a === b) {
      return 0;
    }

    if (a.length > b.length) {
      var tmp = a;
      a = b;
      b = tmp;
    }

    var la = a.length;
    var lb = b.length;

    while (la > 0 && (a.charCodeAt(la - 1) === b.charCodeAt(lb - 1))) {
      la--;
      lb--;
    }

    var offset = 0;

    while (offset < la && (a.charCodeAt(offset) === b.charCodeAt(offset))) {
      offset++;
    }

    la -= offset;
    lb -= offset;

    if (la === 0 || lb < 3) {
      return lb;
    }

    var x = 0;
    var y;
    var d0;
    var d1;
    var d2;
    var d3;
    var dd;
    var dy;
    var ay;
    var bx0;
    var bx1;
    var bx2;
    var bx3;

    var vector = [];

    for (y = 0; y < la; y++) {
      vector.push(y + 1);
      vector.push(a.charCodeAt(offset + y));
    }

    var len = vector.length - 1;

    for (; x < lb - 3;) {
      bx0 = b.charCodeAt(offset + (d0 = x));
      bx1 = b.charCodeAt(offset + (d1 = x + 1));
      bx2 = b.charCodeAt(offset + (d2 = x + 2));
      bx3 = b.charCodeAt(offset + (d3 = x + 3));
      dd = (x += 4);
      for (y = 0; y < len; y += 2) {
        dy = vector[y];
        ay = vector[y + 1];
        d0 = _min(dy, d0, d1, bx0, ay);
        d1 = _min(d0, d1, d2, bx1, ay);
        d2 = _min(d1, d2, d3, bx2, ay);
        dd = _min(d2, d3, dd, bx3, ay);
        vector[y] = dd;
        d3 = d2;
        d2 = d1;
        d1 = d0;
        d0 = dy;
      }
    }

    for (; x < lb;) {
      bx0 = b.charCodeAt(offset + (d0 = x));
      dd = ++x;
      for (y = 0; y < len; y += 2) {
        dy = vector[y];
        vector[y] = dd = _min(dy, d0, dd, bx0, vector[y + 1]);
        d0 = dy;
      }
    }

    return dd;
  };
})();

const MAX_MATCH_SCORE = 3;
const MAX_SUGGESTION_COUNT = 4;
const TYPE_MATCH_DELTA = 0.5;
function groupHandlersByType(handlers) {
    return handlers.reduce((groups, handler) => {
        if (handler instanceof RestHandler) {
            groups.rest.push(handler);
        }
        if (handler instanceof GraphQLHandler) {
            groups.graphql.push(handler);
        }
        return groups;
    }, {
        rest: [],
        graphql: [],
    });
}
function getRestHandlerScore() {
    return (request, handler) => {
        const { path, method } = handler.info;
        if (path instanceof RegExp || method instanceof RegExp) {
            return Infinity;
        }
        const hasSameMethod = isStringEqual(request.method, method);
        // Always treat a handler with the same method as a more similar one.
        const methodScoreDelta = hasSameMethod ? TYPE_MATCH_DELTA : 0;
        const requestPublicUrl = getPublicUrlFromRequest(request);
        const score = jsLevenshtein(requestPublicUrl, path);
        return score - methodScoreDelta;
    };
}
function getGraphQLHandlerScore(parsedQuery) {
    return (_, handler) => {
        if (typeof parsedQuery.operationName === 'undefined') {
            return Infinity;
        }
        const { operationType, operationName } = handler.info;
        if (typeof operationName !== 'string') {
            return Infinity;
        }
        const hasSameOperationType = parsedQuery.operationType === operationType;
        // Always treat a handler with the same operation type as a more similar one.
        const operationTypeScoreDelta = hasSameOperationType ? TYPE_MATCH_DELTA : 0;
        const score = jsLevenshtein(parsedQuery.operationName, operationName);
        return score - operationTypeScoreDelta;
    };
}
function getSuggestedHandler(request, handlers, getScore) {
    const suggestedHandlers = handlers
        .reduce((suggestions, handler) => {
        const score = getScore(request, handler);
        return suggestions.concat([[score, handler]]);
    }, [])
        .sort(([leftScore], [rightScore]) => leftScore - rightScore)
        .filter(([score]) => score <= MAX_MATCH_SCORE)
        .slice(0, MAX_SUGGESTION_COUNT)
        .map(([, handler]) => handler);
    return suggestedHandlers;
}
function getSuggestedHandlersMessage(handlers) {
    if (handlers.length > 1) {
        return `\
Did you mean to request one of the following resources instead?

${handlers.map((handler) => `  • ${handler.info.header}`).join('\n')}`;
    }
    return `Did you mean to request "${handlers[0].info.header}" instead?`;
}
function onUnhandledRequest(request, handlers, strategy = 'warn') {
    const parsedGraphQLQuery = tryCatch(() => parseGraphQLRequest(request));
    function generateHandlerSuggestion() {
        /**
         * @note Ignore exceptions during GraphQL request parsing because at this point
         * we cannot assume the unhandled request is a valid GraphQL request.
         * If the GraphQL parsing fails, just don't treat it as a GraphQL request.
         */
        const handlerGroups = groupHandlersByType(handlers);
        const relevantHandlers = parsedGraphQLQuery
            ? handlerGroups.graphql
            : handlerGroups.rest;
        const suggestedHandlers = getSuggestedHandler(request, relevantHandlers, parsedGraphQLQuery
            ? getGraphQLHandlerScore(parsedGraphQLQuery)
            : getRestHandlerScore());
        return suggestedHandlers.length > 0
            ? getSuggestedHandlersMessage(suggestedHandlers)
            : '';
    }
    function generateUnhandledRequestMessage() {
        const publicUrl = getPublicUrlFromRequest(request);
        const requestHeader = parsedGraphQLQuery
            ? `${parsedGraphQLQuery.operationType} ${parsedGraphQLQuery.operationName} (${request.method} ${publicUrl})`
            : `${request.method} ${publicUrl}`;
        const handlerSuggestion = generateHandlerSuggestion();
        const messageTemplate = [
            `captured a request without a matching request handler:`,
            `  \u2022 ${requestHeader}`,
            handlerSuggestion,
            `\
If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks\
`,
        ].filter(Boolean);
        return messageTemplate.join('\n\n');
    }
    function applyStrategy(strategy) {
        // Generate handler suggestions only when applying the strategy.
        // This saves bandwidth for scenarios when developers opt-out
        // from the default unhandled request handling strategy.
        const message = generateUnhandledRequestMessage();
        switch (strategy) {
            case 'error': {
                // Print a developer-friendly error.
                devUtils.error('Error: %s', message);
                // Throw an exception to halt request processing and not perform the original request.
                throw new Error(devUtils.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'));
            }
            case 'warn': {
                devUtils.warn('Warning: %s', message);
                break;
            }
            case 'bypass':
                break;
            default:
                throw new Error(devUtils.formatMessage('Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.', strategy));
        }
    }
    if (typeof strategy === 'function') {
        strategy(request, {
            warning: applyStrategy.bind(null, 'warn'),
            error: applyStrategy.bind(null, 'error'),
        });
        return;
    }
    applyStrategy(strategy);
}

function readResponseCookies(request, response) {
    lib$8.store.add(Object.assign(Object.assign({}, request), { url: request.url.toString() }), response);
    lib$8.store.persist();
}

function handleRequest(request, handlers, options, emitter, handleRequestOptions) {
    var _a, _b, _c;
    return __awaiter$3(this, void 0, void 0, function* () {
        emitter.emit('request:start', request);
        // Perform bypassed requests (i.e. issued via "ctx.fetch") as-is.
        if (request.headers.get('x-msw-bypass') === 'true') {
            emitter.emit('request:end', request);
            (_a = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.onBypassResponse) === null || _a === void 0 ? void 0 : _a.call(handleRequestOptions, request);
            return;
        }
        // Resolve a mocked response from the list of request handlers.
        const lookupResult = yield getResponse(request, handlers, handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.resolutionContext);
        const { handler, response } = lookupResult;
        // When there's no handler for the request, consider it unhandled.
        // Allow the developer to react to such cases.
        if (!handler) {
            onUnhandledRequest(request, handlers, options.onUnhandledRequest);
            emitter.emit('request:unhandled', request);
            emitter.emit('request:end', request);
            (_b = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.onBypassResponse) === null || _b === void 0 ? void 0 : _b.call(handleRequestOptions, request);
            return;
        }
        // When the handled request returned no mocked response, warn the developer,
        // as it may be an oversight on their part. Perform the request as-is.
        if (!response) {
            devUtils.warn(`\
Expected response resolver to return a mocked response Object, but got %s. The original response is going to be used instead.\
\n
  \u2022 %s
    %s\
`, response, handler.info.header, handler.info.callFrame);
            emitter.emit('request:end', request);
            (_c = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.onBypassResponse) === null || _c === void 0 ? void 0 : _c.call(handleRequestOptions, request);
            return;
        }
        // Store all the received response cookies in the virtual cookie store.
        readResponseCookies(request, response);
        emitter.emit('request:match', request);
        return new Promise((resolve) => {
            var _a, _b, _c;
            const requiredLookupResult = lookupResult;
            const transformedResponse = ((_a = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.transformResponse) === null || _a === void 0 ? void 0 : _a.call(handleRequestOptions, response)) ||
                response;
            (_b = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.onMockedResponse) === null || _b === void 0 ? void 0 : _b.call(handleRequestOptions, transformedResponse, requiredLookupResult);
            setTimeout(() => {
                var _a;
                (_a = handleRequestOptions === null || handleRequestOptions === void 0 ? void 0 : handleRequestOptions.onMockedResponseSent) === null || _a === void 0 ? void 0 : _a.call(handleRequestOptions, transformedResponse, requiredLookupResult);
                emitter.emit('request:end', request);
                resolve(transformedResponse);
            }, (_c = response.delay) !== null && _c !== void 0 ? _c : 0);
        });
    });
}

const createRequestListener = (context, options) => {
    return (event, message) => __awaiter$3(void 0, void 0, void 0, function* () {
        const channel = createBroadcastChannel(event);
        try {
            const request = parseWorkerRequest(message.payload);
            yield handleRequest(request, context.requestHandlers, options, context.emitter, {
                transformResponse(response) {
                    return Object.assign(Object.assign({}, response), { headers: response.headers.all() });
                },
                onBypassResponse() {
                    return channel.send({
                        type: 'MOCK_NOT_FOUND',
                    });
                },
                onMockedResponse(response) {
                    channel.send({
                        type: 'MOCK_SUCCESS',
                        payload: response,
                    });
                },
                onMockedResponseSent(response, { handler, publicRequest, parsedRequest }) {
                    if (!options.quiet) {
                        handler.log(publicRequest, response, handler, parsedRequest);
                    }
                },
            });
        }
        catch (error) {
            if (error instanceof NetworkError) {
                // Treat emulated network error differently,
                // as it is an intended exception in a request handler.
                return channel.send({
                    type: 'NETWORK_ERROR',
                    payload: {
                        name: error.name,
                        message: error.message,
                    },
                });
            }
            // Treat all the other exceptions in a request handler
            // as unintended, alerting that there is a problem needs fixing.
            channel.send({
                type: 'INTERNAL_ERROR',
                payload: {
                    status: 500,
                    body: JSON.stringify({
                        errorType: error.constructor.name,
                        message: error.message,
                        location: error.stack,
                    }),
                },
            });
        }
    });
};

function requestIntegrityCheck(context, serviceWorker) {
    return __awaiter$3(this, void 0, void 0, function* () {
        // Signal Service Worker to report back its integrity
        context.workerChannel.send('INTEGRITY_CHECK_REQUEST');
        const { payload: actualChecksum } = yield context.events.once('INTEGRITY_CHECK_RESPONSE');
        // Compare the response from the Service Worker and the
        // global variable set by Rollup during the build.
        if (actualChecksum !== "02f4ad4a2797f85668baf196e553d929") {
            throw new Error(`Currently active Service Worker (${actualChecksum}) is behind the latest published one (${"02f4ad4a2797f85668baf196e553d929"}).`);
        }
        return serviceWorker;
    });
}

/**
 * Intercepts and defers any requests on the page
 * until the Service Worker instance is ready.
 * Must only be used in a browser.
 */
function deferNetworkRequestsUntil(predicatePromise) {
    // Defer any `XMLHttpRequest` requests until the Service Worker is ready.
    const originalXhrSend = window.XMLHttpRequest.prototype.send;
    window.XMLHttpRequest.prototype.send = function (...args) {
        // Keep this function synchronous to comply with `XMLHttpRequest.prototype.send`,
        // because that method is always synchronous.
        until(() => predicatePromise).then(() => {
            window.XMLHttpRequest.prototype.send = originalXhrSend;
            this.send(...args);
        });
    };
    // Defer any `fetch` requests until the Service Worker is ready.
    const originalFetch = window.fetch;
    window.fetch = (...args) => __awaiter$3(this, void 0, void 0, function* () {
        yield until(() => predicatePromise);
        window.fetch = originalFetch;
        return window.fetch(...args);
    });
}

function createResponseListener(context) {
    return (_, message) => {
        var _a;
        const { payload: responseJson } = message;
        /**
         * CORS requests with `mode: "no-cors"` result in "opaque" responses.
         * That kind of responses cannot be manipulated in JavaScript due
         * to the security considerations.
         * @see https://fetch.spec.whatwg.org/#concept-filtered-response-opaque
         * @see https://github.com/mswjs/msw/issues/529
         */
        if ((_a = responseJson.type) === null || _a === void 0 ? void 0 : _a.includes('opaque')) {
            return;
        }
        const response = new Response(responseJson.body || null, responseJson);
        const isMockedResponse = response.headers.get('x-powered-by') === 'msw';
        if (isMockedResponse) {
            context.emitter.emit('response:mocked', response, responseJson.requestId);
        }
        else {
            context.emitter.emit('response:bypass', response, responseJson.requestId);
        }
    };
}

function validateWorkerScope(registration, options) {
    if (!(options === null || options === void 0 ? void 0 : options.quiet) && !location.href.startsWith(registration.scope)) {
        devUtils.warn(`\
Cannot intercept requests on this page because it's outside of the worker's scope ("${registration.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.\
`);
    }
}

const createStartHandler = (context) => {
    return function start(options, customOptions) {
        const startWorkerInstance = () => __awaiter$3(this, void 0, void 0, function* () {
            // Remove all previously existing event listeners.
            // This way none of the listeners persists between Fast refresh
            // of the application's code.
            context.events.removeAllListeners();
            // Handle requests signaled by the worker.
            context.workerChannel.on('REQUEST', createRequestListener(context, options));
            context.workerChannel.on('RESPONSE', createResponseListener(context));
            const instance = yield getWorkerInstance(options.serviceWorker.url, options.serviceWorker.options, options.findWorker);
            const [worker, registration] = instance;
            if (!worker) {
                const missingWorkerMessage = (customOptions === null || customOptions === void 0 ? void 0 : customOptions.findWorker)
                    ? devUtils.formatMessage(`Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`, options.serviceWorker.url)
                    : devUtils.formatMessage(`Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`, options.serviceWorker.url, location.host);
                throw new Error(missingWorkerMessage);
            }
            context.worker = worker;
            context.registration = registration;
            context.events.addListener(window, 'beforeunload', () => {
                if (worker.state !== 'redundant') {
                    // Notify the Service Worker that this client has closed.
                    // Internally, it's similar to disabling the mocking, only
                    // client close event has a handler that self-terminates
                    // the Service Worker when there are no open clients.
                    context.workerChannel.send('CLIENT_CLOSED');
                }
                // Make sure we're always clearing the interval - there are reports that not doing this can
                // cause memory leaks in headless browser environments.
                window.clearInterval(context.keepAliveInterval);
            });
            // Check if the active Service Worker is the latest published one
            const [integrityError] = yield until(() => requestIntegrityCheck(context, worker));
            if (integrityError) {
                devUtils.error(`\
Detected outdated Service Worker: ${integrityError.message}

The mocking is still enabled, but it's highly recommended that you update your Service Worker by running:

$ npx msw init <PUBLIC_DIR>

This is necessary to ensure that the Service Worker is in sync with the library to guarantee its stability.
If this message still persists after updating, please report an issue: https://github.com/open-draft/msw/issues\
      `);
            }
            context.keepAliveInterval = window.setInterval(() => context.workerChannel.send('KEEPALIVE_REQUEST'), 5000);
            // Warn the user when loading the page that lies outside
            // of the worker's scope.
            validateWorkerScope(registration, context.startOptions);
            return registration;
        });
        const workerRegistration = startWorkerInstance().then((registration) => __awaiter$3(this, void 0, void 0, function* () {
            const pendingInstance = registration.installing || registration.waiting;
            // Wait until the worker is activated.
            // Assume the worker is already activated if there's no pending registration
            // (i.e. when reloading the page after a successful activation).
            if (pendingInstance) {
                yield new Promise((resolve) => {
                    pendingInstance.addEventListener('statechange', () => {
                        if (pendingInstance.state === 'activated') {
                            return resolve();
                        }
                    });
                });
            }
            // Print the activation message only after the worker has been activated.
            yield enableMocking(context, options).catch((error) => {
                throw new Error(`Failed to enable mocking: ${error === null || error === void 0 ? void 0 : error.message}`);
            });
            return registration;
        }));
        // Defer any network requests until the Service Worker instance is ready.
        // This prevents a race condition between the Service Worker registration
        // and application's runtime requests (i.e. requests on mount).
        if (options.waitUntilReady) {
            deferNetworkRequestsUntil(workerRegistration);
        }
        return workerRegistration;
    };
};

function printStopMessage(args = {}) {
    if (args.quiet) {
        return;
    }
    console.log(`%c${devUtils.formatMessage('Mocking disabled.')}`, 'color:orangered;font-weight:bold;');
}

const createStop = (context) => {
    return function stop() {
        var _a;
        /**
         * Signal the Service Worker to disable mocking for this client.
         * Use this an an explicit way to stop the mocking, while preserving
         * the worker-client relation. Does not affect the worker's lifecycle.
         */
        context.workerChannel.send('MOCK_DEACTIVATE');
        window.clearInterval(context.keepAliveInterval);
        printStopMessage({ quiet: (_a = context.startOptions) === null || _a === void 0 ? void 0 : _a.quiet });
    };
};

function use(currentHandlers, ...handlers) {
    currentHandlers.unshift(...handlers);
}
function restoreHandlers(handlers) {
    handlers.forEach((handler) => {
        handler.markAsSkipped(false);
    });
}
function resetHandlers(initialHandlers, ...nextHandlers) {
    return nextHandlers.length > 0 ? [...nextHandlers] : [...initialHandlers];
}

const DEFAULT_START_OPTIONS = {
    serviceWorker: {
        url: '/mockServiceWorker.js',
        options: null,
    },
    quiet: false,
    waitUntilReady: true,
    onUnhandledRequest: 'warn',
    findWorker(scriptURL, mockServiceWorkerUrl) {
        return scriptURL === mockServiceWorkerUrl;
    },
};
/**
 * Returns resolved worker start options, merging the default options
 * with the given custom options.
 */
function resolveStartOptions(initialOptions) {
    return mergeRight(DEFAULT_START_OPTIONS, initialOptions || {});
}
function prepareStartHandler(handler, context) {
    return (initialOptions) => {
        context.startOptions = resolveStartOptions(initialOptions);
        return handler(context.startOptions, initialOptions || {});
    };
}

/**
 * Converts a given isomorphic request to a `MockedRequest` instance.
 */
function parseIsomorphicRequest(request) {
    const mockedRequest = {
        id: request.id,
        url: request.url,
        method: request.method,
        body: parseBody(request.body, request.headers),
        credentials: request.credentials || 'same-origin',
        headers: request.headers,
        cookies: {},
        redirect: 'manual',
        referrer: '',
        keepalive: false,
        cache: 'default',
        mode: 'cors',
        referrerPolicy: 'no-referrer',
        integrity: '',
        destination: 'document',
        bodyUsed: false,
    };
    // Attach all the cookies from the virtual cookie store.
    setRequestCookies(mockedRequest);
    return mockedRequest;
}

function createFallbackRequestListener(context, options) {
    const interceptor = lib$7.createInterceptor({
        modules: [interceptFetch_1, interceptXMLHttpRequest_1],
        resolver(request) {
            return __awaiter$3(this, void 0, void 0, function* () {
                const mockedRequest = parseIsomorphicRequest(request);
                return handleRequest(mockedRequest, context.requestHandlers, options, context.emitter, {
                    transformResponse(response) {
                        return {
                            status: response.status,
                            statusText: response.statusText,
                            headers: response.headers.all(),
                            body: response.body,
                        };
                    },
                    onMockedResponseSent(response, { handler, publicRequest, parsedRequest }) {
                        if (!options.quiet) {
                            handler.log(publicRequest, response, handler, parsedRequest);
                        }
                    },
                });
            });
        },
    });
    interceptor.apply();
    return interceptor;
}

function createFallbackStart(context) {
    return function start(options) {
        return __awaiter$3(this, void 0, void 0, function* () {
            context.fallbackInterceptor = createFallbackRequestListener(context, options);
            printStartMessage({
                message: 'Mocking enabled (fallback mode).',
                quiet: options.quiet,
            });
            return undefined;
        });
    };
}

function createFallbackStop(context) {
    return function stop() {
        var _a, _b;
        (_a = context.fallbackInterceptor) === null || _a === void 0 ? void 0 : _a.restore();
        printStopMessage({ quiet: (_b = context.startOptions) === null || _b === void 0 ? void 0 : _b.quiet });
    };
}

/**
 * Pipes all emitted events from one emitter to another.
 */
function pipeEvents(source, destination) {
    const rawEmit = source.emit;
    // @ts-ignore
    if (rawEmit._isPiped) {
        return;
    }
    source.emit = function (event, ...data) {
        destination.emit(event, ...data);
        return rawEmit.call(this, event, ...data);
    };
    // @ts-ignore
    source.emit._isPiped = true;
}

// Declare the list of event handlers on the module's scope
// so it persists between Fash refreshes of the application's code.
let listeners = [];
/**
 * Creates a new mock Service Worker registration
 * with the given request handlers.
 * @param {RequestHandler[]} requestHandlers List of request handlers
 * @see {@link https://mswjs.io/docs/api/setup-worker `setupWorker`}
 */
function setupWorker(...requestHandlers) {
    requestHandlers.forEach((handler) => {
        if (Array.isArray(handler))
            throw new Error(devUtils.formatMessage('Failed to call "setupWorker" given an Array of request handlers (setupWorker([a, b])), expected to receive each handler individually: setupWorker(a, b).'));
    });
    // Error when attempting to run this function in a Node.js environment.
    if (lib$a.exports.isNodeProcess()) {
        throw new Error(devUtils.formatMessage('Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead.'));
    }
    const emitter = new lib$1.StrictEventEmitter();
    const publicEmitter = new lib$1.StrictEventEmitter();
    pipeEvents(emitter, publicEmitter);
    const context = {
        startOptions: undefined,
        worker: null,
        registration: null,
        requestHandlers: [...requestHandlers],
        emitter,
        workerChannel: {
            on(eventType, callback) {
                context.events.addListener(navigator.serviceWorker, 'message', (event) => {
                    // Avoid messages broadcasted from unrelated workers.
                    if (event.source !== context.worker) {
                        return;
                    }
                    const message = jsonParse(event.data);
                    if (!message) {
                        return;
                    }
                    if (message.type === eventType) {
                        callback(event, message);
                    }
                });
            },
            send(type) {
                var _a;
                (_a = context.worker) === null || _a === void 0 ? void 0 : _a.postMessage(type);
            },
        },
        events: {
            addListener(target, eventType, callback) {
                target.addEventListener(eventType, callback);
                listeners.push({ eventType, target, callback });
                return () => {
                    target.removeEventListener(eventType, callback);
                };
            },
            removeAllListeners() {
                for (const { target, eventType, callback } of listeners) {
                    target.removeEventListener(eventType, callback);
                }
                listeners = [];
            },
            once(eventType) {
                const bindings = [];
                return new Promise((resolve, reject) => {
                    const handleIncomingMessage = (event) => {
                        try {
                            const message = JSON.parse(event.data);
                            if (message.type === eventType) {
                                resolve(message);
                            }
                        }
                        catch (error) {
                            reject(error);
                        }
                    };
                    bindings.push(context.events.addListener(navigator.serviceWorker, 'message', handleIncomingMessage), context.events.addListener(navigator.serviceWorker, 'messageerror', reject));
                }).finally(() => {
                    bindings.forEach((unbind) => unbind());
                });
            },
        },
        useFallbackMode: !('serviceWorker' in navigator) || location.protocol === 'file:',
    };
    const startHandler = context.useFallbackMode
        ? createFallbackStart(context)
        : createStartHandler(context);
    const stopHandler = context.useFallbackMode
        ? createFallbackStop(context)
        : createStop(context);
    return {
        start: prepareStartHandler(startHandler, context),
        stop() {
            context.events.removeAllListeners();
            context.emitter.removeAllListeners();
            publicEmitter.removeAllListeners();
            stopHandler();
        },
        use(...handlers) {
            use(context.requestHandlers, ...handlers);
        },
        restoreHandlers() {
            restoreHandlers(context.requestHandlers);
        },
        resetHandlers(...nextHandlers) {
            context.requestHandlers = resetHandlers(requestHandlers, ...nextHandlers);
        },
        printHandlers() {
            context.requestHandlers.forEach((handler) => {
                const { header, callFrame } = handler.info;
                const pragma = handler.info.hasOwnProperty('operationType')
                    ? '[graphql]'
                    : '[rest]';
                console.groupCollapsed(`${pragma} ${header}`);
                if (callFrame) {
                    console.log(`Declaration: ${callFrame}`);
                }
                console.log('Handler:', handler);
                if (handler instanceof RestHandler) {
                    console.log('Match:', `https://mswjs.io/repl?path=${handler.info.path}`);
                }
                console.groupEnd();
            });
        },
        events: {
            on(...args) {
                return publicEmitter.on(...args);
            },
            removeListener(...args) {
                return publicEmitter.removeListener(...args);
            },
            removeAllListeners(...args) {
                return publicEmitter.removeAllListeners(...args);
            },
        },
    };
}

export { GraphQLHandler, RESTMethods, RequestHandler, RestHandler, cleanUrl, compose, index as context, createResponseComposition, defaultContext, defaultResponse, graphql, graphqlContext, handleRequest, matchRequestUrl, parseIsomorphicRequest, response, rest, restContext, setupWorker };
