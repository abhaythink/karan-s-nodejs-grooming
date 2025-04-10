//server creation
// need to import modul of http

const http= require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);

    //settig header
    res.setHeader('Content-Type','text/html');
    res.write('<h1>hello i am from server</h1>');//we can also send the html tags
    res.write("hello i am from server");

    res.end();
});

server.listen(3000,'localhost',() => {
    console.log('listning for request on port 3000');
});

