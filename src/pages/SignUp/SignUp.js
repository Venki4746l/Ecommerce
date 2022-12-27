import React from "react";

const SignUp = (props) => {
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
            <h2 className="login_titleHeading text-center">
              SignUp
            </h2>
          </div>
          <form >
            <div className="userLoginContainer">
              <label>UserName</label>
              <input
                type="text"
                placeholder="Enter username"
                className="form-control"
                
              />
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
                
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
              />
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="confrim Password"
                className="form-control"
              />
            </div>
            
            <div className="login_buttonSection">
              <button type="submit" className="userLoginButton">
                SignUp
              </button>
            </div>
          </form>
          <hr />
          <div className="text-center text-muted delimiter">
            or use a social network
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="socailButton btn-primary m-2 btn-round"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                type="button"
                className="socailButton btn-info m-2 btn-round"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </button>
              <button
                type="button"
                className="socailButton btn-secondary  m-2 btn-round"
                data-toggle="tooltip"
                data-placement="top"
                title="Linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </button>
            </div>

            <div className="modal-footer d-flex justify-content-center">
              <div className="signup-section">
                Already  a member ?{" "}
                <a href="/" className="text-info">
                  Login
                </a>
                .
              </div>
            </div>
          </div>
        </div>

        <img
          className="imageLogin flex-fill order-1 d-none d-md-block"
          src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUp;
