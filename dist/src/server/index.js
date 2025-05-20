"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intializeServer = intializeServer;
const env_config_1 = require("../config/env.config");
/** Initializing server */
function intializeServer(app) {
    app.get("/", (req, res) => {
        res.status(200).json({
            "data": "Application running",
            "success": "true"
        });
    });
    app.listen(env_config_1.env.PORT, () => {
        console.log(`Application running at http://localhost:${env_config_1.env.PORT}`);
    });
}
//# sourceMappingURL=index.js.map