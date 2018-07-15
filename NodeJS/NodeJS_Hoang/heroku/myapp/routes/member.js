var express = require("express");
var router = express.Router();
import { sequelize, Op } from "../databases/database";
import { SUCCESS, FAILED } from "../configs/config";
import { Member } from "../models/Member";
import {
	createMember,
	deletedUser,
	listAllMember
} from "../controllers/MemberController";
// import { fail } from "assert";
/* GET home page. */

router.post('/create',async (req,res)=>{
  const { username, password, description, duedate } = req.body;
	//Validate
	if (!username) {
		return;
	}
	try {
		const creatUser = await createMember(req.body);
		res.json({
			result: SUCCESS,
			data: creatUser,
			description: `Đã tạo user ${username} thành công`
		});
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Không tạo user lỗi ${error}`
		});
	}
})
router.get("/listAll", async (req, res) => {
	try {
		const dataAll = await listAllMember(req.body);
		res.json({
			result: SUCCESS,
			data: dataAll,
			description: `Đã lấy danh sách thành công`
		});
		// const dataAll = await convertDataFilmsToPostgres();


	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi ${JSON.stringify(error)}`
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
