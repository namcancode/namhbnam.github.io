'use strict';
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //Định nghĩa function
    sayHello(){
        console.log(`Hello ${this.firstName} va ${this.lastName}`);
    }
}
// function Person () {
//     this.firstName = "Hoa";
//     this.lastName = "Mai";
// }

// Person.prototype.sayHello = function  () {
//     console.log(`Hello ${this.firstName} va ${this.lastName}`);
// }
const hoa = new Person("Hoa", "Mai");
hoa.sayHello();
const phuong  = new Person("Phượng", "Yến");
phuong.sayHello();
console.log(hoa.__proto__);
console.log(phuong.__proto__);
console.log(hoa.__proto__ === phuong.__proto__);