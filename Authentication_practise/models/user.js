const express = require("express")
const fs = require("fs")
const path = require("path")
const bcrypt = require("bcrypt")
const filepath = path.join(process.cwd(),"database","user.json")

const readdata = ()=>{                  
return new Promise((resolve,reject)=>{
     fs.readFile(filepath,(err,data)=>{          //readFile  = file se data NIKALO
        if (err) {
           return reject(err)
        }else{
            resolve (JSON.parse(data.toString()))    // JSON.parse() is string ko JavaScript object/array bana deta hai:
            // toString() us Buffer ko readable text mein convert karta hai:x`
        }
    })
   })
}


const writedata = (data)=>{
   return new Promise((resolve,reject)=>{
     fs.writeFile(filepath,JSON.stringify(data),(err)=>{   // writeFile = file mein data DAALO
        if (err) {
           return reject(err)
        }else{
            resolve ()
        }
    })
   })
}

  exports.createuser = async(email,password)=>{
     
    try {
        const users = await readdata()
    const matched = users.find(u=>u.email===email)
    if (matched) {
        throw new error("user already exists ")
    }else{
        const uid = Date.now()
        const hashpassword = await bcrypt.hash(password,12)

        await writedata ([...users,{email,password:hashpassword,uid}])
    }
    } catch (error) {
        throw error
        
    }

}

exports.loginuser = async(email)=>{
    try {
        const users = await readdata()
     const matched = users.find(u=> u.email===email)
     if (matched) {
     return matched
     }

    } catch (error) {
        throw error
        
    }
}