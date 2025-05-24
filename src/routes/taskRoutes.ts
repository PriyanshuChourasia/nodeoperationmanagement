import { createTasks, getTaskById, getTasks, updateStatus } from "@/controllers/taskController";
import { Router } from "express";

const router = Router();

router.get("/",getTaskById);
router.get("/all",getTasks);
router.post("/",createTasks);
router.patch("/:taskId",updateStatus);

export default router;