const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    local: {
        name: { type: String },
        email : { type: String, require: true, unique: true },
        password: { type: String, require:true },
        latitude:{type: Number, require:true},
        longitude:{type: Number, require: true}
    },
    facebook: {
        id           : { type: String },
        token        : { type: String },
        email        : { type: String },
        name         : { type: String }
    }
});

const User = mongoose.model('User', userSchema);

module.exports.sign = (data, cb)=>{
    var new_user = new User({
        "local.name" : data.name,
        "local.email" : data.email,
        "local.password": data.password
    });
    new_user.save((err, res)=>{
        cb(err,res)
    })
} 

module.exports.login = (data, cb) =>{
    User.findOne({"local.email": data.email, "local.password": data.password},(err, res)=>{
        cb(err,res);
    })
}

module.exports.update = (data, cb) =>{
    User.updateOne({"local.email": data.email}, {$set: { "local.password": data.password,"local.name": data.name}}, (err, res)=>{
        cb(err, res);
    })
} 

module.exports.updateLoc = (data, cb) =>{
    User.updateOne({"local.email": data.email}, {$set: { "local.longitude": data.longitude,"local.latitude": data.latitude}}, (err, res)=>{
        cb(err, res);
    })
} 

module.exports.findAllUsers = (data, cb) => {
    User.find({}, (err, res) => {
        cb(err, res);
    })
}  