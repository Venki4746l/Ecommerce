//taskLogin -venkateswara rao
import React, { useRef, useState, useEffect } from "react";
import "./Login.css";
import { headings } from "../../constants/Headings/headings";
// import login from "../../Assets/login.jpeg";

const Login = (props) => {
  const [userDetails, setUserDetails] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setUserDetails(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  //using ref read the dat user entires
  const usernameRef = useRef();
  const passwordRef = useRef();

  //submit the data
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const userData = {
      username,
      password,
    };

    if (username === "" || password === "") {
      alert("Enter Username and Password Correctly");
    } else if (password.length < 5) {
      alert("Password must be above 8 char");
    } else {
      const data = userDetails.find(
        (person) =>
          person.username === userData.username &&
          person.password === userData.password
      );
      if(!data){
        alert("invalid login")
      }
      else{
        alert("succeesfully login")
        props.modalClose(false)
        props.logOutShow(true)
        const name=userDetails.filter((person)=>person.username===userData.username)
        props.userDetailsGet(name)
        
      }
    }
  };

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
          <form onSubmit={onSubmitHandler}>
            <div className="userLoginContainer">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter username"
                className="form-control"
                ref={usernameRef}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                ref={passwordRef}
              />
            </div>
            <div className="login_buttonSection">
              <button type="submit" className="btn btn-success">
                Login
              </button>
              <button className="btn btn-primary">Signup</button>
            </div>
          </form>
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
          src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;

