"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("@/server/index");
const index_2 = require("@/middlewares/index");
const app = (0, express_1.default)();
(0, index_1.intializeServer)(app);
(0, index_2.appMiddleware)(app);
//# sourceMappingURL=index.js.map