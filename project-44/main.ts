// okay,let's make sandwich

function order_sandwich(...items: string[]): void {
    console.log("Sandwich categories:");
    if (items.length > 0) {
        console.log(`- Bread`);
        for (let item of items) {
            console.log(`- ${item}`);
        }
        console.log(`- Bread`);
    } else {
        console.log("Oops! It seems you are not making sandwich bcz you don't have all ingredients .");
    }
    console.log("\n");
}
//  three times with a different number of arguments each time:
order_sandwich("egg", "Cheese", "black pepper");
order_sandwich("corriander", "Tomato");
order_sandwich("Chicken");