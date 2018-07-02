let log = {
    info: function (info) {
        console.log("Infor: "+info);
    },
    warning: function  (warning) {
        console.log('Warning: ' +warning);
    },
    error: function  (error) {
        console.log('Error: '+error);
    }
};
module.exports = log;