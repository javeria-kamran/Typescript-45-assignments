// UnChanged_Magicians

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

// Make an array of magician's names
let magicianNames: string[] = ["David Copperfield", "Derren brown", "David blein", "David devent"];

// copy of the array to create a new array with "the Great" 
let greatMagicians = make_great([...magicianNames]);

// each array to show the original and modified lists
console.log("Just wow magicians:");
show_magicians(magicianNames);

console.log("\nMagicians with 'the Great':");
show_magicians(greatMagicians);