const express=require("express")
const socket=require("socket.io")
const app=express()

const server=app.listen(3000,()=>{
    console.log("server connected");
})



app.use(express.static('public_html'));
var sio = socket(server);

sio.on('connection',(visitor)=>{

	console.log('we have a new visitor as id=>',visitor.id);
    visitor.on('message',function(data){
		sio.sockets.emit('new_msg',data); })
        visitor.on('borad',function(data){
            visitor.broadcast.emit('new_borad',data); 
        });
})
