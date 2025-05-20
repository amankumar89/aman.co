import express from "express";
import { getProject, updateProject } from "../controllers/projects.controller.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getProject);
router.put("/", authenticateJWT, updateProject);

export default router;