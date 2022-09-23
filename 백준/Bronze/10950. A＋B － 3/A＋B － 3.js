const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift().split(',');

let answer = [];
for (let i = 0; i < input.length; i++) {
  answer = input[i].split(' ').map(Number);
  console.log(answer[0] + answer[1]);
}
