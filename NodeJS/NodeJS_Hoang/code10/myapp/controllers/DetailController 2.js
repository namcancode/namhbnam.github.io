import { Detail } from "../models/Detail";
import { Op } from "../databases/database";
import { EROFS } from "constants";

export const createDetail = async params => {
	const { name, priority, description, duedate } = params;
	const creatUser = await Detail.create(
		{
			name,
			priority: parseInt(priority),
			description,
			duedate
		},
		{
			fields: ["name", "priority", "description", "duedate"]
		}
	);
	try {
		return creatUser;
	} catch (error) {
		return error;
	}
};
export const listAllDetail = async params => {
	const dataAll = await Detail.findAll({
		attributes: ["id", "name", "priority", "description", "duedate"],
		order: ["id"]
	});
	try {
		return dataAll;
	} catch (error) {
		return error;
	}
};

export const listOfset = async params => {
	const { offset, limit } = params;

	const limitOffset = await Detail.findAll({
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

	const searchId = await Detail.findOne({
		attributes: ["id", "name", "priority", "description", "duedate"],
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
	const searchIlike = await Detail.findAll({
		attributes: ["id", "name", "priority", "description", "duedate"],
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
	const updateObject = await Detail.findOne({
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
	const deletedObject = await Detail.destroy({
		where: {
			id
		}
		// truncate: true /* this will ignore where and truncate the table instead */
	});
	const checkId = await Detail.findOne({
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
