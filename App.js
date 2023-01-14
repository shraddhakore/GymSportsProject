const express = require("express");
const sportsRoutes = require("./Routes/sportsRoutes");
const gymRoutes = require("./Routes/gymRoutes");
const homeRoutes = require("./Routes/homeRoutes");
const path = require("path");
const app = express();

app.use(express.json());
//app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set(path.join(__dirname, "public"));

//middleware to accept data from form
//app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);
app.use("/sports", sportsRoutes);
app.use("/gym", gymRoutes);
module.exports = app;
