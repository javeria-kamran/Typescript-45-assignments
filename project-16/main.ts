let guests: Array<string> = [
    "Edward Cullen" ,
    "Robert pattinson" ,
    "Darco Malfoy" ,
    "Hameen Sikander" ,
    "Hashim kardar" ,
    "Faris Taheer ghazi" ,
    "jihan sikander" ,
];
// step#01: Inviting them to tell that there's a bigger table .
for( let guest of guests) {
    console.log(`Hey Dear  ${guest} We have a bigger table for hangout.`)
}

// step#02: Add a newone to the beggining of Array
let Begguest: string = "Adam Carlsen"
guests.unshift(Begguest)
console.log(guests)

// step#03: adding in the middle of the Array
let middleone: string = "Noah Calhoun"
let middleindex: number = Math.floor(guests.length/2)
guests.splice(middleindex , 0,middleone)
console.log(guests)

// step#04: adding in the ending a new one
let endone: string = "Peeta Mallark"
guests.push(endone)
console.log(guests)

// stepfinal: print new message for each
console.log("A new invitation:")
for (let guest of guests) {
    console.log(`Dear ${guest} You will be warmly welcome on our grand Ball.`)
}