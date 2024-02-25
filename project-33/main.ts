// Ordinal numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinalSuffix: string;
    if (number === 1) {
        ordinalSuffix = "st";
    } else if (number === 2) {
        ordinalSuffix = "nd";
    } else if (number === 3) {
        ordinalSuffix = "rd";
    } else {
        ordinalSuffix = "th";
    }
    console.log(`${number}${ordinalSuffix}`);
}