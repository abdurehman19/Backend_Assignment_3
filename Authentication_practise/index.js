
const express = require("express")
const app = express()
const auth = require('./router/authentication')
const verify = require ('./middlewear/varify')
const profile = require('./router/user')
app.use(express.json())


app.use('/auth',auth)

app.use('/profile',verify, profile)

app.listen(3000,(req,res)=>{
    console.log(`server is runnig on port 3000`);
    
})