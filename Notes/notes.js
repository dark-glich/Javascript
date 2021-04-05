//in-line comment
/* multi line comment */
//var is used to asign a variable that can be changed
var name = 'bilal';
name = 'mohd bilal';
console.log(name);
//const is used to asign a constant that cannot be changed
const pi = 3.14;
console.log(pi);

/*let is used to asign a variable in a specific scope
you cannot redeclare a variable with same name twice using let keyword 
but you can edeclare a variable with same name twice using var keyword
*/
let my_name = 'no one';
console.log(my_name);

// Declaring a variable
var a;
// assigning a variable
a = 10;
// declaring & asigning together
var a = 10;

var sum = 10 % 10;
// increment a number by 1
sum++
console.log(sum);
// str can start with `` , "" , '' in javascript
var str = `'hello' how are "you"`;
console.log(str);
// getring len of str using .lenght 
var len;
var str = 'mohd bilal';
len = str.length
console.log(len)
// getting the last char from str
str = 'Hello';
str = str[str.length - 1]
console.log(str)
//functions
function madlimb(a, b, c, d) {
    var sentence = a + " " + b + c + d
    return sentence
};
console.log(madlimb('my', 'name ', 'is ', 'bilal'))
console.log(madlimb('I am', '15 ', 'years ', 'old'))
/* in javascript list is called array
push is used to append a array at last
unshift is used to append a array at start
pop to remove last item
shift to remove first item*/
var list = ['abdullah', 'bilal']
list.push('amna')
list.pop()
list.shift()
list.unshift(['abdullah', 'amna'])
console.log(list)
/* if we assign a variable using var keyword inside of a func
it will become a local variable but if assign a variable without using a var
it will become global variable
*/
var a = 10
function func() {
    //if else statement
    if (a != 9) {
        console.log('a : ' + a)
    }
}
func()
function torf(a) {
    if (a) {
        return 'a is True'
    }
    return 'a is False'
}
console.log(torf())
/* in javascript '==' compares the value regardless of the type
for example: (1 == "1") is true
And '===' or strict equality operator compare value as well as the type
for example: (1 === '1') is false
*/
/* in javascript '!=' compares the value regardless of the type
for example: (1 == "2") is true
And '!==' or strict equality operator compare value as well as the type
for example: (1 !== '1') is true
*/
function check(a) {
    if (a == 1) {
        console.log("True")
    }
    if (a === 1) {
        console.log("True")
    }
}
check('1')
//&& = and
var a = 5
if (a <= 10 && a > 4) {
    console.log('Yes')
}
// '||' = or

if (a < 10 || a > 4) {
    console.log('Yes')
}
//if else statement
if (a < 2) {
    console.log('smaller')
} else {
    console.log("larger")
}
// else if statment

if (a > 6) {
    console.log("greater than 6 !!!")
} else if (a < 4) {
    console.log("smaller than 4 !!!")
} else {
    console.log("number is 5 !!!!!!")
}
// The switch statement is used to perform different actions based on different conditions.
function check(x) {
    var a = null;
    switch (x) {
        case 1:
            a = 'odd';
            break;// it breaks out of the switch block.
        case 2:
            a = 'even';
            break;
        case 4:
            a = 'even';
            break;
        case 8:
            a = 'even';
            break;
        case 9:
        case 11:
            a = 'odd';
            break;
        default: //if above cases are false then default section is executed
            a = "default";
            break;
    }
    return a
}
console.log(check(11))

function div(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    } else {
        return a / b
    }
}
console.log(div(8, 2));

var myobj = {
    'name': "bilal",
    'age': 15,
    'my hobby': "programming"
}
// accessing object using dot notation
console.log(myobj.name)
// accessing object using bracket notation
console.log(myobj['my hobby'])
// changing object name
myobj.name = 'mohd bilal';
// adding new property
myobj.country = 'India';
// deleting obj property
delete myobj.country;
console.log(myobj);
// checking property in object
console.log(myobj.hasOwnProperty('name'));

function prop(x) {
    if (myobj.hasOwnProperty(x)) {
        return myobj[x]
    } else {
        return 'Not Found'
    }
}
console.log(prop('my hobby'))


function multiply(array) {
    var total = 1
    // Nested For Loop
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            total *= array[i][j]
        }
    }
    return total
}

console.log(multiply([[1, 2], [3, 4], [5, 6, 7]]))
/*
Do while Loop = it is a type of loop which get executed atleast once and then checks 
the condition where as while loops first check the condition then executes
*/
var my_array = [20]
var a = 10

do {
    my_array.push(a)
    a++
} while (a < 5)

console.log(a, my_array)

function random(type) {
    if (type == "fraction") {
        var random = Math.random()
    } else if (type == "whole number") {
        var random = Math.floor(Math.random() * 100)
    } else {
        random = "Choose between fraction or whole number"
    }
    return random
}
console.log(random("whole number"))

// parseInt() parses str into integer 
// "22f3" = 22
var str = "22f3"
console.log(str);
str = parseInt(str);
console.log(str);

/*Ternary operator is a single line if else statement 
condition ? if true statement : if false statement; 
*/
function ternary(a) {
    return a % 2 == 0 ? a + " is divisible by two" : a + " is not divisible by two";
}
console.log(ternary(12));

//anonymous functions
var func = function () {
    return "hello world"
}
console.log(func())
//arrow functions are one line functions for single tasks
// var function_name = (arguments) => return statement
var func = (a, b) => a * b;
console.log(func(2, 4))
//args - In javasrcipt we add args using ...args
function funct(...args) {
    return "args " + args
}

console.log(funct(2, 3, 4, 5))
// Anonymous Function
func = function (parameter) {
    console.log(parameter)
}
func("Bilal is Awesome")