//COMM644
//Assignment 3, Part 1
//
//Practice with Arrays (5 points)
//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step:
//1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
//---------------------------------------------------------------------
//var movies=["Iron Man","Edge of Tomorrow","The Boxtrolls","Selma","Gone Girl"];
//console.log(movies[1]);
//---------------------------------------------------------------------

//2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//console.log(movies[0]);
//---------------------------------------------------------------------

//3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
//---------------------------------------------------------------------
//var movies=["Iron Man","Edge of Tomorrow","The Boxtrolls","Selma","Gone Girl"];
//movies.splice(2,0,"Transformers: Age of Extinction");
//console.log(movies.length);
//---------------------------------------------------------------------

//4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//delete movies[0]
//console.log(movies.join("-"));
//---------------------------------------------------------------------

//5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//movies[6]="The Hobbit: The Battle of the Five Armies";
//for(var i=0;i<movies.length;i++){
//    console.log(movies[i]);
//}
//---------------------------------------------------------------------

//6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//movies[6]="The Hobbit: The Battle of the Five Armies";
//for(var movie in movies){
//    console.log(movies[movie]);
//}
//---------------------------------------------------------------------
//7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//movies[6]="The Hobbit: The Battle of the Five Armies";
//movies.sort();
//for(var movie in movies){
//    console.log(movies[movie]);
//}
//---------------------------------------------------------------------
//8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
//Movies I like:
//
//Movie 1
//Movie 2
//Movie 3
//…
//
//Movies I regret watching:
//
//Movie 1
//Movie 2
//Movie 3
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//
//var leastFavMovies=new Array();
//leastFavMovies[0]="Godzilla";
//leastFavMovies[1]="The Amazing Spider-Man 2";
//leastFavMovies[2]="Transcendence";
//
//printMovies("Movies I like:",movies);
//printMovies("Movies I regret watching:",leastFavMovies);
//
//function printMovies(strings, arrays){
//    console.log(strings);
//     console.log("");
//    for (var x in arrays){
//        console.log(arrays[x]);
//    }
//     console.log("");
//}
//---------------------------------------------------------------------
//9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//
//var leastFavMovies=new Array();
//leastFavMovies[0]="Godzilla";
//leastFavMovies[1]="The Amazing Spider-Man 2";
//leastFavMovies[2]="Transcendence";
//
//movies=movies.concat(leastFavMovies);
//movies.sort().reverse();
//printMovies(movies);
//
//function printMovies(arrays){
//    for (var x in arrays){
//        console.log(arrays[x]);
//    }
//}
//---------------------------------------------------------------------

//10.	Return just the last item in the array and display it within the console window.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//
//var leastFavMovies=new Array();
//leastFavMovies[0]="Godzilla";
//leastFavMovies[1]="The Amazing Spider-Man 2";
//leastFavMovies[2]="Transcendence";
//
//movies=movies.concat(leastFavMovies);
//movies.sort().reverse();
//
//console.log(movies[movies.length-1]);
//---------------------------------------------------------------------

//11.	Remove the previous method and this time return just the first item in the array and display it within the console window.
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//
//var leastFavMovies=new Array();
//leastFavMovies[0]="Godzilla";
//leastFavMovies[1]="The Amazing Spider-Man 2";
//leastFavMovies[2]="Transcendence";
//
//movies=movies.concat(leastFavMovies);
//movies.sort().reverse();
// 
//console.log(movies.shift());
//---------------------------------------------------------------------

//12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
//---------------------------------------------------------------------
//var movies=new Array();
//movies[0]="Iron Man";
//movies[1]="Edge of Tomorrow";
//movies[2]="The Boxtrolls";
//movies[3]="Selma";
//movies[4]="Gone Girl";
//movies[5]="Transformers: Age of Extinction";
//
//var leastFavMovies=new Array();
//leastFavMovies[0]="Godzilla";
//leastFavMovies[1]="The Amazing Spider-Man 2";
//leastFavMovies[2]="Transcendence";
//
//movies=movies.concat(leastFavMovies);
//movies.sort().reverse();
//
//for(var x in leastFavMovies){
//    for (var y in movies){
//        if(leastFavMovies[x]==movies[y]){
//            console.log(y);
//        }
//    }  
//}
//---------------------------------------------------------------------

//13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
//---------------------------------------------------------------------
//var employee1=[
//    {"employeeid":"1", 
//     "name":"gaoxy", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"true"},
//    {"employeeid":"2", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"true"},
//    {"employeeid":"3", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"true"}
//];
//var employee2=[
//    {"employeeid":"101", 
//     "name":"Jam", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"102", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"103", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"false"}
//];
//
//var employees=employee1.concat(employee2);
//
//for(var x in employee2){
//    console.log(employee2[x].name);
//}

//---------------------------------------------------------------------

