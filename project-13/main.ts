let cars: Array<[transport: string, brand: string]> = []
cars.push(["speedy car " , "Bugatti Chiron."])
cars.push(["Beasty car " , "RollsRoyce."])
cars.push(["Luxorious car " , "Aston Martin."])
cars.push(["Automotive car" , "McLaren."])
cars.push(["Luxury Sports Car" , "Lamborghini."])

cars.forEach(([ transport, Brand]) => { console.log(`I would like to own a ${transport} ${Brand} `)})