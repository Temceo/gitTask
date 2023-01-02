const prompt = require("prompt-sync")({ sigint: true });
const message = prompt("Enter your message: ");
console.log(`Your message: ${message}`);
