const Course = require("../models/course");

exports.getCourses = (req, res, next) => {
  Course.findAll()
    .then((courses) => {
      res.status(200).json({ courses: courses });
    })
    .catch((error) => {
      console.log(error);
    });
};

async function postCourse(req, res, next) {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  date = year + "-" + month + "-" + date;
  time = hours + ":" + minutes + ":" + seconds;

  const [course, created] = await Course.findOrCreate({
    where: { title: req.body.title },
    defaults: {
      description: req.body.description,
      date: date,
      time: time,
    },
  });

  if (created) {
    statusMessage = "success";
    courseMessage = "Course Created";
  } else {
    statusMessage = "error";
    courseMessage = "Course Already Exist";
  }
  res.status(201).json({ status: statusMessage, message: courseMessage });
}

module.exports.postCourse = postCourse;
