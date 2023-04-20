const mongoose = require("mongoose");


const testSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    app:{
        type:String,
        required:true,
        unique:true
    },
    iot:{
        type:String,
        required:true
    },
    ml:{
        type:String,
        required:true 
    },
    cloud:{
        type:String,
        required:true  
    },
    mechatronics:{
        type:String,
        required:true 
    },
    web:{
        type:String,
        required:true 
    },
    design:{
        type:String,
        required:true 
    },
    video:{
        type:String,
        required:true 
    },
    content:{
        type:String,
        required:true 
    }
})

// create collection

const Test = new mongoose.model("info2", testSchema);

module.exports = Test;