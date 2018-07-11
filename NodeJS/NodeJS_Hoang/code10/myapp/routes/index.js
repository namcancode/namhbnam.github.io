var express = require("express");
var router = express.Router();
import { Sequelize, Op } from "../databases/database";
import { SUCCESS, FAILED } from "../configs/config";
import { Detail } from "../models/Detail";
import {createDetail} from '../controllers/DetailController';
// import { fail } from "assert";
/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});



router.get("/listAll", async (req, res) => {
	try {
		const dataAll = await Detail.findAll({
			attributes: ["id", "name", "priority", "description", "duedate"],
			order: ["id"]
		});
		res.json({
			result: SUCCESS,
			data: dataAll,
			description: `Đã lấy danh sách thành công`
		});
	} catch (err) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi ${JSON.stringify(err)}`
		});
	}
});


router.post("/createUser", async (req, res) => {
	const { name, priority, description, duedate } = req.body;
	//Validate

	try {
		let creatUser = await createDetail(req.body);
		res.json({
			result: SUCCESS,
			data: creatUser,
			description: `Đã tạo user ${name} thành công`
		});
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Không tạo user lỗi ${err}`
		});
	}
});



router.get("/listOfset", async (req, res) => {
	const { offset, limit } = req.query;
	try {
		const limitOffset = await Detail.findAll({
			offset: offset * limit,
			limit
		});
		res.json({
			result: SUCCESS,
			data: limitOffset,
			description: `Thành công`
		});
	} catch (err) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi ${JSON.stringify(err)}`
		});
	}
});



router.get("/listById", async (req, res) => {
	const { id } = req.query;
	try {
		const searchId = await Detail.findOne({
			attributes: ["id", "name", "priority", "description", "duedate"],
			where: {
				id
			}
		});
		if (searchId) {
			res.json({
				result: SUCCESS,
				data: searchId,
				description: `Đã tìm thấy user với id ${id}`
			});
		} else {
			res.json({
				result: FAILED,
				data: "",
				description: `Không tìm thấy user nào với id ${id}`
			});
		}
	} catch (err) {
		res.json({
			result: FAILED,
			data: "",
			description: `có lỗi xảy ra trong quá trình tim kiếm ${JSON.stringify(
				err
			)}`
		});
	}
});


router.get("/search/:iLike", async (req, res) => {
	const { iLike } = req.params;
	try {
		const searchIlike = await Detail.findAll({
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
							[Op.eq]: `${isNaN(iLike) == false ? iLike : 0}`
						}
					}
				]
			}
		});
		if (searchIlike) {
			res.json({
				result: SUCCESS,
				data: searchIlike,
				description: `Đã tìm thấy user ${iLike}`
			});
		} else {
			res.json({
				result: FAILED,
				data: "",
				description: `Không tìm thấy user ${iLike}`
			});
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Đã có lỗi xảy ra ${error}`
		});
	}
});

/*
router.put("/update", async (req, res) => {
	const { id, name, priority, description, duedate } = req.body;
	const update = await Detail.update(
		{
			name,
			priority: parseInt(priority),
			description,
			duedate
		},
		{
			where: {
				id
			}
		}
	);
	try {
		if (update) {
			res.json({
				result: SUCCESS,
				data: {
					id,
					name,
					priority: parseInt(priority),
					description,
					duedate
				},
				description: `Đã update user`
			});
		} else {
			res.json({
				result: FAILED,
				data: "",
				description: `Không tìm thấy user ${id}`
			});
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Có lỗi xảy ra ${error}`
		});
	}
});
*/
router.put("/update", async (req, res) => {
	const { id, name, priority, description, duedate } = req.body;

	try {
		const update = await Detail.findOne({
			where: {
				id
			}
		});
		if(!update) {
			return;
		}
		update.name = name ? name : update.name;
		update.priority = priority ? priority : update.priority;
		update.description = description ? description : update.description;
		update.duedate = duedate ? duedate : update.duedate;
		let result = await update.save();
		if(!result) {
			return;
		}
		try {
			res.json({
				result: SUCCESS,
				data:  update,
				description: `Đã update user "${(result.name = name
					? name
					: result.name)}" "id = ${id}" thành công`
			});
		} catch (error) {
			res.json({
				result: FAILED,
				data: "",
				description: `Đã có lỗi xảy ra ${error}`
			});
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Không update duoc ban ghi co ${id}. Error = ${error}`
		});
	}
});



router.delete("/deleted", async (req, res) => {
	const { id } = req.body;
	try {
		const deleted = await Detail.destroy({
			where: {
				id
			},
			// truncate: true /* this will ignore where and truncate the table instead */
		});
		const checkId = await Detail.findOne({
			where: {
				id
			}
		});
		if (!checkId) {
			res.json({
				result: SUCCESS,
				data: checkId,
				description: `Đã xóa user Id: ${id} thành công`
			});
		} else {
			res.json({
				result: FAILED,
				data: "",
				description: `Không thể xóa user ID: ${id}`
			});
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Đã có lỗi xảy ra ${error}`
		});
	}
});

/**
router.get("/listAll", (req, res) => {
	Detail.findAll({
		attributes: ["id", "name", "priority", "description", "duedate"],
		order: ["id"]
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
http://localhost:3000/listOfset?limit=4&offset=1
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


router.get("/search/:iLike", (req, res) => {
	const { iLike } = req.params;
	//http://localhost:3000/search/huong
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
						[Op.eq]: `${isNaN(iLike) == false ? iLike : 0}`
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
					description: `Đã tìm thấy user ${iLike}`
				});
			} else {
				res.json({
					result: FAILED,
					data: "",
					description: `Không tìm thấy user ${iLike}`
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


router.put("/update", (req, res) => {
	const { id, name, priority, description, duedate } = req.body;
	// console.log(name);
	Detail.findOne({
		where: {
			id
		}
	})
		.then(result => {
			result.name = name ? name : result.name;
			result.priority = priority ? priority : result.name;
			result.description = description ? description : result.description;
			result.duedate = duedate ? duedate : result.duedate;
			result
				.save()
				.then(() => {
					res.json({
						result: SUCCESS,
						data: result,
						description: `Đã update user "${(result.name = name
							? name
							: result.name)}" "id = ${id}" thành công`
					});
				})
				.catch(err => {
					res.json({
						result: FAILED,
						data: "",
						description: `Có lỗi xảy ra ${JSON.stringify(err)}`
					});
				});
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Không thể tìm thấy user id = ${id}`
			});
		});
});


router.delete("/deleted", (req, res) => {
	// const {id} = req.body;
	deletedWithId(req, res);
});

async function deletedWithId(req, res) {
	const { id } = req.body;
	// console.log(id);
	try {
		await Detail.destroy({
			where: { id }
		});
		const foundId = await Detail.findOne({
			where: { id }
		});
		if (!foundId) {
			res.json({
				result: SUCCESS,
				data: "",
				description: `Đã xóa user id ${id} thành công`
			});
		} else {
			res.json({
				result: FAILED,
				data: "",
				description: `Không thể xóa user id ${id}`
			});
		}
	} catch (err) {
		res.json({
			result: FAILED,
			data: "",
			description: `Đã có lỗi xảy ra ${err}`
		});
	}
}
 **/



module.exports = router;
