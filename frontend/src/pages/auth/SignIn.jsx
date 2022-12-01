import React from "react";
import Intro from "../../components/auth/Intro";
import SignInComponent from "../../components/auth/SignIn";

const SignIn = () => {
  return (
    <div className="login-main-body">
      <section class="login-main-wrapper">
        <div class="container-fluid pl-0 pr-0">
          <div class="row no-gutters">
            <SignInComponent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
