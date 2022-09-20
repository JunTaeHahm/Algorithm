const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);
let c = Number(input[1]);

let hour = Math.floor((a * 60 + b + c) / 60);
let min = Math.floor((a * 60 + b + c) % 60);

if (hour >= 24) {
  hour -= 24;
}

console.log(hour, min);
