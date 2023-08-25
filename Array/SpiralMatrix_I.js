const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const getInput = (prompt) => {
  return new Promise((resolve, reject) => {
    rl.question(prompt, (input) => {
      resolve(input);
    });
  });
};

const create2DArray = async () => {
  const NumberOfRowAndCol = await getInput(
    "Enter the number of Row and Column: "
  );
  const [m, n] = NumberOfRowAndCol.split(" ").map(Number);

  const twoDArray = [];
  for (let i = 0; i < m; i++) {
    const input = await getInput(`Enter ${i + 1} row with ${n} column: `);
    const row = input.split(" ").map(Number);
    twoDArray.push(row);
  }
  rl.close();
  return twoDArray;
};

/*
 * Print Spiral Order of 2D array
 */
const printSpiralOrder = (twoDArray) => {
  let result = [];

  let topRow = 0,
    bottomRow = twoDArray.length - 1,
    leftCol = 0,
    rightCol = twoDArray[0].length - 1;

  while (leftCol <= rightCol && topRow <= bottomRow) {
    for (let i = leftCol; i <= rightCol; i++) {
      result.push(twoDArray[topRow][i]);
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      result.push(twoDArray[i][rightCol]);
    }
    rightCol--;

    if (topRow <= bottomRow) {
      for (let i = rightCol; i >= leftCol; i--) {
        result.push(twoDArray[bottomRow][i]);
      }
      bottomRow--;
    }

    if (leftCol <= rightCol) {
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(twoDArray[i][leftCol]);
      }
      leftCol++;
    }
  }
  console.log(result);
};

create2DArray().then((twoDArray) => {
  printSpiralOrder(twoDArray);
});
