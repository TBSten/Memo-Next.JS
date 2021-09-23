import {useEffect, useState} from "react" ;

export default function Test(){
    const [cnt,setCnt] = useState(0);
    return (
        <div>
            <h1> CNT:{cnt} </h1>
            <button onClick={()=>setCnt(prev=>prev+1)}>UP</button>
            <button onClick={()=>setCnt(0)}>RESET</button>
            <button onClick={()=>setCnt(prev=>prev-1)}>DOWN</button>
        </div>
    ) ;
}
