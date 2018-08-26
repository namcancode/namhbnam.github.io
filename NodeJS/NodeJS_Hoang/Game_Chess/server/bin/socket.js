const io = require("socket.io")(4000);
const mangUser = {};
console.log(`Socket On: 4000`)
module.exports = { io, mangUser };