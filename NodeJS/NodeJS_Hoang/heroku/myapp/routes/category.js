var express = require("express");
var router = express.Router();
import { sequelize, Op } from "../databases/database";
import { SUCCESS, FAILED } from "../configs/config";
import { Datafilm } from "../models/Datafilm";
import {
	createDetail,
	listAllDetail,
	listOfset,
	listById,
	searchUser,
	updateUser,
	deletedUser,
	convertDataFilmsToPostgres
} from "../controllers/DatafilmController";


// router.get("/", function(req, res, next) {
// 	// res.render("category", { title: "Express" });
// });