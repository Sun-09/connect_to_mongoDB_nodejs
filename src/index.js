const express = require('express');
const app = express();
const port = 3000;
require("../db/config")
const Test = require("../db/model")
app.use(express.json());
app.post("/test", async(req, res)=>{
    try{
        const createData = new Test(req.body);
        const results = await createData.save();
        res.send(results);
        console.log(results);
    } catch(error){
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })