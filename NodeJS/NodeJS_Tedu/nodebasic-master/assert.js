var assert = require('assert');  
var fs = require('fs');
function divi (a, b) {  
  try{
    fs.readFile('23131');
  }catch(e){
    console.log('error in read file');
  }
}  

divi(2,0);