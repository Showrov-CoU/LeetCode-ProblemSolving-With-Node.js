const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const inputSize = new Promise((resolve, reject) => {
  rl.question("", (input) => {
    resolve(parseInt(input));
    rl.close();
  });
});

const createSpiralMatrix = (n) => {
  let result = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  let topRow = 0,
    bottomRow = n - 1,
    leftCol = 0,
    rightCol = n - 1;
  (lowestValue = 1), (highestValue = n * n);

  while (leftCol <= rightCol && topRow <= bottomRow) {
    for (let i = leftCol; i <= rightCol; i++) {
      result[leftCol][i] = lowestValue;
      lowestValue++;
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      result[i][rightCol] = lowestValue;
      lowestValue++;
    }
    rightCol--;

    for (let i = rightCol; i >= leftCol; i--) {
      result[bottomRow][i] = lowestValue;
      lowestValue++;
    }
    bottomRow--;

    for (let i = bottomRow; i >= topRow; i--) {
      result[i][leftCol] = lowestValue;
      lowestValue++;
    }
    leftCol++;
  }
  return result;
};

inputSize.then((input) => {
  const result = createSpiralMatrix(input);
  console.log(result);
});
