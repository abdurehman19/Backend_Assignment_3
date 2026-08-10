const express = require("express")
const fs = require("fs")
const path = require("path")
const filepath = fs.readFile(path.join(),process.cwd("data","user.json"))

const readdata = ()=>{
   return new Promise((resolve,reject)=>{
     fs.readFile(filepath,(err,data)=>{
        if (err) {
           return reject
        }else{
            resolve (JSON.parse(data.toString))
        }
    })
   })
}