import React,{useState} from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast'
const SignUpComponent = () => {
    
    const [data,setData]=useState({
        name:"",
        username:"",
        email:"",
        password:'',
    });
    
    const [loading,setLoading]=useState(false);
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        toast.success("success")
        
    }
  return (
    <div className="login-main-left">
      <div className="text-center mb-5 login-main-left-header pt-4">
        <img src="./assets/img/favicon.png" className="img-fluid" alt="LOGO" />
        <h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
        <p>
          It is a long established fact that a reader <br /> will be distracted
          by the readable.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Username <span className="text-danger">*</span>
              </label>
              <input
                name="username"
                type="text"
                className="form-control"
                placeholder="Enter username"
              />
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
            placeholder="Enter mobile number"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleSubmit}
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
  );
};

export default SignUpComponent;
