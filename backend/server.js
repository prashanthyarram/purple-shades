import express from 'express';
import data from '../src/data.js'

const app=express();

app.get('/',()=>{
    res.send("server is ready")
})
app.listen(3000)