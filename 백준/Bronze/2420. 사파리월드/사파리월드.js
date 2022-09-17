const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const [A, B] = [input[0], input[1]];

const answer = Math.abs(A-B);

console.log(answer);
