// var emitter = require('events').EventEmitter;
// var em = new emitter();

// em.addListener('FirstEvent', function (data) {
//     console.log(data);
// });

// em.emit('FirstEvent', 'This is my first NodeJS event emitter sample');

// var emitter = require('events').EventEmitter;

// function LoopProcessor(num) {
//     var e = new emitter();

//     setTimeout(function () {
//         for (var i = 1; i <= num; i++) {
//             e.emit('BeforeProcess', i);

//             console.log('Processing number: ' + i);

//             e.emit('AfterProcess', i);
//         }
//     }, 2000);
//     return e;
// }

// var lp = LoopProcessor(3);

// lp.on('BeforeProcess',function(data){
//     console.log('About to start the process for ' + data);
// });


// lp.on('AfterProcess',function(data){
//     console.log('Complete processing ' + data);
// });


var emitter = require('events').EventEmitter;
var util = require('util');

function LoopProcessor(num) {
    var me = this;

    setTimeout(function () {
        for (var i = 1; i <= num; i++) {
            me.emit('BeforeProcess', i);

            console.log('Processing number: ' + i);

            me.emit('AfterProcess', i);
        }
    }, 2000);
    return this;
}
util.inherits(LoopProcessor,emitter);

var lp = new LoopProcessor(3);

lp.on('BeforeProcess',function(data){
    console.log('About to start the process for ' + data);
});


lp.on('AfterProcess',function(data){
    console.log('Complete processing ' + data);
});