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
	request.get(url, async (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const $ = cheerio.load(body);
			const Area = [];
			const Station = [];
			const Factor = [];
			const data = [];
			const S5 = async () => {
				const OriginalName = "สถานีอยุธยา";
				const translateName = "Ayutthaya Station";
				const unit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "S.5";
				const AreaId = {
					Latitude: `14 21' 32"`,
					Longitude: `100 35' 2"`
				};
				const time = await $("#table_S5")
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = await {
					value: `${$("#table_S5")
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: unit
				};

				const waterLevel = await {
					value: `${$("#table_S5")
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = await {
					value: `${$("#table_S5")
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim()}`,
					unit: bankLevelUnit
				};
				const dataS5 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					waterLevel,
					bankLevel
				};
				return data.push(dataS5);
			};
			const C29 = async () => {
				const OriginalName = "สถานีบางไทร";
				const translateName = "Bang Sai Station";
				const unit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.29";
				const AreaId = {
					Latitude: `14 11' 36"`,
					Longitude: `100 30' 14"`
				};
				const time = await $(
					$($($("#table_C29").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = await {
					value: `${$(
						$($($("#table_C29").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: unit
				};
				const waterLevel = await {
					value: `${$(
						$($($("#table_C29").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = await {
					value: `${$(
						$($($("#table_C29").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim()}`,
					unit: bankLevelUnit
				};

				const dataC29 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					waterLevel,
					bankLevel
				};
				// console.log(lastUpdate);
				return data.push(dataC29);
			};

			const C55 = async () => {
				const OriginalName = "สถานีปทุมธานี";
				const translateName = "Pathum Thani Station";
				const unit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.55";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $(
					$($($("#table_C55").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = await {
					value: `${$(
						$($($("#table_C55").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: unit
				};

				const waterLevel = await {
					value: `${$(
						$($($("#table_C55").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = await {
					value: `${$(
						$($($("#table_C55").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim()}`,
					unit: bankLevelUnit
				};

				const dataC55 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					waterLevel,
					bankLevel
				};
				// console.log(lastUpdate);
				return data.push(dataC55);
			};
			const C22A = async () => {
				const OriginalName = "สถานีปากเกร็ด";
				const translateName = "Pak Kred Station";
				const unit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.22A";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $(
					$($($("#table_C22A").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = await {
					value: `${$(
						$($($("#table_C22A").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: unit
				};

				const waterLevel = await {
					value: `${$(
						$($($("#table_C22A").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = await {
					value: `${$(
						$($($("#table_C22A").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim()}`,
					unit: bankLevelUnit
				};

				const dataC22A = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					waterLevel,
					bankLevel
				};
				// console.log(lastUpdate);
				return data.push(dataC22A);
			};
			const C12 = async () => {
				const OriginalName = "สถานีสามเสน";
				const translateName = "Sam Sen Station";
				const unit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.12";
				const AreaId = {
					Latitude: `13 47' 14"`,
					Longitude: `100 30' 58"`
				};
				const time = await $(
					$($($("#table_C12").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = await {
					value: `${$(
						$($($("#table_C12").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: unit
				};

				const waterLevel = await {
					value: `${$(
						$($($("#table_C12").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = await {
					value: `${$(
						$($($("#table_C12").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim()}`,
					unit: bankLevelUnit
				};

				const dataC12 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					waterLevel,
					bankLevel
				};
				// console.log(lastUpdate);
				return data.push(dataC12);
			};
			const C4 = async () => {
				const OriginalName = "สถานีสะพานพุธ";
				const translateName = "Saphan Phut Station";
				const unit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.4";
				const AreaId = {
					Latitude: `13 44' 15"`,
					Longitude: `100 29' 56"`
				};
				const time = await $(
					$($($("#table_C4").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = await {
					value: `${$($($($("#table_C4").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: unit
				};

				const waterLevel = await {
					value: `${$($($($("#table_C4").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = await {
					value: `${$($($($("#table_C4").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim()}`,
					unit: bankLevelUnit
				};

				const dataC4 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					waterLevel,
					bankLevel
				};
				// console.log(lastUpdate);
				return data.push(dataC4);
			};
			const C53 = async () => {
				const OriginalName = "สถานีท่าเรือ";
				const translateName = "Tha Rua Station";
				const unit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.53";
				const AreaId = {
					Latitude: `13 41' 15"`,
					Longitude: `100 41' 10"`
				};
				const time = $($($($("#table_C53").parent()).parent()).parent())
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = await {
					value: `${$(
						$($($("#table_C53").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: unit
				};

				const waterLevel = await {
					value: `${$(
						$($($("#table_C53").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = await {
					value: `${$(
						$($($("#table_C53").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim()}`,
					unit: bankLevelUnit
				};

				const dataC53 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					waterLevel,
					bankLevel
				};
				return data.push(dataC53);
			};
			const C54 = async () => {
				const OriginalName = "สถานีป้อมพระจุลฯ";
				const translateName = "Phra Chulachomklao Fortress Station";
				const unit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.54";
				const AreaId = {
					Latitude: `13 22' 8"`,
					Longitude: `100 34' 59"`
				};
				const time = await $(
					$($($("#table_C54").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = await {
					value: `${$(
						$($($("#table_C54").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: unit
				};

				const waterLevel = await {
					value: `${$(
						$($($("#table_C54").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = await {
					value: `${$(
						$($($("#table_C54").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#f4e5b7"] >strong')
						.text()
						.trim()}`,
					unit: bankLevelUnit
				};

				const dataC54 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					waterLevel,
					bankLevel
				};
				// console.log(lastUpdate);
				return data.push(dataC54);
			};
			await S5();
			await C29();
			await C55();
			await C22A();
			await C12();
			await C4();
			await C53();
			await C54();
			// console.log(data);
			res.json({
				data
			});
		}
	});
});
router.get("/chumporn", async (req, res) => {
	let url =
		"http://www.thaiwater.net/DATA/REPORT/php/chumporn_scada/chumporn.php?lang=en";
	request.get(url, async (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const $ = cheerio.load(body);
			const unit = [];
			const nameFactor = [];
			const data = [];
			const ID1 = async () => {
				const getName = await $("#table_1")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_1")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});
				const getFactor = await $("#table_9")
					.find("td.style_gen:first-child")
					.each(function(e) {
						return nameFactor.push(
							$(this)
								.text()
								.replace(" :", "")
								.trim()
						);
					});
				const getCode = "";
				const AreaId = {
					Latitude: `11 11' 16"`,
					Longitude: `99 19' 39"`
				};
				const time = await $("#table_1")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall = await {
					value: `${$("#table_1")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
					unit: unit[0],
					name:nameFactor[0]
				};
				const dayRain = await {
					value: `${$("#table_1")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const dataID1 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain
				};
				return data.push(dataID1);
			};
			const ID2 = async () => {
				const getName = await $("#table_2")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_2")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `11 00' 31.87"`,
					Longitude: `99 15' 51.84"`
				};
				const time = await $("#table_2")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall = await {
					value: `${$("#table_2")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
					unit: unit[0],
					name:nameFactor[0]
				};
				const dayRain = await {
					value: `${$("#table_2")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
					name:nameFactor[1]
				};

				const dataID2 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain
				};
				return data.push(dataID2);
			};
			const ID3 = async () => {
				const getName = await $("#table_3")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_3")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $("#table_3")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall = await {
					value: `${$("#table_3")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
						unit: unit[0],
						name:nameFactor[0]
				};

				const dayRain = await {
					value: `${$("#table_3")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const gageHeight = await {
					value: `${$("#table_3")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
						unit: unit[2],
						name:nameFactor[2]
				};

				const dataID3 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
				};
				return data.push(dataID3);
			};
			const ID4 = async () => {
				const getName = await $("#table_4")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_4")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $("#table_4")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall = await {
					value: `${$("#table_4")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
						unit: unit[0],
						name:nameFactor[0]
				};

				const dayRain = await {
					value: `${$("#table_4")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const gageHeight = await {
					value: `${$("#table_4")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
						unit: unit[2],
						name:nameFactor[2]
				};

				const dataID4 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
				};
				return data.push(dataID4);
			};
			const ID5 = async () => {
				const getName = await $("#table_5")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_5")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `10 52' 14.55"`,
					Longitude: `99 15' 09.23"`
				};
				const time = await $("#table_5")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall = await {
					value: `${$("#table_5")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
						unit: unit[0],
						name:nameFactor[0]
				};

				const dayRain = await {
					value: `${$("#table_5")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const dataID5 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain
				};
				return data.push(dataID5);
			};
			const ID6 = async () => {
				const getName = await $("#table_6")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_6")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `10 51' 45.88"`,
					Longitude: `99 07' 03.97"`
				};
				const time = await $("#table_6")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall = await {
					value: `${$("#table_6")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
						unit: unit[0],
						name:nameFactor[0]
				};

				const dayRain = await {
					value: `${$("#table_6")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const dataID6 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain
				};
				return data.push(dataID6);
			};
			const ID7 = async () => {
				const getName = await $("#table_7")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_7")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $("#table_7")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall = await {
					value: `${$("#table_7")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
						unit: unit[0],
						name:nameFactor[0]
				};
				const dayRain = await {
					value: `${$("#table_7")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const gageHeight = await {
					value: `${$("#table_7")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
						unit: unit[2],
						name:nameFactor[2]
				};

				const dataID7 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
				};
				return data.push(dataID7);
			};
			const ID8 = async () => {
				const getName = await $("#table_8")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_8")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $("#table_8")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall = await {
					value: `${$("#table_8")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
						unit: unit[0],
						name:nameFactor[0]
				};
				const dayRain = await {
					value: `${$("#table_8")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const gageHeight = await {
					value: `${$("#table_8")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
						unit: unit[2],
						name:nameFactor[2]
				};

				const dataID8 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
				};
				return data.push(dataID8);
			};
			const ID9 = async () => {
				const getName = await $("#table_9")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_9")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $("#table_9")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall = await {
					value: `${$("#table_9")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
						unit: unit[0],
						name:nameFactor[0]
				};
				const dayRain = await {
					value: `${$("#table_9")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const gageHeightPage = await {
					value: `${$("#table_9")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
						unit: unit[2],
						name:nameFactor[2]
				};

				const gageHeightAfter = await {
					value: `${$("#table_9")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
						unit: unit[3],
						name:nameFactor[3]
				};

				const dataID9 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeightPage,
					gageHeightAfter
				};
				return data.push(dataID9);
			};
			const ID10 = async () => {
				const getName = await $("#table_10")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_10")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $("#table_10")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall = await {
					value: `${$("#table_10")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
						unit: unit[0],
						name:nameFactor[0]
				};

				const dayRain = await {
					value: `${$("#table_10")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const gageHeightPage = await {
					value: `${$("#table_10")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
						unit: unit[2],
						name:nameFactor[2]
				};

				const gageHeightAfter = await {
					value: `${$("#table_10")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
						unit: unit[3],
						name:nameFactor[3]
				};

				const dataID10 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeightPage,
					gageHeightAfter
				};
				return data.push(dataID10);
			};
			const ID11 = async () => {
				const getName = await $("#table_11")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_11")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $("#table_11")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall = await {
					value: `${$("#table_11")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
						unit: unit[0],
						name:nameFactor[0]
				};

				const dayRain = await {
					value: `${$("#table_11")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const gageHeight = await {
					value: `${$("#table_11")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
						unit: unit[2],
						name:nameFactor[2]
				};

				const dataID11 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
				};
				return data.push(dataID11);
			};
			const ID12 = async () => {
				const getName = await $("#table_12")
				.find(".style_big_bu")
				.text()
				.trim().substring(2).trim();
				const getUnit = await $("#table_12")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});

				const getCode = "";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $("#table_12")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall = await {
					value: `${$("#table_12")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
						unit: unit[0],
						name:nameFactor[0]
				};

				const dayRain = await {
					value: `${$("#table_12")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
						unit: unit[1],
						name:nameFactor[1]
				};

				const gageHeight = await {
					value: `${$("#table_12")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
						unit: unit[2],
						name:nameFactor[2]
				};

				const dataID12 = {
					getName,
					getCode,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
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

router.get("/ppn", async (req, res) => {
	let url =
		"http://www.thaiwater.net/DATA/REPORT/php/ppn_scada/ppn_scada.php?lang=en";
	request.get(url, async (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const $ = cheerio.load(body);
			const unit = [];
			const nameFactor = [];
			const data = [];
			const ID1 = async () => {
				const getName = await $("#table_1")
					.find(".style_big_bu")
					.text()
					.trim();
				const getUnit = await $("#table_1")
					.find("td.style_gen:last-child")
					.each(function(e) {
						return unit.push(
							$(this)
								.text()
								.trim()
						);
					});
				const getFactor = await $("#table_1")
					.find("td.style_gen:first-child")
					.each(function(e) {
						return nameFactor.push(
							$(this)
								.text()
								.replace(" :", "")
								.trim()
						);
					});
				const getCode = "";
				const AreaId = {
					Latitude: `0 00' 00"`,
					Longitude: `0 00' 00"`
				};
				const time = await $("#table_1")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall = await {
					value: `${$("#table_1")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
					unit: unit[0],
					name: nameFactor[0]
				};

				const UpStreamWaterLevel = await {
					value: `${$("#table_1")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: unit[1],
					name: nameFactor[1]
				};

				const DownStreamWaterLevel = await {
					value: `${$("#table_1")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
					unit: unit[2],
					name: nameFactor[2]
				};

				const dataID1 = {
					Name: getName,
					code: getCode,
					AreaId,
					time,
					rainFall,
					UpStreamWaterLevel,
					UpStreamWaterLevel
				};
				return data.push(dataID1);
			};
			const ID2 = async () => {
				const getName = await $("#table_2")
					.find(".style_big_bu")
					.text()
					.trim();

				const getFactor = await $("#table_2")
					.find("td.style_gen:first-child")
					.each(function(e) {
						return nameFactor.push(
							$(this)
								.text()
								.replace(" :", "")
								.trim()
						);
					});
				const getCode = "";
				const AreaId = {
					Latitude: `0 00' 00"`,
					Longitude: `0 00' 00"`
				};
				const time = await $("#table_2")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall = await {
					value: `${$("#table_2")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
					unit: unit[0],
					name: nameFactor[0]
				};

				const UpStreamWaterLevel = await {
					value: `${$("#table_2")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: unit[1],
					name: nameFactor[1]
				};

				const DownStreamWaterLevel = await {
					value: `${$("#table_2")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
					unit: unit[2],
					name: nameFactor[2]
				};

				const dataID2 = {
					Name: getName,
					code: getCode,
					AreaId,
					time,
					rainFall,
					UpStreamWaterLevel,
					UpStreamWaterLevel
				};
				return data.push(dataID2);
			};

			const ID3 = async () => {
				const getName = await $("#table_3")
					.find(".style_big_bu")
					.text()
					.trim();

				const getFactor = await $("#table_3")
					.find("td.style_gen:first-child")
					.each(function(e) {
						return nameFactor.push(
							$(this)
								.text()
								.replace(" :", "")
								.trim()
						);
					});
				const getCode = "";
				const AreaId = {
					Latitude: `0 00' 00"`,
					Longitude: `0 00' 00"`
				};
				const time = await $("#table_3")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall = await {
					value: `${$("#table_3")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()}`,
					unit: unit[0],
					name: nameFactor[0]
				};

				const UpStreamWaterLevel = await {
					value: `${$("#table_3")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: unit[1],
					name: nameFactor[1]
				};

				const DownStreamWaterLevel = await {
					value: `${$("#table_3")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
					unit: unit[2],
					name: nameFactor[2]
				};

				const dataID3 = {
					Name: getName,
					code: getCode,
					AreaId,
					time,
					rainFall,
					UpStreamWaterLevel,
					UpStreamWaterLevel
				};
				return data.push(dataID3);
			};

			const ID4 = async () => {
				const getName = await $("#table_4")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_4")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_4")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_4")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_4")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_4")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID4 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID4);
			};
			const ID5 = async () => {
				const getName = await $("#table_5")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_5")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_5")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_5")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_5")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_5")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID5 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID5);
			};
			const ID6 = async () => {
				const getName = await $("#table_6")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_6")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_6")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_6")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_6")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_6")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID6 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID6);
			};
			const ID7 = async () => {
				const getName = await $("#table_7")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_7")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_7")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_7")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_7")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_7")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID7 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID7);
			};
			const ID8 = async () => {
				const getName = await $("#table_8")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_8")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_8")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_8")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_8")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_8")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID8 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID8);
			};
			const ID9 = async () => {
				const getName = await $("#table_9")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_9")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_9")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_9")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_9")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_9")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID9 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID9);
			};

			const ID10 = async () => {
				const getName = await $("#table_10")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_10")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_10")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_10")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_10")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_10")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID10 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID10);
			};
			const ID11 = async () => {
				const getName = await $("#table_11")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_11")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_11")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_11")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_11")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_11")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID11 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID11);
			};
			const ID12 = async () => {
				const getName = await $("#table_12")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_12")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_12")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_12")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_12")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_12")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID12 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID12);
			};

			const ID13 = async () => {
				const getName = await $("#table_13")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_13")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_13")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_13")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_13")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_13")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID13 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID13);
			};

			const ID14 = async () => {
				const getName = await $("#table_14")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_14")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_14")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_14")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_14")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_14")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID14 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID14);
			};
			const ID15 = async () => {
				const getName = await $("#table_15")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_15")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_15")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_15")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_15")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_15")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID15 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID15);
			};
			const ID16 = async () => {
				const getName = await $("#table_16")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_16")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_16")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_16")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_16")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_16")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID16 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID16);
			};
			const ID17 = async () => {
				const getName = await $("#table_17")
				.find(".style_big_bu")
				.text()
				.trim();

			const getFactor = await $("#table_17")
				.find("td.style_gen:first-child")
				.each(function(e) {
					return nameFactor.push(
						$(this)
							.text()
							.replace(" :", "")
							.trim()
					);
				});
			const getCode = "";
			const AreaId = {
				Latitude: `0 00' 00"`,
				Longitude: `0 00' 00"`
			};
			const time = await $("#table_17")
				.find('[bgcolor="#999999"]')
				.find("td:last-child")
				.text()
				.trim();

			const rainFall = await {
				value: `${$("#table_17")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
				unit: unit[0],
				name: nameFactor[0]
			};

			const UpStreamWaterLevel = await {
				value: `${$("#table_17")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
				unit: unit[1],
				name: nameFactor[1]
			};

			const DownStreamWaterLevel = await {
				value: `${$("#table_17")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
				unit: unit[2],
				name: nameFactor[2]
			};

			const dataID17 = {
				Name: getName,
				code: getCode,
				AreaId,
				time,
				rainFall,
				UpStreamWaterLevel,
				UpStreamWaterLevel
			};
				return data.push(dataID17);
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
			await ID13();
			await ID14();
			await ID15();
			await ID16();
			await ID17();
			res.json({
				data
			});
		}
	});
});
module.exports = router;
