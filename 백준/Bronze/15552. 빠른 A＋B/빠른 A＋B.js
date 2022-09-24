const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let answer = '';

for (i = 1; i < input.length; i++) {
  let newArr = input[i].split(' ');
  answer += +newArr[0] + +newArr[1] + '\n';
}
console.log(answer);
