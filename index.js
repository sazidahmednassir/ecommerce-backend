const express=require('express')
const products =require('./data/products')
const app=express()
const dotenv = require('dotenv')

const PORT=process.env.PORT || 5000;

dotenv.config()


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