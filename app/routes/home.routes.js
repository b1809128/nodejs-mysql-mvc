var express = require("express");
var router = express.Router();
const homeController = require("../controllers/home.controller");
router.get("/", homeController.home);

router.get("/about", homeController.about);

module.exports = router;
