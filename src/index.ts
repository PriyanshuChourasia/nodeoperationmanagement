import express, { Express } from "express"
import { intializeServer } from "./server";

const app: Express = express();

intializeServer(app);