//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
//---------------------------------------------------------------------
//var employee1=[
//    {"employeeid":"1", 
//     "name":"gaoxy", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"true"},
//    {"employeeid":"2", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"true"},
//    {"employeeid":"3", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"true"}
//];
//var employee2=[
//    {"employeeid":"101", 
//     "name":"Jam", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"102", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"103", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"false"}
//];
//
//var employees=employee1.concat(employee2);
//
//for(var x in employees){
//    console.log(employees[x].name);
//}
//---------------------------------------------------------------------


//15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
//---------------------------------------------------------------------
//var employee1=[
//    {"employeeid":"1", 
//     "name":"gaoxy", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"2", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"true"},
//    {"employeeid":"3", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"true"}
//];
//var employee2=[
//    {"employeeid":"101", 
//     "name":"Jam", 
//     "title":"CEO", 
//     "department":"HR",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"102", 
//     "name":"Tom", 
//     "title":"CFO", 
//     "department":"Finacial",
//     "isCurrentEmployee":"false"},
//    {"employeeid":"103", 
//     "name":"Jack", 
//     "title":"CTO", 
//     "department":"Tech",
//     "isCurrentEmployee":"false"}
//];
//
//var employees=employee1.concat(employee2);
//
//for(var x in employees){
//    if(employees[x].isCurrentEmployee=="true")console.log(employees[x].name);
//}
//---------------------------------------------------------------------

//16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
//---------------------------------------------------------------------
//var movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//for (var x in movies){
//    
//    var nameArray = movies[x].filter(function(item) {	
//    return typeof item == "string";
//});
//    console.log(nameArray);                              
//}
//---------------------------------------------------------------------
                              
//Practice with Functions (5 points)
//1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
//---------------------------------------------------------------------
//var displayMessage=function(message){
//    console.log(message);
//}
//
//displayMessage("This is the message");
//---------------------------------------------------------------------

//2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.
//---------------------------------------------------------------------
//function calculate(numb1,numb2){
//    return numb1%numb2;
//}
//console.log(calculate(5,2));
//---------------------------------------------------------------------

//3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
//
//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY
//
//
//---------------------------------------------------------------------
//var employees=["ZAK" ,"JESSICA","MARK","FRED","SALLY"];
//
//var showEmployees=function(arrays){
//    console.log("Employees:");
//    console.log("");
//    for(var x in arrays){
//        console.log(arrays[x]);
//    }
//}
//
//showEmployees(employees);
//---------------------------------------------------------------------

//COMM644
//Assignment 3, Part 2
//	
//The Rock, Paper, Scissors Game (10 points)
//Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
//•	Rock destroys scissors.
//•	Scissors cut paper.
//•	Paper covers rock.
//Our code will break the game into 3 phases:
//1.	User makes a choice. How will we collect the user’s choice?
//2.	Computer makes a choice. How will we collect the computer’s choice?
//3.	A conditional that determines who wins.
//In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
//1.	Begin by prompting the user for their choice.
//2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
//3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
//4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
//5.	What if the result ends in a tie? Figure out how to handle that as well.
//6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
//---------------------------------------------------------------------
//var gameStart=function(){
//    var uinput=userChoice();
//    console.log("userInput="+uinput);
//    
//    var cinput=computerChoice();
//    console.log("computer choice ="+cinput);
//    
//    var result=determines(uinput,cinput);
//    
//    if(result){
//        var runAgain=confirm("Do you like to try again?");
//        if(runAgain)gameStart();
//    }
//}
//
//var userChoice=function(){
//    var userInput=prompt("Please Input \"Rock\",\"Paper\",\"Scissors\"");
//    var regExp=/^Rock|^Paper|^Scissors/ig;
//    if(userInput.match(regExp)==null){
//        alert("You do the error input, please reinput the choice");
//        userChoice();
//    }
//    return userInput;
//    
//}
//var computerChoice=function(){
//    var index=Math.floor(Math.random() * 3);
//    var choiceArray=["Rock","Paper","Scissors"];
//    return choiceArray[index];
//}
//var determines=function(uinput,cinput){
//var answerMap=new Map();
//    answerMap.set("rock",1);
//    answerMap.set("paper",2);
//    answerMap.set("scissors",3);
//    
//    var uvalue=answerMap.get(uinput.toLowerCase());
//    var cvalue=answerMap.get(cinput.toLowerCase());
//    
//    console.log("uvalue="+uvalue+"||cvalue="+cvalue);
//     console.log(Math.abs(uvalue-cvalue));
//    if(Math.abs(uvalue-cvalue)==0){
//        alert("Same Chocie, Draw");
//    }
//    else if(Math.abs(uvalue-cvalue)==1){
//        if(uvalue>cvalue){
//            alert("You Win");
//        }else{
//            alert("Computer Win");
//        }
//    }
//    else if(Math.abs(uvalue-cvalue)==2){
//          if(uvalue<cvalue){
//            alert("You Win");  
//        }else{
//            alert("Computer Win");
//        }
//    }
//    
//    return true;
//}
//
//gameStart();
//---------------------------------------------------------------------

