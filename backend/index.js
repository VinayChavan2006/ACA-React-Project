require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const server = express();
const router  = require('./routes/auth')

server.use(cors())
server.use(express.urlencoded())
server.use(express.json())  
server.use('',router)         
// console.log(process.env.JWT_SECRET_KEY)
try {
     mongoose.connect(`mongodb+srv://vinaychavan2006:${process.env.DB_PASSWORD}@cluster0.3eacfwr.mongodb.net/ecommerce`, {
        
    }).then(console.log(' MongoDB connected '))
    
} catch (error) {
    console.error('index',error.message);
    process.exit(1);
}



server.listen(5000,()=>{
    console.log('server is running on port 5000')
})
