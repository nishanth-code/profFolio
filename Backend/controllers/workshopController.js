const profile = require('../schemas/profile')
const workshop = require('../schemas/workshop')
const workshop = require('../schemas/workshop')

const renderAll = async(req,res)=>{
    const workshops = await workshop.find()
    res.json(workshop).status(200)
}

const render = async(req,res)=>{
    const id = req.params.id
    const workshp = await workshop.findById(id)
}


module.exports={renderAll,}