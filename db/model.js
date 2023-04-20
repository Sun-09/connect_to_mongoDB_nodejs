const mongoose = require("mongoose");


const testSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// create collection

const Test = new mongoose.model("info2", testSchema);

module.exports = Test;