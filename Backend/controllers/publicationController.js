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
    const user = await profile.findOne({username:currentUser})
    const { title,author,publishedMedia,doi,year,subject,volume,editor,publisher} = req.body
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
    await publicate.save()
    await user.save()
    res.json({msg:'sucessfully added to your profile'}).status(200)
}
const updatePublication = async(req,res) =>{
    const id = req.params.id
    const publicate = req.body
    await publications.findByIdAndUpdate(id,publicate)
    console.log(publicate)
    res.json({msg:'sucessfully updated'}).status(200)


}
const deletepublication = async(req,res) =>{
    const id = req.params.id
    await publications.findByIdAndDelete(id)
    res.json({msg:'deleted sucessfully'}).status(200)
    
    
}





module.exports = {renderAll,render,newPublication,deletepublication,updatePublication}