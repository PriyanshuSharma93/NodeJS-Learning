const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// console.log("1");
// // Blocking ......
// const result = fs.readFileSync("contacts.txt","utf-8");
// console.log(result);
// console.log("2");


console.log("1");

// Non-Blocking

fs.readFile("contacts.txt", "utf-8", (err, result) => {
    console.log(result);
});

console.log("2");
console.log("3");
console.log("4");


// Synchronous call
// fs.writeFileSync("./test.txt", "Hey world");

// Asynchronous
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
// });

// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

// if (fs.existsSync("./copy.txt")) {
//     fs.unlinkSync("./copy.txt");
// }

// console.log(fs.statSync("./test.txt"));

// fs.mkdirSync("my-docss/a/b",{recursive: true});