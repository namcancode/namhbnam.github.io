const app = require("../app");
var express = require("express");
const http = require("http").Server(app);
export const io = require("socket.io")(http);

io.on("connection", function(socket) {
    console.log("a user connected" + socket);
    socket.on("disconnect", function() {
        console.log("user disconnected");
    });
    socket.on("send message", function(data) {
        // console.log("message: " + data);
        io.emit('new message',{msg:data})
    });
    socket.on("new user",(name)=>{
        io.emit('name user',{name})
    })
});

http.listen(4000, function() {
    console.log("listening on *:4000");
});