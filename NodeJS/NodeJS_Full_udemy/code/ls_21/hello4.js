function Person () {
    this.message = "Hello im hello4";
    this.sayHello = function  () {
        console.log(this.message);
    }
}
module.exports = Person;