import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard"
  }, [])


  return (
    <div className="wrapper">
      <Header />
      <div className="content-wrapper">
        <Breadcrumb pageTitle="Dashboard" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>

                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>

                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div>

                <div className="card card-primary card-outline">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>

                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title m-0">Featured</h5>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title">Special title treatment</h6>

                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="card-title m-0">Featured</h5>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title">Special title treatment</h6>

                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
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

export default Dashboard;
