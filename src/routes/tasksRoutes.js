import express from "express";
import { createTask } from "../controllers/tasks/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// create Routes
router.post("/task/create", protect, createTask);

export default router;
