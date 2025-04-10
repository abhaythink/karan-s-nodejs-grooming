//Global object

// console.log(global);

global.setTimeout(() => {
    console.log("i am set time out ");
    clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
    console.log('i am set interval');
}, 1000);

console.log(__dirname);//exact path without file name
console.log(__filename);//exact path with file name 