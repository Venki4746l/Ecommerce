import React from "react";
import "./Login.css";
import { headings } from "../../constants/Headings/headings";
import loginimage from "../../Assets/loginimage.jpeg";

const Login = (props) => {
  const closeModal = () => {
    props.modalClose(false);
  };
  return (
    <div className="Modal_container">
      <div className="Modal_content_container ">
        <div className="cardContainerLogin  order-0 w-sm-100 flex-fill ">
          <div className="login_exitSection">
            <button onClick={closeModal} className="login_exitbutton">
              X
            </button>
          </div>
          <div>
            <h2 className="login_titleHeading">{headings.loginHeading}</h2>
          </div>
          <div className="userLoginContainer">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="login_buttonSection">
            <button className="btn btn-success">Login</button>
            <button className="btn btn-primary">Signup</button>
          </div>
          <hr />
          <div className="d-flex flex-column pl-2 pr-2 ">
            <h5 className="text-center">---------------or-------------</h5>
            <button className="btn btn-primary mb-1" id="facebook">
              Sign in with Facebook
            </button>
            <button className="btn btn-secondary mb-1" id="twitter">
              Sign in with Twitter
            </button>
            <button className="btn btn-success" id="googleplus">
              Sign in with Google
            </button>
          </div>
        </div>

        <img
          className="imageLogin flex-fill order-1 d-none d-sm-block"
          src={loginimage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;

