import dotenv from 'dotenv';
import express from 'express';
const app=express()

import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';



const PORT= process.env.PORT || 5000;

dotenv.config()

connectDB()


app.get('/', (req, res)=>{
    res.send('Api is running')

})

app.use('/api/products/', productRoutes)


app.listen(PORT, ()=>{
    console.log(`running on ecommerce server on ${PORT}`)
})