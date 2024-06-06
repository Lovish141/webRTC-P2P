import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { io } from "socket.io-client";
const URL="http://localhost:3000";

const Room=()=>{
    const [searchParam,setSearchParam]=useSearchParams();
    const name=searchParam.get('name');

    useEffect(()=>{
        //Logic to join the room
        const socket=io(URL,{
            autoConnect:false
        })

        socket.on("send-offer",({roomId})=>{
            alert("Send an offer please");
            socket.emit("offer",{
                roomId,
                sdp:""
            })
        })

        socket.on("offer",({roomId})=>{
            alert("Send answer please");
            socket.emit("answer",{
                roomId,
                sdp:""
            })
        })

        socket.on("answer",()=>{
            alert("Connection done");
        })
    },
    [name])
    return(
        <div>
           hi {name}
        </div>
    )
}

export default Room;