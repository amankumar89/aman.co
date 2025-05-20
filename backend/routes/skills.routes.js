import express from "express";
import { getSkills, updateSkills } from "../controllers/skills.controller.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getSkills);
router.put("/", authenticateJWT, updateSkills);

export default router;