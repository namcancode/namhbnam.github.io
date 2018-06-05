const greetings = require("./greetings.json");
const sayHello = function  () {
    // console.log("Xin chào vietnamese");
    console.log(greetings.vn);
};
module.exports = sayHello;