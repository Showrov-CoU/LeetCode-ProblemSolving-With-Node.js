const mem = {};
const climbStairs = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (mem[n]) return mem[n];
  mem[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return mem[n]; 
};
process.stdin.on("data", (data) => {
  let result = climbStairs(data.toString().trim());
  console.log(result);
});
