import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import axios from "axios";

const Students = () => {

  useEffect(() => {
    document.title = "Students"
  }, [])

  axios
    .get(`${API_BASE_URL}students`)
    .then((response) => {
      if (response.data.result === "success") {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.userInformation)
        );
      }
    })
    .catch(function (error) {
    });

  return (
    <div className="wrapper">
      <Header />
      <div className="content-wrapper">
        <Breadcrumb pageTitle="Students" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool">
                        <Link to="/students/add">
                          <i className="fas fa-plus"></i> Add Student
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ width: "10px" }}>#</th>
                          <th style={{ width: "26%" }}>Full Name</th>
                          <th style={{ width: "24%" }}>Email</th>
                          <th style={{ width: "16%" }}>Contact Number</th>
                          <th style={{ width: "24%" }}>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Students;
