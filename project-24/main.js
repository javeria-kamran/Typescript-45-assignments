// Tests for equality and inequality with strings
var fruit = 'Pomegranate';
console.log("Is fruit == 'Pomegranate'? I predict True.");
console.log(fruit == 'pomegranate');
console.log("Is fruit != 'pomegranate'? I predict True.");
console.log(fruit != 'pomegranate');
// Tests using the lower case function
var city = 'Washington';
console.log("Is city.toLowerCase() == 'Washington'? I predict True.");
console.log(city.toLowerCase() == 'Washington');
// Numerical tests
var number1 = 21;
var number2 = 20;
console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2);
console.log("Is number1 <= number2? I predict False.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
var cold = true;
var comfy = false;
console.log("Is it cold and comfy? I predict False.");
console.log(cold && comfy);
console.log("Is it cold and comfy? I predict True.");
console.log(cold || comfy);
// Test whether an item is in an array
var fruitsArray = ['peach', 'jujube', 'cherry'];
console.log("Is 'cherry' in the fruitsArray? I predict True.");
console.log(fruitsArray.includes('cherry'));
// Test whether an item is not in an array
console.log("Is 'grapes' not in the fruitsArray? I predict True.");
console.log(!fruitsArray.includes('grapes'));
