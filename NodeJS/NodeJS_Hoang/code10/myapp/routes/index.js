var express = require("express");
var router = express.Router();
import { Sequelize, Op } from "../databases/database";
import { SUCCESS, FAILED } from "../configs/config";
import { Detail } from "../models/Detail";
import {
	createDetail,
	listAllDetail,
	listOfset,
	listById,
	searchUser,
	updateUser,
	deletedUser
} from "../controllers/DetailController";
// import { fail } from "assert";
/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/listAll", async (req, res) => {
	try {
		const dataAll = await listAllDetail(req.body);
		res.json({
			result: SUCCESS,
			data: dataAll,
			description: `Đã lấy danh sách thành công`
		});
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi ${JSON.stringify(error)}`
		});
	}
});

router.post("/createUser", async (req, res) => {
	const { name, priority, description, duedate } = req.body;
	//Validate
	if (!name) {
		return;
	}
	try {
		const creatUser = await createDetail(req.body);
		res.json({
			result: SUCCESS,
			data: creatUser,
			description: `Đã tạo user ${name} thành công`
		});
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Không tạo user lỗi ${error}`
		});
	}
});

router.get("/listOfset", async (req, res) => {
	const { offset, limit } = req.query;
	if (limit > 100) {
		return res.json({
			result: FAILED,
			data: "",
			description: `Vượt qua số lượng hiển thị cho phép`
		});
	}
	try {
		const limitOffset = await listOfset(req.query);
		res.json({
			result: SUCCESS,
			data: limitOffset,
			description: `Thành công`
		});
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi ${JSON.stringify(error)}`
		});
	}
});

router.get("/listById", async (req, res) => {
	const { id } = req.query;
	try {
		const searchId = await listById(req.query);
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
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `có lỗi xảy ra trong quá trình tim kiếm ${JSON.stringify(
				error
			)}`
		});
	}
});

router.get("/search/:iLike", async (req, res) => {
	const { iLike } = req.params;
	try {
		const searchIlike = await searchUser(req.params);
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
	if (!id) {
		return res.json({
			result: FAILED,
			data: "",
			description: `Không tìm thấy id ${id}`
		});
	}
	try {
		const updateObject = await updateUser(req.body);
		try {
			res.json({
				result: SUCCESS,
				data: updateObject,
				description: `Đã update user "${(updateObject.name = name
					? name
					: updateObject.name)}" "id = ${id}" thành công`
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
		const checkId = await deletedUser(req.body);
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

module.exports = router;
