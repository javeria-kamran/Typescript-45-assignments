// Version 1: Running the if block (green alien)

let alienColor: string = "blue";

if (alienColor === "blue") {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
// Version 2: Running the else block (non-blue alien)

let alien2Color: string = "orange"; // You can choose any color other than green

if (alien2Color === "orange") {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Nice shot! You just earned 10 points for shooting a non-green alien.");
}