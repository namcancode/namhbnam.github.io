// const Sequelize = require('sequelize');
import { Sequelize } from "sequelize";
import { DBNAME, USER, PASSWORD } from "../config/config";
export const sequelize = new Sequelize(DBNAME, USER, PASSWORD, {
	host: "localhost",
	dialect: "postgres",
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});
export const Op = Sequelize.Op;
