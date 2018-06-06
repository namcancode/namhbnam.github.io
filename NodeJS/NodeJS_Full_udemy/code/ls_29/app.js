const Emitter = require("events");
const eventConfig = require('./config').events;
let emitter= new Emitter();
// emitter.on("bad", function(){
//     console.log("Một môn nào đó bị điểm kém !!!");
// });
// emitter.on("bad", function(){
//     console.log("Đã có điểm kém, cần thông báo tới ph");
// });
emitter.on(eventConfig.BAD_SCORE, function(){
        console.log("Một môn nào đó bị điểm kém !!!");
    });
    emitter.on(eventConfig.BAD_SCORE, function(){
        console.log("Đã có điểm kém, cần thông báo tới ph");
    });
const scores = [10, 4];
for (let s of scores){
    if(s<5){
        console.log("Điểm thấp quá ", s);
        emitter.emit(eventConfig.BAD_SCORE)
    }
}