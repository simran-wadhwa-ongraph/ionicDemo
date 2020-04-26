const user = require('../model/user')
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://sanjay:sanjay@cluster0-qgcnz.mongodb.net/test?retryWrites=true&w=majority').then(()=> {

// mongoose.connect('mongodb://localhost:27017/node-demo').then(()=> {
    console.log("DB connected")
}).catch(err => {
    console.log("ERROR => ",err)
})



exports.signUp = (req, res) =>{
    user.sign({name: req.body.name, email: req.body.email, password: req.body.password}, (err, response)=>{
        if(err) res.status(400).send(err);
        res.status(200).send(response);
    })
}

exports.login = (req, res) =>{
    user.login({email: req.body.email, password: req.body.password}, (err, response) =>{
        if(err){
            res.status(404).send(err);
        }
        else if(response){
            res.status(200).send(response)
        }
        else{
            res.status(200).send("user not found")
        }
    })
}

exports.update = (req, res) =>{
    user.update({name: req.body.name, email: req.body.email, password: req.body.password}, (err, response)=>{
        if(err) {
             res.status(404).send(err);
            }
        else{
           res.status(200).send(response)
        }
    })
}

exports.updateUserLoc = (req, res) =>{
    console.log("inside updateUserLOc controller",req.body)
    user.updateLoc(req.body, (err, response)=>{
        if(err) {
             res.status(404).send(err);
            }
        else{
           res.status(200).send(response)
        }
    })
}

exports.getAllUsers = (req, res) =>{
    console.log("get All users-------------------------------------------------")
    user.findAllUsers({}, (err, response)=>{
        if(err) {
             res.status(404).send(err);
            }
        else{
           res.status(200).send(response)
        }
    })
}
