let guests: Array<string> = [
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
]
// message to invite only two.
console.log(`I would like to invite two people for dinner`)

// removing the name of guests until only two name remains.
while(guests.length > 2)
 {
let removeguest = guests.pop()
console.log(`Sorry, ${removeguest}, The Dinner is postponed for now.`)
}

// two people which will remain in the list
for (let guest of guests)
{
    console.log(`Hey, ${guest} You are still the part of our grand ball.`)
}

// removing the last two names and making an empty list
guests.pop()
guests.pop()

// empty string
console.log(`Guests invited on dinner` , guests)
