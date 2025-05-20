import { Express } from "express";
import projectRoutes from "@/routes/projectRoutes";


export function appRoutes(app:Express){
    app.use("/projects",projectRoutes);
}