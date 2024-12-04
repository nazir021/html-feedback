// Variable and Data Type
// Declare variable
var variableString = 'My name is Sunny'
console.log('variableString = ' + variableString)
console.log('Type of this variable:')

// Show the data type of the variable
console.log(typeof(variableString))
var number = 10
console.log('number = ' + number)
console.log('After adding 10 value is:')
number = number + 10
console.log(number)
console.log('Type of this variable:')
console.log(typeof(number))



// Operator
var a = 10
var b = a + 10
console.log('a = ' + a)
console.log('b = ' + b)
console.log(a>b)
var c = a
c += b
console.log('c = ' + c)



// Conditional Statement
if(a>b){
    if(a>c){
        console.log('A is greater than B, C.')
    }
    else{
        console.log('C is greater than A, B')
    }
}
else{
    if(b>c){
        console.log('B is greater than A, C')
    }
    else{
        console.log('C is greater than A, B')
    }
}



// Loop
var num = prompt('Enter the number: ')
while(num<10){
    console.log('Inside the loop')
    num = prompt('Enter the number: ')
}
console.log('Outside the loop')



// Array
var arr = []

// Adding element in the last
arr.push('Sunny', 'Emon', 'Mafi', 'Atol')
console.log('Array Length:')

// Check the length of array
console.log(arr.length)
for(var i=0; i<arr.length; i++){
    console.log('Person ' + i + ': ' + arr[i])
}
console.log('After delete Atol form the last:')

// Delete last element of the array
arr.pop()
for(var i=0; i<arr.length; i++){
    console.log('Person ' + i + ': ' + arr[i])
}
console.log('After delete Sunny form the first:')

// Delete first element of the array
arr.shift()
for(var i=0; i<arr.length; i++){
    console.log('Person ' + i + ': ' + arr[i])
}
console.log('After adding Sunny in the last:')
arr.push('Sunny')
for(var i=0; i<arr.length; i++){
    console.log('Person ' + i + ': ' + arr[i])
}
console.log('After adding Atol in the first:')

// Adding element in the first
arr.unshift('Atol')
for(var i=0; i<arr.length; i++){
    console.log('Person ' + i + ': ' + arr[i])
}
console.log('to know a index for a specific data:')
console.log('Index number of Sunny is:')

// Check index number of specific elements
var temp = arr.indexOf('Sunny')
console.log(temp)
console.log('Delete last two data')

// Delete all elements in range
var newArr = arr.splice(2)
for(var i=0; i<arr.length; i++){
    console.log('Person ' + i + ': ' + arr[i])
}
console.log('New array:')
for(var i=0; i<newArr.length; i++){
    console.log('Person ' + i + ': ' + newArr[i])
}

// Copy the full array
var copyNewArr = newArr.slice()
console.log(copyNewArr)



// Basic Object
var sunny = {

    // Properties: value
    fullName: 'Mir Zahidul Alam',
    age: 24,
    job: 'Student' 
}
console.log(sunny)
console.log('Adding one more elements in object')

// Adding properties in object
sunny.birthYear = 2000
console.log(sunny)
console.log('Adding function in object')

// Adding function in object
sunny.welcomeMsg = function(){
    console.log('Hello World!')
}
console.log(sunny.welcomeMsg())

// Show all properties in object
for(item in sunny){
    console.log(item)
}

// Array inside the object
var object = {
    fullName: 'Sunny Bhaw',
    friends: ['Emon', 'Mafi', 'Atol'],
    country: 'Bangladesh'
}
console.log(object)
console.log(object.fullName)
console.log(object.friends[0])
console.log(object.friends[1])
console.log(object.friends[2])
console.log(object.country)

// Object inside the array
var objectArr = ['Sunny', {age: 24, job: 'Student'}, 'Dhaka']
console.log(objectArr[0])
console.log(objectArr[1].age)
console.log(objectArr[1].job)
console.log(objectArr[2])