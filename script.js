/***************************************************************************/
/**************************TASK-1*******************************************/
/***************************************************************************/
//Declare four variables without assigning values and print them in console
var a;
var b;
var c;
var d;
console.log(a,b,c,d) //undefined undefined undefined undefined
/***************************************************************************/
// How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar",myvar);

/***************************************************************************/
//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
const firstName = "Bhanu";
const lastName = "Prakash";
const maritalStatus = "single";
const country = "India";
const age = 23;

/***************************************************************************/
//4. Declare variables to store your first name, last name, marital status, country and age in a single line

const firstName1 = "Bhanu",
  lastName1 = "Prakash",
  maritalStatus1 = "single",
  country1 = "India",
  age1 = 23;

/***************************************************************************/

//5. Declare variables and assign string, boolean, undefined and null data types

const variable1 = "Bhanu";
const variable2 = true;
const variable3 = undefined;
const variable4 = null;

/***************************************************************************/

//6. Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)

const count = "2"
console.log(parseInt(count));
console.log(Number(count));
console.log(+count)

/***************************************************************************/

//Write 6 statement which provide truthy & falsey values.

const st1 = undefined; //falsey
const st2 = false;    //falsey
const st3 = null;     //falsey
const st4 = "abc"        //truthy
const st5 = 5;          //truthy
const st6 = true;     //truthy

/***************************************************************************/
/**************************TASK-2*******************************************/
/***************************************************************************/

//1.Square of a number
const abc = [2,3,4]
const squared = abc.map(a=> a*a);
console.log(squared)

/************************************************************** */

// 2.Swapping 2 numbers
const a1 = 1,
  b1 = 2;
const swappedValues = [b1, a1];
console.log(...swappedValues)

/***************************************************************/

// 3.Addition of 3 numbers
{
    const num1 = 1, num2 = 2, num3 = 3;
    console.log(num1+num2+num3)
}

/***************************************************************/

// 4.Celsius to Fahrenheit conversion
//C = (5/9) * (F - 32)

function convert(Celsius) {
  const Fahrenheit = Celsius * (9 / 5) + 32;
  return { Fahrenheit };
}
const { Fahrenheit } = convert(70);

/***************************************************************/

//5.Meter to miles
function getMiles(meter) {
  return meter * 0.000621371192;
}

/***************************************************************/
//6.Pounds to kg
function getKg(pound) {
  const kg = pound * 0.453592;
  return { kg };
}

/***************************************************************/
//7.Calculate Batting Average
const runsScored = 3000;
const noOfdismissals = 200;
const battingAverage = runsScored/noOfdismissals;
console.log("battingAverage",battingAverage)

/***************************************************************/
//8.Calculate five test scores and print their average
const fiveTestScores = [200, 432, 512, 412, 314];
let i = 0;
const sum = fiveTestScores.reduce((accumulator, item) => {
  i++;
  return accumulator + item;
}, 0);
console.log(sum / i);

/***************************************************************/
//9.Power of any number x ^ y.
{
  const a = 3;
  const b = 2;
  console.log(Math.pow(a, b));
}

/***************************************************************/
//10 - 17 same calculation

/***************************************************************/
//18.Given two numbers and perform all arithmetic operations.
{
  const a = 10;
  const b = 2;
  const addition = a + b;
  const sub = a - b;
  const multi = a * b;
  const div = a / b;
  console.log(addition, sub, multi, div);
}

/***************************************************************/
// Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")

/***************************************************************/
//20 .Calculate electricity bill?For example, a consumer consumes 100 watts per hour daily for one month.
// Calculate the total energy bill of that consumer if per unit rate is 10?

const monthlyUnitsConsumption = (100*24)*30;
console.log(monthlyUnitsConsumption*10);

/***************************************************************/
// 21.Program To Calculate CGPA
const English = 9.1  
const Hindi = 8.5  
const Maths = 9.5  
const Science =9.6;  
const SocialStudy = 8.6  
const CGPA = (9.1+8.5+9.5+9.6+8.6)/(5.0)  
const cgpa = 9.5*CGPA
console.log("cgpa",cgpa)


/***************************************************************************/
/**************************TASK-3*******************************************/
/***************************************************************************/

//1.Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// ####### 
function pyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
      console.log(" * ");
    }
    console.log("\n");
  }
}

// pyramid(5)

