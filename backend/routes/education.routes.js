import express from "express";
import { getEducation, updateEducation } from "../controllers/education.controller.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getEducation);
router.put("/", authenticateJWT, updateEducation);

export default router;