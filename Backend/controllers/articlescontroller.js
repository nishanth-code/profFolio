const article = require('../schemas/articles')
const profile = require('../schemas/profile')

const renderAll = async(req,res) =>{
    const articles = await article.find()
    res.json(articles).status(200)
}

const render = async(req,res)=>{
    const id = req.params.id
    const art = await article.findById(id)
    res.json(art).status(200)
}

const addArticle = async(req,res) =>{
    const username = res.locals.currentUser
    const user = await profile.findOne({username:username})
    const { title ,
            author,
            publishedMedia,
            publishedOn,
            subject
        } = req.body
    const art = new article({title:title,author:author,publishedMedia:publishedMedia,publishedOn:publishedOn,subject:subject})
    user.articles.push(art)
    await art.save()
    await user.save()
    res.json({msg:'added sucessfully'}).status(200)
}

const updateArticles = async(req,res)=>{
    const id = req.params.id
    const { title ,
        author,
        publishedMedia,
        publishedOn,
        subject
    } = req.body
    await article.findByIdAndUpdate(id,{title:title,author:author,publishedMedia:publishedMedia,publishedOn:publishedOn,subject:subject})
    res.json({msg:'updated sucessfully'}).status(200)


}
const deleteArticle = async(req,res)=>{
    const id = req.params.id
    const username = res.locals.currentUser
    const user = await profile.findOne({username:username})
    await article.findByIdAndDelete(id)
    user.articles.splice(user.articles.indexOf(id),1)
    await user.save()
    res.json({msg:'deleted sucessfully'}).status(200)

}



module.exports={renderAll,render,addArticle,updateArticles,deleteArticle}