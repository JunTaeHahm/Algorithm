const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i <= input[0]; i++) {
  let newArr = input[i].split(' ').map((item) => +item);

  console.log(`Case #${i}: ${newArr[0]} + ${newArr[1]} = ${newArr[0]+newArr[1]}`);
}
