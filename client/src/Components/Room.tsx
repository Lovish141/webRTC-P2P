import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Room=()=>{
    const [searchParam,setSearchParam]=useSearchParams();
    const name=searchParam.get('name');

    useEffect(()=>{
        //Logic to join the room
    },
    [name])
    return(
        <div>
           hi {name}
        </div>
    )
}

export default Room;