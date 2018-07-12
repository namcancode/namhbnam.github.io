import { Detail } from "../models/Detail";

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
