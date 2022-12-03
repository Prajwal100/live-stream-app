import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { login,reset } from "../../store/slices/auth";
import { toast } from "react-hot-toast";
const SignInComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isSuccess,isError,isLoading,message}=useSelector(state=>state.auth);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

 function onSubmit(data) {
    dispatch(login(data));
    navigate("/dashboard");
    
  }
  
  useEffect(() => {
    return ()=>{
      dispatch(reset())
    }
  },[])
  
  useEffect(() => {
    if(isSuccess){
      toast.success(message);
      navigate("/dashboard");
      dispatch(reset());
    }
    
    if(isError){
      toast.error(message);
      dispatch(reset());
    }
  },[isSuccess,isError]);

  return (
    <div class="col-md-12">
      <div class="login-main-right p-5 mt-5 mb-5">
        <div class="item">
          <div class="text-center mb-5 login-main-left-header pt-4">
            <img src="./assets/img/favicon.png" class="img-fluid" alt="LOGO" />
            <h5 class="mt-3 mb-3">Welcome to LiveMe</h5>
          </div>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group">
              <label>
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required={true}
                {...register("email", {
                  required: "Email is Required!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address!",
                  },
                })}
                error={Boolean(errors.email)}
                onKeyUp={() => {
                  trigger("email");
                }}
                class="form-control"
                placeholder="Enter email address"
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div class="form-group">
              <label>
                Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password must be required!",
                  pattern: {
                    value:
                      "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=(.*[W]){    1,})(?!.*s).{8,}$",
                    message:
                      "Password should contain at least one number and one special character",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be more than 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be less than 20 characters",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
                class="form-control"
                placeholder="Password"
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>
            <div class="mt-4">
              <div class="row">
                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-outline-primary btn-block btn-lg"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div class="text-center mt-5">
            <p class="light-gray">
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
