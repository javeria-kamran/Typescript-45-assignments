"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
var guests = [
    "Edward Cullen",
    "Harry Potter",
    "Darco Malfoy",
    "Hameen Sikander",
    "Hashim kardar",
    "Faris Taheer ghazi",
    "jihan sikander",
];
exports.guests = guests;
// step#01: Guest who can;t make it.
var rejectedinvitation = "Harry Potter";
console.log("".concat(rejectedinvitation, " can't make to come over."));
// step#02: Replacing the name who is not making it.
var Newone = "Robert Pattinson";
var indexOfrejectedinvitation = guests.indexOf(rejectedinvitation);
if (indexOfrejectedinvitation !== -1) {
    guests[indexOfrejectedinvitation] = Newone;
}
console.log(guests[1]);
// step#03: Guest who are still in my list
console.log("New invitation message");
guests.forEach(function (newone) { console.log("Dear ".concat(newone, ", I would like to invite you to dinner at 9pm at Coconut Groove.Would you like to come over? ")); });

