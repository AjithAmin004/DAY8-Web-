let fs = require('fs');
let path = require('path');

// console.log(fs);
// fs  -  > file System;
//CRUD Operation

//Create file 
//1st create a new path
let npath = path.join(__dirname,"textf.txt"); //its just create filepath not the fileitself its just a path in string
let ans  = fs.writeFileSync(npath,"I am writing to new Files")//takes 2 aurgument 1 file path and file content we want to right? and now it makes a file



