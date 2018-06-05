const greetings = require("./greetings.json");
const sayHello = function  () {
    // console.log("hello english");
    console.log(greetings.en);
};
module.exports = sayHello;