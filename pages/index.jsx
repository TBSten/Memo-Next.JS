import { useState, useEffect } from "react";

import Memo from "components/Memo" ;
import { getMemos,saveMemos } from "lib/functions";

export default function Index(){
    const [memos,setMemos] = useState([]) ;
    const [saving,setSaving] = useState(false);
    useEffect(()=>{
        getMemos()
        .then(res=>{
            console.log(res);
            setMemos(res.memos) ;
        }).catch(e=>{
            console.error("error :",e)
        });
    },[]);
    function handleSave(){
        setSaving(true);
        saveMemos(memos).then(res=>{
            setSaving(false);
        }).catch((e)=>{console.error(e)});
    }
    function handleAdd(){
        setMemos(prev=>{
            const newMemos = [
                ...prev,
                {title:"add item",body:"this is add item"}
            ] ;
            return newMemos ;
        })
    }
    function handleUpdate(i,tOrB,text){
        setMemos(prev=>{
            const newMemos = [...prev] ;
            newMemos[i][tOrB] = text ;
            return newMemos ;
        });
    }
    function handleDelete(idx){
        setMemos(prev=>{
            return prev.reduce((p,v,i)=>{
                if(idx !== i ){
                    p.push(v);
                }
                return p ;
            },[]);
        });
    }
    return (
        <div>
            <h1>メモアプリ</h1>

            <div className="button-bar">
                <button onClick={handleAdd} disabled={saving}>
                    Add
                </button>

                <button onClick={handleSave} disabled={saving}>
                    Save
                </button>
            </div>

            <ul className="memos">
                {
                    memos.length > 0 ?
                    memos.map((el,idx)=>(
                        <li key={idx}>
                            <Memo 
                                title={el.title}
                                body={el.body}
                                onChangeTitle={(e)=>handleUpdate(idx,"title",e.target.value)}
                                onChangeBody={(e)=>handleUpdate(idx,"body",e.target.value)}
                                onDelete={(e)=>handleDelete(idx)}/>
                        </li>
                    ))
                    :
                    "none memo"
                }
            </ul>

        </div>
    ) ;
}

