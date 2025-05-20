import express from "express";
import { getAbout, updateAbout } from "../controllers/about.controller.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAbout);
router.put("/", authenticateJWT, updateAbout);

export default router;