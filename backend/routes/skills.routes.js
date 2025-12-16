import express from "express";
import { getSkills, updateSkills } from "../controllers/skills.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getSkills);
router.put("/", protect, updateSkills);

export default router;