const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const maxSubarray = (nums) => {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

rl.question("", (nums) => {
  nums = nums.split(" ").map((item) => parseInt(item));

  console.log(maxSubarray(nums));

  rl.close();
});
