// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : '.input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

console.log(input[0]+input[1]);