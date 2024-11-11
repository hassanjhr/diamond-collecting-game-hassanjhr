// var x = 10;
// var y = 20;
// var c = x + y;
// document.write(c);

// var a = prompt("Enter your age" ,"Your age is" );
// alert(a);



// var a = +prompt("Enter your value" ,"Your value is" );

// var b = a +10
// alert(b);



// var x = "Enter your value" ;
// var y = "Your value is" ;
// var a = +prompt(x,y );
// var b = a +10
// // alert(b);
// document.write(b)






// Conditional Statement:

// var age =30;
// if (age <= 18){
//     alert("Your age is less")
// }
// else {
//     alert("You are no more with less age")
// }




// var age =+prompt("Enter your age");
// if (age == 14){
//     alert("Your age is equal")
// }
// else if (age < 14){
//     alert("Your age is less")
// }
// else {
//     alert("You are no more with less age")
// }






// var age =+prompt("Enter your age");
// var gender = prompt("Enter your Gender");
// if (age > 18 && gender == "male"){
//     alert("Your are allowed to ride")
// }

// else {
//     alert("You are not allowed")
// }






// var age =+prompt("Enter your age");
// var gender = prompt("Enter your Gender");
// if (age > 18 || gender == "male"){
//     alert("Your are allowed to ride")
// }

// else {
//     alert("You are not allowed")
// }



// var a ="5";
// if (a == 5){
//     alert("Ture")
// }
// else{
//     alert("False")
// }




// var a ="5";
// if (a === 5){
//     alert("Ture")
// }
// else{
//     alert("False")
// }






// Comparison Operators

// var x =5;
// var y =10;
// var a =30;
// var b =15;
// if(x+y === a-b) {
//     alert("Corrent");
// }
// else{
//     alert("InCorrent");

// }





// var a= 10; 
// if(a !== 15){
//     document.write("Corrent");
// }
// else{
//     document.write("Icorrent");
// }






// Testing && ||

// Marksheet

// var percent = +prompt("Enter Your Percent");
// if(percent >= 80 && percent <=100){
//     alert("A+");
// }
// if(percent >= 70 && percent <=80){
//     alert("A");
// }
// if(percent >= 60 && percent <=70){
//     alert("B");
// }
// if(percent >= 50 && percent <=60){
//     alert("C");
// }
// if(percent >= 40 && percent <=50){
//     alert("D");
// }
// if(percent >= 33 && percent <=40){
//     alert("E");
// }
// if(percent >= 0 && percent <=33){
//     alert("F");
// }
// else{
//     alert("You didn't write correct percentage");
// }






// if statement nested








// Arrays

// var name = "Ali";
// var name1 = "Ali1";
// var name2 = "Ali2";
// var name3 = "Ali3";
// var name4 = "Ali4";
// var name5 = "Ali15";
// var students = ["Ali", "Ali1", "Ali3", "Ali3", "Ali4", "Ali5"];
// document.write("Welcome" + " " + students[5])



// var names = [];
// names[0] = "H";
// names[1] = "D";
// document.write(names);






// var name = "Ali";
// var name1 = "Ali1";
// var name2 = "Ali2";
// var name3 = "Ali3";
// var name4 = "Ali4";
// var name5 = "Ali15";
// var students = ["Ali", "Ali1", "Ali3", "Ali3", "Ali4", "Ali5"];
// students.pop()   for removing
// document.write(students)






// var name = "Ali";
// var name1 = "Ali1";
// var name2 = "Ali2";
// var name3 = "Ali3";
// var name4 = "Ali4";
// var name5 = "Ali15";
// var students = ["Ali", "Ali1", "Ali3", "Ali3", "Ali4", "Ali5"];
// students.push("Ali6", "Ali7")  for adding 
// document.write(students);






// From removing and adding at the start

// var name = "Ali";
// var name1 = "Ali1";
// var name2 = "Ali2";
// var name3 = "Ali3";
// var name4 = "Ali4";
// var name5 = "Ali15";
// var students = ["Ali", "Ali1", "Ali3", "Ali3", "Ali4", "Ali5"];
// students.shift()
// document.write(students)



