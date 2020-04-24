const user = require('../model/user')
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ongraph:ongraph@cluster0-9y2ym.mongodb.net/test?retryWrites=true&w=majority').then(()=> {

// mongoose.connect('mongodb://localhost:27017/node-demo').then(()=> {
    console.log("DB connected")
}).catch(err => {
    console.log("ERROR => ",err)
})



exports.signUp = (req, res) =>{console.log("==========req======222========",req.body)
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