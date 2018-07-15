import { Member } from "../models/Member";
import { Op } from "../databases/database";
import bcrypt from 'bcrypt';
import {saltRounds, keySecret} from '../configs/config';
var mysql = require('mysql');

export const listAllMember = async params => {
	const dataAll = await Member.findAll({
		attributes: ["id", "username", "password", "email"],
		order: ["id"]
	});
	try {
		return dataAll;
	} catch (error) {
		return error;
	}
};


export const createMember = async params => {
	const { username, password, email } = params;
	bcrypt.hash(password, saltRounds).then(function(hash) {
		const creatUser =  Member.create(
			{
				username,
				password:hash,
				email
			},
			{
				fields: ["username", "password", "email"]
			}
		);

	try {
		return creatUser;
	} catch (error) {
		return error;
	}
	});
};

export const checkPasswordUser = async params =>{
	const { username, password, email } = params;
	bcrypt.compare(password, hash).then(function(res) {
		// res == false
	});
}

export const listOfset = async params => {
	const { offset, limit } = params;

	const limitOffset = await Member.findAll({
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

	const searchId = await Member.findOne({
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
	const searchIlike = await Member.findAll({
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
	const updateObject = await Member.findOne({
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
	const deletedObject = await Member.destroy({
		where: {
			id
		}
		// truncate: true /* this will ignore where and truncate the table instead */
	});
	const checkId = await Member.findOne({
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
export const convertMembersToPostgres = async () => {
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
		  let sql = "SELECT name, rate, link, img, season, eps, content, actor, director, category, country, tag FROM Member";
		  con.query(sql, function (err, films) {
			if (err) {
				console.log(`Error query mysql error1 = ${err}`);
				return;
			};
			films.forEach(async (film) => {
				let {name, rate, link, img, season, eps, content, actor, director, category, country, tag} = film;
				const createNewFilm = await Member.create(
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





