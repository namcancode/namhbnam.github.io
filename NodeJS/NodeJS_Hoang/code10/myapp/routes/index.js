var express = require("express");
var router = express.Router();
import { Sequelize, Op } from "../databases/database";
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
				description: `Đã lấy danh sách thành công`
			});
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Lỗi ${JSON.stringify(err)}`
			});
		});
});

router.post("/createUser", (req, res) => {
	const { name, priority, description, duedate } = req.body;
	Detail.create(
		{
			name,
			priority: parseInt(priority),
			description,
			duedate
		},
		{
			fields: ["name", "priority", "description", "duedate"]
		}
	)
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
				description: `Không tạo use lỗi ${err}`
			});
		});
});
router.get("/listOfset", (req, res) => {
	const { offset, limit } = req.query;
	Detail.findAll({
		offset: offset * limit,
		limit
	})
		.then(result => {
			res.json({
				result: SUCCESS,
				data: result,
				description: `Thành công`
			});
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Lỗi ${JSON.stringify(err)}`
			});
		});
});

router.get("/listById", (req, res) => {
	//http://localhost:3000/listById?id=3
	const { id } = req.query;
	Detail.findOne({
		attributes: ["id", "name", "priority", "description", "duedate"],
		where: {
			id
		}
	})
		.then(result => {
			if (result) {
				res.json({
					result: SUCCESS,
					data: result,
					description: `Đã tìm thấy user với id ${id}`
				});
			} else {
				res.json({
					result: FAILED,
					data: "",
					description: `Không tìm thấy user nào với id ${id}`
				});
			}
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `có lỗi xảy ra trong quá trình tim kiếm ${JSON.stringify(
					err
				)}`
			});
		});
});

// router.get("/:nameLike", (req, res) => {
// 	// req.query
// 	const { nameLike } = req.params;
// 	// console.log(`nameLike = ${nameLike}`);
// 	// Project.findAll({ offset: 5, limit: 5 }); //skip first 5, get next 5
// 	Detail.findAll({
// 		attributes: ["id", "name", "priority", "description", "duedate"],
// 		where: {
// 			name: {
// 				// [Op.like]: `%${nameLike}%`,
// 				[Op.iLike]: `%${nameLike}%`
// 			}
// 		}
// 	})
// 		.then(foundList => {
// 			if (foundList) {
// 				res.json({
// 					result: SUCCESS,
// 					data: foundList,
// 					description: `query List successfully`
// 				});
// 			} else {
// 				res.json({
// 					result: FAILED,
// 					data: "",
// 					description: `Cannot find list with nameLike=${nameLike}`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.json({
// 				result: FAILED,
// 				data: "",
// 				description: `Query List failed. Error = ${JSON.stringify(err)}`
// 			});
// 		});
// });

router.get("/search/:iLike", (req, res) => {
  const { iLike } = req.params;
  // console.log(iLike);
	Detail.findAll({
		attributes: ["id", "name", "priority", "description", "duedate"],
		where: {
			[Op.or]: [
				{
					name: {
						[Op.iLike]: `%${iLike}%`
					}
				},
				{
					id: {
						[Op.eq]: `${isNaN(iLike) == 'true' ? iLike : 0}`
					}
				}
			]
		}
	})
		.then(result => {
			if (result) {
				res.json({
					result: SUCCESS,
					data: result,
					description: `Đã tìm thấy user ${name} có id là ${id}`
				});
			} else {
				res.json({
					result: FAILED,
					data: "",
					description: `Không tìm thấy user`
				});
			}
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Đã có lỗi xảy ra ${err}`
			});
		});
});

module.exports = router;
