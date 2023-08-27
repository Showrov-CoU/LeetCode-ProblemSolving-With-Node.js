const integerReplacement = (n) => {
  if (n === 1) return 0;
  if (n % 2 === 0) {
    return 1 + integerReplacement(n / 2);
  } else
    return 1 + Math.min(integerReplacement(n + 1), integerReplacement(n - 1));
};
process.stdin.on("data", (data) => {
  let result = integerReplacement(parseInt(data.toString().trim()));
  console.log(result);
});
