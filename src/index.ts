import express from "express";
import { appMiddleware } from "middlewares";
import { appRoutes } from "routes";
import { intializeServer } from "server";

const app = express();

intializeServer(app);

appMiddleware(app);

appRoutes(app);