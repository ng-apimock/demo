"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = {
        label: 0, sent: function () {
            if (t[0] & 1) throw t[1];
            return t[1];
        }, trys: [], ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;

    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }

    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {value: op[1], done: false};
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];
            y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {value: op[0] ? op[1] : void 0, done: true};
    }
};
Object.defineProperty(exports, "__esModule", {value: true});
var PagePO = /** @class */ (function () {
    function PagePO() {
    }

    PagePO.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, browser.$('.data')];
                    case 1:
                        return [4 /*yield*/, (_a.sent()).getText()];
                    case 2:
                        return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PagePO.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, browser.$('.status')];
                    case 1:
                        return [4 /*yield*/, (_a.sent()).getText()];
                    case 2:
                        return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PagePO.getDone = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, browser.$('.done')];
                    case 1:
                        return [4 /*yield*/, (_a.sent()).getText()];
                    case 2:
                        return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PagePO.input = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, browser.$('#item')];
                    case 1:
                        return [4 /*yield*/, (_a.sent()).setValue(data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(PagePO, "buttons", {
        get: function () {
            return new PageButtons();
        },
        enumerable: true,
        configurable: true
    });
    PagePO.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4 /*yield*/, browser.url('/index.html')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, browser.waitUntil(function () {
                            return __awaiter(_this, void 0, void 0, function () {
                                var header;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            return [4 /*yield*/, browser.$('h1')];
                                        case 1:
                                            return [4 /*yield*/, (_a.sent()).getText()];
                                        case 2:
                                            header = _a.sent();
                                            return [2 /*return*/, header.indexOf('ng-apimock test example app') > -1];
                                    }
                                });
                            });
                        }, 20000, 'page not loaded after 20s')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PagePO;
}());
exports.PagePO = PagePO;
var PageButtons = /** @class */ (function () {
    function PageButtons() {
    }

    Object.defineProperty(PageButtons.prototype, "get", {
        get: function () {
            return browser.$('button*=get');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageButtons.prototype, "binary", {
        get: function () {
            return browser.$('button*=binary');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageButtons.prototype, "getAsJsonp", {
        get: function () {
            return browser.$('button*=get as jsonp');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageButtons.prototype, "post", {
        get: function () {
            return browser.$('button*=post');
        },
        enumerable: true,
        configurable: true
    });
    return PageButtons;
}());
exports.PageButtons = PageButtons;
