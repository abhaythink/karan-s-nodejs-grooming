//read
 const fs=require('fs'); //we need to import fs modules to work on os

//  fs.readFile('./docs/temp.txt',(err,data)=> {  //this function take time to read the file 
//     if(err){
//         console.log(err);
//  }
//     console.log(data.toString());
//  });
// console.log(data); //thuis will give buffer stream
// console.log(data.toString());
//wirte

fs.writeFile('./docs/temp.txt',"HEllo i am from write file function",()=> console.log("file was writen"));

//directories
// if(! fs.existsSync('./assets')){
// fs.mkdir('./assets',(err)=>{
//     if(err)
//         {
//         console.log(err);
//     }else{
//     console.log('folder created');
// }
// });
// }else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted ...!');
//     });
// }

//deleting file
// if(fs.existsSync('./docs')){
//     fs.unlink('./docs/temp.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('file deteted...!');
//     });
// }
//first need to check the file is exist or not if not  it will give error when file wasot there
