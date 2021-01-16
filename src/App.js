import React, { useState } from "react";
import "./App.css";
import logo from "./files/logo.png";

const App = () => {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [emailValidity, setEmailValidity] = useState();
  let [passwordValidity, setPasswordValidity] = useState();
  let [error, setError] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    let regEx =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (e.target.value.match(regEx)) {
      setEmailValidity(true);
    } else {
      setEmailValidity(false);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (
      e.target.value === null ||
      e.target.value.match(/^ +$/) ||
      e.target.value === ""
    ) {
      setPasswordValidity(false);
    } else {
      setPasswordValidity(true);
    }
  };

  const validateField = () => {
    if (!emailValidity || !passwordValidity) {
      setError(true);
      return;
    } else {
      setError(false);

      //this is where the contents of the fields can be send to the backend

      console.log(email);
      console.log(password);
    }
  };

  return (
    <>
      <div className="container">
        <div className="center_container">
          <div className="upper_fold">
            <div className="logo_group">
              <div className="logo_container">
                <img src={logo} className="logo" alt="logo" />
              </div>
              <div className="title">Sign In</div>
            </div>

            <form autoComplete="on">
              <div className="input_group">
                <div className="input_container">
                  <input
                    type="email"
                    autoComplete="email"
                    tabIndex="1"
                    placeholder="Enter an email"
                    onChange={handleEmail}
                    className={
                      emailValidity === undefined || emailValidity === true
                        ? "input_box email"
                        : "input_box email invalid"
                    }
                    required
                  />
                </div>
                <div className="input_container">
                  <input
                    type="password"
                    tabIndex="2"
                    placeholder="Enter your password"
                    onBlur={handlePassword}
                    className={
                      passwordValidity === undefined ||
                      passwordValidity === true
                        ? "input_box password"
                        : "input_box password invalid"
                    }
                    required
                  />
                </div>
              </div>

              {error ? (
                <div className="message">
                  * A valid email and password is required
                </div>
              ) : null}

              <div className="button_group">
                <div className="create_link">
                  <a href="." tabIndex="4">
                    Create an account
                  </a>
                </div>
                <div className="login_button_container">
                  <div
                    className="login_button"
                    tabIndex="3"
                    onClick={validateField}
                  >
                    LOGIN
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="lower_fold">
          Ali Abana => Calm Island Limited Test v0.01a
        </div>
      </div>
    </>
  );
};

export default App;
