let guests: Array<string> = [
    "Edward Cullen" ,
    "Harry Potter" ,
    "Darco Malfoy" ,
    "Hameen Sikander" ,
    "Hashim kardar" ,
    "Faris Taheer ghazi" ,
    "jihan sikander" ,
];
// step#01: Guest who can;t make it.

let rejectedinvitation: string = "Harry Potter"
console.log(`${rejectedinvitation} can't make to come over.`)

// step#02: Replacing the name who is not making it.

let Newone: string = "Robert Pattinson"
let indexOfrejectedinvitation: number = guests.indexOf(rejectedinvitation)
 if ( indexOfrejectedinvitation !== -1)
 {
    guests[indexOfrejectedinvitation] = Newone
 }
 console.log(guests[1])

// step#03: Guest who are still in my list

console.log("New invitation message")
guests.forEach(( newone: string ) =>
 { console.log (`Dear ${newone}, I would like to invite you to dinner at 9pm at Coconut Groove.Would you like to come over? `)})

