// creating errors on your own
function heavybikes(name, color) {
    return {
        name: name,
        color: color,
    };
}
// Array
var bikes = [
    heavybikes("Kawasaki", "Black"),
    heavybikes("Harley Davidson V-Rod", "White"),
    heavybikes("Suzuki Hayabusa", "Blue"),
];
// Invalid Index
// const invalidindex  = 8;
//   however there are only 3 elements in array
// validindex
var validindex = 3;
console.log("Bikes  in index ".concat(validindex, ":"), heavybikes[validindex]);
// printing
bikes.forEach(function (heavybikes) {
    console.log("Name: ".concat(heavybikes.name, ", Color: ").concat(heavybikes.color, "."));
});
