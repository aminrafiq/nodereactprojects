const express = require("express");

const { notLoggedIn } = require("../middleware/auth");

const studentsController = require("../controllers/students");
const coursesController = require("../controllers/courses");
const teachersController = require("../controllers/teachers");

const router = express.Router();

router.get("/teachers", notLoggedIn, teachersController.getTeachers);
router.post("/teachers/add", notLoggedIn, teachersController.postTeacher);
router.get("/students", notLoggedIn, studentsController.getStudents);
router.post("/students/add", notLoggedIn, studentsController.postStudent);
router.get("/courses", notLoggedIn, coursesController.getCourses);
router.post("/courses/add", notLoggedIn, coursesController.postCourse);

module.exports = router;
