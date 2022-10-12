const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');


for (let i = 0; i < input.length; i++) {
  let a = parseInt(input[i].split(' ')[0]);
  let b = parseInt(input[i].split(' ')[1]);

  let answer = a + b;

  if (answer === 0) {
    break;
  } else {
    console.log(answer);
  }
}
