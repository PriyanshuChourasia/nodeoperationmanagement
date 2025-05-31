"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = appRoutes;
const projectRoutes_1 = __importDefault(require("./projectRoutes"));
const taskRoutes_1 = __importDefault(require("./taskRoutes"));
function appRoutes(app) {
    app.use("/api/projects", projectRoutes_1.default);
    app.use("/api/tasks", taskRoutes_1.default);
    app.get("/", (req, res) => {
        res.status(200).json({
            "message": "Welcome to operation management",
            "success": true
        });
    });
    app.get("/api", (req, res) => {
        res.status(200).json({
            "message": "Welcome to operation management API point",
            "success": true
        });
    });
}
//# sourceMappingURL=index.js.map