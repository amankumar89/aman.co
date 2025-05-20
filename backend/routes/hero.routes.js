import express from "express";
import { getHero, updateHero } from "../controllers/hero.controller.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getHero);
router.put("/", authenticateJWT, updateHero);

export default router;