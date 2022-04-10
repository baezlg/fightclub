import express from "express";
const router = express.Router();

import {
  login,
  register,
  changePassword,
} from "../controller/userController.js";
import { protect } from "../controller/protect.js";

router.post("/register", register);
router.post("/login", login);
router.route("/changepassword").patch(protect, changePassword);
//router.patch("/changepassword", protect, changePassword);

export default router;
