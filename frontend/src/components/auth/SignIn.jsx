import React from 'react'
import { Link } from 'react-router-dom'

const SignInComponent = () => {
  return (
    <div class="col-md-5 p-5 bg-white full-height">
    <div class="login-main-left">
      <div class="text-center mb-5 login-main-left-header pt-4">
        <img
          src="./assets/img/favicon.png"
          class="img-fluid"
          alt="LOGO"
        />
        <h5 class="mt-3 mb-3">Welcome to Vidoe</h5>
        <p>
          It is a long established fact that a reader <br /> will be
          distracted by the readable.
        </p>
      </div>
      <form action="https://askbootstrap.com/preview/vidoe-v1-1/index.html">
        <div class="form-group">
          <label>Mobile number</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter mobile number"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
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
  )
}

export default SignInComponent