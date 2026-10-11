const path = require('path')
const rootDir = require("../utils/pathUtil");
const express = require('express');
const host = express.Router();

host.get("/add-home",(req, res, next)=>{

     res.sendFile(path.join(rootDir, 'views', 'adddHome.html'));
});

host.post("/add-home",(req, res, next)=>{
    console.log(req.body);
     res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

exports.hostRouter = host;