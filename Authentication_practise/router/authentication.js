
const express = require("express")
const { login, signup } = require("../controller/auth")
const router = express.Router()

router.post('/signup',async(req,res)=>{
     try {
        await signup (req.body.email,req.body.password)
        res.send("sign up successful")
     } catch (error) {
    res.status(400).json({ message: "User already exists" });
     }
})
router.post('/login',async(req,res)=>{
    try {
   const resq =   await login (req.body.email,req.body.password)
        res.send(resq)
    } catch (error) {
        res.status(400).send(error)
    }
})
module.exports=router