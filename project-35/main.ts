let favanimals: string[] = ["Snakes", "Black Panthers", "Lion"];

// Name of each animal
console.log("Favourite animal names:");
for (let animal of favanimals) {
    console.log(animal);
}

// Line for every animal
console.log("\nLine for every animal:");
for (let animal of favanimals) {
    console.log(` ${animal.toLowerCase()} are dangerous and wild animals.`);
}
// Special line
console.log("\nAll of them are my most favourite because everyone get scared from them easily.");