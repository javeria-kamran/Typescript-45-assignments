// Magicians

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// array of magician's names
let magicianNames: string[] = ["Doug Henning", "Max Maven", "Siegfried & Roy", "Eugene Burger"];

// Calling  function to print  each magician in the array
show_magicians(magicianNames);