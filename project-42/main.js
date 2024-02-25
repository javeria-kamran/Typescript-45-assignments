// Great_Magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Making array of names
var magicianNames = ["David Copperfield", "Derren brown", "David blein", "David devent"];
// Calling function to modify the array 
var greatMagicians = make_great(magicianNames);
// the list has been modified
show_magicians(greatMagicians);
