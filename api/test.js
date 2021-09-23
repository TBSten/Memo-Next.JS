import {getMemos} from "lib/db" ;


module.exports = (req, res) => {
    const { name = 'World' } = req.query;
    const result = {"msg":`Hello ${name}!`} ;
    result.memos = getMemos();
    res.send(result);
};

