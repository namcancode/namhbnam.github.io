const util = require("util");
function Person () {
    this.firstName = "Hoa";
    this.lastName = "Mai";
}
Person.prototype.sayHello = function  () {
    console.log(`Hello ${this.firstName} va ${this.lastName}`);
}
function Student () {
    Person.call(this)
    this.id = "1234";
}
util.inherits(Student,Person)
const sv = new Student()
sv.sayHello()