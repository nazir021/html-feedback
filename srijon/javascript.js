console.log('This is from vscode')
a
var a = 10
console.log('Hello World from Inside!');
consle.log('Wrong!')
clear()
10+10
20
var a=10;
var b=10;
a+b
20
20-10
10
var a=20;
var b=10;
a - b
10
20*10
200
var a=20;
var b=10;
a*b
200
20/10
2
var a=20
var b=10
a/b
2
100/3
33.333333333336
13%5
3
var a=13;
var b=5;
a%b
3
var a=10;
a++;
10
11
var b=5;
b--;
5
b
4
var a=10;
a++
10
a11
var a=10;
++a;
11
a
11
10==10
true
var a=10;
var b=10;
a==b
true
10==20
false
var a=10;
var b=20;
10==20 
false
10 !=20
true
var a=10;
var b=20;
a !=b
true
20>10
true
var a=20;
var b=10;
a>b
true
10>20
false
var a=10;
var b=20;
a>b
false
10<20
true
var a=10;
var b=20;
a<b
true
20<10
false
var a=20;
var b=10;
a<b
false
10>=10
true
var a=10;
var b=10;
a >=b
true
10 >=20
false
var a=10;
var b=20;
a >=b
false
10<=10
true
var a=10;
var b=10;
a <=b
true
10 <=20
true
var a=10;
var b=20;
a <=b
true
20 <=10
false
var a=20;
var b=10;
a <=b
false
var a= '10';
var b= 10;
a==b
true
a===b
false
var a= '10';
var b=10;
a !=b
false
a !==b
true
true && true
true
(10 < 20) && (20 < 30)
true
true && false
false
(10 < 20) && (10 >20)
false
true && true && true && false && true
false
true || true 
true
(10 < 20) || (10 >30)
true
true || false
true
(10 < 20) || (10 >20)
true
false || false
false
(10 > 20) || (20 > 30)
false
false || false || false || true ||false
true
!true
false
!false
true
!(10 > 20)
true
!(20 < 10)
true
var a = 10;
var a = 10
a +=10;
20
a
20
var a = 20;
a -=10;
10
a
10
var a= 5;
a *=5
25
a
25
var a= 10;
a /=2;
5
a
5
var a= 13;
a %= 5;
3
a
3
var a = 10;
var b = 20;
var c = a > b ? 100 : 200;
c
200
var a = 10;
typeof a 
"number"
typeof(a)
"number"
a = Zonayed
var person = 'Zonayed Ahmed';
person
"Zonayed Ahmed"
var some_thing = 'Anything';
some_thing
"Anything"
var _canI ='yes';
_canI
"yes"
var $text = 'I am valid!'
$text
"I am vakid!"
var my_name = 'Zonayed';
my_name
"Zonayed"
camelCase
myName
myAge
myID
formToHandle
var myName = 'Zonayed Ahmed'; // your comment here
// Output Something
console.log('Something'); 
/*
   Your Comments here
*/
    if (3 <5)
    {
        console.log( 'Yeah i will be excecuted!');
    }
    var myAge = 20;
    id(9 >19)
    {
        if(myAge >=20)
            console.log ('You are adult!');
    }
    if(myAge < 20)
    {
        console.log('You are not Adult!');
    }
    for(var i = 0; i < 10; i++)
         {
        console.log('Go ' + i + ' step');
    }
    var num;

do {
    console.log('Inside the Loop');
    num = prompt('Enter the number: ');
} while(num < 10);

console.log('Outside the Loop');
var num = 0; while(num < 10) {
    num = prompt('Enter the number: ');
}

console.log('Out of the loop');
var num = 20; while(num < 10) {
    console.log('Inside the Loop');
    num = prompt('Enter the number: ');
}

console.log('Out of the loop');
for(var i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    
    console.log('i is now at: ' + i);
}
for(var i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    
    console.log('i is now at: ' + i);
}
var name1 = 'Zonayed Ahmed';
var name2 = 'Zawad Ahmed';
var name3 = 'Zobayer Ahmed';
var name4 = 'Masood Ahmed';
var name5 = 'Ahmed Zonayed';
var arrayName = new Array('Rahim', 'Karim', 'Rafiq', 'Jabbar');
var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName[3] = 'Shafiq';
arrName.length
arrName['length']
for(var i = 0; i < arrName.length; i++) {
    console.log('Name: ' + arrName[i]);
 }
 arrName.push('Shafiq');
 arrName.unshift('Shafiq');
 arrName.indexOf('Karim');
 arrName.splice(1, 2);
 var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 var spliceArr = newArr.splice(3)
 var newArr = arrName.slice(0, 2);
 var rahim = {
    fullName: 'Rahim Miya',
    age: 21,
    address: 'Dhaka',
    job: 'Job Holder'
 }
 rahim.welcomeMsg = function() {
    console.log('Hello There');
 }
 var rahim = {
    fullName: 'Rahim Miya',
    age: 21,
    address: 'Dhaka',
    job: 'Job Holder',
    welcomeMsg: function() {
       console.log('Hello There');
    }
 }
 var objArr = {
    normal: 'Normal Item',
    name: ['Rahim', 'Karim', 'Rafiq', 'Shafiq'],
    age: [10, 20, 30, 40, 50]
 }
 function funcName() {
    //Statements
 }
 var funcName = function() {
    //Statement
 }
 function funcName() {
    console.log('Hello I am from the function');
}

funcName();
function funcName() {
    console.log('Hello I am from the function');
}

funcName();
var funcName = function() {
    console.log('Hello I am from the function');
}

funcName();
function sumMachine(a, b) {
    var sum = a + b;
    return sum;
}

