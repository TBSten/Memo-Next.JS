import db from "lib/db" ;


export default async function handler(req,res){
    console.log("GET");
    let result = {} ;
    try{
        if(req.method === "GET"){
            result.memos = db.getMemos() ;
            result.msg = "ok" ;
            res.status(200).json( result ) ;
            console.log(result.memos);
        }else {
            throw new Error("unvalid method :"+req.method) ;
        }
    }catch(e){
        result.msg = "error" ;
        result.error = e.message ;
        res.status(400).json( result );
        console.error(e);
    }
}


