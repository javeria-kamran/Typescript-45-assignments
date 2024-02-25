// Large T-shirts

function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`A ${size} can be printed as: "${message}".`);
}

// Large shirt with default message
make_shirt();

// Medium shirt with default message
make_shirt("Medium");

// Shirt of another size with diff message
make_shirt("Small", "TypeScript is so beautiful , so elegant just looking like a wow!");