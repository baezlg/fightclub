import asyncHandler from "express-async-handler";
import generateToken from "./generateToken.js";
import User from "../models/userModel.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    return res.json("Invalid email or password");
  }
});

export const register = asyncHandler(async (req, res) => {
  const { name, email, phone, personalID, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    return res.json("User already exists");
  }

  const user = await User.create({
    name,
    email,
    phone,
    personalID,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.personalID,
      personalID: user.personalID,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    return res.json("Invalid user data");
  }
});

export const changePassword = asyncHandler(async (req, res) => {
  const { password, newPassword, passwordConfirm } = req.body;
  const user = await User.findById(req.user._id);
  const isValid = await user.matchPassword(password);
  if (isValid) {
    if (newPassword && passwordConfirm) {
      if (newPassword === passwordConfirm) {
        user.password = newPassword;
        await user.save();
        res.status(200).json("password updated");
      } else {
        res.status(400);
        return res.json("Password doesn't match");
      }
    } else {
      res.status(400);
      return res.json("All fields required");
    }
  } else {
    res.status(400);
    return res.json("Invalid password");
  }
});