console.log(sumMachine(2, 2));
console.log(sumMachine(4, 4));
function aFunc(parameters) {
    //do something with the parameters
    //return the result
 }
 
 aFunc(arguments);
 function sumMachine(a, b) {
    var sum = a + b;
    return sum;
}

console.log(sumMachine(2, 2));
console.log(sumMachine(4, 4));
function printMyName(name, age) {
    console.log('My name is: ' + name + ' and I am ' + age + ' years old!');
}

printMyName('Zonayed Ahmed', 21);
function callMyName(name, callback) {
    var myAge = 20;
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr.' + name);
}

function hello(age) {
    console.log('I am passed through argument and my age is: ' + age);
}

callMyName('Zonayed Ahmed', hello);
function welcomeMsg(name) {
    console.log('Welcome Mr. ' + name);
    return function options(menu) {
        console.log('Do you like ' + menu + ' Mr. ' + name);
    }
}

welcomeMsg('Zonayed Ahmed')('Coffee');
function changeValue(a) {
    console.log('Value of a inside function before changing: ' + a);
    a = 10;
    console.log('Value of a inside function after changing: ' + a);
    return a;
}

var a = 100;
console.log('Value of a before changing function is applied: ' + a);
changeValue(a);
console.log('Value of a after changing function is applied: ' + a);
2 + 2
3 * 7
1 + 2 + 3 * (8 ** 9) - Math.sqrt(4.0)
Math.min(2, 22)
Math.max(3, 94)
Math.round(81.5)
'Zonayed'
'Ahmed'
'Zonayed' + 'Ahmed'
null
true
talse
2
3
4.0
if(10 < 20) {
    console.log('Yeah! It is true');
 } else {
    console.log('No! It is not True');
 }
 do {
    //Some code here
 }
 
 while(expression);while(expression) {
    //Some code here
 }
 var someFunc = function(params) {
    //Some code here
 }
 function sumFunc(params) {
    //Some Code here
 }
 function printAText() {
    console.log('This Post is written by Zonayed Ahmed');
 }
 // Some Code
printAText();
//Some More Code
printAText();
function addTwoNum(x, y) {
    var sum = x + y;
    console.log('Sum of ' + x + ' and ' + y + ' is: ' + sum);
 }
 addTwoNum(5, 10);
addTwoNum(20, 30);
addTwoNum(40, 50);
addTwoNum(60, 70);
addTwoNum(80, 90);
function welcomeMsg(name) {
    console.log('Welcome Mr. ' + name);
 }
 welcomeMsg('Zonayed');
welcomeMsg('Ramazan');
welcomeMsg('Sagar');
welcomeMsg('Niraj');
a === window.a //true
var name = 'Zonayed';

function first() {
   var welcome = 'Hello ';
   second();
   console.log(welcome + name);
}

function second() {
   var welcome2 = 'Hi! ';
   third();
   console.log(welcome2 + name);
}

function third() {
   var welcome3 = 'Hey! ';
   console.log(welcome3 + name);
}

first(); 
first();

function first() {
 console.log('Jello');
}
console.log(welcome);

var welcome = 'Hello World!';
aFunc();

function aFunc() {
   var a = 10;
   var b = 20;
   var sum = a + b;
   console.log('Sum: ' + sum);
}
name();

var name = function() {
   console.log('My name is Zonayed Ahmed');
}
console.log('Value: ' + a);
var a = 10;
console.log('Value: ' + x);
function localScope() {
    var local = 'I am local to my own function';
    console.log(local);
 }
 localScope();
 function localScope() {
    var local = 'I am local to my own function';
    console.log(local);
 }
 
 localScope();console.log(local);
 var globalVar = 'I am a Global Variable';

function globalScope() {
   console.log('Inside a Function: ' + globalVar);
}

globalScope();

console.log('Outside: ' + globalVar);
function globalFunc() {
    console.log('Global Function');
 }
 globalFunc();
 function anoGlobalFunc() {
    console.log('Global Function');
    function localFunc() {
       console.log('Local Function');
    }
    localFunc();
 }
 anoGlobalFunc();
 localFunc();
 var person = {
    name: 'Zonayed Ahmed',
    age: 21
 }
 console.log(person);
 function objectFunc() {
    var localObj = {
       name: 'Zonayed Ahmed',
       age: 21
    }
    console.log(localObj);
 }
 objectFunc();
 console.log(localObj);
 function autoVar() {
    name = 'Zonayed Ahmed';
 }
 
 autoVar();
 console.log(name);
 function parentFunction() {
    //some codes here
    function childFunction() {
       //some more codes
    } 
 }
 function parentFunction() {
    var a = 6;
    function childFunction() {
       var b = 4;
       console.log('Sum: ' + (a + b));
    } 
    childFunction();
 }
 parentFunction();
 function closuresDemo() {
    var x = 10;
    return function() {
       var y = 20;
       console.log('Sum: ' + (x + y));
    }
 }
 closuresDemo()();
 var aVar = closuresDemo();
var total = aVar();
console.log(total);
function aParentFunc(a) {
    return function(b) {
       console.log('Sum: ' + (a + b));
    }
 }
 aParentFunc(6)(4);
 var aParentVar = aParentFunc(6);
var total = aParentVar(4);
function aDemoFunc() {
    console.log('Hello World!');
 }
 var aDemoFunc = function() {
    console.log('Hello World!');
 }
 aDemoFunc();
 (function aDemoFunc() {
    console.log('Hello World!');
 })();
 (function aDemoFunc() {
    console.log('Hello World!');
 })();
 var sum = (function() {
    return 10 + 20; 
 })();
 (function aDemoFunc() {
    console.log('Hello World!');
 })();
 var controller = (function() {
    var a = {
        name: 'Zonayed Ahmed',
        uid: 1062
    };
    return a;
 })();
 var interface = (function() {
    return 'Hello ' + controller.name;   
 })();