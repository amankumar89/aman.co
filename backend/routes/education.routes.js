import express from "express";
import { getEducation, updateEducation } from "../controllers/education.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getEducation);
router.put("/", protect, updateEducation);

export default router;