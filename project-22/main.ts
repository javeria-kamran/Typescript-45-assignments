// creating errors on your own
function heavybikes(name: string, color: string, ) {
    return{
    name,
    color,
    };
}
// Array
const bikes = [
 heavybikes("Kawasaki","Black"),
heavybikes("Harley Davidson V-Rod","White"),
heavybikes("Suzuki Hayabusa" , "Blue"),
]

// Invalid Index
// let bikename: string = "8" ;
//   however there are only 3 elements in array

// validindex
const validindex  = 3;
console.log(`Bikes  in index ${validindex}:` , heavybikes[validindex]);

// printing
bikes.forEach((heavybikes) => {
    console.log(`Name: ${heavybikes.name}, Color: ${heavybikes.color}.`);
});


    


