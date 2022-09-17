const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(BigInt);

const A = input[0];
const B = input[1];

let answer = A + B + '\n';
answer += A - B + '\n';
answer += A * B;

console.log(answer);
