import express from "express";
import { Server, Socket } from "socket.io";
import http from "http";
const app=express();

const server=http.createServer(http);
const io=new Server(server);

io.on('connection',(socket:Socket)=>{
    console.log("A user is connected");
}
)
app.listen(3000,()=>{
    console.log("Server is listening at port 3000");
})