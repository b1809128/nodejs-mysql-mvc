var express = require("express");
var router = express.Router();
const bookController = require("../controllers/book.controller");
router.get("/getList", bookController.getList);
router.get("/getList/details/:id", bookController.details);
router.post("/addList",bookController.addList);
router.put("/updateList/:id",bookController.updateList);
router.delete("/deleteList/:id",bookController.deleteList);
module.exports = router;
