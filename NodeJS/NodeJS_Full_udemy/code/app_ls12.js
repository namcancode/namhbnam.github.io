// function Person (name, password) {
//     this.name = name;
//     this.password =password;
// }
// Person.prototype.getName = function(){ return this.name;}
// Person.prototype.getPassword = function(){ return this.password;}
// Person.prototype.getLevel =  function(){ return this.level;}
// Person.prototype.level = "admin";
// function User (name) {
//     this.name = name;
// }
// User.prototype = new Person();
// let person =new Person("nam","123456");
// let user  = new User("tech", "654321");
// console.log(user.getName());
// console.log(user.getLevel());
// console.log(user.getPassword());
// console.log(person.getName());

Date.prototype.vnFormat = function  () {
    let yyyy = this.getFullYear();
    let mm = this.getMonth() +1;
    let dd = this.getDate();
    return dd + "/" + mm + "/" + yyyy
}
const now = new Date();
const xms = new Date(2018, 11, 24);
console.log(now.vnFormat());