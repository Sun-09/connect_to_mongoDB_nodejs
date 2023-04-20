const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testnode").then(()=>{
    console.log("Connection is Successful");
}).catch(()=>{
    console.log("Failed to Connect");
})