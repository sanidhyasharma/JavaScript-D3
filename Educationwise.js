var fs=require("fs");
var json;
var FinalArray=[];

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
	 	 if(head[j]=="Area Name" || head[j]=="Total/ Rural/ Urban" || head[j]=="Age-group" || head[j]=="Educational level - Literate without educational level - Persons" || head[j]=="Educational level - Below Primary - Persons" || head[j]=="Educational level - Primary - Persons" || head[j]=="Educational level - Middle - Persons" || head[j]=="Educational level - Matric/Secondary - Persons" || head[j]=="Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons" || head[j]=="Educational level - Non-technical diploma or certificate not equal to degree - Persons" || head[j]=="Educational level - Technical diploma or certificate not equal to degree - Persons" || head[j]=="Educational level - Graduate & above - Persons" || head[j]=="Educational level - Unclassified - Persons")
	 	 {
           obj[head[j]]=current[j];
             //obj[head[k]]=literatevalue;
             //obj[agevalue]=literatevalue;
             
          }
          
	  }
	        FinalArray.push(obj);
 }
//console.log(FinalArray)


 var onlytotal2=FinalArray.filter(function(item)
{
return item["Total/ Rural/ Urban"] === "Total" && item["Age-group"] === "All ages";
});
//console.log(onlytotal1);

var totalarray2=onlytotal2.map(function(item)
{
return {
                                                  Age_Group : item["Age-group"],
                Literate_without_educational_level_Persons :  item["Educational level - Literate without educational level - Persons"],
                              Below_Primary_Persons : item["Educational level - Below Primary - Persons"],
                            Primary_Persons : item["Educational level - Primary - Persons"],
                           Middle_Persons  : item["Educational level - Middle - Persons"],
                             Matric_Secondary_Persons: item["Educational level - Matric/Secondary - Persons"],
                      Higher_secondary_Intermediate_Pre_University_Senior_secondary_Persons       : item["Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons"],
                       Non_technical_diploma_or_certificate_not_equal_to_degree_Persons      : item["Educational level - Non-technical diploma or certificate not equal to degree - Persons"],
                       Technical_diploma_or_certificate_not_equal_to_degree_Persons      : item["Educational level - Technical diploma or certificate not equal to degree - Persons"],
                        Graduate_above_Persons     : item["Educational level - Graduate & above - Persons"],
                          Unclassified_Persons   : item["Educational level - Unclassified - Persons"],
                             
            };
});
//console.log(totalarray1);

 function groupBy(array,agegroup,a,b,c,d,e,f,g,h,i,j)
{

	var resultArray=[], newObj={};
	array.forEach(function(argsPass)
	{
		if(!newObj[argsPass[agegroup]])
            {
        newObj[argsPass[agegroup]]={};
       //  newObj[argsPass[agegroup]][agegroup]=argsPass[agegroup];
         newObj[argsPass[agegroup]][a]=0;
         newObj[argsPass[agegroup]][b]=0;
         newObj[argsPass[agegroup]][c]=0;
         newObj[argsPass[agegroup]][d]=0;
         newObj[argsPass[agegroup]][e]=0;
         newObj[argsPass[agegroup]][f]=0;
         newObj[argsPass[agegroup]][g]=0;
         newObj[argsPass[agegroup]][h]=0;
         newObj[argsPass[agegroup]][i]=0;
         newObj[argsPass[agegroup]][j]=0;
         resultArray.push(newObj[argsPass[agegroup]]);
 
            }
            newObj[argsPass[agegroup]][a] += +argsPass[a];
            newObj[argsPass[agegroup]][b] += +argsPass[b];
            newObj[argsPass[agegroup]][c] += +argsPass[c];
            newObj[argsPass[agegroup]][d] += +argsPass[d];
            newObj[argsPass[agegroup]][e] += +argsPass[e];
            newObj[argsPass[agegroup]][f] += +argsPass[f];
            newObj[argsPass[agegroup]][g] += +argsPass[g];
            newObj[argsPass[agegroup]][h] += +argsPass[h];
            newObj[argsPass[agegroup]][i] += +argsPass[i];
            newObj[argsPass[agegroup]][j] += +argsPass[j];
       });
	return resultArray;
};
var temp=groupBy(totalarray2,'Age_Group','Literate_without_educational_level_Persons','Below_Primary_Persons','Primary_Persons' ,'Middle_Persons','Matric_Secondary_Persons','Higher_secondary_Intermediate_Pre_University_Senior_secondary_Persons','Non_technical_diploma_or_certificate_not_equal_to_degree_Persons','Technical_diploma_or_certificate_not_equal_to_degree_Persons','Graduate_above_Persons','Unclassified_Persons');

	console.log(temp);
json=JSON.stringify(temp);
fs.writeFile('EducationWise.json',json,function(err)
{
	if(err) return console.log(err);
	console.log("ho gaya bhai")
});
});



           