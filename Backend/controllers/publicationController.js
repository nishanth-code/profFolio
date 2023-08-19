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
    const id = req.user.id
    const user = await profile.findById(id)
    const currentUser = user.username
    console.log(req.body)
    

    const { title,author,publishedMedia,url,doi,year,subject,volume,editor,publisher,pageNo} = req.body.publication
    // console.log(title,author,publishedMedia,doi,year,subject,volume,editor,publisher)
    const publicat = new publication(
        {title:title,
        author:author,
        publishedMedia:publishedMedia,
        doi:doi,
        year:year,
        subject:subject,
        volume:volume,
        editor:editor,
        publisher:publisher,
        user:currentUser,
        pageNo:pageNo,
        url:url

    })
    user.publications.push(publicat)
    await publicat.save()
    await user.save()
    
    res.status(200).json({msg:'sucessfully added to your profile'})
}
const updatePublication = async(req,res) =>{
    const id = req.params.id
    console.log(req.body)
    const publicate = req.body
    await publications.findByIdAndUpdate(id,publicate)
    
    res.json({msg:'sucessfully updated'}).status(200)


}
const deletepublication = async(req,res) =>{
    const id = req.user.id
    const user = await profile.findById(id)
    const pid = req.params.id
    await publications.findByIdAndDelete(pid)
    user.publications.splice(user.publications.indexOf(pid),1)
    await user.save()

    res.json({msg:'deleted sucessfully'}).status(200)
    
    
}





module.exports = {renderAll,render,newPublication,deletepublication,updatePublication}