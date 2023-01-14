const app = require("./App");

const cors = require("cors");
const mongoose = require("mongoose");

const username = "Admin";
const password = "Admin";
const DataBase = "GymSports";
const db = `mongodb+srv://${username}:${password}@gymsports.iea7cj7.mongodb.net/${DataBase}?retryWrites=true&w=majority`;

require("dotenv").config();
mongoose
  .connect(db)
  .then(() => {
    console.log("DB COnnected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(3000, () => {
  console.log("Connected");
});
