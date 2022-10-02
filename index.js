const express = require("express");
const app = express();
const importdata = require("./data.json");
const cors = require('cors');
let port = process.env.PORT || 3000;

app.use(cors());
app.get("/",(req,res)=>{
    res.send("GALAT 404");
});

app.get("/datanya",(req,res)=>{
    res.send(importdata)
});

app.listen(port,()=>{
    console.log(`on port http://localhost:${port}`);

});