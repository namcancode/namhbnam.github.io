import { sequelize } from "../databases/database";
import Sequelize from "sequelize";
export const Member = sequelize.define(
	"member",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		avatar:{
			type: Sequelize.STRING
		}
	},
	{
		timestamps: false
	}
);
