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
var chai_1 = require("chai");
var cucumber_1 = require("cucumber");
cucumber_1.Given(/^the following mocks state:$/, checkMockState);
cucumber_1.Given(/^the following variables state:$/, checkVariablesState);
cucumber_1.When(/^I add variable (.*) with value (.*)/, addVariable);
cucumber_1.When(/^I delete variable (.*)/, deleteVariable);
cucumber_1.When(/^I reset the mocks to default$/, resetMocksToDefault);
cucumber_1.When(/^I select scenario (.*) for mock (.*)$/, selectScenario);
cucumber_1.When(/^I set delay to (\d+) for mock (.*)$/, delayResponse);
cucumber_1.When(/^I set the mocks to passThroughs$/, setMocksToPassThrough);
cucumber_1.When(/^I update variable (.*) with value (.*)/, updateVariable);
cucumber_1.When(/^I wait a (\d+) milliseconds$/, waitSeconds);
cucumber_1.When(/^I select the preset (.*)/, selectPreset);
cucumber_1.After(function () {
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.resetMocksToDefault()];
                case 1:
                    return [2 /*return*/, _a.sent()];
            }
        });
    });
});

function addVariable(key, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.setVariable(key, value)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function checkMockState(dataTable) {
    return __awaiter(this, void 0, void 0, function () {
        var mocks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.getMocks()];
                case 1:
                    mocks = _a.sent();
                    dataTable.rows()
                        .forEach(function (row) {
                            return chai_1.expect(mocks.state[row[0]].scenario).to.equal(row[1]);
                        });
                    return [2 /*return*/];
            }
        });
    });
}

function checkVariablesState(dataTable) {
    return __awaiter(this, void 0, void 0, function () {
        var variables;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.getVariables()];
                case 1:
                    variables = _a.sent();
                    dataTable.rows()
                        .forEach(function (row) {
                            return chai_1.expect(variables.state[row[0]]).to.equal(row[1]);
                        });
                    return [2 /*return*/];
            }
        });
    });
}

function delayResponse(delay, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.delayResponse(name, parseInt(delay))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function deleteVariable(key) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.deleteVariable(key)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function resetMocksToDefault() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.resetMocksToDefault()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function selectScenario(scenario, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.selectScenario(name, scenario)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function selectPreset(name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.selectPreset(name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function setMocksToPassThrough() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.setMocksToPassThrough()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function updateVariable(key, value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, client.setVariable(key, value)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}

function waitSeconds(wait) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, browser.pause(wait)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
