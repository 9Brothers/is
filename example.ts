import { Is } from "./is";

console.info(`Is a date object: ${Is.Date(new Date())}\n`);

console.error(`Is a date object: ${Is.Date("hello")}`);