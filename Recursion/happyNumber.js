const map = {};

function digitSquareSum(n) {
  let sum = 0;
  while (n !== 0) {
    let digit = n % 10;
    n = parseInt(n / 10);
    sum += digit * digit;
  }
  return sum;
}

const isHappy = (n) => {
  const sum = digitSquareSum(n);
  if (map[sum]) {
    return false;
  } else {
    if (sum === 1) {
      return true;
    } else {
      map[sum] = true;
      return isHappy(sum);
    }
  }
};

process.stdin.on("data", (data) => {
  let result = isHappy(parseInt(data.toString().trim()));
  console.log(result);
});
