import { env } from "../config/env.config";
import { Express, Request, Response } from "express";


export function intializeServer(app:Express){

    app.get("/",(req:Request,res:Response) =>{
        res.status(200).json({
            "data":"Application running",
            "success":"true"
        });
    });


    app.listen(env.PORT,()=>{
        console.log(`Application running at http://localhost:${env.PORT}`);
    });
}