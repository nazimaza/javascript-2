document.getElementById("concString").onclick = function () {

    let firstName = "Muhammad Nazim"
    let lastName = "Azam"
    let fullName = firstName +" "+ lastName;
    alert(fullName)
    let statement = "alert('Muhammad Nazim Azam')"
    document.getElementById("statement").innerHTML = statement;
    
    }
    document.getElementById("askName").onclick = function () {
    let fullName = prompt("What is your name?")
    let statement = "prompt('Muhammad Nazim Azam')"
    document.getElementById("statement").innerHTML = statement;

    }
    document.getElementById("compareOperator").onclick = function () {
    let num =+prompt ("Enter number")
    if (num == 5) {
    alert("The number is 5")
    }
    let statement = "prompt('5')"
    document.getElementById("statement").innerHTML = statement;
    }
    document.getElementById("ifCondition").onclick = function () {
    var num1 = +prompt("enter first number");
    var num2 = +prompt("enter second number");
    if (num1 < num2) {
    alert("first condition is true")
    }
    else if (num1 > num2) {
    alert("second condition is true")
    }
    else {
    alert("no your condition is false")
    }
    }
    document.getElementById("testingCondition").onclick = function () {
    var age = +prompt("Enter Your Age");
    var wieght = +prompt("Enter Your Wieght");
    if (age >= 18 && wieght <= 70){
    alert("You are a smart boy")
    }
    if (age >= 18 && wieght >= 70){
    alert("You are a fat boy")
    }
    else {
    alert("You are a bbab")
    }
    }
    document.getElementById("ifNested").onclick = function () {
    var age =+prompt("Eneter your age");
    if (age >= 18) {
    var wieght =+prompt("Enetr Your Wieght"); 
    if (wieght <= 70) {
    alert("You Are A smart boy")
    }
    else {
    alert("you are a fat boy")       
    }
    }
    else {
    alert("you are a baby")
    }
    }
    document.getElementById("login").onclick = function () {
    var userName =prompt("your name");
    var pass =prompt("your password");
    if (userName === "Nazim" && pass === "123" )   {
    alert ("You logged in")
    }
    else {
    alert ("you password is incorrect")
    }
    } 

    // ------------------------for clear statement-----------------
    document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement"). innerHTML = "";
    }
    // --------------------------for clear output---------------------
    document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output"). innerHTML = "";
    }