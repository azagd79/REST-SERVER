const {request,response} = require('express');

exports.get = (req = request,res = response)=>{

    const {q,nombre,password,api_key} = req.query;
    res.json({
        msg: 'msg desde get',
        q,
        nombre,
        password,
        api_key
    });

}

exports.post = (req = request,res = response)=>{
    res.json({msg: 'msg desde post'});

}


exports.put = (req = request,res = response)=>{
    res.json({msg: 'msg desde put'});

}

exports.delete = (req = request,res = response)=>{
    res.json({msg: 'msg desde delete'});

}



