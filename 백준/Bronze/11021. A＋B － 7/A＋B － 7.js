const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n');


let cnt = +input[0];
let sum = 0;

for (let i = 1; i <= cnt; i++) {
  let newArr = input[i].split(' ').map((item) => +item);
  sum = newArr[0] + newArr[1];

  console.log(`Case #${i}: ${sum}`);
}
