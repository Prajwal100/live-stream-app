const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const DB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI, {});
    console.log(`Connected to database ${connection.connections[0].name}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = DB;
