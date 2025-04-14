const express=require('express')
const mongoose=require('mongoose')

const app=express()

const URL="mongodb://localhost:27017/CURD"

mongoose.connect(URL)
const con =mongoose.connection

app.use(express.json())


con.on('open',()=> console.log('DB Connected..!'))

const userrouter= require('./Routes/user')

app.use('/user',userrouter)

const productrouter= require('./Routes/product')
app.use('/product',productrouter)

app.listen(3001,()=> {
    console.log('server started..!')
})

