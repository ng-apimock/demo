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
var fs = require("fs-extra");
var path = require("path");
var chai_1 = require("chai");
var cucumber_1 = require("cucumber");
var page_po_1 = require("../pos/page.po");
var mocksDirectory = path.join(require.resolve('@ng-apimock/test-application'), '..', 'mocks');
var responses;
cucumber_1.Before(function () {
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // perform some shared setup
            responses = {
                getItems: fs.readJsonSync(path.join(mocksDirectory, 'get-items.mock.json')).responses,
                postItem: fs.readJsonSync(path.join(mocksDirectory, 'post-item.mock.json')).responses
            };
            responses.getItems['passThrough'] = {status: 200, data: ['passThrough']};
            responses.postItem['passThrough'] = {status: 200, data: ['passThrough']};
            return [2 /*return*/];
        });
    });
});
cucumber_1.Given(/^I open the test page$/, openTestPage);
cucumber_1.When(/^I download the binary file$/, downloadTheBinaryFile);
cucumber_1.When(/^I enter (.*) and post the item$/, enterAndPostItem);
cucumber_1.When(/^I get the items$/, getTheItems);
cucumber_1.When(/^I get the items as jsonp$/, getTheItemsAsJsonp);
cucumber_1.Then(/^the items are fetched$/, checkItemsAreFetched);
cucumber_1.Then(/^the items are not yet fetched$/, checkItemsAreNotYetFetched);
cucumber_1.Then(/^the response is interpolated with variable (.*)$/, checkResponseIsInterpolatedWithVariable);
cucumber_1.Then(/^the (.*) response is returned for get items$/, checkReturnedResponseForGetItems);
cucumber_1.Then(/^the (.*) response is returned for post item$/, checkReturnedResponseForPostItem);
cucumber_1.Then(/^the (.*) response is downloaded$/, checkResponseIsDownloaded);

function checkItemsAreFetched() {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = chai_1.expect;
                    return [4 /*yield*/, page_po_1.PagePO.getDone()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal('true');
                    return [2 /*return*/];
            }
        });
    });
}

function checkItemsAreNotYetFetched() {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = chai_1.expect;
                    return [4 /*yield*/, page_po_1.PagePO.getDone()];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.equal('false');
                    return [2 /*return*/];
            }
        });
    });
}

function checkResponseIsDownloaded(scenario) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, waitForDone()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, browser.waitUntil(function () {
                        return __awaiter(_this, void 0, void 0, function () {
                            var params, actual, expected;
                            return __generator(this, function (_a) {
                                params = browser.config.params;
                                if (fs.existsSync(params.default_directory + '/test.pdf')) {
                                    actual = fs.readFileSync(params.default_directory + '/test.pdf');
                                    expected = fs.readFileSync(path.join(mocksDirectory, responses.getItems[scenario].file));
                                    return [2 /*return*/, actual.equals(expected)];
                                } else {
                                    return [2 /*return*/, params.environment === 'CI'];
                                }
                                return [2 /*return*/];
                            });
                        });
                    }, 5000, 'expected download to be completed')];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function checkResponseIsInterpolatedWithVariable(variable) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    return [4 /*yield*/, waitForDone()];
                case 1:
                    _b.sent();
                    _a = chai_1.expect;
                    return [4 /*yield*/, page_po_1.PagePO.getData()];
                case 2:
                    _a.apply(void 0, [_b.sent()]).to.contain(variable);
                    return [2 /*return*/];
            }
        });
    });
}

function checkReturnedResponseForGetItems(scenario) {
    return __awaiter(this, void 0, void 0, function () {
        var data, status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, waitForDone()];
                case 1:
                    _a.sent();
                    if (!(responses.getItems[scenario].data !== undefined)) return [3 /*break*/, 3];
                    return [4 /*yield*/, page_po_1.PagePO.getData()];
                case 2:
                    data = _a.sent();
                    chai_1.expect(JSON.parse(data)).to.deep.equal(responses.getItems[scenario].data);
                    _a.label = 3;
                case 3:
                    return [4 /*yield*/, page_po_1.PagePO.getStatus()];
                case 4:
                    status = _a.sent();
                    chai_1.expect(parseInt(status)).to.equal(responses.getItems[scenario].status);
                    return [2 /*return*/];
            }
        });
    });
}

function checkReturnedResponseForPostItem(scenario) {
    return __awaiter(this, void 0, void 0, function () {
        var data, status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, waitForDone()];
                case 1:
                    _a.sent();
                    if (!(responses.postItem[scenario].data !== undefined)) return [3 /*break*/, 3];
                    return [4 /*yield*/, page_po_1.PagePO.getData()];
                case 2:
                    data = _a.sent();
                    chai_1.expect(JSON.parse(data)).to.deep.equal(responses.postItem[scenario].data);
                    _a.label = 3;
                case 3:
                    return [4 /*yield*/, page_po_1.PagePO.getStatus()];
                case 4:
                    status = _a.sent();
                    chai_1.expect(parseInt(status)).to.equal(responses.postItem[scenario].status);
                    return [2 /*return*/];
            }
        });
    });
}

function downloadTheBinaryFile() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, page_po_1.PagePO.buttons.binary];
                case 1:
                    (_a.sent()).click();
                    return [2 /*return*/];
            }
        });
    });
}

function enterAndPostItem(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, page_po_1.PagePO.input(data)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function getTheItems() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, page_po_1.PagePO.buttons.get];
                case 1:
                    return [4 /*yield*/, (_a.sent()).click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, browser.pause(500)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function getTheItemsAsJsonp() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, page_po_1.PagePO.buttons.getAsJsonp];
                case 1:
                    return [4 /*yield*/, (_a.sent()).click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, browser.pause(500)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function openTestPage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, page_po_1.PagePO.open()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function waitForDone() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, browser.waitUntil(function () {
                        return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        return [4 /*yield*/, page_po_1.PagePO.getDone()];
                                    case 1:
                                        return [2 /*return*/, (_a.sent()) === 'true'];
                                }
                            });
                        });
                    }, 5000, 'expected status to be shown')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
