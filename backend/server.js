import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";

// routes import
import heroRoutes from "./routes/hero.routes.js";
import aboutRoutes from "./routes/about.routes.js";
import skillsRoutes from "./routes/skills.routes.js";
import experienceRoutes from "./routes/experience.routes.js";
import projectsRoutes from "./routes/projects.routes.js";
import educationRoutes from "./routes/education.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();
const __dirname = path.resolve();

// if (!process.env.NODE_ENV === "production") {
//   app.use(cors({ origin: "*" }));
// }

app.use(express.json());
// app.use(express.static(path.join(__dirname, "../frontend", "dist")));

connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/education", educationRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running..." });
});

// app.use("*", (req, res) => {
//   // send frontend dist folder index.html using path module
//   return res.sendFile(
//     path.join(__dirname, "../frontend", "dist", "index.html")
//   );
// });
export default app;

// local setup
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Server running at: http://localhost:${PORT}`)
  );
}
