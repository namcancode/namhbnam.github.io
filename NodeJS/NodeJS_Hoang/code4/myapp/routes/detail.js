// INSERT INTO detail(name,priority,description,duedate) VALUES
//     ('make TodoList Nodejs project', 1, 'This is a training course','2018-07-24');

var express = require('express');
var listDetail = express.Router();
import {sequelize, Op} from '../databases/database'; //ket noi db
import {Detail} from '../models/Detail';
import { SUCCESS, FAILED } from '../config/config';

//test xem ket noi dc ko
sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch(err => {
		console.error("Unable to connect to the database:", err);
	});


/* GET home page. */
listDetail.get('/', function(req, res, next) {
  res.render('detail', { title: 'detail' });
});
// lists/getListById
listDetail.get('/getListById',(req, res) => {
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

// listDetail.get("/detailById", (req, res) => {
// 	// req.query
// 	const { listId } = req.query;
// 	Detail.findOne({
// 		attributes: ["id", "name", "priority", "description", "duedate"],
// 		where: {
// 			id: listId
// 		}
// 	})
// 		.then(foundList => {
// 			if (foundList) {
// 				res.json({
// 					result: SUCCESS,
// 					data: foundList,
// 					description: `query Detail successfully with listId=${listId}`
// 				});
// 			} else {
// 				res.json({
// 					result: FAILED,
// 					data: "",
// 					description: `Cannot find Detail with listId=${listId}`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.json({
// 				result: FAILED,
// 				data: "",
// 				description: `Query Detail failed. Error = ${JSON.stringify(err)}`
// 			});
// 		});
// });
// // app.use("/testPage/").get((req, res) => {
//   // const { numberOfItems,page } = req.query;
//   listDetail.get('/detail/:numberOfItems/:page"',(req, res) => {
//   const { numberOfItems, page } = req.params;
//   // console.log(`aa = ${JSON.stringify(req.params)}`)
//   // console.log(`rs=${rs}, number = ${number}`);
//   if(parseInt(numberOfItems)==0 ||parseInt(numberOfItems)>=50) {
//     res.write('error');
//     res.end();
//   }else{
//     Detail.findAll({
//       offset: parseInt(page)*parseInt(numberOfItems),
//       limit: parseInt(numberOfItems)
//     })
//     .then(foundList => {
//       if (foundList) {
//         res.json({
//           result: SUCCESS,
//           data: foundList,
//           description: `query Detail successfully`
//         });
//       } else {
//         res.json({
//           result: FAILED,
//           data: "",
//           description: `Cannot find Detail with nameLike`
//         });
//       }
//     })
//     .catch(err => {
//       res.json({
//         result: FAILED,
//         data: "",
//         description: `Query Detail failed. Error = ${JSON.stringify(err)}`
//       });
//     });
//   }

// });
// //app.use('/lists/nameLike').get((req, res) => {
//   listDetail.get('/detail/:nameLike',(req, res) => {
// 	// req.query

// 	const { nameLike } = req.params;
// 	console.log(`nameLike = ${isNaN(nameLike)}`);
// 	// Project.findAll({ offset: 5, limit: 5 }); //skip first 5, get next 5
// 	// SELECT "id", "name", "priority", "description", "duedate" FROM "lists" AS "Detail" WHERE ("Detail"."name" LIKE '%huong%' OR "Detail"."id" LIKE '%huong%')
// 	Detail.findAll({
// 		attributes: ["id", "name", "priority", "description", "duedate"],
// 		where: {
// 			[Op.or]: [
// 				{
// 					name: {
// 						// [Op.like]: `%${nameLike}%`,
// 						[Op.like]: `%${nameLike}%`
// 					}
// 				},
// 				{
// 					id: {
// 						// [Op.like]: `%${nameLike}%`,
// 						[Op.eq]: `${!isNaN(nameLike) ? nameLike : 0}`
// 					}
// 				}
// 			]
// 		}
// 	})
// 		.then(foundList => {
// 			if (foundList) {
// 				res.json({
// 					result: SUCCESS,
// 					data: foundList,
// 					description: `query Detail successfully`
// 				});
// 			} else {
// 				res.json({
// 					result: FAILED,
// 					data: "",
// 					description: `Cannot find Detail with nameLike=${nameLike}`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.json({
// 				result: FAILED,
// 				data: "",
// 				description: `Query Detail failed. Error = ${JSON.stringify(err)}`
// 			});
// 		});
// });

// listDetail.post('/createUser',(req, res) => {
// 	const { name, priority, description, duedate } = req.body;
// 	Detail.create(
// 		{
// 			name,
// 			priority: parseInt(priority),
// 			// priority: priority,
// 			description,
// 			duedate
// 		},
// 		{ fields: ["name", "priority", "description", "duedate"] }
// 	)
// 		.then(newList => {
// 			res.json({
// 				result: SUCCESS,
// 				data: newList,
// 				description: `Create new Detail successfully`
// 			});
// 		})
// 		.catch(err => {
// 			res.json({
// 				result: FAILED,
// 				data: "",
// 				description: `Create new Detail failed. Error = ${err}`
// 			});
// 		});
// });

// listDetail.put('/',(req, res) => {
// 	const { listId } = req.body;
// 	Detail.findOne({
// 		where: {
// 			id: listId
// 		}
// 	})
// 		.then(foundList => {
// 			foundList.name = req.body.name ? req.body.name : foundList.name;
// 			foundList.priority = req.body.priority
// 				? req.body.priority
// 				: foundList.priority;
// 			foundList.description = req.body.description
// 				? req.body.description
// 				: foundList.description;
// 			foundList.duedate = req.body.duedate
// 				? req.body.duedate
// 				: foundList.duedate;
// 			foundList
// 				.save()
// 				.then(() => {
// 					res.json({
// 						result: SUCCESS,
// 						data: foundList,
// 						description: `Update Detail successfully with listId=${listId}`
// 					});
// 				})
// 				.catch(err => {
// 					res.json({
// 						result: FAILED,
// 						data: "",
// 						description: `Update Detail failed with listId=${listId}.Error = ${JSON.stringify(
// 							err
// 						)}`
// 					});
// 				});
// 		})
// 		.catch(err => {
// 			res.json({
// 				result: FAILED,
// 				data: "",
// 				description: `Cannot find Detail to update. ListId=${listId}.Error = ${JSON.stringify(
// 					err
// 				)}`
// 			});
// 		});
// });

// listDetail.delete('/',(req, res) => {
// 	const { listId } = req.body;
// 	deleteListById(listId, res);
// });

async function deleteListById(listId, res) {
	try {
		await Detail.destroy({
			where: {
				id: listId
			}
		});
		let foundList = await Detail.findOne({
			where: {
				id: listId
			}
		});
		if (!foundList) {
			res.json({
				result: SUCCESS,
				data: {},
				description: `Delete Detail successfully with Id=${listId}`
			});
		} else {
			res.json({
				result: FAILED,
				data: {},
				description: `Delete Detail failed with Id=${listId}`
			});
		}
	} catch (err) {
		res.json({
			result: FAILED,
			data: {},
			description: `Delete Detail failed with Id=${listId}. Error = ${err}`
		});
	}
}


module.exports = listDetail;
