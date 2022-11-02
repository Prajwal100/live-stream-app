import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const generateOTP = (n) => {
  let s = 0;
  for (var i = 0; i < n; i++) {
    s = s * 10 + Math.floor(Math.random() * 10);
  }

  return parseInt(s);
};

export const signup = async (req, res, next) => {
  try {
    const { name, username, email } = req.body;

    const userEmailCheck = await User.findOne({ email: email });
    const usernameCheck = await User.findOne({ username: username });

    if (userEmailCheck) {
      res.status(400).json({
        ok: false,
        message: "Email is already registered.",
      });
    }

    if (usernameCheck) {
      res.status(400).json({
        ok: false,
        message: "Username is already registered.",
      });
    }

    const tempId = generateOTP(6);

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    const user = await User.create({
      name,
      username,
      email,
      password: hashPassword,
      tempId,
    });

    const token = user.getJwtToken(tempId);

    const { password, ...others } = user;

    return res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    res.status(400).send({ ok: false, message: err });
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(400).json({ ok: false, message: "User not found!" });
    }

    if (!user.tempId) {
      user.tempId = generateOTP(6);
      user.save();
    }

    // checking the password : matched or not;
    const match = user.checkPassword(password);

    if (!match) {
      res.status(400).json({ ok: false, message: "Password does not match." });
    }
    const token = user.getJwtToken(user.tempId);

    return res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(user);
  } catch (err) {
    res.status(400).send({ ok: false, message: err });
  }
};

export const me = async (req, res, next) => {
  try {
    console.log("me", req.user);
    const { _id, name, username, email, avatar } = req.user;
    res.status(200).send({
      ok: true,
      data: { _id, name, username, email, avatar },
      subscribedTo: req.user.subscribedTo,
    });
  } catch (e) {
    res.status(404).send({ ok: false, message: e });
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      res
        .status(400)
        .send({ ok: false, message: "Please enter email address." });
    }

    // checking the user;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ ok: false, message: "User not found." });
    }
  } catch (e) {
    res.status(404).send({ ok: false, message: e });
  }
};
