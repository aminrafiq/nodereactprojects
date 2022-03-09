import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import axios from "axios";

const ManageCourse = () => {
    var courseMessage;

    const [enteredCourse, setCourse] = useState({
        email: "",
        password: "",
    });

    const [errorState, setCourseErrors] = useState({
        fullnameError: "",
        emailError: "",
        passwordError: "",
        repasswordError: "",
    });

    const [courseError, setCourseError] = useState({
        courseStatus: "",
        courseMessage: "",
    });

    const handleChange = (e) => {
        setCourse({ ...enteredCourse, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        const email = enteredCourse.email;
        const password = enteredCourse.password;

        if (email !== "" && password !== "") {
            axios
                .post(`${API_BASE_URL}login`, {
                    email: email,
                    password: password,
                })
                .then((response) => {
                    setCourseError({
                        courseResult: response.data.result,
                        courseMessage: response.data.message,
                    });

                    if (response.data.result === "success") {
                        localStorage.setItem("isLoggedIn", true);
                        localStorage.setItem(
                            "userData",
                            JSON.stringify(response.data.userInformation)
                        );
                        setCourse({ email: "", password: "" });
                    }
                })
                .catch(function (error) {
                    setCourseError({
                        courseResult: error.response.data.result,
                        courseMessage: error.response.data.message,
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
                setCourseErrors({
                    emailError,
                    passwordError,
                });
            }
        }
    };

    if (courseError.courseResult === "error") {
        courseMessage = (
            <div className="alert alert-danger alert-dismissible text-center">
                {courseError.courseMessage}
            </div>
        );
    } else if (courseError.courseResult === "success") {
        courseMessage = (
            <div className="alert alert-success alert-dismissible text-center">
                {courseError.courseMessage}
            </div>
        );
    }

    return (
        <div className="wrapper">
            <Header />
            <div className="content-wrapper">
                <Breadcrumb pageTitle="Add Course" />
                <div class="content" >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 card card-solid">
                                <div class="row">
                                    <div class="col-md-4 offset-md-4">
                                        <div>
                                            <form method="post" action="/courses/add">
                                                <div class="card-body">
                                                    <div class="form-group">
                                                        <label for="title">Title</label>
                                                        <input type="text" name="title" id="title" class="form-control" placeholder="Title" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="description">Description</label>
                                                        <input type="text" name="description" id="description" class="form-control" placeholder="Description" />
                                                    </div>
                                                    <div>
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
};

export default ManageCourse;
