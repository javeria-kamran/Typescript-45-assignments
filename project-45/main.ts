// Cars

interface Cars {
    manufacturer: string;
    modelName: string;
    [key: string]: string | number; //  additional properties with string and number 
}

function create_car(manufacturer: string, modelName: string, ...additionalInfo: [string, string | number][]): Cars {
    let car: Cars = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    for (let info of additionalInfo) {
        car[info[0]] = info[1];
    }

    return car;
}

// required information and two other name-value pairs
let carInfo = create_car("Toyota", "Supra", ["black", "white"], ["year", 2018]);

// Printing Object that's returned:
console.log(carInfo);