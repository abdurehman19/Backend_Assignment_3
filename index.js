const express=require('express');
const auth=require('./routes/authroute');
const bodyParser=require('body-parser');
const app=express();
// app.use((req,res,next)=>{{
//     req.data ='ishaq';
//     console.log(req.url);
//     next(); 
// }});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/auth',auth)
app.listen(3000);