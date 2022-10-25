import React from 'react'
import Intro from '../../components/auth/Intro'
import SignUpComponent from '../../components/auth/SignUp'

const SignUp = () => {
  return (
    <div  class="login-main-body">
       <section class="login-main-wrapper">
         <div class="container-fluid pl-0 pr-0">
            <div class="row no-gutters">
               <div class="col-md-5 p-5 bg-white full-height">
                  <SignUpComponent />
               </div>
               <Intro />

            </div>
         </div>
      </section>
    </div>
  )
}

export default SignUp