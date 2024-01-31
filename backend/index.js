const express =require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const MembersModel = require("./models/Members")
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/gym")


app.post("/login",(req,res)=>{
    const{email,password} = req.body;
    MembersModel.findOne({email: email}) 
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("no record existed")
        }
    })
})

app.post('/register',(req,res) =>{
   MembersModel.create(req.body) 
   .then(gymclients => res.json(gymclients))
   .catch(err => res.json(err))


})
app.get('/getUsers',(req,res)=>{
    MembersModel.find()
    .then(gymclients =>res.json(gymclients))
    .catch(err => res.json(err))
})
app.listen(3001,() =>{
    console.log("server is running");
})