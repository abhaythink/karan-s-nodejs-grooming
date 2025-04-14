const mongoose= require('mongoose')

const orderSchema =new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User', // referring to the User model
        required: true,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product', // referring to the User model
        required: true,
    },
    total:{
        type:Number,
        required: true
    }
})

module.exports = mongoose.model('Order',orderSchema)