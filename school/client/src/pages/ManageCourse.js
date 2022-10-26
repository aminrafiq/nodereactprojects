import { useState } from "react";
import { API_BASE_URL } from "../constants";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import axios from "axios";
import InputField from "../components/InputField";
import { TOKEN } from "../utils/LoginInformation";

const ManageCourse = () => {
    var courseMessage;

    const [enteredCourse, setCourse] = useState({
        title: "",
        description: "",
    });

    const [errorState, setCourseErrors] = useState({
        titleError: "",
        descriptionError: "",
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
        const title = enteredCourse.title;
        const description = enteredCourse.description;

        if (title !== "" && description !== "") {

            setCourseErrors({
                titleError: '',
                descriptionError: '',
            });

            axios
                .post(`${API_BASE_URL}courses/add`, {
                    title: title,
                    description: description,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${TOKEN}`
                    }
                })
                .then((response) => {
                    setCourseError({
                        courseStatus: response.data.status,
                        courseMessage: response.data.message,
                    });
                    if (response.data.status === "success")
                        setCourse({ title: '', description: '' })
                })
                .catch(function (error) {
                    setCourseError({
                        courseStatus: error.data.status,
                        courseMessage: error.data.message,
                    });
                });
        } else {
            let titleError;
            let descriptionError;

            if (title === "") {
                titleError = "Please enter title";
            }
            if (description === "") {
                descriptionError = "Please enter description";
            }

            if (titleError || descriptionError) {
                setCourseErrors({
                    titleError,
                    descriptionError,
                });
            }
        }
    };

    if (courseError.courseStatus === "error") {
        courseMessage = (
            <div className="alert alert-danger alert-dismissible text-center">
                {courseError.courseMessage}
            </div>
        );
    } else if (courseError.courseStatus === "success") {
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
                <div className="content" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 card card-solid">
                                <div className="row">
                                    <div className="col-md-4 offset-md-4">
                                        <div>
                                            <form onSubmit={submitForm}>
                                                <div className="card-body">
                                                    {courseMessage}
                                                    <div className="form-group">
                                                        <label htmlFor="title">Title</label>
                                                        <InputField
                                                            onChange={handleChange}
                                                            input={{
                                                                id: "title",
                                                                name: "title",
                                                                type: "text",
                                                                placeholder: "Title",
                                                                value: enteredCourse.title,
                                                                className: "form-control",
                                                            }}
                                                        />
                                                        <div
                                                            style={{
                                                                fontSize: 14,
                                                                color: "red",
                                                                paddingLeft: "4px",
                                                            }}
                                                        >
                                                            {errorState.titleError}
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="description">Description</label>
                                                        <InputField
                                                            onChange={handleChange}
                                                            input={{
                                                                id: "description",
                                                                name: "description",
                                                                type: "text",
                                                                placeholder: "Description",
                                                                value: enteredCourse.description,
                                                                className: "form-control",
                                                            }}
                                                        />
                                                        <div
                                                            style={{
                                                                fontSize: 14,
                                                                color: "red",
                                                                paddingLeft: "4px",
                                                            }}
                                                        >
                                                            {errorState.descriptionError}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="submit" className="btn btn-primary">Submit</button>
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
