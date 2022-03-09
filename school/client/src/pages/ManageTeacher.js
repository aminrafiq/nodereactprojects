import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import axios from "axios";

const ManageTeacher = () => {
    var teacherMessage;

    const [enteredTeacher, setTeacher] = useState({
        email: "",
        password: "",
    });

    const [errorState, setTeacherErrors] = useState({
        fullnameError: "",
        emailError: "",
        passwordError: "",
        repasswordError: "",
    });

    const [teacherError, setTeacherError] = useState({
        teacherStatus: "",
        teacherMessage: "",
    });

    const handleChange = (e) => {
        setTeacher({ ...enteredTeacher, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        const email = enteredTeacher.email;
        const password = enteredTeacher.password;
        const isAuthenticated = localStorage.getItem("userData");
        console.log(JSON.parse(isAuthenticated));

        if (email !== "" && password !== "") {
            axios
                .post(`${API_BASE_URL}teacher`, {
                    email: email,
                    password: password,
                })
                .then((response) => {
                    setTeacherError({
                        teacherResult: response.data.result,
                        teacherMessage: response.data.message,
                    });

                    if (response.data.result === "success") {
                        localStorage.setItem("isLoggedIn", true);
                        localStorage.setItem(
                            "userData",
                            JSON.stringify(response.data.userInformation)
                        );
                        setTeacher({ email: "", password: "" });
                    }
                })
                .catch(function (error) {
                    console.log('i am here');
                    setTeacherError({
                        teacherResult: error.response.data.result,
                        teacherMessage: error.response.data.message,
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
                setTeacherErrors({
                    emailError,
                    passwordError,
                });
            }
        }
    };

    if (teacherError.teacherResult === "error") {
        teacherMessage = (
            <div className="alert alert-danger alert-dismissible text-center">
                {teacherError.teacherMessage}
            </div>
        );
    } else if (teacherError.teacherResult === "success") {
        teacherMessage = (
            <div className="alert alert-success alert-dismissible text-center">
                {teacherError.teacherMessage}
            </div>
        );
    }

    return (
        <div className="wrapper">
            <Header />
            <div className="content-wrapper">
                <Breadcrumb pageTitle="Add Teacher" />
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 card card-solid">
                                <div class="row">
                                    <div class="col-md-4 offset-md-4">
                                        <div>
                                            <form>
                                                <div class="card-body">
                                                    <div class="form-group">
                                                        <label for="exampleInputEmail1">Full Name</label>
                                                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Full name" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Email</label>
                                                        <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Email" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Contact Number</label>
                                                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Contact Number" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleInputPassword1">Address</label>
                                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address" />
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

export default ManageTeacher;
