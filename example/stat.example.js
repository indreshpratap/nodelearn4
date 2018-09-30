const fs = require('fs');
const path = require('path');

let startPath = path.resolve(__dirname, '..','..');
console.log(startPath);
fs.readdir(startPath, (err, files) => {
console.log(files);
    files.forEach(item => {
        fs.stat(path.resolve(startPath,item),(err,stats)=>{
            if(err){
                console.warn(err);  
            }else { 
                console.log(item,' is ', stats.isDirectory()?' Directory':'File', stats.size);   
            }
        })
        
    });


})