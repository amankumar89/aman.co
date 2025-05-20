import express from "express";
import { getExperience, updateExperience } from "../controllers/experience.controller.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getExperience);
router.put("/", authenticateJWT, updateExperience);

export default router;