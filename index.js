const express=require('express')
const products =require('./data/products')
const app=express()

console.log(products)

app.get('/', (req, res)=>{
    res.send('Api is running')
})
app.get('/api/products/:id', (req, res)=>{

    const product= products.find(p=> p.id == req.params.id)
    res.json(product)
})

app.listen(5000, console.log('running on ecommerce server'))