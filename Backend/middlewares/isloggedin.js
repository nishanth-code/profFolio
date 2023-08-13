module.exports=isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        //req.session.returnTo = req.originalUrl
        console.log('hit')
        res.status(401).json({msg:'umust login first'})
        
    }
    else{
        console.log(req.user.username)
        next();
    }
    
}