const EventEmitter = require("events");
const util = require("util");

function Dialog () {
    EventEmitter.call(this);
    this.message = "Hello world !";
}

util.inherits(Dialog, EventEmitter);
Dialog.prototype.sayHello = function  () {
    console.log(this.message);
    this.emit("hello");
}
const dialog = new Dialog()

dialog.on("hello", function  () {
    console.log(("Co 1 loi chao mới"));
})
dialog.sayHello();