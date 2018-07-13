var express = require("express");
var router = express.Router();
import { sequelize, Op } from "../databases/database";
import { SUCCESS, FAILED } from "../configs/config";
import { Member } from "../models/Member";
import {
	createMember
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

module.exports = router;
