import { Link } from "react-router-dom";
import { useState } from "react";
import InputField from "../components/InputField";
import { API_BASE_URL } from "../constants";
import axios from "axios";

var registerationMessage;

const Register = () => {
  const [enteredRegister, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [errorState, setRegisterErrors] = useState({
    fullnameError: "",
    emailError: "",
    passwordError: "",
    repasswordError: "",
  });

  const [registerError, setRegisterError] = useState({
    registerStatus: "",
    registerMessage: "",
  });

  const handleChange = (e) => {
    setRegister({ ...enteredRegister, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const fullname = enteredRegister.fullname;
    const email = enteredRegister.email;
    const password = enteredRegister.password;
    const repassword = enteredRegister.repassword;

    if (
      fullname !== "" &&
      email !== "" &&
      password !== "" &&
      repassword !== ""
    ) {
      axios
        .post(`${API_BASE_URL}register`, {
          fullname: fullname,
          email: email,
          password: password,
        })
        .then((response) => {
          var responseData = response.data;
          var registerStatus = responseData.status;
          var registerMessage = responseData.message;
          if (registerStatus === "success") {
            setRegister({
              fullname: "",
              email: "",
              password: "",
              repassword: "",
            });
          }
          setRegisterError({ registerStatus, registerMessage });
        })
        .catch(function (error) {});
    } else {
      let fullnameError;
      let emailError;
      let passwordError;
      let repasswordError;

      if (fullname === "") {
        fullnameError = "Please enter full name";
      }
      if (email === "") {
        emailError = "Please enter email";
      }
      if (password === "") {
        passwordError = "Please enter password";
      }
      if (repassword === "") {
        repasswordError = "Please enter password again";
      }

      if (fullnameError || emailError || passwordError) {
        setRegisterErrors({
          fullnameError,
          emailError,
          passwordError,
          repasswordError,
        });
      }
    }
  };

  if (registerError.registerStatus === "error") {
    registerationMessage = (
      <div className="alert alert-danger alert-dismissible text-center">
        {registerError.registerMessage}
      </div>
    );
  } else if (registerError.registerStatus === "success") {
    registerationMessage = (
      <div className="alert alert-success alert-dismissible text-center">
        {registerError.registerMessage}
      </div>
    );
  }

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1>
              <b>My</b>School
            </h1>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form onSubmit={submitForm} autoComplete="off">
              {registerationMessage}
              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      type: "text",
                      id: "fullname",
                      name: "fullname",
                      value: enteredRegister.fullname,
                      className: "form-control",
                      placeholder: "Full name",
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "red",
                    paddingLeft: "4px",
                  }}
                >
                  {errorState.fullnameError}
                </div>
              </div>
              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      type: "email",
                      id: "email",
                      name: "email",
                      value: enteredRegister.email,
                      className: "form-control",
                      placeholder: "Email",
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "red",
                    paddingLeft: "4px",
                  }}
                >
                  {errorState.emailError}
                </div>
              </div>
              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      type: "password",
                      id: "password",
                      name: "password",
                      value: enteredRegister.password,
                      className: "form-control",
                      placeholder: "Password",
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "red",
                    paddingLeft: "4px",
                  }}
                >
                  {errorState.passwordError}
                </div>
              </div>
              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      type: "password",
                      id: "repassword",
                      name: "repassword",
                      value: enteredRegister.repassword,
                      className: "form-control",
                      placeholder: "Retype Password",
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "red",
                    paddingLeft: "4px",
                  }}
                >
                  {errorState.repasswordError}
                </div>
              </div>
              <div className="row">
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </div>
            </form>
            <Link to="/" className="text-center">
              I already have a membership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
