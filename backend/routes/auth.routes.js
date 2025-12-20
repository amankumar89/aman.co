import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

// me
router.get("/me", (req, res) => {
  return res.json({
    success: true,
    data: {
      name: "Aman",
      email: "aman@gmail.com",
    },
  });
});

// register
router.post("/register", register);

// login
router.post("/login", login);

// logout
router.post("/logout", logout);

export default router;
