import cors from "cors";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { dbConnection } from "./config/database.js";
import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import { verifyToken } from "./middlewares/validateToken.js";

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", verifyToken, tasksRoutes);

export const main = () => {
  dbConnection();
  app.listen(3000);
};
