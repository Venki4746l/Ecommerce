//venkateswara rao

import React, { useRef, useState } from "react";
import "./SignUp.css";
import { headings } from "../../constants/Headings/headings";

const SignUp = (props) => {
  const [errerMessage, SeterrerMessage] = useState("");
  const [error, setError] = useState(false);
  const userNameRef = useRef();
  const passWordRef = useRef();
  const conformPassRef = useRef();

  //login section show already user have a account
  const loginModalShow = () => {
    props.loginModalOpen(true);
    props.modalClose(false);
  };

  //signup handler
  const onSubmitHAndler = (e) => {
    e.preventDefault();
    //get user enter name and password
    const username = userNameRef.current.value;
    const password = passWordRef.current.value;
    const confrimpass = conformPassRef.current.value;
    //checking the conditions details
    if (username === "") {
      setError(true);
      SeterrerMessage("userName Required");
    } else if (password.length < 8) {
      setError(true);
      SeterrerMessage("Password must be 8 charcters");
    } else if (password !== confrimpass) {
      setError(true);
      SeterrerMessage("Password must be same as above password");
    } else {
      setError(false);
      //POST request using axios inside useEffect React hook
      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          /* other user data */
        }),
      })
        .then((res) => res.json())
        .then(console.log);
      alert("Succssfully register");

      props.modalClose(false);
      props.loginModalOpen(true);

      // fetch("https://dummyjson.com/users/")
      //   .then((res) => res.json())
      //   .then((data) => console.log(data));
    }
  };
  const closeModal = () => {
    props.modalClose(false);
  };
  return (
    <div className="Modal_container_signup">
      <div className="Modal_content_container ">
        <div className="cardContainerLogin  order-0 w-sm-100 flex-fill ">
          <div className="login_exitSection">
            <button onClick={closeModal} className="login_exitbutton">
              X
            </button>
          </div>
          <div>
            <h2 className="login_titleHeading text-center">{headings.signUp}</h2>
          </div>
          <form onSubmit={onSubmitHAndler}>
            <div className="userLoginContainer">
              <label>{headings.UserName}</label>
              <input
                type="text"
                placeholder="Enter username"
                className="form-control"
                ref={userNameRef}
              />
              <label>{headings.name}</label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
              />

              <label>{headings.Password}</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                ref={passWordRef}
              />
              <label>{headings.ConfirmPassword}</label>
              <input
                type="password"
                placeholder="confrim Password"
                className="form-control"
                ref={conformPassRef}
              />
            </div>
            <div>
              {error ? (
                <p
                  style={{ color: "red", fontSize: "20px" }}
                >{`*${errerMessage}`}</p>
              ) : (
                ""
              )}
            </div>

            <div className="login_buttonSection">
              <button type="submit" className="userLoginButton">
                {headings.signUp}
              </button>
            </div>
          </form>
          <hr />
          <div className="text-center text-muted delimiter">
            {headings.socialMessage}
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
                {headings.alreadyAmember}{" "}
                <button onClick={loginModalShow} className="login_button">
                  {headings.loginHeading}
                </button>
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
