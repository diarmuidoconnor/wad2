import {
    promises as fs
} from 'fs';
//reading 1 file asychronously using promises.
console.log("about to read...");
fs.readFile("test-1.txt", "utf8").then((contents) => {
    console.log(contents);
}).catch((error) => {
    console.error("Failed to read file!", error)
});

console.log("...done");