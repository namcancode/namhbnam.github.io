// const events = require('events');
// const em = new events.EventEmitter();
// em.addListener('FirstEvent', function (data) {
//     console.log(data);
// });
// em.emit('FirstEvent', 'This is my first NodeJS event emitter sample');
const emitter = require("events").EventEmitter;
const util = require("util");
// function LoopProcessor(num) {
//     const e = new emitter();

//     setTimeout(function () {
//         for (let i = 1; i <= num; i++) {
//             e.emit('BeforeProcess', i);
//             console.log('Processing number: ' + i);
//             e.emit('AfterProcess ', i)
//         }
//     }, 2000);
//     return e;
// };
function LoopProcessor(num) {
	const me = this;

	setTimeout(function() {
		for (let i = 1; i <= num; i++) {
			e.emit("BeforeProcess", i);
			console.log("Processing number: " + i);
			e.emit("AfterProcess ", i);
		}
	}, 2000);
	return this;
}
util.inherits(LoopProcessor, emitter);
const lp = new LoopProcessor(3);
lp.on("BeforeProcess", function(data) {
	console.log("About to start the process for " + data);
});
lp.on("AfterProcess", function(data) {
	console.log("Complete processing" + data);
});
