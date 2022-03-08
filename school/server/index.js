require("dotenv").config();

const path = require("path");
const express = require("express");
const sequelize = require("./utils/database");

const PORT = process.env.PORT || 3000;

const authRoutes = require("./src/routes/auth");
const userRoutes = require("./src/routes/user");
const schoolRoutes = require("./src/routes/school");

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);
app.use(schoolRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});
