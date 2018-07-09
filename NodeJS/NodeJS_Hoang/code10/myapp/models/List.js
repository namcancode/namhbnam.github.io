import { sequelize } from "../databases/database";
import Sequelize from "sequelize";
export const List = sequelize.define(
	"list",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		priority: {
			type: Sequelize.TINYINT
		},
		description: {
			type: Sequelize.TEXT
		},
		duedate: {
			type: Sequelize.DATE
		}
	},
	{
		timestamps: false
	}
);
