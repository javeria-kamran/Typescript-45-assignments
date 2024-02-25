// Cities!
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city("Istanbul", "Turkey");
describe_city("Gaza", "Palestine");
describe_city("Israel"); // Uses the default country value "Unknown"
