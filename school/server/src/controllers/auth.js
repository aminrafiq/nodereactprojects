const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.getLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("login");
};

async function postRegister(req, res, next) {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  date = year + "-" + month + "-" + date;
  const time = hours + ":" + minutes + ":" + seconds;

  const [user, created] = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      fullname: req.body.fullname,
      password: bcrypt.hashSync(req.body.password, 12),
      date: date,
      time: time,
    },
  });

  if (created) {
    userMessage = "Account successfully created";
    statusMessage = "success";
  } else {
    statusMessage = "error";
    userMessage = "User already exist";
  }
  res.status(201).json({ status: statusMessage, message: userMessage });
}

exports.postLogin = (req, res, next) => {
  statusMessage = "error";
  let token;

  User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
      if (!user) {
        userMessage = "Incorrect login details";
        res.status(401).json({ status: statusMessage, message: userMessage });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((isMatched) => {
          if (isMatched) {
            statusMessage = "success";
            userMessage = "Account successfully logged-in";
            statusCode = 200;
            token = jwt.sign(
              {
                fullname: user.fullname,
                email: user.email,
                userId: user.id,
              },
              process.env.JWT_SECRET,
              { expiresIn: "1h" }
            );
          } else {
            statusMessage = "error";
            userMessage = "Incorrect Password";
            user = "";
            statusCode = 401;
          }
          res.status(statusCode).json({
            result: statusMessage,
            message: userMessage,
            userInformation: {
              userId: user.id,
              fullname: user.fullname,
              email: user.email,
              token: token,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

/*
exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
*/
module.exports.postRegister = postRegister;
