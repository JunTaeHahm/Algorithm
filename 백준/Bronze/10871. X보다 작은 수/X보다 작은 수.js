const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let a = input[0].split(' ').map((item) => +item);
let b = input[1].split(' ').map((item) => +item);
let answer = [];

for (let i = 0; i < a[0]; i++) {
  if (b[i] < a[1]) {
    answer.push(b[i]);
  }
}

console.log(answer.join(' '));
