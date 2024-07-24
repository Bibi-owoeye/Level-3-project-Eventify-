const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    fullname: {type: "string", required: true},
    email: {type: "string", required: true, unique: true},
    password: {type: "string", required: true},
    created_at: {type: Date, default: Date.now},
})

let userModel = mongoose.model("user", userSchema)

module.exports = userModel;