var cars = [];
cars.push(["speedy car ", "Bugatti Chiron."]);
cars.push(["Beasty car ", "RollsRoyce."]);
cars.push(["Luxorious car ", "Aston Martin."]);
cars.push(["Automotive car", "McLaren."]);
cars.push(["Luxury Sports Car", "Lamborghini."]);
cars.forEach(function (_a) {
    var transport = _a[0], Brand = _a[1];
    console.log("I would like to own a ".concat(transport, " ").concat(Brand, " "));
});
