// Username
// Empty array to simulate no users
var usernames = [];
if (usernames.length === 0) {
    console.log("Our company is seeking for some freshers.");
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === "admin") {
            console.log("Hello admin, would you like to see applications we recieved?");
        }
        else {
            console.log("Hello ".concat(username, ", Thank you for logging in again."));
        }
    }
}
