import db from "lib/db" ;


// export const config = {
//     api: {
//       bodyParser: false,
//     },
// }

export default async function handler(req,res){
    console.log("POST");
    console.log(req.body);
    console.log(req.body.memos);
    let result = {} ;
    try{
        if(req.method === "POST"){
            result.requestData = req.body ;
            db.saveMemos(req.body.memos);
            res.status(200).json( result ) ;
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





