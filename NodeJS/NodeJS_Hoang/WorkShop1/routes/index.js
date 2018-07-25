var express = require("express");
var router = express.Router();
import request from "request";
import cheerio from "cheerio";
import { AsyncResource } from "async_hooks";

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/chaopaya", async (req, res) => {
	let url =
		"http://www.thaiwater.net/DATA/REPORT/php/chaopraya_scada/chaopaya_scada.php?lang=";
	request.get(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			const $ = cheerio.load(body);
			const data = [];
			const S5 = async () => {
				const lastUpdate = $("#table_S5")
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();
				const rainFall =
					$("#table_S5")
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim() + " Mm";
				const waterLevel =
					$("#table_S5")
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim() + " M";

				const bankLevel =
					$("#table_S5")
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim() + " M";
				const dataS5 = { lastUpdate, rainFall, waterLevel, bankLevel };
				return data.push(dataS5);
			};
			const C29 = async () => {
				const lastUpdate = $(
					$($($("#table_C29").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall =
					$($($($("#table_C29").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim() + " Mm";
				const waterLevel =
					$($($($("#table_C29").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim() + " M";

				const bankLevel =
					$($($($("#table_C29").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim() + " M";
				const dataC29 = { lastUpdate, rainFall, waterLevel, bankLevel };
				// console.log(lastUpdate);
				return data.push(dataC29);
			};

			const C55 = async () => {
				const lastUpdate = $(
					$($($("#table_C55").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall =
					$($($($("#table_C55").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim() + " Mm";
				const waterLevel =
					$($($($("#table_C55").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim() + " M";

				const bankLevel =
					$($($($("#table_C55").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim() + " M";
				const dataC55 = { lastUpdate, rainFall, waterLevel, bankLevel };
				// console.log(lastUpdate);
				return data.push(dataC55);
			};
			const C22A = async () => {
				const lastUpdate = $(
					$($($("#table_C22A").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall =
					$($($($("#table_C22A").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim() + " Mm";
				const waterLevel =
					$($($($("#table_C22A").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim() + " M";

				const bankLevel =
					$($($($("#table_C22A").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim() + " M";
				const dataC22A = {
					lastUpdate,
					rainFall,
					waterLevel,
					bankLevel
				};
				// console.log(lastUpdate);
				return data.push(dataC22A);
			};
			const C12 = async () => {
				const lastUpdate = $(
					$($($("#table_C12").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall =
					$($($($("#table_C12").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim() + " Mm";
				const waterLevel =
					$($($($("#table_C12").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim() + " M";

				const bankLevel =
					$($($($("#table_C12").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim() + " M";
				const dataC12 = { lastUpdate, rainFall, waterLevel, bankLevel };
				// console.log(lastUpdate);
				return data.push(dataC12);
			};
			const C4 = async () => {
				const lastUpdate = $(
					$($($("#table_C4").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall =
					$($($($("#table_C4").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim() + " Mm";
				const waterLevel =
					$($($($("#table_C4").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim() + " M";

				const bankLevel =
					$($($($("#table_C4").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim() + " M";
				const dataC4 = { lastUpdate, rainFall, waterLevel, bankLevel };
				// console.log(lastUpdate);
				return data.push(dataC4);
			};
			const C53 = async () => {
				const lastUpdate = $(
					$($($("#table_C53").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall =
					$($($($("#table_C53").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim() + " Mm";
				const waterLevel =
					$($($($("#table_C53").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim() + " M";

				const bankLevel =
					$($($($("#table_C53").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim() + " M";
				const dataC53 = { lastUpdate, rainFall, waterLevel, bankLevel };
				// console.log(lastUpdate);
				return data.push(dataC53);
			};
			const C54 = async () => {
				const lastUpdate = $(
					$($($("#table_C54").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall =
					$($($($("#table_C54").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim() + " Mm";
				const waterLevel =
					$($($($("#table_C54").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim() + " M";

				const bankLevel =
					$($($($("#table_C54").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim() + " M";
				const dataC54 = { lastUpdate, rainFall, waterLevel, bankLevel };
				// console.log(lastUpdate);
				return data.push(dataC54);
			};
			S5();
			C29();
			C55();
			C22A();
			C12();
			C4();
			C53();
			C54();
			// console.log(data);
			res.json({
				data
			});
		}
	});
});
router.get("/chumporn", async (req, res) => {
	let url =
		"http://www.thaiwater.net/DATA/REPORT/php/chumporn_scada/chumporn.php?lang=";
	request.get(url, async (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const $ = cheerio.load(body);
			const data = [];
			const ID1 = async () => {
				const lastUpdate = await $("#table_1")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall =
					(await $("#table_1")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_1")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const dataID1 = { lastUpdate, rainFall, dayRain };
				return data.push(dataID1);
			};
			const ID2 = async () => {
				const lastUpdate = await $("#table_2")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall =
					(await $("#table_2")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_2")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const dataID2 = { lastUpdate, rainFall, dayRain };
				return data.push(dataID2);
			};
			const ID3 = async () => {
				const lastUpdate = await $("#table_3")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =
					(await $("#table_3")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_3")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const waterLevel =
					$("#table_3")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " M";
				const dataID3 = { lastUpdate, rainFall, dayRain, waterLevel };
				return data.push(dataID3);
			};
			const ID4 = async () => {
				const lastUpdate = await $("#table_4")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =
					(await $("#table_4")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_4")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const waterLevel =
					$("#table_4")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " M";
				const dataID4 = { lastUpdate, rainFall, dayRain, waterLevel };
				return data.push(dataID4);
			};
			const ID5 = async () => {
				const lastUpdate = await $("#table_5")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =
					(await $("#table_5")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_5")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const dataID5 = { lastUpdate, rainFall, dayRain };
				return data.push(dataID5);
			};
			const ID6 = async () => {
				const lastUpdate = await $("#table_6")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =
					(await $("#table_6")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_6")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const dataID6 = { lastUpdate, rainFall, dayRain };
				return data.push(dataID6);
			};
			const ID7 = async () => {
				const lastUpdate = await $("#table_7")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =
					(await $("#table_7")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_7")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const waterLevel =
					$("#table_7")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " M";
				const dataID7 = { lastUpdate, rainFall, dayRain, waterLevel };
				return data.push(dataID7);
			};
			const ID8 = async () => {
				const lastUpdate = await $("#table_8")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =
					(await $("#table_8")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_8")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const waterLevel =
					$("#table_8")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " M";
				const dataID8 = { lastUpdate, rainFall, dayRain, waterLevel };
				return data.push(dataID8);
			};
			const ID9 = async () => {
				const lastUpdate = await $("#table_9")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =
					(await $("#table_9")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_9")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const waterLevelPage =
					$("#table_9")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " M";
				const waterLevel =
					$("#table_9")
						.find(".style_blue > strong")[3]
						.children[0].data.trim() + " M";

				const dataID9 = {
					lastUpdate,
					rainFall,
					dayRain,
					waterLevelPage,
					waterLevel
				};
				return data.push(dataID9);
			};
			const ID10 = async () => {
				const lastUpdate = await $("#table_10")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =
					(await $("#table_10")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_10")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const waterLevelPage =
					$("#table_10")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " M";
				const waterLevel =
					$("#table_10")
						.find(".style_blue > strong")[3]
						.children[0].data.trim() + " M";

				const dataID10 = {
					lastUpdate,
					rainFall,
					dayRain,
					waterLevelPage,
					waterLevel
				};
				return data.push(dataID10);
			};
			const ID11 = async () => {
				const lastUpdate = await $("#table_11")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =
					(await $("#table_11")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_11")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const waterLevel =
					$("#table_11")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " M";
				const dataID11 = {
					lastUpdate,
					rainFall,
					dayRain,
					waterLevel
				};
				return data.push(dataID11);
			};
			const ID12 = async () => {
				const lastUpdate = await $("#table_12")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =
					(await $("#table_12")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const dayRain =
					$("#table_12")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const waterLevel =
					$("#table_12")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " M";
				const dataID12 = {
					lastUpdate,
					rainFall,
					dayRain,
					waterLevel
				};
				return data.push(dataID12);
			};
			await ID1();
			await ID2();
			await ID3();
			await ID4();
			await ID5();
			await ID6();
			await ID7();
			await ID8();
			await ID9();
			await ID10();
			await ID11();
			await ID12();
			res.json({
				data
			});
		}
	});
});

module.exports = router;
