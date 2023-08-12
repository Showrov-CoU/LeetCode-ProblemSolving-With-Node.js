const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input);
    });
  });
}

async function createArray() {
  const array = [];

  for (let i = 0; i < 3; i++) {
    const input = await getInput(
      `Enter values for row ${i + 1} separated by spaces: `
    );
    const row = input.split(" ").map(Number);
    console.log(Array.isArray(row));
    array.push(row);
  }

  rl.close();

  return array;
}

createArray().then((array) => {
  console.log("User input array:", array);
});
