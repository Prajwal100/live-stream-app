import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignInComponent = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  return (
    <div class="col-md-12">
      <div class="login-main-right p-5 mt-5 mb-5">
        <div class="item">
          <div class="text-center mb-5 login-main-left-header pt-4">
            <img src="./assets/img/favicon.png" class="img-fluid" alt="LOGO" />
            <h5 class="mt-3 mb-3">Welcome to LiveMe</h5>
           
          </div>
          <form autoComplete="off" action="https://askbootstrap.com/preview/vidoe-v1-1/index.html">
            <div class="form-group">
              <label>Email Address  <span className="text-danger">*</span></label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email address"
              />
            </div>
            <div class="form-group">
              <label>Password  <span className="text-danger">*</span></label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
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
