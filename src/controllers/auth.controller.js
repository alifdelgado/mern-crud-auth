import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../schemas/user.schema.js";
import { createAccessToken } from "../libs/jwt.js";
import { JWT_SECRET } from "../config/config.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: ["User not found"] });

    const verifiedPassword = bcrypt.compareSync(password, userFound.password);
    if (!verifiedPassword)
      return res.status(403).json({ message: ["Invalid credentials"] });

    const token = await createAccessToken({
      id: userFound.id,
    });
    res.cookie("token", token);
    return res.status(200).json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    return res.status(400).json({ message: ["User not found"] });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(204);
};

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json({ message: ["User already exists"] });

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({ email, password: hashedPassword, username });
    await user.save();
    const token = await createAccessToken({
      id: user.id,
    });
    res.cookie("token", token);
    return res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    return res.status(400).json({ message: ["User already exists"] });
  }
};

export const profile = async (req, res) => {
  const user = await User.findById(req.user_id);
  return res.status(200).json({
    id: user.id,
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  });
};

export const verify = (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: ["Unauthorized"] });

  jwt.verify(token, JWT_SECRET, async (err, { id }) => {
    if (err) return res.status(401).json({ message: ["Unauthorized"] });

    const userFound = await User.findById(id);
    if (!userFound) return res.status(404).json({ message: ["Unauthorized"] });

    return res.status(200).json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  });
};
