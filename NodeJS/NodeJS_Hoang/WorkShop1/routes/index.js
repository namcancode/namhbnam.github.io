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
			const Area = [];
			const Station = [];
			const Factor = [];
			const data = [];
			const S5 = async () => {
				const OriginalName = "สถานีอยุธยา";
				const translateName = "Ayutthaya Station";
				const rainFallUnit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "S.5";
				const AreaId = {
					Latitude: `14 21' 32"`,
					Longitude: `100 35' 2"`
				};
				const time = $("#table_S5")
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = {
					value: `${$("#table_S5")
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: rainFallUnit
				};

				const waterLevel = {
					value: `${$("#table_S5")
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = {
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
				const rainFallUnit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.29";
				const AreaId = {
					Latitude: `14 11' 36"`,
					Longitude: `100 30' 14"`
				};
				const time = $($($($("#table_C29").parent()).parent()).parent())
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = {
					value: `${$(
						$($($("#table_C29").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: rainFallUnit
				};
				const waterLevel = {
					value: `${$(
						$($($("#table_C29").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = {
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
				const rainFallUnit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.55";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = $($($($("#table_C55").parent()).parent()).parent())
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = {
					value: `${$(
						$($($("#table_C55").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: rainFallUnit
				};

				const waterLevel = {
					value: `${$(
						$($($("#table_C55").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = {
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
				const rainFallUnit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.22A";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = $(
					$($($("#table_C22A").parent()).parent()).parent()
				)
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = {
					value: `${$(
						$($($("#table_C22A").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: rainFallUnit
				};

				const waterLevel = {
					value: `${$(
						$($($("#table_C22A").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = {
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
				const rainFallUnit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.12";
				const AreaId = {
					Latitude: `13 47' 14"`,
					Longitude: `100 30' 58"`
				};
				const time = $($($($("#table_C12").parent()).parent()).parent())
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = {
					value: `${$(
						$($($("#table_C12").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: rainFallUnit
				};

				const waterLevel = {
					value: `${$(
						$($($("#table_C12").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = {
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
				const rainFallUnit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.4";
				const AreaId = {
					Latitude: `13 44' 15"`,
					Longitude: `100 29' 56"`
				};
				const time = $($($($("#table_C4").parent()).parent()).parent())
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = {
					value: `${$($($($("#table_C4").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: rainFallUnit
				};

				const waterLevel = {
					value: `${$($($($("#table_C4").parent()).parent()).parent())
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = {
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
				const rainFallUnit = "Mm";
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

				const rainFall = {
					value: `${$(
						$($($("#table_C53").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: rainFallUnit
				};

				const waterLevel = {
					value: `${$(
						$($($("#table_C53").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = {
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
				const rainFallUnit = "Mm";
				const waterLevelUnit = "M";
				const bankLevelUnit = "M";
				const code = "C.54";
				const AreaId = {
					Latitude: `13 22' 8"`,
					Longitude: `100 34' 59"`
				};
				const time = $($($($("#table_C54").parent()).parent()).parent())
					.parent()
					.next()
					.find('[bgcolor="#999999"]')
					.text()
					.replace("ข้อมูลล่าสุด", "")
					.trim();

				const rainFall = {
					value: `${$(
						$($($("#table_C54").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[0]
						.children[1].next.data.trim()}`,
					unit: rainFallUnit
				};

				const waterLevel = {
					value: `${$(
						$($($("#table_C54").parent()).parent()).parent()
					)
						.parent()
						.next()
						.find('[bgcolor="#99ccff"] >strong')[1]
						.children[1].next.data.trim()}`,
					unit: waterLevelUnit
				};

				const bankLevel = {
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
				const OriginalName = "บ้านคีรีล้อม";
				const translateName = "Ban Kee Ree Lom";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "1";
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
					unit: rainFallUnit
				};
				const dayRain = await {
					value: `${$("#table_1")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: dayRainlUnit
				};

				const dataID1 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					dayRain
				};
				return data.push(dataID1);
			};
			const ID2 = async () => {
				const OriginalName = "อนามัยบ้านบางเจริญ";
				const translateName = "Ban Bang Charoen";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "2";
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
					unit: rainFallUnit
				};
				const dayRain = await {
					value: `${$("#table_2")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: dayRainlUnit
				};

				const dataID2 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					dayRain
				};
				return data.push(dataID2);
			};
			const ID3 = async () => {
				const OriginalName = "คลองท่าแซะ";
				const translateName = "Klong Tha Sae";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "3";
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
					unit: rainFallUnit
				};

				const dayRain = await {
					value: `${$("#table_3")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: dayRainlUnit
				};

				const gageHeight = await {
					value: `${$("#table_3")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
					unit: gageHeightUnit
				};

				const dataID3 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
				};
				return data.push(dataID3);
			};
			const ID4 = async () => {
				const OriginalName = "วังมะปราง";
				const translateName = "Wang Ma Prang";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "4";
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
					unit: rainFallUnit
				};

				const dayRain = await {
					value: `${$("#table_4")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: dayRainlUnit
				};

				const gageHeight = await {
					value: `${$("#table_4")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
					unit: gageHeightUnit
				};

				const dataID4 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
				};
				return data.push(dataID4);
			};
			const ID5 = async () => {
				const OriginalName = "อนามัยบ้านสลุย";
				const translateName = "Ban Slui Sanitarium";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "5";
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
					unit: rainFallUnit
				};

				const dayRain = await {
					value: `${$("#table_5")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: dayRainlUnit
				};

				const dataID5 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					dayRain
				};
				return data.push(dataID5);
			};
			const ID6 = async () => {
				const OriginalName = "อนามัยบ้านธรรมเจริญ";
				const translateName = "Ban Dhamma Charoen Sanitarium";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "6";
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
					unit: rainFallUnit
				};

				const dayRain = await {
					value: `${$("#table_6")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: dayRainlUnit
				};

				const dataID6 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					dayRain
				};
				return data.push(dataID6);
			};
			const ID7 = async () => {
				const OriginalName = "คลองรับร่อ";
				const translateName = "Klong Rub Roe";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "7";
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
					unit: rainFallUnit
				};
				const dayRain = await {
					value: `${$("#table_7")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: dayRainlUnit
				};

				const gageHeight = await {
					value: `${$("#table_7")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
					unit: gageHeightUnit
				};

				const dataID7 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
				};
				return data.push(dataID7);
			};
			const ID8 = async () => {
				const OriginalName = "บ้านวังครก";
				const translateName = "Ban Wang Krog";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "8";
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
					unit: rainFallUnit
				};
				const dayRain = await {
					value: `${$("#table_8")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: dayRainlUnit
				};

				const gageHeight = await {
					value: `${$("#table_8")
						.find(".style_blue > strong")[2]
						.children[0].data.trim()}`,
					unit: gageHeightUnit
				};

				const dataID8 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
				};
				return data.push(dataID8);
			};
			const ID9 = async () => {
				const OriginalName = "ประตูระบายน้ำหัววัง";
				const translateName = "Hua Wang Gate";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "9";
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
					unit: rainFallUnit
				};
				const dayRain = await {
					value: `${$("#table_9")
						.find(".style_blue > strong")[1]
						.children[0].data.trim()}`,
					unit: dayRainlUnit
				};

				const gageHeightPage = await {
					value:`${	$("#table_9")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
					unit:gageHeightUnit
				}

				const gageHeightAfter = await {
					value:`${$("#table_9")
					.find(".style_blue > strong")[3]
					.children[0].data.trim()}`,
					unit:gageHeightUnit
				}

				const dataID9 = {
					OriginalName,
					translateName,
					code,
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
				const OriginalName = "ประตูระบายน้ำสามแก้ว";
				const translateName = "Sam Kaew Gate";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "10";
				const AreaId = {
					Latitude: `0 0' 0"`,
					Longitude: `0 0' 0"`
				};
				const time = await $("#table_10")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();
				const rainFall =await {
					value:`${$("#table_10")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
					unit:rainFallUnit
				}

				const dayRain = await {
					value:`${$("#table_10")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
					unit:dayRainlUnit
				}

				const gageHeightPage = await {
					value:`${$("#table_10")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
					unit:gageHeightUnit
				}

				const gageHeightAfter = await {
					value:`${	$("#table_10")
					.find(".style_blue > strong")[3]
					.children[0].data.trim()}`,
					unit:gageHeightUnit
				}


				const dataID10 = {
					OriginalName,
					translateName,
					code,
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
				const OriginalName = "สะพานเทศบาล2";
				const translateName = "Municipality2 Bridge";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "11";
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
					value:`${$("#table_11")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
					unit:rainFallUnit
				}

				const dayRain = await {
					value:`${$("#table_11")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
					unit:dayRainlUnit
				}

				const gageHeight = await {
					value:`${$("#table_11")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
					unit:gageHeightUnit
				}

				const dataID11 = {
					OriginalName,
					translateName,
					code,
					AreaId,
					time,
					rainFall,
					dayRain,
					gageHeight
				};
				return data.push(dataID11);
			};
			const ID12 = async () => {
				const OriginalName = "ปากน้ำ";
				const translateName = "Pak Nam";
				const rainFallUnit = "Mm";
				const dayRainlUnit = "Mm";
				const gageHeightUnit = "M";
				const code = "12";
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
					value:`${$("#table_12")
					.find(".style_blue > strong")[0]
					.children[0].data.trim()}`,
					unit:rainFallUnit
				}

				const dayRain = await {
					value:`${	$("#table_12")
					.find(".style_blue > strong")[1]
					.children[0].data.trim()}`,
					unit:dayRainlUnit
				}

				const gageHeight = await {
					value:`${$("#table_12")
					.find(".style_blue > strong")[2]
					.children[0].data.trim()}`,
					unit:gageHeightUnit
				}

				const dataID12 = {
					OriginalName,
					translateName,
					code,
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
		"http://www.thaiwater.net/DATA/REPORT/php/ppn_scada/ppn_scada.php?lang=";
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
				const UpStreamWaterLevel =
					$("#table_1")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_1")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID1 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
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
				const UpStreamWaterLevel =
					$("#table_2")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_2")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID2 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
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
				const UpStreamWaterLevel =
					$("#table_3")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_3")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID3 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
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
				const UpStreamWaterLevel =
					$("#table_4")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_4")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID4 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
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
				const UpStreamWaterLevel =
					$("#table_5")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_5")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID5 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
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
				const UpStreamWaterLevel =
					$("#table_6")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_6")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID6 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
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
				const UpStreamWaterLevel =
					$("#table_7")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_7")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID7 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
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
				const UpStreamWaterLevel =
					$("#table_8")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_8")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID8 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
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
				const UpStreamWaterLevel =
					$("#table_9")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_9")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID9 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
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
				const UpStreamWaterLevel =
					$("#table_10")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_10")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID10 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
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
				const UpStreamWaterLevel =
					$("#table_11")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_11")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID11 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
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
				const UpStreamWaterLevel =
					$("#table_12")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_12")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID12 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
				return data.push(dataID12);
			};

			const ID13 = async () => {
				const lastUpdate = await $("#table_13")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall =
					(await $("#table_13")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const UpStreamWaterLevel =
					$("#table_13")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_13")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID13 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
				return data.push(dataID13);
			};

			const ID14 = async () => {
				const lastUpdate = await $("#table_14")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall =
					(await $("#table_14")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const UpStreamWaterLevel =
					$("#table_14")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_14")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID14 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
				return data.push(dataID14);
			};
			const ID15 = async () => {
				const lastUpdate = await $("#table_15")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall =
					(await $("#table_15")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const UpStreamWaterLevel =
					$("#table_15")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_15")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID15 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
				return data.push(dataID15);
			};
			const ID16 = async () => {
				const lastUpdate = await $("#table_16")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall =
					(await $("#table_16")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const UpStreamWaterLevel =
					$("#table_16")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_16")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID16 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
				};
				return data.push(dataID16);
			};
			const ID17 = async () => {
				const lastUpdate = await $("#table_17")
					.find('[bgcolor="#999999"]')
					.find("td:last-child")
					.text()
					.trim();

				const rainFall =
					(await $("#table_17")
						.find(".style_blue > strong")[0]
						.children[0].data.trim()) + " mm";
				const UpStreamWaterLevel =
					$("#table_17")
						.find(".style_blue > strong")[1]
						.children[0].data.trim() + " mm";
				const DownStreamWaterLevel =
					$("#table_17")
						.find(".style_blue > strong")[2]
						.children[0].data.trim() + " mm";
				const dataID17 = {
					lastUpdate,
					rainFall,
					UpStreamWaterLevel,
					DownStreamWaterLevel
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
