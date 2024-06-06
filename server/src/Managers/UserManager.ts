import { Socket } from "socket.io";
interface User{
    name:string,
    socket:Socket
}

export class UserManager{
    private users:User[];

    constructor(){
        this.users=[];
    }

    addUser(name:string,socket:Socket){
        this.users.push({
            name,socket
        })
    }

    removeUser(socketID:string){
        this.users.filter(x=>x.socket.id===socketID)
    }
}