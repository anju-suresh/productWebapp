const express= require('express');
const authRouter = express.Router();
const userData = require('../model/usersData')
const cors = require('cors');
const bodyParser = require('body-parser');
authRouter.use(bodyParser.json())
authRouter.use(cors());

// authRouter.get("/",(req,res)=>{
//     res.send("hello");
// })

authRouter.post('/adduser',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var user = {
        name : req.body.user.name,
        email : req.body.user.email,
        password: req.body.user.password,
    }
    console.log("database reached")
    var user = new userData(user);
    user.save();
})
// authRouter.post('/',(req,res)=>{
//     let user=req.body;
//     userData.findOne({email: user.email},(err,user)=>{
//         if(err){
//             console.log(err)
//         } else{
//             if(!user){
//                 res.status(401).send('Invalid Email')
//             }else
//             if(user.password!==user.password){
//                 res.status(401).send('Invalid Password')

//             }else{
//                 res.status(200).send(user);
//             }
//         }
//     });
// })
module.exports = authRouter;