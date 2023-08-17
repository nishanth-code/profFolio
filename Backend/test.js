const bcrypt = require('bcrypt')
const crypto = require('crypto')


const tey = async()=>{
    
    console.log(crypto.randomBytes(32).toString('hex'))
}

tey()