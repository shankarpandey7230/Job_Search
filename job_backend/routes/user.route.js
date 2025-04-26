import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/Multer.js";
import { is } from "../../node_modules/@types/whatwg-url/lib/URL.d";

const router = express.Router();

router.route("/register").post(isAuthenticated, singleUpload, register);
router.route("/login").post(isAuthenticated, login);
router.route("/logout").get(logout);
router
  .route("/profile/update")
  .post(isAuthenticated, singleUpload, updateProfile);

export default router;
