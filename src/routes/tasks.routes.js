import { Router } from "express";
import {
  createTask,
  deleteTask,
  findAllTasks,
  findTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = Router();

router.get("", findAllTasks);
router.get("/:id", findTask);
router.post("", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
