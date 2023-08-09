const publication = require('../schemas/publications')

const renderAll = async(req,res) =>{
    const result = await publication.find()
    res.json(result).status(200)
}

const render = async(req,res) =>{
    const id = req.params.id
    const result = await publication.findById(id)
    res.json(result).status(200) 
}

module.exports = {renderAll,render}