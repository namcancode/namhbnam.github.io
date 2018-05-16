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
class person{
    constructor(name){
        this.name = name;
        console.log(this.name + " constructor");
    }
    static talk(){
        console.log(`this is stactic method is talk`);
    }
    run(){
        console.log(`run...`);
    }
}
let call = new person("namboss")
call.run();
person.talk;