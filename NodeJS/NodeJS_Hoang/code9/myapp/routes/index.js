var express = require("express");
var router = express.Router();
import { sequelize, Op, testConnect } from "../databases/database";
import { SUCCESS, FAILED } from "../configs/config";
import { Detail } from "../models/Detail";

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/listAll", (req, res) => {
	Detail.findAll({
		attributes: ["name", "priority", "description", "duedate"]
	})
		.then(result => {
			res.json({
				result: SUCCESS,
				data: result,
				description: `Đã hiển thị thông tin`
			});
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Đã có lỗi xãy ra, lỗi ${JSON.stringify(err)}`
			});
		});
});

router.post("/createUser",(req, res) => {
	const { name, priority, description, duedate } = req.body;
	Detail.create({
		name,
		priority: parseInt(priority),
		description,
		duedate
	},{
		fields:["name","priority","description","duedate"]
	})
		.then(result => {
			res.json({
				result: SUCCESS,
				data: result,
				description: `Đã tạo user ${name} thành công`
			});
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Đã có lỗi xảy ra khi tạo user. Lỗi ${err}`
			});
		});
});

module.exports = router;
