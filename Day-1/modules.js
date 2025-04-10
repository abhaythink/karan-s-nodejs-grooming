//importing another file in to the variable of another file

const xyz= require('./temp'); // this import this file and iternally execute that file and give the output 

//but the xyz has empty value 
// console.log(xyz);  //OP {}

//if u want to assign perticuler value after importing that file we need to mention that in the importing file
//model.exprts=value to be assign //for single thing

//now we ll get the value inside xyz that we have exported
console.log(xyz); 

//for multiple value exproting we need to create an object and pass that values
console.log(xyz);

//we have another way to do the same for accesing the perticculer value
console.log(xyz.data,xyz.data1);

const {data,data1}=require('./temp');

console.log(`data =${data}, data 1=${data1}`);


//
const os =require('os'); //builtin in os

console.log(os.platform(),os.homedir());