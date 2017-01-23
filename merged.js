
var fs=require('fs');
function ReadAppend(file,appendFile){

   fs.readFile(appendFile,function(err,data){
   if(err){

     throw err;
   }

   console.log('File was Read');

      fs.appendFile(file,data,function(err){

     if(err){

       
       throw err;
     }

     console.log('The "data to append" was appended to a file');
     });
   });
}
file='finalcsv.csv';
appendFile='csv1.csv';

ReadAppend(file,appendFile);
appendFile='csv2.csv';

ReadAppend(file,appendFile);

appendFile='csv3.csv';

ReadAppend(file,appendFile);