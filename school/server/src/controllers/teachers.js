const Teacher = require("../models/teacher");

exports.getTeachers = (req, res, next) => {
  Teacher.findAll()
    .then((teachers) => {
      res.render("school/teachers", {
        path: "/teachers",
        pageTitle: "Teachers",
        teacherListStart: 0,
        teachersData: teachers,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

async function postTeacher(req, res, next) {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  date = year + "-" + month + "-" + date;
  time = hours + ":" + minutes + ":" + seconds;

  const [teacher, created] = await Teacher.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      fullname: req.body.fullname,
      contactnumber: req.body.contactnumber,
      address: req.body.address,
      date: date,
      time: time,
    },
  });

  if (created) {
    studentMessage = { result: "success", message: "Student Created" };
  } else {
    studentMessage = { result: "error", message: "Student Already Exist" };
  }
  res.render("school/manage-student", {
    path: "/students/add",
    pageTitle: "Add Student",
    returnMessage: studentMessage,
  });
}

module.exports.postTeacher = postTeacher;
