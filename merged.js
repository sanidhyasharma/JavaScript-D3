//Run this code once otherwise files will append more time

/* Append sc and st csv file to general_sc_st_merge_csv csv */

//Adding the required modules
var fs=require('fs');

//Function to read the required file and append in the target file
function ReadAppend(file,appendFile){

  //Reading the append file
 fs.readFile(appendFile,function(err,data){
   if(err){

     //File not there means the throw the error to console
     throw err;
   }

   console.log('File was Read');

   //Appending the append file
   fs.appendFile(file,data,function(err){

     if(err){

       //File not there means the throw the error to console
       throw err;
     }

     console.log('The "data to append" was appended to a file');
     });
   });
}

//Setting the source and target files
file='finalcsv.csv';
appendFile='csv1.csv';

//Calling the ReadAppend function
ReadAppend(file,appendFile);
appendFile='csv2.csv';

ReadAppend(file,appendFile);

appendFile='csv3.csv';

ReadAppend(file,appendFile);