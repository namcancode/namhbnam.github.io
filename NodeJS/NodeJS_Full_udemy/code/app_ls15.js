function changeByvalue () {
    b =2;
}
let a= 1;
changeByvalue(a)
// console.log(a);
function changeByRef (obj) {
    obj.prop1 = function  () {
        // body
    }
    obj.newProp2 = {};
    obj.d = 100;
}
let c = {};
// c.prop1 = {};
changeByRef(c);
console.log(c);
