// UnChanged_Magicians
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Make an array of magician's names
var magicianNames = ["David Copperfield", "Derren brown", "David blein", "David devent"];
// copy of the array to create a new array with "the Great" 
var greatMagicians = make_great(__spreadArray([], magicianNames, true));
// each array to show the original and modified lists
console.log("Just wow magicians:");
show_magicians(magicianNames);
console.log("\nMagicians with 'the Great':");
show_magicians(greatMagicians);
