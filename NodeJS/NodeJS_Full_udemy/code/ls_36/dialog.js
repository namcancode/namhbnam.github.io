const EventEmitter = require("events");
module.exports= class Dialog extends EventEmitter { //dialog ke thua eventemitter
    constructor(){
        super();
        this.message = "Hello world !";
    }
    sayHello (data) {
        console.log(`${this.message} : ${data}`);
        this.emit("hello", data)
    }
}