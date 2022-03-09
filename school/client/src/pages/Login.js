import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";
import axios from "axios";
import InputField from "../components/InputField";

var loginMessage;

const Login = () => {
  const navigate = useNavigate();

  const [enteredLogin, setLogin] = useState({
    email: "",
    password: "",
  });

  const [errorState, setLoginErrors] = useState({
    fullnameError: "",
    emailError: "",
    passwordError: "",
    repasswordError: "",
  });

  const [loginError, setLoginError] = useState({
    loginStatus: "",
    loginMessage: "",
  });

  const handleChange = (e) => {
    setLogin({ ...enteredLogin, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const email = enteredLogin.email;
    const password = enteredLogin.password;
    const isAuthenticated = localStorage.getItem("userData");
    console.log(JSON.parse(isAuthenticated));

    if (email !== "" && password !== "") {
      axios
        .post(`${API_BASE_URL}login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          setLoginError({
            loginResult: response.data.result,
            loginMessage: response.data.message,
          });

          if (response.data.result === "success") {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem(
              "userData",
              JSON.stringify(response.data.userInformation)
            );
            setLogin({ email: "", password: "" });
            navigate("/dashboard");
          }
        })
        .catch(function (error) {
          console.log('i am here');
          setLoginError({
            loginResult: error.response.data.result,
            loginMessage: error.response.data.message,
          });
        });
    } else {
      let emailError;
      let passwordError;

      if (email === "") {
        emailError = "Please enter email";
      }
      if (password === "") {
        passwordError = "Please enter password";
      }

      if (emailError || passwordError) {
        setLoginErrors({
          emailError,
          passwordError,
        });
      }
    }
  };

  if (loginError.loginResult === "error") {
    loginMessage = (
      <div className="alert alert-danger alert-dismissible text-center">
        {loginError.loginMessage}
      </div>
    );
  } else if (loginError.loginResult === "success") {
    loginMessage = (
      <div className="alert alert-success alert-dismissible text-center">
        {loginError.loginMessage}
      </div>
    );
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1>
              <b>My</b>School
            </h1>
          </div>
          <div className="card-body">
            <form onSubmit={submitForm}>
              {loginMessage}
              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      id: "email",
                      name: "email",
                      type: "email",
                      placeholder: "Email",
                      value: enteredLogin.email,
                      className: "form-control",
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
                  {errorState.passwordError}
                </div>
              </div>
              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      id: "password",
                      name: "password",
                      type: "password",
                      placeholder: "Password",
                      value: enteredLogin.password,
                      className: "form-control",
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
              <div className="row">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
            </form>
            <p className="mb-1">
              <Link to="/forgotpassword">I forgot my password</Link>
            </p>
            <p className="mb-0">
              <Link to="/register" className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
