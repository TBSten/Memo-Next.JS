import {useState} from "react" ;

export function useObjectState(init){
    const [s,setS] = useState(init);
    function setPart(key,value){
        setS(prev=>{
            const newS = Object.assign({},prev) ;
            newS[key] = value ;
            return newS ;
        });
    }
    return [s,setS,setPart] ;
}

export function useArrayState(init){
    const [s,setS] = useState(init);
    function setPart(key,value){
        setS(prev=>{
            const newS = [...prev] ;
            newS[key] = value ;
            return newS ;
        });
    }
    return [s,setS,setPart] ;
}



