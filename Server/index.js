const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")
const router = require("./route/user.route")
require("dotenv").config()

let PORT = process.env.PORT
let URI = process.env.URI

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/", router)

app.listen(PORT,()=>{
    mongoose.connect(URI)
    .then(()=>{
        console.log("mongoose connected successfully")
    })
    .catch(()=>{
        console.log("mongoose connection failed")
    })
    console.log("server is working at port:" + PORT);
})