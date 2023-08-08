const bcrypt = require('bcrypt')


const tey = async()=>{
    const hashed = await bcrypt.hash('nish@9741',10)
    console.log(hashed)
}

tey()