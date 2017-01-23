var fs=require("fs");
var json;
var final=[];
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
	 	 if(head[j]==='Age-group'|| head[j]==='Literate - Persons' || head[j]=='Total/ Rural/ Urban' )
	 	 {

           obj[head[j]]=current[j];
             
          }
          
	  }
	        final.push(obj);
 }
//console.log(final);
 var onlytotal=final.filter(function(item)
{
return item["Total/ Rural/ Urban"] == "Total" && item["Age-group"] != "All ages"
});
console.log(onlytotal);

var totalarray=onlytotal.map(function(item)
{
return{
	Age_group:item['Age-group'],
	Literate_people:item['Literate - Persons']
};
});
//console.log(totalarray);

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
var temp=groupBy(totalarray,'Age_group','Literate_people')

//console.log(temp);
json=JSON.stringify(temp);
fs.writeFile('ageWise.json',json,function(err)
{
	if(err) return console.log(err);
	console.log("ho gaya bhai")
});
});



           