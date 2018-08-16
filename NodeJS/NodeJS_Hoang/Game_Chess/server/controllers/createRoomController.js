import {io,clients} from '../bin/socket';

io.on("connection", function(socket) {
    // console.log("a user connected" + socket);
    socket.on("disconnect", function() {
        console.log("user disconnected");
        if(clients){
            for(let i=0; i<clients.length; i++){
                if(socket.id == clients[i].socket.id){
                    clients.splice(i, 1);
                }
            }
        }
    });
    socket.on("send message", function(data) {
        // console.log("message: " + data);
        io.emit('new message',{msg:data})
    });
    socket.on("new user",(name)=>{
        const user = {socket,name};
        clients.push(user)
        clients.forEach(e=>{
            socket.emit('name user',{name:e.name})
        })

    })



});
