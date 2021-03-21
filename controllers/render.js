util_render = (req, res, name, page, data) => {
    if(data){
        res.render(page, {user: req.session.user, pageActive:name, ...data})  
    }else{
       res.render(page, {user: req.session.user, pageActive:name}) 
    }
}
