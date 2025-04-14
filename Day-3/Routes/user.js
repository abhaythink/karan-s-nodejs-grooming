const express = require('express')
const router = express.Router()


const User= require('../models/user')
const createUser = require('../Controllers/users/post')

router.get('/',async(req,res)=>{
 try {
    const users=await User.find()
    res.json(users)
 } catch (error) {
    res.send('Error :'+error)
 }
})

router.get('/:id',async(req,res)=>{
    try {
       const user=await User.findById(req.params.id)
       res.json(user)
    } catch (error) {
       res.send('Error :'+error)
    }
   })


router.post('/',createUser)

router.patch('/:id',async(req,res)=>
{
    try {
        const user= await User.findById(req.params.id)

        user.add=req.body.add
        const user1 = await user.save()
        res.json(user1)

    } catch (error) {
        console.log('error :'+error)
    }

})

router.delete('/:id',async(req,res)=>
    {
        try {
            const user= await User.findByIdAndDelete(req.params.id)
            
            if(!user){
                return res.status(404).json({msg:"user not found..!"})
            }

            res.json({msg:"user Deleted..!",deleted_user:user})
    
        } catch (error) {
            console.log('error :'+error)
        }
    
    })

module.exports=router