//The Basic Calculator (10 points)
//In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:
//1.	Prompt the user for a number and store that in a variable.
//2.	Prompt the user for a second number and store that in a variable.
//3.	Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
//4.	Create a new named function called calculate() that accepts 3 parameters.
//5.	Call the calculate function and pass in the 3 variables as parameters. 
//HINT: You will need to convert the 2 numbers from strings to numbers. 
//6.	Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
//7.	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.
//---------------------------------------------------------------------
//var num1;
//var num2;
//var operater;
//
//var getInput=function(){
//    num1=prompt("Please Enter first number");
//    num2=prompt("Please Enter second number");
//    var regExp=/\d/g;
//    if(num1.match(regExp)==null||num2.match(regExp)==null){
//        alert("Please enter 2 numbers");
//        getInput();
//    }
//}
//
//var getOperater=function(){
//    operater=prompt("Please Enter operater");
//    var regExp=/^add|^subtract|^multiply|^divide/ig;
//    if(operater.match(regExp)==null){
//        alert("Please enter operater in one of [add, subtract, multiply, divide]");
//        getOperater();
//    }
//    var regExp2=/^divide/ig;
//    if(operater.match(regExp2)!=null&&num2==0){
//        alert("divisor can not be 0, please redo the game");
//        start();
//    }
//}
//
//var Calculator=function(numb1,numb2,op){
//    switch(op.toLowerCase()){
//        case "add":
//            var x=0;
//            x=parseInt(numb1)+parseInt(numb2);
//            alert(numb1+"+"+numb2+"="+x);
//            break;
//        case "subtract":
//            var x=0;
//            x=parseInt(numb1)-parseInt(numb2);
//            alert(numb1+"-"+numb2+"="+x);
//            break;
//        case "multiply":
//            var x=0;
//            x=parseInt(numb1)*parseInt(numb2);
//            alert(numb1+"*"+numb2+"="+x);
//            break;
//        case "divide":
//            var x=0;
//            x=parseInt(numb1)/(numb2);
//            alert(numb1+"/"+numb2+"="+x);
//            break;
//    }
//}
//
//var start=function(){
//    getInput();
//    getOperater();
//    console.log(num1+"||"+num2+"||"+operater);
//    Calculator(num1,num2,operater);
//    var again=confirm("Play again?");
//    if(again)start();
//}
//start();
//---------------------------------------------------------------------

//Death by JavaScript (4 points each for 20 points total)
//Solve the following function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.
//1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
//
//Sample Data and Output
//Example string: 'webmaster' 
//Expected Output: 'abeemrstw'
//---------------------------------------------------------------------
//var start=function(){
//    var str;
//    str=prompt("please input a String");
//    var regExp=/[a-z]|[A-Z]/g;
//    if (str.match(regExp).length!=str.length){
//        alert("Please input letters, no number,no punctuation");
//        start();
//    }
//    var charArrays=str.split("");
//    charArrays.sort();
//    var newstr="";
//    for (var x in charArrays){
//        newstr=newstr+charArrays[x];
//    }
//    console.log("input string:"+str);
//    console.log("output string:"+newstr);
//}
//start();
//---------------------------------------------------------------------

//
//2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.
//
//Sample Data and Output
//Example string: 'the quick brown fox' 
//Expected Output: 'The Quick Brown Fox'
//---------------------------------------------------------------------
//var start=function(){
//    var str;
//    var newstr="";
//    str=prompt("please input a String");
//    var arrays=str.split(" ");
//    console.log(arrays);
//    for(var x in arrays){
//       newstr=newstr+arrays[x].charAt(0).toUpperCase()+arrays[x].slice(1)+" ";
//    }
//    
//    console.log("input string:"+str);
//    console.log("output string:"+newstr);
//}
//start();
//---------------------------------------------------------------------

//
//3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.
//
//Sample Data and Output
//Example string: 'The quick brown fox' 
//Expected Output: 5
//---------------------------------------------------------------------
//var start=function(){
//    var str=prompt("please input a String");
//    var regExp=/a|e|i|o|u/ig;
//    var num1=0;
//    console.log("input string:"+str);
//    if(str!=null&&str.match(regExp)!=null){
//        num1=str.match(regExp).length;
//    }
//    console.log("Number of vowels is "+num1);
//}
//start();
//---------------------------------------------------------------------

//
//4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.
//
//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
//
//---------------------------------------------------------------------
//var start=function(){
//    var str = "";
//    var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//
//    for( var i=0; i < 8; i++ )
//        str =str+ possible.charAt(Math.floor(Math.random() * possible.length));
//    
//    console.log("Random str is "+str);
//}
//start();
//---------------------------------------------------------------------

//5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
//
//Sample Data and Output
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output: "United States of America"
//---------------------------------------------------------------------
//var start=function(){
//    var contryNames=["Australia", "Germany", "United States of America"];
//    var maxLengthIndex=0;
//    for(var x in contryNames){
//        if(contryNames[x].length>contryNames[maxLengthIndex].length)maxLengthIndex=x;
//    }
//    
//    console.log(contryNames[maxLengthIndex]);
//}
//start();
//---------------------------------------------------------------------
