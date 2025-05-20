import {Request,Response} from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


// get all projects
export const getProjects = async (req:Request ,res: Response):Promise<void> =>{
    try{
        const projects = await prisma.project.findMany();
        res.status(200).json({
            data: projects,
            succcess: true
        });
    }catch(error){
        res.status(500).json({
            message:"Error retrieving projects",
            success:false
        });
    }
}

// create projects
export const createProject = async (req:Request,res:Response):Promise<void> =>{
    try{
        const {name,description,startDate,endDate} = req.body;
        const newProject = await prisma.project.create({
            data:{
                name,
                description,
                startDate,
                endDate
            }
        });
        res.status(201).json({
            data: newProject,
            success:true
        });
    }catch(error:any){
        res.status(500).json({
            message:"Error creating project",
            error: error.message,
            success:false
        });
    }
}