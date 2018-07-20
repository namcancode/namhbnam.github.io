var express = require("express");
var router = express.Router();
import { getNewFilm } from "../controllers/CategoryController";
import { SUCCESS, FAILED } from "../configs/config";
import rp from "request-promise";
import cheerio from "cheerio";
import jquery from "jquery";
const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });
/* GET users listing. */
router.get("/", function(req, res, next) {
	if (req.session.user) {
		const dataUser = req.session.user.checkId;
		res.render("category", {
			dataUser,
			username: dataUser.username,
			avatar: dataUser.avatar
		});
	} else {
		const dataUser = null;
		res.render("category", { dataUser });
	}
});

router.get("/leech", async (req, res) => {
	let result = await nightmare
		.goto("http://www.phimmoi.net/phim-chieu-rap/")
		// .type('#form-search input[name=keyword]', 'Ám Hồn')
		// .click('#searchsubmit')
		.wait(".list-movie")
		.evaluate(() => {
			var arr = [];
			$(".movie-item").each(()=>{
				arr.push($(this).text());
			})
			console.log(`arr = ${arr}`);
			return arr;
		}).end();
	Object.keys(result).forEach(key => {
		console.log(`key = ${key}`);
	});
	// console.log(`value = ${JSON.stringify(result["1"])}`);
	// console.log(`prevObject = ${JSON.stringify(result["prevObject"])}`);
	console.log(`10s = ${JSON.stringify(result["10"])}`);


	//console.log(`result = ${JSON.stringify(result)}`);


	// const options = {
	// 	url: "http://www.phimmoi.net/phim-le/",
	// 	json: true
	// };
	// rp(options)
	// 	.then(result => {
	// 		const promises = [];
	// 		const filmData = [];
	// 		// let $ = cheerio.load(result);
	// 		console.log(result);
	// 	})
	// 	.catch(err => {
	// 		return err;
	// 	});
});

module.exports = router;
