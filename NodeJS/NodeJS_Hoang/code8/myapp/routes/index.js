var express = require("express");
var router = express.Router();
import { SUCCESS, FAILED } from "../configs/config";
import { sequelize, Op, testConnect } from "../databases/database";
import { Detail } from "../models/Detail";
import { fail } from "assert";
/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

//get list
router.get("/listAll", (req, res) => {
	Detail.findAll({
		attributes: ["id", "name", "priority", "description", "duedate"]
	})
		.then(result => {
			res.json({
				result: SUCCESS,
				data: result,
				description: `Đã tìm thành công`
			});
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Có lỗi xảy ra trong khi truyền: ${err}`
			});
		});
});
router.post("/createUser", (req, res) => {
  const {name,priority,description,duedate} = req.body
	Detail.create(
		{
			name,
			priority: parseInt(priority),
			description,
			duedate
		},
		{ fields: ["name", "priority", "description", "duedate"] }
	)
		.then(result => {
			res.json({
				result: SUCCESS,
				data: result,
				description: `Đã tạo user thành công ${name}`
			});
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Có lỗi xảy ra khi tạo user ${err}`
			});
		});
});

module.exports = router;
