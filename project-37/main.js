// Large T-shirts
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, " can be printed as: \"").concat(message, "\"."));
}
// Large shirt with default message
make_shirt();
// Medium shirt with default message
make_shirt("Medium");
// Shirt of another size with diff message
make_shirt("Small", "TypeScript is so beautiful , so elegant just looking like a wow!");
