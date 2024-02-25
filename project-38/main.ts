
// Cities!

function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Istanbul", "Turkey");
describe_city("Gaza", "Palestine");
describe_city("Israel"); // Uses the default country value "Unknown"