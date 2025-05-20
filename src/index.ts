import express, { Express } from "express"
import { intializeServer } from "@/server/index";
import { appMiddleware } from "@/middlewares/index";
import { appRoutes } from "./routes";

const app: Express = express();

intializeServer(app);
appMiddleware(app);
appRoutes(app);