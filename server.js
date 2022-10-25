require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const DB = require("./utils/db.config");
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet.frameguard({ action: "DENY" }));
DB();

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`⚡️Server started at http://localhost:${PORT}`);
});
