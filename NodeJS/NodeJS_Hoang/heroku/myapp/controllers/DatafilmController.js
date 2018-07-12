import { Datafilm } from "../models/Datafilm";
import { Op } from "../databases/database";
var mysql = require('mysql');

export const listAllDetail = async params => {
	const dataAll = await Datafilm.findAll({
		attributes: ["id", "name", "rate", "link","img","season","eps","content","actor","director","category","country","tag"],
		order: ["id"]
	});
	try {
		return dataAll;
	} catch (error) {
		return error;
	}
};

export const createDetail = async params => {
	const { name, priority, description, duedate } = params;
	const creatUser = await Datafilm.create(
		{
			name,
			priority: parseInt(priority),
			description,
			duedate
		},
		{
			fields: ["name", "rate", "link","img","season","eps","content","actor","director","category","country","tag"]
		}
	);
	try {
		return creatUser;
	} catch (error) {
		return error;
	}
};

export const listOfset = async params => {
	const { offset, limit } = params;

	const limitOffset = await Datafilm.findAll({
		offset: offset * limit,
		limit
	});
	try {
		return limitOffset;
	} catch (error) {
		return error;
	}
};

export const listById = async params => {
	const { id } = params;

	const searchId = await Datafilm.findOne({
		attributes: ["id", "name", "rate", "link","img","season","eps","content","actor","director","category","country","tag"],
		where: {
			id
		}
	});
	try {
		return searchId;
	} catch (error) {
		return error;
	}
};

export const searchUser = async params => {
	const { iLike } = params;
	const searchIlike = await Datafilm.findAll({
		attributes: ["id", "name", "rate", "link","img","season","eps","content","actor","director","category","country","tag"],
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
	try {
		return searchIlike;
	} catch (error) {
		return error;
	}
};

export const updateUser = async params => {
	const { id, name, priority, description, duedate } = params;
	const updateObject = await Datafilm.findOne({
		where: {
			id
		}
	});
	if (!updateObject) {
		return;
	}
	updateObject.name = name ? name : updateObject.name;
	updateObject.priority = priority ? priority : updateObject.priority;
	updateObject.description = description
		? description
		: updateObject.description;
	updateObject.duedate = duedate ? duedate : updateObject.duedate;
	let result = await updateObject.save();
	if (!result) {
		return;
	}
	try {
		return updateObject;
	} catch (error) {
		return error;
	}
};

export const deletedUser = async params => {
	const { id } = params;
	const deletedObject = await Datafilm.destroy({
		where: {
			id
		}
		// truncate: true /* this will ignore where and truncate the table instead */
	});
	const checkId = await Datafilm.findOne({
		where: {
			id
		}
	});
	try {
		return checkId;
	} catch (error) {
		return error;
	}
};
//Scripts
export const convertDataFilmsToPostgres = async () => {
	var con = mysql.createConnection({
		host: "localhost",
		database: "testMysql",
		user: "root",
		password: "root",

	  });
	  try {
		await con.connect(function(err) {
			if (err) {
				console.log(`Error connect mysql error1 = ${err}`);
				return;
			};
			console.log("Connected MySQL");
		  });
		  let sql = "SELECT name, rate, link, img, season, eps, content, actor, director, category, country, tag FROM datafilm";
		  con.query(sql, function (err, films) {
			if (err) {
				console.log(`Error query mysql error1 = ${err}`);
				return;
			};
			films.forEach(async (film) => {
				let {name, rate, link, img, season, eps, content, actor, director, category, country, tag} = film;
				const createNewFilm = await Datafilm.create(
					{
						name, rate, link, img, season, eps, content, actor, director, category, country, tag
					},
					{
						fields: ["name", "rate", "link","img","season","eps","content","actor","director","category","country","tag"]
					}
				);
			});
			//console.log("query films: " + JSON.stringify(films));
			return;
		  });
	  } catch (error) {
		console.log(`error12 = ${error}`);
		return;
	  }

};
