function Person () {
    this.message = "Hello Im message";
    this.sayHello = function  () {
        console.log(this.message);
    }
}
module.exports = new Person()