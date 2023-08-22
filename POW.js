const pow = (x, n) => {
  if (n == 0) return 1;

  if (n % 2 === 0) {
    let a = pow(x, n / 2);
    return a * a;
  } else {
    if (n < 0) {
      let a = pow(x, (n + 1) / 2);
      return (1 / x) * a * a;
    } else {
      let a = pow(x, (n - 1) / 2);
      return x * a * a;
    }
  }
};
process.stdin.on("data", (data) => {
  const [x, n] = data.toString().trim().split(" ").map(Number);
  console.log(pow(x.toFixed(5), n).toFixed(5));
});
