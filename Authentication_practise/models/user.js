const express = require("express")
const fs = require("fs")
const path = require("path")
const bcrypt = require("bcrypt")
const filepath = path.join(process.cwd(),"data","user.json")

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


const writedata = (data)=>{
   return new Promise((resolve,reject)=>{
     fs.writeFile(filepath,JSON.stringify(data),(err)=>{
        if (err) {
           return reject
        }else{
            resolve ()
        }
    })
   })
}

  exports.createuser = async(email,password)=>{
     
    try {
        const users = await readdata()
    const matched = users.find(u=> email===email)
    if (matched) {
        throw new Error("user already exists ")
    }else{
        const uid = Date.now()
        const hashpassword = await bcrypt.hash(password,12)

        await writedata ([...users,{email,password:hashpassword,uid}])
    }
    } catch (error) {
        throw error
        
    }

}

exports.loginuser = async()=>{
    try {
        const users = await readdata()
     const matched = users.find(u=> email===email)
     if (matched) {
     return matched
     }

    } catch (error) {
        throw error
        
    }
}