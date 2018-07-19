var express = require("express");
var router = express.Router();
// import { sequelize, Op } from "../databases/database";
import { SUCCESS, FAILED } from "../configs/config";
// import { Datafilm } from "../models/Datafilm";
import {
	createDetail,
	listAllDetail,
	listOfset,
	listById,
	searchUser,
	updateUser,
	deletedUser,
	convertDataFilmsToPostgres
} from "../controllers/DatafilmController";
// import { fail } from "assert";
/* GET home page. */
router.get("/", function(req, res, next) {
	if(req.session.user){
		const dataUser = req.session.user.checkId
		res.render("index", {dataUser, username: dataUser.username, avatar:dataUser.avatar});
	}
else{
	const dataUser = null
	res.render("index",{dataUser});
}
});

router.get("/filmIndex", async (req, res) => {
	try {
		const dataAll = await listAllDetail(req.body);
		const dataJSON = JSON.parse(JSON.stringify(dataAll));
		const dataFilmIndex = [];
		let i1 =0;
		let i2 =0;
		let i3 =0;
		let i4 =0;
		let i5 =0;
		let i6 =0;
		let i7 =0;
		let i8 =0;
		let i9 =0;
		dataJSON.forEach(e=>{
			if (e.tag == "Phim Hot" && i1<7){
				i1++;
				dataFilmIndex.push(e)
			}
			else if (e.tag == "Phim Chiếu Rạp" && i2<7) {
				i2++;
				dataFilmIndex.push(e)
			}
			else if (e.tag == "Phim Lẻ Mới Nhất" && i3<7) {
				i3++;
				dataFilmIndex.push(e)
			} else if (e.tag == "Phim Bộ Mới Nhất" && i4<7) {
				i4++;
				dataFilmIndex.push(e)
			} else if (e.tag == "Phim Âu Mỹ"  && i5<7) {
				i5++;
				dataFilmIndex.push(e)
			} else if (e.tag == "Phim Hàn Quốc"  && i6<7) {
				i6++;
				dataFilmIndex.push(e)
			} else if (e.tag == "Phim Trung Quốc"  && i7<7) {
				i7++;
				dataFilmIndex.push(e)
			} else if (e.tag == "Phim Hoạt Hình - Animal"  && i8<7) {
				i8++;
				dataFilmIndex.push(e)
			} else if (e.tag == "Game Show Truyền Hình"  && i9<7) {
				i9++;
				dataFilmIndex.push(e)
			}
			})
		res.json({
			result: SUCCESS,
			data: dataFilmIndex,
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

router.get('/dataCategory', async(req,res)=>{
	try {
		const dataAll = await listAllDetail(req.body);
		const dataJSON = JSON.parse(JSON.stringify(dataAll));
		res.json({
			result: SUCCESS,
			data: dataJSON,
			description: `Đã lấy danh sách thành công`
		});
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			description: `Lỗi ${JSON.stringify(error)}`
		});
	}
})


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
