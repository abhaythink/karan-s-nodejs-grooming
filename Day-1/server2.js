//sedding the html pages back to browser
const http= require('http');

const fs= require('fs');
const { abort } = require('process');

const server=http.createServer((req,res)=>{
let path= './views/';
switch(req.url){
    case '/':
        path +='req1.html';
        res.statusCode=200;
        break;
    case '/about':
        path +='about.html';
        res.statusCode=200;
        break;
    case '/about-you': // this url dose not suppoting long time then we ll redirect it to update url
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end();
        break;
    default :
    path +='404.html';
    res.statusCode=404;
    break;
} 
  
    res.setHeader('Content-Type','text/html');
  
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            
            res.end();
            console.log("i am gone to browser");
        }
    })


});

server.listen(3001,'localhost',() => {
    console.log('listning for request on port 3000');
});
