let fs = require('fs');
let path = require('path');

// console.log(fs);
// fs  -  > file System;
//CRUD Operation

//Create file 
//1st create a new path
let npath = path.join(__dirname,"textf.txt"); //its just create filepath not the fileitself its just a path in string
let ans  = fs.writeFileSync(npath,"I am writing to new Files")//takes 2 aurgument 1 file path and file content we want to right? and now it makes a file
//if file is not there it creates a new file , if file is already present then content override happens

//Read operation
console.log('before update')
let content  = fs.readFileSync(npath,"utf-8")//it takes 2 argument and 2nd one is optional , if u dont add 2nd argument then it will print in hex format if u add second argument it will print in the normal format
console.log(content);

//update operation 
fs.appendFileSync(npath," I am new Data") //takes 2 string path and value, it oppends but do not override
console.log("After update");
console.log(fs.readFileSync(npath,"utf-8"));


