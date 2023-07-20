import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const verifyToken = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  jwt.verify(token, JWT_SECRET, (err, { id }) => {
    if (err) return res.status(401).json({ message: "Invalid token" });

    req.user_id = id;

    next();
  });
};
