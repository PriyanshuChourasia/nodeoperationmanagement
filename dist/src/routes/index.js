"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = appRoutes;
const projectRoutes_1 = __importDefault(require("./projectRoutes"));
const taskRoutes_1 = __importDefault(require("./taskRoutes"));
function appRoutes(app) {
    app.use("/projects", projectRoutes_1.default);
    app.use("/tasks", taskRoutes_1.default);
}
//# sourceMappingURL=index.js.map