import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

const db = new JsonDB(new Config("db/database", true, true, '/'));

function getMemos(){
    const db = new JsonDB(new Config("db/database", true, true, '/'));
    const memos = db.getData("/memos");
    return memos ;
}

function saveMemos(memos){
    console.log("saveMemos",memos);
    db.push("/memos",memos);
}


export default {
    getMemos,
    saveMemos,
} ;
