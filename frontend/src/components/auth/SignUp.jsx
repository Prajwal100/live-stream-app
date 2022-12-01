import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../store/slices/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SignUpComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, message, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
      toast.success(message);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((preData) => ({ ...preData, [e.target.name]: e.target.value }));
  };

  const { name, username, email, password } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, username, email, password };

    dispatch(register(userData));
  };
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
                    value={name}
                    onChange={handleChange}
                  />
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
                    value={username}
                    onChange={handleChange}
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
                placeholder="Enter email address"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password <span className="text-danger">*</span></label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={handleChange}
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
      </div>
    </div>
  );
};

export default SignUpComponent;
