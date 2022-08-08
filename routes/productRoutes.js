import express from 'express';
import asyncHandler from "express-async-handler";
import Product from '../models/productModal.js';
const router =express.Router();

//get all products
router.get('/', asyncHandler(async(req, res)=>{
    const products = await Product.find({})
res.json(products)
}))


//get single product
router.get('/:id', asyncHandler(async(req, res)=>{

    const product= await Product.findById(req.params.id)
    if(product){
        res.json(product)
        res.status(404).json({message: 'Product Not found'})
    }
    
}))







export default router;