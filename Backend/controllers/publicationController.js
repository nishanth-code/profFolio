const publication = require('../schemas/publications')
const profile = require('../schemas/profile')
const publications = require('../schemas/publications')

const renderAll = async(req,res) =>{
    const result = await publication.find()
    res.json(result).status(200)
}

const render = async(req,res) =>{
    const id = req.params.id
    const result = await publication.findById(id)
    res.json(result).status(200) 
}

const newPublication = async(req,res) =>{
    const currentUser = 'nishanth'
    const user = await profile.findOne({username:currentUser})
    // console.log(req.body)

    const { title,author,publishedMedia,doi,year,subject,volume,editor,publisher} = req.body.values.publication
    // console.log(title,author,publishedMedia,doi,year,subject,volume,editor,publisher)
    const publicat = new publication(
        {title:title,
        author:author,
        publishedMedia:publishedMedia,
        doi:doi,
        year:year,
        subject:subject,
        vloume:volume,
        editor:editor,
        publisher:publisher,
        user:currentUser

    })
    user.publications.push(publicat)
    await publicat.save()
    await user.save()
    // console.log('sucessful')
    res.json({msg:'sucessfully added to your profile'}).status(200)
}
const updatePublication = async(req,res) =>{
    const id = req.params.id
    console.log(req.body)
    const publicate = req.body
    await publications.findByIdAndUpdate(id,publicate)
    
    res.json({msg:'sucessfully updated'}).status(200)


}
const deletepublication = async(req,res) =>{
    const username = res.locals.currentUser
    const user = await profile.find({username:username})
    const id = req.params.id
    await publications.findByIdAndDelete(id)
    user.publication.splice(user.publication.indexOf(id),1)
    await user.save()

    res.json({msg:'deleted sucessfully'}).status(200)
    
    
}





module.exports = {renderAll,render,newPublication,deletepublication,updatePublication}