/***************************************************************/
// //2 . var strArray= ["<option>Jazz</option>",
// ,"<option>Blues</option>",
// ,"<option>New Age</option>",
// ,"<option>Classical</option>",
// ,"<option>Opera</option>"]

var strArray = [
  "<option>Jazz</option>",
  ,
  "<option>Blues</option>",
  ,
  "<option>New Age</option>",
  ,
  "<option>Classical</option>",
  ,
  "<option>Opera</option>",
];
strArray.forEach(data=>console.log(data))

/***************************************************************/
//3. var myarray=[11,22,33,44,55]
// write a code to count the elements in the array . Don’t use length property
// Declare an empty array;
{
  var myarray = [11, 22, 33, 44, 55];
  let i = 0;
  myarray.forEach((data) => {
    i++;
  });
  console.log(i);
}

/***************************************************************/
//4,5.Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
    let foods=["Apple","pizza","Burger","salad","orange","banana","idly"]
// Foods variable holds the names of your top 20 favorite foods,
// starting with the best food. How can you find your fifth favorite food?
// let foods=[]
// Find the length of your foods array
    console.log(foods[4])
    console.log(foods.length)
    
/***************************************************************/
//6. Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
friends[0]="Munnabai"
// console.log(friends)

/***************************************************************/
//7.Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
      console.log(friends[i])
    if(friends[i] === "CaptianAmerica"){
        break;
    }
  }
}
dataHandling(friends);

/***************************************************************/
//8.Find the person is ur friend or not.
function dataHandling(input, name) {
  const found = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] === name) {
      found.push("friend");
    } else {
      found.push("not");
    }
  }
  return found;
}
let found = dataHandling(friends, "Jeff");
console.log(found);

/***************************************************************/
//9.We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

{
  var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran",
  ];
  var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
  function dataHandling(input) {
    const friend = input.sort(a, (b) => a - b);
    return friend;
  }
  const friends = friends1.concat(friends2);
  const data = dataHandling(friends);
  console.log(data);
  //9-1  Get the first item, the middle item and the last item of the array
    console.log(data[0],data[(data.length/2)-1],data[data.length-1])
  //9-2 Add your name to the end of the friends array, and add another name to beginning.
    data.push("Bhanu"); data.unshift("Reddy");
    console.log(data)
  //9-3 3. Add Mr or Ms to the names in the friends array.
  const newData = data.map(name=>`Mr ${name}`)
  console.log(newData)
  //9-4 Concat all the names the friends array and return as comma “,” seperated string.
  console.log(data.join(","))
  //9-5  Find the friends names who has letter ‘a’ and return the list.
  const newOne = data.filter(name=>name.includes("a"))
  console.log(newOne)
  //9-6 Find the avg length of all the friends names. Get the individual length of the names and do the avg.
    const lengths = data.map(name=> name.length)
    let i =0;
   const sum = lengths.reduce((accumulator, item) => {
        i++;
        return accumulator + item;
      }, 0);
      console.log(sum/i)
 //9-7 Find the names and return the list starting with letter M.
    const newOneArray = data.filter(name=>name.includes("M"))
    const arr1 = newOneArray.filter(name=>{
        const arr= name.split("")
        if(arr[0] === "M"){
            return name
        }
    })
    console.log(arr1)
 //9-8 Find the name with max characters and return the name.
    const arri=[]
    data.forEach(name=>{
        const obj = {chars : name.length, name:name}
        arri.push(obj)
    })
    const sortedArr =  arri.sort((a,b)=>b.chars - a.chars)
    console.log(sortedArr[0].name)
 //9-9  Find the name with min characters and return the name.
 console.log(sortedArr[sortedArr.length-1].name)
}


/***************************************************************/
//Find the average in the array below.
// Make sure you add only the numbers and do avg.

const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai","200", "CaptianAmerica", 8, 10]
let coun = 0
let sum1 = 0
friendsInfo.forEach((data)=>{
    if(typeof data === "number"){
        sum1 = sum1 + data
        coun++
    }
})
console.log(sum1/coun)

/***************************************************************/

//Print the contents of the input variable
var inputtt = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
inputtt.forEach(data=>{
    console.log(data)
})

/***************************************************************/
//What the output

const myobject = {1:one,"11":1,"name":"arun"}
// console.log(myobject.11); 
// console.log(myobject.name)   //Uncaught SyntaxError: missing ) after argument list

/***************************************************************/


























