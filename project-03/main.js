var personName = "Siri";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
