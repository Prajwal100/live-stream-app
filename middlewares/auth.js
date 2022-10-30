import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verify = async (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return next({
      message: "Please login to continue...",
      statusCode: 403,
      logout: true,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id)
      .populate({
        path: "subscribedTo",
        select: "username avatar",
      })
      .select("-password");
    console.log("user", user);

    if (!user) {
      return next({
        message: "User not found",
        status: 404,
        logout: true,
      });
    }

    if (!decoded.tempId || !user.tempId) {
      return next({ message: "Please login again to continue.", logout: true });
    }

    if (decoded.tempId !== user.tempId) {
      return next({
        message: "Session expired, Please login again.",
        logout: true,
      });
    }

    req.user = user;
    next();
  } catch (err) {
    if (err.message.includes("expire")) {
      next({ logout: true, message: err.message, statusCode: 403 });
    } else {
      next({ message: err.message, statusCode: 403 });
    }
  }
};
