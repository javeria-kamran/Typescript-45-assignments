var guests = [
    'Adam Carlsen',
    'Edward Cullen',
    'Robert pattinson',
    'Darco Malfoy',
    'Noah Calhoun',
    'Hameen Sikander',
    'Hashim kardar',
    'Faris Taheer ghazi',
    'jihan sikander',
    'Peeta Mallark'
];
// message to invite only two.
console.log("I would like to invite two people for dinner");
// removing the name of guests until only two name remains.
while (guests.length > 2) {
    var removeguest = guests.pop();
    console.log("Sorry, ".concat(removeguest, ", The Dinner is postponed for now."));
}
// two people which will remain in the list
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Hey, ".concat(guest, " You are still the part of our grand ball."));
}
// removing the last two names and making an empty list
guests.pop();
guests.pop();
// empty string
console.log("Guests invited on dinner", guests);
