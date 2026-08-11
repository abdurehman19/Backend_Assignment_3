
const express = require("express")
const { login, signup } = require("../controller/auth")
const router = express.Router()

router.post('/signup',async(req,res)=>{
     try {
        await signup (req.body.eamil,req.body.password)
        res.send("sign up successful")
     } catch (error) {
         res.status(400).send(error.massage)
     }
})
router.post('/login',async(req,res)=>{
    try {
        const email = (req.body.email)
        const password = (req.body.password)
   const res =   await login (email,password)
        res.send(res)
    } catch (error) {
        res.status(400).send(error.massage)
    }
})