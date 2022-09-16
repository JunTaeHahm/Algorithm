const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim();

input = input.split(' ').map((item) => +item);

const chess = '1,1,2,2,2,8'.split(',').map((item) => +item);

for (i = 0; i < input.length; i++) {
  console.log(chess[i] - input[i]);
}
