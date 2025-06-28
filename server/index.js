import express from 'express';
import dotenv from "dotenv";
import {connectDb} from "./database/db.js"
dotenv.config();
const app=express()
const port=process.env.port;
app.get('/',(req,res)=>{
    res.send('Server Running');
});
// importing routes
import userRouter from './routes/user.js'
//using routes
app.use('/api',userRouter);
app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
    connectDb();
});