const obj = {
    sayHello: "Hello"
}
console.log(obj.sayHello);
console.log(obj['sayHello']);
const prop = "sayHello"
console.log(obj[prop]);

//function arr
const arr = [];
arr.push(function(){
    console.log("hello 1");
})
arr.push(function(){
    console.log("hello 2");
})
arr.push(function(){
    console.log("hello 3");
})
arr[0]();
arr[1]();
arr[2]();
console.log("========");
//for
arr.forEach(function  (item) {
 item();
})