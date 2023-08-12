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
    const username = res.locals.currentUser
    const user = await profile.findOne({username:username})
    const {
        title,
        owners,
        applicant,
        patentNumber,
        filingCountry,
        filingDate,
        validUpto
    } = req.body
    const d = new Date()
    const status = 'inactive'
    if(validUpto <= d){
        status='active'
    }
    const paten = new patent({title:title,owners:owners,applicant:applicant,patentNumber:patentNumber,filingCountry:filingCountry,filingDate:filingDate,validupto:validUpto,status:status}) 
    user.patents.push(paten)
    await paten.save()
    await user.save()
    res.json({msg:'added sucessfully'}).status(200)
}

const editPatent = async(req,res) =>{
    const id = req.params.id
    const {
        title,
        owners,
        applicant,
        patentNumber,
        filingCountry,
        filingDate,
        validUpto
    } = req.body
    const d = new Date()
    const status = 'inactive'
    if(validUpto <= d){
        status='active'
    }
    await patent.findByIdAndUpdate(id,{title:title,owners:owners,applicant:applicant,patentNumber:patentNumber,filingCountry:filingCountry,filingDate:filingDate,validupto:validUpto,status:status})
    res.json({msg:'updated sucessfully'}).status(200)

}
const deletePatent = async(req,res)=>{
    const id = req.params.id
    const username = res.locals.currentUser
    const user = await profile.findOne({username:username})
    await patent.findByIdAndDelete(id)
    user.patents.splice(user.patents.indexOf(id),1)
    await user.save()
    res.json({msg:'deleted sucessfully'}).status(200)


}






module.exports = {renderAllPatent,deletePatent,editPatent,renderPatent,addPatent}