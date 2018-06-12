const Dialog = require("./dialog")
const dialog = new Dialog()

dialog.on("hello", function  () {
    console.log(("Co 1 loi chao mới"));
})
dialog.sayHello("Mai Hoa");