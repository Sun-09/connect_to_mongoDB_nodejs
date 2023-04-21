const mongoose = require("mongoose");


const testSchema = new mongoose.Schema({
    result :{
        type:String,
        required:true
    }
    
})

// create collection

const Test = new mongoose.model("info2", testSchema);

module.exports = Test;