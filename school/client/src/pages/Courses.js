import { useState, useEffect, useDebugValue } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import axios from "axios";
import { TOKEN } from "../utils/LoginInformation";

const Courses = () => {

  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!TOKEN) {
      navigate('/');
    }
    document.title = "Courses"

    axios
      .get(`${API_BASE_URL}courses`, {
        headers: {
          Authorization: 'Bearer ' + TOKEN
        }
      })
      .then((response) => {
        setCourses(response.data.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content-wrapper">
        <Breadcrumb pageTitle="Courses" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool">
                        <Link to="/courses/add">
                          <i className="fas fa-plus"></i> Add Course
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ width: "6%" }}>#</th>
                          <th style={{ width: "24%" }}>Title</th>
                          <th style={{ width: "60%" }}>Description</th>
                          <th style={{ width: "10%" }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((course) => (
                          <tr>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td></td>
                          </tr>
                        ))}
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

export default Courses;
