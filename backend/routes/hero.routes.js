import express from "express";
import { getHero, updateHero } from "../controllers/hero.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getHero);
router.put("/", protect, updateHero);

export default router;