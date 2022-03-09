import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import axios from "axios";

const ManageStudent = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content-wrapper">
                <Breadcrumb pageTitle="Add Student" />
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 card card-solid">
                                <div className="row">
                                    <div className="col-md-4 offset-md-4">
                                        <div>
                                            <form method="post" action="/students/add">
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label for="fullname">Full Name</label>
                                                        <input type="text" name="fullname" id="fullname" className="form-control" placeholder="Full name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="email">Email</label>
                                                        <input type="email" name="email" id="email" className="form-control" placeholder="Email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="contactnumber">Contact Number</label>
                                                        <input type="text" name="contactnumber" id="contactnumber" className="form-control" placeholder="Contact Number" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="address">Address</label>
                                                        <input type="text" name="address" id="address" className="form-control" placeholder="Address" />
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

export default ManageStudent;
