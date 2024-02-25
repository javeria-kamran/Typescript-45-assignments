var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// step#01: making the array of travel destinantions
var DreamTravelDestinations = ["Saudi Arabia",
    "Norway",
    "Greece",
    "Germany",
    "Vince",
    "Maldives",
    "United Kingdom"];
//  Printing array in its original array
console.log(DreamTravelDestinations);
// printing array in alphabetical order
console.log("\n  Alphabetical order without modifying the original list");
console.log(__spreadArray([], DreamTravelDestinations, true).sort());
// showing that array is still in original order by printing it again
console.log("\n showing that array is still in original order by printing it again");
console.log(DreamTravelDestinations);
// reverse alphabeticall order without changing order
console.log("\n In reverse alphabetical order without changing it");
console.log(__spreadArray([], DreamTravelDestinations, true).sort().reverse());
// showing that array is still in its original order
console.log("\n showing that array is still in original order by printing it again");
console.log(DreamTravelDestinations);
// reverse the order first and print the array to show that it has changed
console.log("\n showing the reversed order");
DreamTravelDestinations.reverse();
console.log(DreamTravelDestinations);
// reversing the list again then printing list back again to its order
console.log("\nOriginal order");
DreamTravelDestinations.reverse();
console.log(DreamTravelDestinations);
// sorting array in alphabetical order print to show that array has changed
console.log("\nAlphabetical order");
DreamTravelDestinations.sort();
console.log(DreamTravelDestinations);
// change the array stored in reverse alphabetical order print to show the list has changed
console.log("\nChange to reverse alphabetical order");
DreamTravelDestinations.sort().reverse();
console.log(DreamTravelDestinations);
