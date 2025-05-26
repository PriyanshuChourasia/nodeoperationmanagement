import { Express } from "express";
import projectRoutes from './projectRoutes';
import taskRoutes from './taskRoutes';


export function appRoutes(app:Express){
    app.use("/projects",projectRoutes);
    app.use("/tasks",taskRoutes);
}