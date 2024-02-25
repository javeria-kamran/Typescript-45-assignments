// okay,let's make sandwich
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich categories:");
    if (items.length > 0) {
        console.log("- Bread");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
        console.log("- Bread");
    }
    else {
        console.log("Oops! It seems you are not making sandwich bcz you don't have all ingredients .");
    }
    console.log("\n");
}
//  three times with a different number of arguments each time:
order_sandwich("egg", "Cheese", "black pepper");
order_sandwich("corriander", "Tomato");
order_sandwich("Chicken");
