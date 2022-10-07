const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs.readFileSync(filePath).toString();

/* number로 변환 */
let num = Number(input);

/* 빈 배열 만들기 */
let star = new Array(num).fill(' ');

for (let i = input - 1; i >= 0; i--) {
  /* 배열 뒤에서 부터 별 채우기 */
  star[i] = '*';

  /* join으로 문자열로 변환 */
  console.log(star.join(''));
}
