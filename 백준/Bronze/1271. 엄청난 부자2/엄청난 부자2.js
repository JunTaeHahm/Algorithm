const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

const money = input[0];
const people = input[1];

console.log((money / people).toString());
console.log((money % people).toString());