// var name = "Ali";
// var name1 = "Ali1";
// var name2 = "Ali2";
// var name3 = "Ali3";
// var name4 = "Ali4";
// var name5 = "Ali15";
// var students = ["Ali", "Ali1", "Ali3", "Ali3", "Ali4", "Ali5"];
// students.unshift("Ali00","Ali001")
// document.write(students)








// Splice and Slice Methods:

// var name = "Ali";
// var name1 = "Ali1";
// var name2 = "Ali2";
// var name3 = "Ali3";
// var name4 = "Ali4";
// var name5 = "Ali15";
// var students = ["Ali", "Ali1", "Ali3", "Ali3", "Ali4", "Ali5"];
// students.splice(2,2,"Ali02","Ali03")
// document.write(students)



// var name = "Ali";
// var name1 = "Ali1";
// var name2 = "Ali2";
// var name3 = "Ali3";
// var name4 = "Ali4";
// var name5 = "Ali15";
// var students = ["Ali", "Ali1", "Ali2", "Ali3", "Ali4", "Ali5"];
// var copyStudents = students.slice(1,4);
// document.write(students); 
// document.write(copyStudents);



// var cities = ["Lahore", "Faisalabad", "Islamabad", "Karachi"];

// for(var i=0; i< cities.length; i++){
//     if(cities[i] === "Karachi"){
//         document.write(cities[i] + " " + "is a cleanest City" )
//     }

// }



// var cities = ["Lahore", "Faisalabad", "Islamabad", "Karachi"];

// for(var i=0; i< cities.length; i++){

//         alert(cities[i] + " " + "is a cleanest City" )
//     }



// for ( var i = 1; i > 0 ; i++){
//     if(i === 10){
//         break

//     }
//     console.log("Hello")
// }


// for( var a = 0; a < 10; a++){
//     console.log("Hello World")
// }


// for( var b = 0; b < 10; b++){
//     if(b === 5){
//     break
// }
//     console.log("Hello World")
// }





//  for nested loop

// for (var j = 0; j < 5; j++){
//     for ( var k = 0; k < 3 ; k++){
//         document.write(k +"Pakistan Zindabad" + " "+ "<br>")
//     }

// }




// var firstName = ["Ali", "Jawwad" , "Ibrahim", "Danish"]
// var lastName = ["Ahmed", "Khan" , "Naseem" , "Khalid"]

// for(var z = 0 ; z < firstName.length; z++){
//     for (var v=0; v < lastName.length; v++){
//         document.write(firstName[z] + " " + lastName[v] ,"<br>")
//     }
// }


// for(var b = 0; b < 10; b++){
//     for( var n = 0; n < b; n++){
//         document.write("*")
//     }
//     document.write("<br>")
// }



// Palindrome Word like (CIVIC) (REFER)

// var word = prompt("Enter Your Word");
// var check = "";

// for(var i =  word.length -1; i >= 0; i--){
//     check += word[i]
// }
// console.log(word,check)

// if( check === word){
//     console.log(word + " " + "is palindrome word")
// }




// changing Case

// var name = "HASSAN";

// name = name.toLowerCase();

// console.log(name)




// var name = "hassan";

// name = name.toUpperCase();

// console.log(name)





// Chapter 22: Strings: Measuring length and extracting parts

//  Chapter 23: Strings: Finding Segments

//  var name = "M.Hassan Jawaid"
// console.log(name.indexOf("H"))



// Counting Table 1 to 100
// for(var a =1 ; a <100; a = a+10){
//     for (var b = a; b<= a+9; b++){
//         document.write(b+" ");

//     }
//     document.write("<br>")
// }




// Changing Cases

// var city = prompt("Enter your City")
// city = city.toUpperCase()
// var arr = ["karachi", "islamabad", "lahore"]
// for (var i = 0, i< arr.length; i++) {
//     if (arr[i] === city) {
//         alert("City Has Found")
//     }
//     else {
//         alert("City not Found")
//     }
// }





