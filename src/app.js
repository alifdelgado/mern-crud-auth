import cors from "cors";
import express from "express";
import morgan from "morgan";
import { dbConnection } from "./config/database.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);

export const main = () => {
  dbConnection();
  app.listen(3000);
};
