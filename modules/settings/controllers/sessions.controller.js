exports.saveSession= (req,res)=>{
    res.json({status:true});
}

exports.getSessions = (req,res)=>{
    if(req.session.views){
        ++req.session.views;
    }else {
        req.session.views=1;
    }
    res.json({status:true,views:req.session.views});
}