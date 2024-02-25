var guests = [
    "Edward Cullen",
    "Robert pattinson",
    "Darco Malfoy",
    "Hameen Sikander",
    "Hashim kardar",
    "Faris Taheer ghazi",
    "jihan sikander",
];
// step#01: Inviting them to tell that there's a bigger table .
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Hey Dear  ".concat(guest, " We have a bigger table for hangout."));
}
// step#02: Add a newone to the beggining of Array
var Begguest = "Adam Carlsen";
guests.unshift(Begguest);
console.log(guests);
// step#03: adding in the middle of the Array
var middleone = "Noah Calhoun";
var middleindex = Math.floor(guests.length / 2);
guests.splice(middleindex, 0, middleone);
console.log(guests);
// step#04: adding in the ending a new one
var endone = "Peeta Mallark";
guests.push(endone);
console.log(guests);
// stepfinal: print new message for each
console.log("A new invitation:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, " You will be warmly welcome on our grand Ball."));
}
