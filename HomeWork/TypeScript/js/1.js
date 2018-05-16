"use strict";
// let arr:string[] = ["nam","nam2","nam3"]
// for (let i in arr){
//     console.log(i);
// }
// for (const i of arr) {
//     console.log(i)
// } 
// class person{
//     run(){
//         console.log("hello run");
//     }
// }
// let p1 = new person()
// console.log(p1.run());
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }
    person.talk = function () {
        console.log("this is stactic method is talk");
    };
    person.prototype.run = function () {
        console.log("run...");
    };
    return person;
}());
var call = new person("namboss");
call.run();
person.talk;
//# sourceMappingURL=1.js.map