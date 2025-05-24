import { Express } from "express";
import projectRoutes from "@/routes/projectRoutes";
import taskRoutes from "@/routes/taskRoutes";


export function appRoutes(app:Express){
    app.use("/projects",projectRoutes);
    app.use("/tasks",taskRoutes);
}