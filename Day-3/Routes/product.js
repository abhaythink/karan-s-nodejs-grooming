const express = require('express')
const router = express.Router()


const Product= require('../models/product')

router.get('/',async(req,res)=>{
 try {
    const products=await Product.find()
    res.json(products)
 } catch (error) {
    res.send('Error :'+error)
 }
})

router.get('/:id',async(req,res)=>{
    try {
       const product=await Product.findById(req.params.id)
       res.json(product)
    } catch (error) {
       res.send('Error :'+error)
    }
   })


router.post('/',async(req,res)=>{
   const product= new Product({
    name: req.body.name,
    category:req.body.category,
    price:req.body.price,
   })
   
    try {
       const products=await product.save()
       res.json(products)
    } catch (error) {
       res.send('Error :'+error)
    }
   })

   
router.patch('/:id',async(req,res)=>
{
    try {
        const product= await Product.findById(req.params.id)

        product.price=req.body.price
        const p1 = await product.save()
        res.json(p1)

    } catch (error) {
        console.log('error :'+error)
    }

})

router.delete('/:id',async(req,res)=>
    {
        try {
            const product= await Product.findByIdAndDelete(req.params.id)
            
            if(!product){
                return res.status(404).json({msg:"product not found..!"})
            }

            res.json({msg:"product Deleted..!",deleted_product:product})
    
        } catch (error) {
            console.log('error :'+error)
        }
    
    })

module.exports=router