// var city = prompt('Enter Your City Name')
// var firstChar =city.slice(0,1);
// var otherChar =city.slice(1);
// firstChar =firstChar.toUpperCase()
// otherChar =otherChar.toLowerCase()

// var city = firstChar + otherChar;
// console.log(city);

// var arr = ['Karachi', 'Islamabad', 'Pishawar', 'Lahore']
// for (var i=0; i<arr.length; i++){
//     if (arr[i] === city){
//         alert('City Has Been Found')
//     }
//     else{
//         alert('City Not Found')
//     }
// }



// function monthToJan (b) {
//     let dObject = new Date(b);
//         let a = dObject.setMonth(0);
//         return a;

//     }
//     let abz = console.log("changed month to Jan ",monthToJan ("8,25,2024") )


// Assignment File

// let dObj = new Date();

// let dStr = new Date().toString();

// let day = new Date().getDay();

// let d = new Date();
// let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// alert(dayNames[d.getDay()]);

// let dateTime = new Date();

// let later = new Date(2020, 11, 31);

// let referenceDate = new Date(1980, 0, 1);
// let elapsedMilliseconds = new Date().getTime() - referenceDate.getTime();
// alert(elapsedMilliseconds);

// let currentDate = new Date();
// currentDate.setFullYear(2023); // Set the desired year

// function changeMonthToJanuary(inputDate) {
//     inputDate.setMonth(0); // January is represented by 0
//     return inputDate;
// }

// function changeMinutes(inputTime) {
//     let newMinutes = prompt('Enter new minutes:');
//     inputTime.setMinutes(newMinutes);
//     return inputTime;
// }

// function changeMinutes(inputTime) {
//     let newMinutes = prompt('Enter new minutes:');
//     inputTime.setMinutes(newMinutes);
//     return inputTime;
// }


// .............................................

// function monthToJan (b) {
//     let dObject = new Date(b);
//        dObject.setMonth(0);
//         return dObject;

//     }
//     let abz = console.log("changed month to Jan ",monthToJan ("8,25,2024") )





// var a= new Date();
// a.setDate(2);
// console.log(a);



// var day = "tues";

// switch (day) {
//     case "mon":
//         console.log("Monday Alert !")
//         break
//     case "tues":
//         console.log("Tuesday Alert !")
//         break
//     case "wed":
//         console.log("Wedneday Alert !")
//         break
//     case "thurs":
//         console.log("Thursday Alert !")
//         break
//     case "fri":
//         console.log("Friday Alert !")
//         break
//     case "sat":
//         console.log("Saturday Alert !")
//         break
//     case "sun":
//         console.log("sun Alert !")
//         break
//         default:
//             console.log("Not in the Week")
// }


// var day = prompt("enter day");

// switch (day) {
//     case "mon":
//         console.log("Monday Alert !")
//         break
//     case "tues":
//         console.log("Tuesday Alert !")
//         break
//     case "wed":
//         console.log("Wedneday Alert !")
//         break
//     case "thurs":
//         console.log("Thursday Alert !")
//         break
//     case "fri":
//         console.log("Friday Alert !")
//         break
    
//         case "sat":
//         case "sun":
//         console.log("Chutti Alert !")
//         break
//         default:
//             console.log("Not in the Week")
// }



// var day = "tues";

// switch (day) {
//     case "mon":
//         console.log("Monday Alert !")
//         break
//     case "tues":
//         console.log("Tuesday Alert !")
//         break
//     case "wed":
//         console.log("Wedneday Alert !")
//         break
//     case "thurs":
//         console.log("Thursday Alert !")
//         break
//     case "fri":
//         console.log("Friday Alert !")
//         break
    
//         case "sat":
//         case "sun":
//         console.log("Chutti Alert !")
//         break
//         default:
//             console.log("Not in the Week")
// }




// while loop

// var i =0;
// while(i<10){
//     console.log(i)
//     i++
// }

// var i =0;
// while(i<10){
//     i++
//     console.log(i)
// }




