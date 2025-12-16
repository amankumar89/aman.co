import express from "express";
import { getProject, updateProject } from "../controllers/projects.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getProject);
router.put("/", protect, updateProject);

export default router;