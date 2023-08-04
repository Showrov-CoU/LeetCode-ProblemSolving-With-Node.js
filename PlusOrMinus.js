const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

function solution(testCAse) {
  if (testCAse === 0) {
    rl.close();
    return;
  }
  rl.question("", (input) => {
    const [a, b, c] = input.split(" ").map((item) => parseInt(item));
    if (a + b === c) console.log("+");
    else console.log("-");

    solution(testCAse--);
  });
}

rl.question("", (testCAse) => {
  solution(testCAse);
});
