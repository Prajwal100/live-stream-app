import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register1, reset } from "../../store/slices/auth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
const SignUpComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, message, isError, isSuccess } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(register1(data));
    navigate("/");
    
  };


  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess) {
    toast.success(message);
    navigate("/");
      dispatch(reset());
    }
  }, [isSuccess, isError]);
  return (
    <div class="col-md-12">
      <div class="login-main-right  p-5 mt-5 mb-5">
        <div class="item">
          <div className="text-center mb-5 login-main-left-header pt-4">
            <img
              src="./assets/img/favicon.png"
              className="img-fluid"
              alt="LOGO"
            />
            <h5 className="mt-3 mb-3">Welcome to LiveMe</h5>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Enter your name.",
                    })}
                    name="name"
                    className="form-control"
                    placeholder="Enter you full name"
                    onKeyUp={() => {
                      trigger("name");
                    }}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name.message}</small>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Username <span className="text-danger">*</span>
                  </label>
                  <input
                    autoComplete="off"
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    {...register("username", {
                      required: "Enter unique username.",
                    })}
                    onKeyUp={() => {
                      trigger("username");
                    }}
                  />
                  {errors.username && (
                    <small className="text-danger">
                      {errors.username.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email address"
                {...register("email", {
                  required: "Enter email address.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address!",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label>
                Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                {...register("password", {
                  required: "Password field is required.",
                  minLength: {
                    value: 6,
                    message: "Please enter at least 6 characters.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Please enter at most 20 characters",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="btn btn-outline-primary btn-block btn-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center mt-5">
            <p className="light-gray">
              Already have an Account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
