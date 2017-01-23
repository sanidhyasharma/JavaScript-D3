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
	 	 if(current[j]==='All ages'|| head[j]==='Area Name'|| head[j]==='Educational level - Graduate & above - Males'|| head[j]==='Educational level - Graduate & above - Females' || current[j]=='Total')
	 	 {
           obj[head[j]]=current[j];
             //obj[head[k]]=literatevalue;
             //obj[agevalue]=literatevalue;
             
          }
          
	  }
	        final.push(obj);
 }
//console.log(final)


 var onlytotal1=final.filter(function(item)
{
return item["Total/ Rural/ Urban"]=="Total" && item["Age-group"] == "All ages";
});
//console.log(onlytotal1);

var totalarray1=onlytotal1.map(function(item)
{
return{
	State:item['Area Name'],
	Education_Males:item['Educational level - Graduate & above - Males'],
	Education_Females:item['Educational level - Graduate & above - Females']
};
});
//console.log(totalarray1);

function groupBy(array,ageGroupCol,Males,Females)
{

	var resultArray=[], newObj={};
	array.forEach(function(argsPass)
	{
		if (!newObj[argsPass[ageGroupCol]])
		 {
          newObj[argsPass[ageGroupCol]] ={};
          newObj[argsPass[ageGroupCol]][ageGroupCol]=argsPass[ageGroupCol];
          newObj[argsPass[ageGroupCol]][Males]=0;
          newObj[argsPass[ageGroupCol]][Females]=0;
          resultArray.push(newObj[argsPass[ageGroupCol]]);

		 }
	newObj[argsPass[ageGroupCol]][Males] +=+ argsPass[Males];
	newObj[argsPass[ageGroupCol]][Females] +=+ argsPass[Females];
	});
	return resultArray;
};
var temp=groupBy(totalarray1,'State','Education_Males','Education_Females')

	console.log(temp);
json=JSON.stringify(temp);
fs.writeFile('graduatePopulation.json',json,function(err)
{
	if(err) return console.log(err);
	console.log("ho gaya bhai")
});
});



           