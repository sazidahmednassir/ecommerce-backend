import dotenv from 'dotenv';
import express from 'express';
import products from './data/products.js';
const app=express()

import connectDB from './config/db.js';



const PORT= 5000;

dotenv.config()

connectDB()


app.get('/', (req, res)=>{
    res.send('Api is running')

})

app.get('/api/products', (req, res)=>{

   
    res.json(products)
})

app.get('/api/products/:id', (req, res)=>{

    const product= products.find(p=> p.id == req.params.id)
    res.json(product)
})


app.listen(PORT, ()=>{
    console.log(`running on ecommerce server on ${PORT}`)
})