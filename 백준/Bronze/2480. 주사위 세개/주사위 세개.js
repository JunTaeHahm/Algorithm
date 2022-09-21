const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(Number);

const [a, b, c] = [...input];

const answer = (a, b, c) => {
  if (a === b && a === c && b === c) return console.log(10000 + a * 1000);

  if (a !== b || b !== c || a !== c) {
    if (a === b || a === c) return console.log(1000 + a * 100);
    if (b === c) return console.log(1000 + b * 100);
  }

  if (a !== b || b !== c || a !== c) {
    maxNum = Math.max(a, b, c);
    return console.log(maxNum * 100);
  }
};

answer(a, b, c);
