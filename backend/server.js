import express from 'express';
import mongoose  from 'mongoose';
import userrouter from './routers/userrouter.js';
import productRouter from './routers/productrouter.js';
import dotenv from 'dotenv'

dotenv.config()

const app=express();

mongoose.connect(process.env.MONGODB_URL ||  'mongodb://localhost:27017/purpleshades',{
        useUnifiedTopology: true, 
        useNewUrlParser: true 
})



app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/api/users',userrouter)

app.use('/api/products',productRouter)
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})
const port=process.env.PORT || 5000
app.listen(5000,()=>{
    console.log(`serve at http://localhost:${port}`);
})