// Magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// array of magician's names
var magicianNames = ["Doug Henning", "Max Maven", "Siegfried & Roy", "Eugene Burger"];
// Calling  function to print  each magician in the array
show_magicians(magicianNames);
