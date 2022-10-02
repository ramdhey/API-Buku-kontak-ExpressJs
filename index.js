const express = require("express");
const app = express();
const importdata = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("GALAT 404");
});

app.get("/datanya",(req,res)=>{
    res.send(importdata)
});

app.listen(port,()=>{
    console.log(`on port http://localhost:${port}`);

});