import express from "express";
import helmet from "helmet";
import cors from "cors";
import DB from "./utils/db.js";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
app.use(cookieParser());
app.use(helmet.frameguard({ action: "DENY" }));
DB();

// =====================ROUTES STARTS========================
import auth from "./routes/auth.js";
app.use("/api/v1/auth", auth);
// =====================ROUTES ENDS========================

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`⚡️Server started at http://localhost:${PORT}`);
});
