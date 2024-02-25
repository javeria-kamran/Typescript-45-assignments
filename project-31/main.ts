// Username


 // Empty array to simulate no users
let usernames: string[] = []; 
if (usernames.length === 0) {
    console.log("Our company is seeking for some freshers.");
} else {
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see applications we recieved?");
        } else {
            console.log(`Hello ${username}, Thank you for logging in again.`);
        }
    }
}