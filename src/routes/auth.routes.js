import { Router } from "express";
import {
  login,
  logout,
  profile,
  register,
  verify,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validation.middleware.js";
import {
  loginValidation,
  registerValidation,
} from "../validations/auth.validation.js";

const router = Router();

router.post("/login", validateSchema(loginValidation), login);
router.post("/logout", logout);
router.post("/register", validateSchema(registerValidation), register);
router.get("/profile", verifyToken, profile);
router.get("/verify-token/:token", verifyToken, verify);

export default router;
