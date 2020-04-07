// to run this code open the html file in chrome browser and then inspect the page and go to console
//because it will run the 
var name = "Joseph Tawil";
var age = 22;
var isTired = false;
//Datatype character 
var initial = "T";
//console.log will let you see any value of a variable
console.log(name);
console.log(age);
console.log(isTired);

if(isTired===true)
{
    console.log("I am tired");
}else
{
    console.log("Second wind- I love Javascript");
}
//alert returns a popup on the page from the data 
//console.log returns the data 
// = is an assingment operator
// === comparitive operator, you compare two objects
// == comparitive operator

var numberInt = 5;
var number = 6;
var numberString = "5";

//double equal signs compares value BUT not datatype
//triple equal sign compares the value and the datatype.
if(numberInt == numberString)
{
    console.log("These are the same");
}
else
{
    console.log("These are not the same");
}

if(number === numberInt)
{
    console.log("These are the same");
}
else
{
    console.log("These are not the same");
}

//arrays
var arr = ["Joseph","Tawil","is","a","Muslim"];
console.log(arr[0]);
//you can look at the location of each character in a string.
console.log(name[2]);
