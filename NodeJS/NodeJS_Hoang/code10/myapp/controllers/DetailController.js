import { Detail } from '../models/Detail';

export const createDetail = async (params) => {
	let {name, priority, description, duedate} = params;
	try {
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
		return creatUser;
	} catch (error) {
		return error;
	}
};
