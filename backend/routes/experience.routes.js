import express from "express";
import { getExperience, updateExperience } from "../controllers/experience.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getExperience);
router.put("/", protect, updateExperience);

export default router;