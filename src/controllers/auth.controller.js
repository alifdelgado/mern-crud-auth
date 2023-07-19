import bcrypt from "bcryptjs";
import User from "../schemas/user.schema.js";
import { createAccessToken } from "../libs/jwt.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });
    const verifiedPassword = bcrypt.compareSync(password, userFound.password);
    console.log({ userFound });
    if (!verifiedPassword)
      return res.status(403).json({ message: "Invalid credentials" });

    // const token = await createAccessToken({
    //   id: user.id,
    // });
    // res.cookie("token", token);
    // return res.status(201).json({
    //   id: user.id,
    //   username: user.username,
    //   email: user.email,
    //   createdAt: user.createdAt,
    //   updatedAt: user.updatedAt,
    // });
  } catch (error) {
    return res.status(400).json({ mesaage: "User already exists" });
  }
};

export const logout = (req, res) => {};

export const register = async (req, res) => {
  try {
    const { email, password, username } = req.body;
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
    return res.status(400).json({ mesaage: "User already exists" });
  }
};
