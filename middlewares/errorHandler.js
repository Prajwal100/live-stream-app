const errorHandler = (err, req, res, next) => {
  let message = err.message || "Internal server error";
  let statusCode = err.statusCode || 500;

  if (err.code === 11000) {
    message = "Duplicate key";
    if (err.keyValue.email) {
      message = "The email address is already in use.";
    }

    if (err.keyValue.username) {
      message = "The username is already in use.";
    }
    statusCode = 400;
  }

  if (err.name === "ValidationError") {
    const fields = Object.keys(err.errors);

    fields.map((field) => {
      if (err.errors[field].kind === "maxlength") {
        message = "Password should be maximum of 20 characters";
      } else {
        message = "Password should be minimum of 6 characters";
      }
    });

    statusCode = 400;
  }

  if (err.name === "CastError") {
    message = "Casting error for database";
    statusCode = 400;
  }

  res.status(statusCode).json({ ok: false, message, logout: err.logout });
};

export default errorHandler;