// DO WHILE


// var i=0;
// do{
//     i++
//     console.log(i)
// }while(i<10)


// var i=0;
// do{
//     i++
//     console.log(i)
// }while(i<0)

// var i=0;
// do{
//     i++
//     console.log(i)
// }while(i<20)



// function Btn(){
//     console.log("Clicked Button")
// }




// game code

// function flip(element,value){
//     console.log(element,value)
//     if(value){
//         element.style.backgroundImage = "url('./images/diamond.png')"

//     }else{
//         element.style.backgroundImage = "url('./images/not\ found.png')"
//     }

// }



// // Function to refresh the page
// function refreshPage() {
//     location.reload();
//   }

//   // Attach click event listener to the button
//   document.getElementById('refreshButton').addEventListener('click', refreshPage);




// new code for game




// // Function to shuffle the elements in an array (Fisher-Yates algorithm)
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// // Function to shuffle the positions of elements in the parent container
// function shufflePositions() {
//     const parent = document.querySelector('.parent');
//     const elements = Array.from(parent.children);

//     // Randomly select an index for the diamond
//     const diamondIndex = Math.floor(Math.random() * elements.length);

//     // Update the parent container with the shuffled elements
//     shuffleArray(elements);
//     parent.innerHTML = '';

//     elements.forEach((element, index) => {
//         if (index === diamondIndex) {
//             element.style.backgroundImage = "url('./images/diamond.png')";
//         } else {
//             element.style.backgroundImage = "url('./images/Question Mark.png')";
//             element.onclick = () => flip(element);
//         }
//         parent.appendChild(element);
//     });
// }

// // Function to flip the clicked element
// function flip(element) {
//     if (element.style.backgroundImage.includes('Question Mark')) {
//         const isDiamond = Math.random() < 0.5; // 50% chance of being a diamond

//         if (isDiamond) {
//             element.style.backgroundImage = "url('./images/diamond.png')";
//         } else {
//             element.style.backgroundImage = "url('./images/not found.png')";
//         }

//         // Disable further clicks on other elements
//         document.querySelectorAll('.parent div').forEach(el => {
//             el.onclick = null;
//         });
//     }
// }

// // Function to refresh the page and shuffle positions
// function refreshPage() {
//     shufflePositions();
// }

// // Attach click event listener to the refresh button
// document.getElementById('refreshButton').addEventListener('click', refreshPage);

// // Shuffle positions when the page is loaded
// window.addEventListener('load', shufflePositions);

// // Initial shuffle positions when the script is loaded
// shufflePositions();






// Function to shuffle the elements in an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to shuffle the positions of elements in the parent container
function shufflePositions() {
    const parent = document.querySelector('.parent');
    const elements = Array.from(parent.children);

    // Set a flag to check if the diamond has been revealed in the current game session
    let diamondRevealed = false;

    // Update the parent container with the shuffled elements
    shuffleArray(elements);
    parent.innerHTML = '';

    elements.forEach(element => {
        element.style.backgroundImage = "url('./images/Question Mark.png')";
        element.onclick = () => flip(element, diamondRevealed);
        parent.appendChild(element);
    });
}

// Function to flip the clicked element
function flip(element, diamondRevealed) {
    if (!diamondRevealed) {
        const isDiamond = Math.random() < 0.5; // 50% chance of being a diamond

        if (isDiamond) {
            element.style.backgroundImage = "url('./images/diamond.png')";
            diamondRevealed = true; // Set the flag to true once the diamond is revealed
        } else {
            element.style.backgroundImage = "url('./images/not found.png')";
        }

        // Disable further clicks on this element
        element.onclick = null;
    }
}

// Function to refresh the page and shuffle positions
function refreshPage() {
    shufflePositions();
}

// Attach click event listener to the refresh button
document.getElementById('refreshButton').addEventListener('click', refreshPage);

// Shuffle positions when the page is loaded
window.addEventListener('load', shufflePositions);

// Initial shuffle positions when the script is loaded
shufflePositions();

