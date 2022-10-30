import express from "express";

const router = express.Router();

import { signup, signin, me } from "../controllers/auth.js";
import { verify } from "../middlewares/auth.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/me", verify, me);

export default router;
