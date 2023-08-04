const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

function removeDuplicate() {
  rl.question("", (input) => {
    let arr = input.split(" ").map((item) => parseInt(item));

    let j = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[j] === arr[i]) continue;
      else {
        j += 1;
        arr[j] = arr[i];
      }
    }

    console.log(j + 1);
    rl.close();
  });
}

removeDuplicate();
