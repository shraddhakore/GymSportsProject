const homeControllers = require("./../Controllers/homeControllers");
const express = require("express");

const router = express.Router();
//express.set("view engine", "ejs");
//express.use(express.static("public"));

router.get("/", homeControllers.homePage);
router.route("/about-us").get();
router.route("/sports").get();
router.route("/gym").get();

module.exports = router;
