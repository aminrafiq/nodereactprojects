import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import axios from "axios";

const ManageCourse = () => {
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
