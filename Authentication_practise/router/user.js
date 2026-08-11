
const express = require("express");
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({message:"profile mil gai ",user:req.user})
})
module.exports=router