const router = require("../route/user.route")
const userModel = require("../models/user.models")

const registerUser = (req,res) =>{
    res.send("welcome to my register page")
}

const postRegister = (req,res) =>{
    const {fullname, email, password} = req.body
    let user = new userModel(req.body)
    user.save()
    .then(()=>{
        res.send({ status: true, message: "user saved successfully"})
        console.log("user saved succesfully");
    })
    .catch(()=>{
        res.send({ status: false, message: "error saving user"})
        console.log("error saving user");
    })
}

module.exports = {registerUser, postRegister}