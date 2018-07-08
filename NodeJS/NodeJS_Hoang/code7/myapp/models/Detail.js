import Sequelize from "sequelize";
import { sequelize } from "../databases/database";
export const Detail = sequelize.define(
	"detail",
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
