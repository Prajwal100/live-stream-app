const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  tempId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Username is required."],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minLength: [5, "Password must be at least 5 characters."],
  },
  avatar: {
    type: String,
    default: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  cover: String,
  bio: String,
  subscribers: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  subscribedTo: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
