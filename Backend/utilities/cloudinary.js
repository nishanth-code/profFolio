const cloudinary = require('cloudinary').v2

cloudinary.config(
    {
        cloud_name: "dc0gknkl8",
        api_key: "944423882713676",
        api_secret: "shUthCrjbArOmvcESOu8H3eGRdc",
        secure:true
        
      })

      module.exports = cloudinary