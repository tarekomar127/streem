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
// 22222
// const path = require("node:path");
// const fs = require('fs');
// const zlib = require('zlib');

// const inputFile = path.resolve('./input.txt'); 
// const outputFile = path.resolve('./dest.txt');

// const readStream = fs.createReadStream(inputFile);

// const gzip = zlib.createGzip();

// const writeStream = fs.createWriteStream(outputFile);


// readStream.pipe(gzip).pipe(writeStream);


// //  open  , ready  , readable , close , resume  , pause   , error , data , end  

// const fs = require("fs");

// // إنشاء Readable Stream مع خيارات (Options)
// const readStream = fs.createReadStream("input.txt", {
//     // encoding:
//     // بيخلّي ال data اللي جايّة تبقى String بدل Buffer
//     encoding: "utf-8",

//     // highWaterMark:
//     // حجم كل chunk (كل دفعة بيانات)
//     // هنا هيبعت كل 32 بايت
//     highWaterMark: 32,

//     // start:
//     // أول Byte هيبدأ منه قراءة الملف
//     start: 5,

//     // end:
//     // آخر Byte هيقرأ لحدّه (Inclusive)
//     end: 100,

//     // autoClose:
//     // يقفل الملف تلقائي بعد end أو error
//     autoClose: true,

//     // emitClose:
//     // يرسل event اسمه "close" لما الملف يتقفل
//     emitClose: true
// });


// // ---------------- EVENTS ----------------

// // الملف اتفتح من الهارد
// readStream.on("open", () => console.log("Readable: open"));

// // الستريم جاهز يبدأ قراءة
// readStream.on("ready", () => console.log("Readable: ready"));

// // في بيانات جاهزة للقراءة (بس لسه متبعتتش)
// readStream.on("readable", () => console.log("Readable: readable"));

// // اتبعت chunk من الملف
// readStream.on("data", chunk =>
//     console.log("Readable: data =", chunk)
// );

// // لو حصل Pause للستريم
// readStream.on("pause", () => console.log("Readable: pause"));

// // لما الستريم يكمل بعد Pause
// readStream.on("resume", () => console.log("Readable: resume"));



// readStream.on("end", () => {
//     setTimeout(() => console.log("Readable: end"), 200);
// });

// readStream.on("close", () => {
//     setTimeout(() => console.log("Readable: close"), 200);
// });