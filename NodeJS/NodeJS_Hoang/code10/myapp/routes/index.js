var express = require("express");
var router = express.Router();
import { Sequelize } from "../databases/database";
import { SUCCESS, FAILED } from "../configs/config";
import { List } from "../models/List";
/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/listAll", (req, res) => {
	List.findAll({
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
	List.create(
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
router.get('/listOfset',(req,res)=>{
  const {offset, limit} = req.query;
  List.findAll({
    offset:offset * limit,
    limit
  }).then((result) => {
    res.json({
      result:SUCCESS,
      data:result,
      description:`Thành công`
    })
  }).catch((err) => {
res.json({
  result:FAILED,
  data:"",
  description:`Lỗi ${JSON.stringify(err)}`
})
  });
})



router.get('/listById',(req, res) => {
  // req.query
  const { listId } = req.query;
  List.findOne({
    attributes: ["id",
                "name",
                "priority",
                "description",
                "duedate"],
    where: {
      id: listId
    }
  }).then(foundList => {
    if (foundList) {
      res.json({
          result: SUCCESS,
          data: foundList,
          description: `query List successfully with listId=${listId}`
        });
    } else {
      res.json({
          result: FAILED,
          data: "",
          description: `Cannot find list with listId=${listId}`
        });
    }
  }).catch(err => {
    res.json({
        result: FAILED,
        data: "",
        description: `Query List failed. Error = ${JSON.stringify(err)}`
    });
  });
});

module.exports = router;
