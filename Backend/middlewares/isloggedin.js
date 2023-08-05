module.exports=isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        res.json({msg:'umust login first'}).status(401)
        
    }
    next();
}