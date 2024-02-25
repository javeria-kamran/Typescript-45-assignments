// Great_Magicians

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

// Making array of names
let magicianNames: string[] = ["David Copperfield", "Derren brown", "David blein", "David devent"];

// Calling function to modify the array 
let greatMagicians = make_great(magicianNames);

// the list has been modified
show_magicians(greatMagicians);