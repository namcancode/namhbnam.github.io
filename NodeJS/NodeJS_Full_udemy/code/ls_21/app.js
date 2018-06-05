const hello = require("./hello1");
hello();

const hello2 = require("./hello2").sayHello;
hello2();

const hello3 = require("./hello3");
hello3.sayHello();

hello3.message = "Changed message hello3";
const hello32 = require("./hello3");
hello32.sayHello();

const Hello4 = require("./hello4");
const hello4 = new Hello4();
hello4.sayHello()

const hello5 = require("./hello5").sayHello;
hello5()