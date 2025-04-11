 const express= require('express');
// const { nextTick } = require('process');

const morgan =require('morgan');
const mongoose=require('mongoose');
// const { error } = require('console');
const Employee=require('./Models/Employee.js');
 const app=express();

 const DBURI="mongodb://localhost:27017/firstDB"; 

 mongoose.connect(DBURI)
    .then((result)=> {
        console.log("Connectd Succesfully...!!");
        app.listen(3000);
    })
    .catch((err)=>console.log(err));




//  app.use((res,req,next)=>{
//     console.log('i have made the request..');
//     console.log('host :'+res.host);
//     console.log('path :'+res.path);
//     console.log('Method :'+res.method);
//     next();
//  });

//creating using third party middlewear

app.use(morgan('dev'));

app.get('/add-employee',(req,res)=>{
    const employee= new Employee({
        id:101,
        name:"chriss",
        address:'US'
    });

    employee.save()
    .then((result)=> {
        console.log('saved...!')
        res.send(result);
})
    .catch((err)=> console.log('faild to do ...!')
);
});

app.get('/get-all-Employee',(req,res)=>{
    Employee.find()
    .then((result)=>
    res.send(result))
    .catch((error)=> console.log(error));
})


 app.get('/',(req,res)=>{
    //this will send the html tag with the content
    // res.send('<p>Hi iam express server..!</p>');/

    // for sending file we use following method
    res.sendFile('./views/req1.html',{root: __dirname});    

 });
 app.get('/about',(req,res)=>{
  
    res.sendFile('./views/about.html',{root: __dirname});    

 });
 app.use((req,res)=>{
    
    res.status(300).sendFile('./views/404.html',{root: __dirname});    

 });
 
 //middlewear :
//  is the function that execute during the lifecycle of req to the server
// it has some methods to modify object of req and res
//end the cycle of req and res
// can call the next middlewear in stack using next();

//we can do it with the 3rd party middlewear using morgan