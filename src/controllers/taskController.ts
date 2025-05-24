import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getTasks = async(req:Request,res:Response):Promise<void> =>{
    try{
        const tasks = await prisma.task.findMany();
        res.status(200).json({
            data:tasks,
            success:true
        });
    }catch(error){
        res.status(500).json({
            message:"Tasks not found",
            success:false
        })
    }
}


// get task by Id
export const getTaskById = async(req:Request, res:Response):Promise<void> => {
    try{
        const {projectId} = req.query;
        const tasks = await prisma.task.findMany({
            where:{
                projectId: Number(projectId),
            },
            include:{
                author:true,
                assignee:true,
                comments:true,
                attachments:true,
            }
        });
        res.status(200).json({
            data: tasks,
            success: true
        });
    }catch(error:any){
        res.status(500).json({
            message:"Tasks does not exists",
            success:false
        })
    }
}

// create tasks
export const createTasks = async(req:Request, res:Response):Promise<void> =>{
    try{
        const {title,description,status,priority,tags,startDate,dueDate,points,projectId,authorUserId,assignedUserId} = req.body;

        const newTask = await prisma.task.create({
            data:{
                title,
                description,
                status,
                priority,
                tags,
                startDate,
                dueDate,
                points,
                projectId,
                authorUserId,
                assignedUserId
            }
        });
        res.status(201).json({
            message:"Task created successfully",
            data:newTask,
            success:true
        })
    }catch(error){
        res.status(500).json({
            message:"Tasks not created",
            success:false
        })
    }
}

// Update Task status
export const updateStatus = async(req:Request,res:Response):Promise<void> => {
    try{
        const {taskId} = req.params;
        const {status} = req.body;
        const updateTask = await prisma.task.update({
            where:{
                id: Number(taskId)
            },
            data:{
                status: status
            }
        });
        res.status(200).json({
            message: "Task Updated",
            data: updateTask,
            success:true
        })
    }catch(error:any){
        res.status(500).json({
            message:"Error in status update",
            error: error.message,
            success:false
        })
    }
}