
const fs =require('fs');


const readstream= fs.createReadStream('./docs/temp.txt',{encoding:'utf8'}); //if we provide 2nd parameater rhen no need to cal tostring 
const writestream= fs.createWriteStream('./docs/temp1.txt');
// readstream.on('data',(chunk)=>
// {
//     console.log('------block------');
//     console.log(chunk);
//     writestream.write('\nNEW CHUNK\n');
//     writestream.write(chunk);

// }
// );

//insted of doint this we have another meethod piping

readstream.pipe(writestream); // this one line of code do the same