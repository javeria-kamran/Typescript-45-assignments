// Tests for equality and inequality with strings
let fruit: string = 'Pomegranate';

console.log("Is fruit == 'Pomegranate'? I predict True.");
console.log(fruit == 'pomegranate');

console.log("Is fruit != 'pomegranate'? I predict True.");
console.log(fruit != 'pomegranate');

// Tests using the lower case function
let city: string = 'Washington';

console.log("Is city.toLowerCase() == 'Washington'? I predict True.");
console.log(city.toLowerCase() == 'Washington');

// Numerical tests
let number1: number = 21;
let number2: number = 20;

console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 <= number2? I predict False.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
let cold: boolean = true;
let comfy: boolean = false;

console.log("Is it cold and comfy? I predict False.");
console.log(cold && comfy);

console.log("Is it cold and comfy? I predict True.");
console.log(cold || comfy);

// Test whether an item is in an array
let fruitsArray: string[] = ['peach', 'jujube', 'cherry'];

console.log("Is 'cherry' in the fruitsArray? I predict True.");
console.log(fruitsArray.includes('cherry'));

// Test whether an item is not in an array
console.log("Is 'grapes' not in the fruitsArray? I predict True.");
console.log(!fruitsArray.includes('grapes')); 