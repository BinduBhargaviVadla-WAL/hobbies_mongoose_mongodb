var express = require("express");
var router = express.Router();
const authorController = require("../controller/author");
router.get("/", authorController.getAuthor);
router.post("/", authorController.createAuthor);
router.delete("/:_id", authorController.deleteAuthor);
module.exports = router;
