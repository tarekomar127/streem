// 1,2
// const path = require("node:path");
// const fs = require("node:fs");

// const filepath = path.resolve('./input.txt'); 
// const filedest = path.resolve('./dest.txt');

// const readfile=fs.createReadStream(filepath,{encoding:'utf-8'});
// const writefile=fs.createWriteStream(filedest)
// readfile.on('data',(chunk)=>{
//     console.log(chunk)
//     writefile.write(chunk)
// })
// 3
// const path = require("node:path");
// const fs = require('fs');
// const zlib = require('zlib');

// const inputFile = path.resolve('./input.txt'); 
// const outputFile = path.resolve('./dest.txt');

// const readStream = fs.createReadStream(inputFile);

// const gzip = zlib.createGzip();

// const writeStream = fs.createWriteStream(outputFile);


// readStream.pipe(gzip).pipe(writeStream);


