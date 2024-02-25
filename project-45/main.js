// Cars
function create_car(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var _a = 0, additionalInfo_1 = additionalInfo; _a < additionalInfo_1.length; _a++) {
        var info = additionalInfo_1[_a];
        car[info[0]] = info[1];
    }
    return car;
}
// required information and two other name-value pairs
var carInfo = create_car("Toyota", "Supra", ["black", "white"], ["year", 2018]);
// Printing Object that's returned:
console.log(carInfo);
