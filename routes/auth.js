import express from "express";

const router = express.Router();

import { register, login, me, forgotPassword } from "../controllers/auth.js";
import { verify } from "../middlewares/auth.js";

router.post("/login", login);
router.post("/register", register);
router.get("/me", verify, me);
router.post("/forgot-password", forgotPassword);

export default router;
