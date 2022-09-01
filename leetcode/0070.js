
// https://leetcode-cn.com/problems/climbing-stairs/
var climbStairs = function (n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

console.log(climbStairs(2), climbStairs(3))

// https://leetcode-cn.com/problems/min-cost-climbing-stairs/
var minCostClimbingStairs = function (cost) {
  // const n = cost.length;
  // const dp = new Array(n);
  // dp[0] = dp[1] = 0;
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  // }
  // return dp[n]

  const n = cost.length;
  let prev = 0, curr = 0;
  for (let i = 2; i <= n; i++) {
    let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
    prev = curr;
    curr = next;
  }
  return curr;
};
console.log(minCostClimbingStairs([10, 15, 20]), minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))

// https://leetcode-cn.com/problems/house-robber/
var rob = function (nums) {
  const n = nums.length - 1;
  // const dp = new Array(n);
  // dp[0] = nums[0]
  // dp[1] = Math.max(nums[0], nums[1])
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  // }
  // return dp[n]

  let prev = nums[0];
  let curr = Math.max(nums[0], nums[1]);
  let next = 0;
  for (let i = 2; i <= n; i++) {
    next = Math.max(curr, prev + nums[i]);
    prev = curr;
    curr = next;
  }
  return curr;
};
console.log(rob([2, 1]), rob([1, 2, 3, 1]), rob([2, 7, 9, 3, 1]))

// https://leetcode-cn.com/problems/house-robber-ii/
var rob2 = function (nums) {
  const length = nums.length;
  if (length === 1) {
    return nums[0];
  } else if (length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};

const robRange = (nums, start, end) => {
  let first = nums[start], second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
}
console.log(rob2([2, 1, 1, 2]), rob2([2, 1]), rob2([2, 3, 2]), rob2([1, 2, 3, 1]), rob2([0]), rob2([2, 7, 9, 3, 1]))