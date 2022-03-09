import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import axios from "axios";

const ManageTeacher = () => {
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
