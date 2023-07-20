import { Router } from "express";
import {
  createTask,
  deleteTask,
  findAllTasks,
  findTask,
  updateTask,
} from "../controllers/task.controller.js";
import { validateSchema } from "../middlewares/validation.middleware.js";
import { createTaskValidation } from "../validations/task.validation.js";

const router = Router();

router.get("", findAllTasks);
router.get("/:id", findTask);
router.post("", validateSchema(createTaskValidation), createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
