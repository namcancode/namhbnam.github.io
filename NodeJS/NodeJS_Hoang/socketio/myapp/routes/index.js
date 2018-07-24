var express = require("express");
var router = express.Router();
// import {io} from '../bin/socket'
/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});



module.exports = router;
