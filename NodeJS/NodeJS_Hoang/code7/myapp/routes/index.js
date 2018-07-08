var express = require('express');
var router = express.Router();
import {sequelize, Op, testConnect} from '../databases/database';
import {Detail} from '../models/Detail';
import { SUCCESS, FAILED } from '../configs/config';

testConnect;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getListById',(req, res) => {
	// req.query
	Detail.findAll({
		attributes: ["id", "name", "priority", "description", "duedate"]
	})
		.then(lists => {
			res.json({
				result: SUCCESS,
				data: lists,
				description: `query Detail successfully`
			});
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Query Detail failed. Error = ${JSON.stringify(err)}`
			});
		});
});


router.post('/createUser',(req, res) => {
	const { name, priority, description, duedate } = req.body;
	Detail.create(
		{
			name,
			priority: parseInt(priority),
			// priority: priority,
			description,
			duedate
		},
		{ fields: ["name", "priority", "description", "duedate"] }
	)
		.then(newList => {
			res.json({
				result: SUCCESS,
				data: newList,
				description: `Create new Detail successfully`
			});
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Create new Detail failed. Error = ${err}`
			});
		});
});
router.post('/addUser',(req, res)=>{
	const { name, priority, description, duedate } = req.body;
	Detail.create(
		{
			name,
			priority:parseInt(priority),
			description,
			duedate
		},
		{fields: ["name","priority","description","duedate"]}
	)
	.then(newUser =>{
		res.json({
			result: SUCCESS,
			data: newUser,
			description:`Đã thêm user ${name} thành công`
		})
	})
	.catch(err =>{
res.json({
	result:FAILED,
	data:"",
	description:`Không thể tạo user lỗi là ${err}`
})
	})
})

module.exports = router;
 