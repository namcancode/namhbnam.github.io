var express = require("express");
var router = express.Router();
// import { sequelize, Op } from "../databases/database";
import { SUCCESS, FAILED } from "../configs/config";
// import { Member } from "../models/Member";
import {
	createMember,
	deletedUser,
	listAllMember,
	checkPasswordUser,
	updateDataUser
} from "../controllers/MemberController";



router.post("/create", async (req, res) => {
	const { username, password, email, avatar } = req.body;
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
});

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
router.get("/logout", async (req,res)=>{
	await req.session.destroy();
	res.json({
		result: SUCCESS,
		data: "",
		description: `Đăng xuất thành công`
	});
})
router.post("/login", async (req, res) => {
	const { username, password, email, avatar } = req.body;
	if (!username) {
		res.json({
			result: FAILED,
			data: false,
			description: `Thiếu username hoặc password`
		});
	}
	try {
		const checkId = await checkPasswordUser(req.body);
		if (checkId) {
			req.session.user = checkId;
			req.session.save();
			// console.log(req.session.Auth);
			res.json({
				result: SUCCESS,
				data: checkId,
				description: `Đã đăng nhập thành công với username ${username}`,
			});
		} else {
			res.json({
				result: FAILED,
				data: false,
				description: `Đăng nhập thất bại`
			});
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: false,
			description: `Đã có lỗi xảy ra ${error}`
		});
	}
});

router.put("/update", async (req, res) => {
	const { id, username, password, email, avatar } = req.body;
	try {
		const updateUser = await updateDataUser(req.body);
		if (updateUser) {
			res.json({
				result: SUCCESS,
				data: true,
				description: `Đã update user ${username}`
			});
		} else {
			res.json({
				result: FAILED,
				data: "",
				description: `Không tìm thấy user ${username}`
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
module.exports = router;
