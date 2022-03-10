// "C:\Users\HP\Desktop\FJP6\Module2\Day8\path.js"
let path = require('path');

let extension = path.extname('C:\Users\HP\Desktop\FJP6\Module2\Day8\os.js');
let extension2 = path.extname(__filename)
console.log(extension);
console.log(extension2);
//__dirname ->gives the direction path
//__filename -> gives the filepath
// let basename = path.basename('C:\Users\HP\Desktop\FJP6\Module2\Day8\os.js');
let basename2 = path.basename(__filename);
//console.log(basename);
console.log(basename2);

let newpath = path.join(__dirname,"os.js");  //its just create filepath not the fileitself its just a path in string
console.log(newpath);