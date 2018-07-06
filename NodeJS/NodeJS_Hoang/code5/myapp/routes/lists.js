var express = require('express');
var listRouter = express.Router();
import {sequelize, Op} from '../databases/databases';
import {List} from '../models/List';
import { SUCCESS, FAILED } from '../config/config';
sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch(err => {
		console.error("Unable to connect to the database:", err);
	});
/* GET home page. */
listRouter.get('/', function(req, res, next) {
  res.render('lists', { title: 'List example'});
});
listRouter.post('/',(req, res) => {
	const { name, priority, description, duedate } = req.body;
	List.create(
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
				description: `Create new List successfully`
			});
		})
		.catch(err => {
			res.json({
				result: FAILED,
				data: "",
				description: `Create new List failed. Error = ${err}`
			});
		});
});

module.exports = listRouter;
