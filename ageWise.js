var fs=require("fs");
var json;
var final=[];
var agevalue;
var literatevalue;
fs.readFile('finalcsv.csv','utf8',function(err,contents)
{
	//console.log(contents);
var lines = contents.split("\r\n");

var head= lines[0].split(",")




for (var i =1; i <lines.length;i++)
{
	var obj={};
	var current=lines[i].split(",")
	for (var j =0;j<head.length; j++) 
	{
	 	//obj[head[j]]=current[j];
	 	 if(head[j]==='Age-group'|| head[j]==='Literate - Persons')
	 	 {
           obj[head[j]]=current[j];
             //obj[head[k]]=literatevalue;
             //obj[agevalue]=literatevalue;
             
          }
          
	  }
	        final.push(obj);
 }

function groupBy(array,ageGroup,value)
{

	var resultArray=[], newObj={};
	array.forEach(function(argsPass)
	{
		if (!newObj[argsPass[ageGroup]])
		 {
          newObj[argsPass[ageGroup]] ={};
          newObj[argsPass[ageGroup]][ageGroup]=argsPass[ageGroup];
          newObj[argsPass[ageGroup]][value]=0;
          resultArray.push(newObj[argsPass[ageGroup]]);

		 }
	newObj[argsPass[ageGroup]][value] +=+ argsPass[value];
	});
	return resultArray;
};
var temp=groupBy(final,'Age-group','Literate - Persons')
temp.pop();
temp.pop();

	console.log(temp);
json=JSON.stringify(temp);
fs.writeFile('ageWise.json',json,function(err)
{
	if(err) return console.log(err);
	console.log("ho gaya bhai")
});
});



           