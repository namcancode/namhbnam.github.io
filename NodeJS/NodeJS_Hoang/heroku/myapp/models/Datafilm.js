import { sequelize } from "../databases/database";
import Sequelize from "sequelize";
export const Datafilm = sequelize.define(
	"datafilm",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING
		},
		rate: {
			type: Sequelize.STRING
		},
		link: {
			type: Sequelize.STRING
		},
		img: {
			type: Sequelize.STRING
		},
		season: {
			type: Sequelize.STRING
		},
		eps: {
			type: Sequelize.STRING
		},
		content: {
			type: Sequelize.STRING
		},
		actor: {
			type: Sequelize.STRING
		},
		director: {
			type: Sequelize.STRING
		},
		category: {
			type: Sequelize.STRING
		},
		country: {
			type: Sequelize.STRING
		},
		tag: {
			type: Sequelize.STRING
		},
	},
	{
		timestamps: false
	}
);
