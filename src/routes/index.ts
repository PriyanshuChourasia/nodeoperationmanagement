import { Express, Request,Response } from "express";
import projectRoutes from './projectRoutes';
import taskRoutes from './taskRoutes';


export function appRoutes(app:Express){
    app.use("/api/projects",projectRoutes);
    app.use("/api/tasks",taskRoutes);

    app.get("/",(req:Request,res:Response)=>{
        res.status(200).json({
            "message":"Welcome to operation management",
            "success":true
        })
    });
    app.get("/api",(req:Request,res:Response)=>{
        res.status(200).json({
            "message":"Welcome to operation management API point",
            "success":true
        })
    });
}