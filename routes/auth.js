import express from "express";

const router = express.Router();

import { signup, signin, me, forgotPassword } from "../controllers/auth.js";
import { verify } from "../middlewares/auth.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/me", verify, me);
router.post("/forgot-password", forgotPassword);

export default router;
