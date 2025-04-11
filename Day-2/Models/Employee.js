// const { timeStamp } = require('console');
// const mongoose =require('mongoose');
// // const { type } = require('os');
// // const { stringify } = require('querystring');
// const Schema=mongoose.Schema;

// const employeeSchema =new Schema({
//     id:{
//         type:Number,
//         require:true
//     },
//     name:String,
//     address: String
// },{timeStamp :true });

// const Employee =mongoose.model('Employee',employeeSchema);

// module.exports=Employee;

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String
});

module.exports = mongoose.model('Employee', employeeSchema);