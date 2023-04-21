const mongoose = require("mongoose");


const testSchema = new mongoose.Schema({
    0 :{
        type:String,
        required:true
    },
    1 :{
        type:String,
        required:true
    },
    2 :{
        type:String,
        required:true
    },
    3 :{
        type:String,
        required:true
    },
    4 :{
        type:String,
        required:true
    },
    5 :{
        type:String,
        required:true
    },
    6 :{
        type:String,
        required:true
    },
    7 :{
        type:String,
        required:true
    },
    8 :{
        type:String,
        required:true
    },
    9 :{
        type:String,
        required:true
    }
})

// create collection

const Test = new mongoose.model("info2", testSchema);

module.exports = Test;