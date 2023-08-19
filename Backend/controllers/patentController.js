const patent = require('../schemas/patents')
const profile = require('../schemas/profile')


const renderAllPatent = async(req,res)=>{
    const patents = await patent.find()
    res.json(patents).status(200)

}
const renderPatent = async(req,res) =>{
    const id = req.params.id
    const reqPatent = await patent.findById(id)
    res.json(reqPatent).status(200)
}

const addPatent = async(req,res) =>{
   const id = req.user.id
    const user = await profile.findById(id)
    const {
        title,
        inventors,
        applicationNumber,
        filingCountry,
        filingDate,
        subjectCategory,
        publicationDate,
        status
    } = req.body
    
    const paten = new patent({
        title:title,
        inventors:inventors,
        applicationNumber:applicationNumber,
        filingCountry:filingCountry,
        filingDate:filingDate,
        subjectCategory:subjectCategory,
        publicationDate:publicationDate,
        status:status
    }) 
    user.patents.push(paten)
    await paten.save()
    await user.save()
    res.json({msg:'added sucessfully'}).status(200)

}

const editPatent = async(req,res) =>{
    const id = req.params.id
    const {
        title,
        inventors,
        applicationNumber,
        filingCountry,
        filingDate,
        subjectCategory,
        publicationDate,
        status
    } = req.body


    
    await patent.findByIdAndUpdate(id,{
        title:title,
        inventors:inventors,
        applicationNumber:applicationNumber,
        filingCountry:filingCountry,
        filingDate:filingDate,
        subjectCategory:subjectCategory,
        publicationDate:publicationDate,
        status:status
    })
    res.json({msg:'updated sucessfully'}).status(200)

}
const deletePatent = async(req,res)=>{
    const id = req.params.id
    const uid= req.user.id
    const user = await profile.findById(uid)
    await patent.findByIdAndDelete(id)
    user.patents.splice(user.patents.indexOf(id),1)
    await user.save()
    res.json({msg:'deleted sucessfully'}).status(200)


}






module.exports = {renderAllPatent,deletePatent,editPatent,renderPatent,addPatent}