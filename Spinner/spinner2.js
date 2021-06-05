process.stdout.write('hello from spinner2.js... \rheyyy\n');
let stuff = 100;

let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ","\r|   "];

for (const i of spinner) {
  setTimeout(() => {
    process.stdout.write(i);
  }, stuff)
  stuff += 200;
}