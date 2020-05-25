// 动态规划，重叠子问题、最优子结构、状态转移方程，DP数组迭代
// 零钱凑整问题
// 备忘录方式
function coinChange(coins, amount) {
  const memo = []
  function dp(n) {
    if (memo[n] !== undefined) return memo[n]
    if (n === 0) return 0;
    if (n < 0) return -1;

    let res = 0
    for (const coin of coins) {
      const subproblem = dp(n - coin)
      if (subproblem !== -1) {
        res = res === 0 ? subproblem + 1 : Math.min(res, subproblem + 1)
      }
    }
    memo[n] = res
    return memo[n]
  }

  return dp(amount)
}

// dp数组迭代
function coinChange(coins, amount) {
  const dp = []
  // base
  db[0] = 0
  for (let i = 0; i < amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return (dp[amount] == amount + 1) ? -1 : dp[amount];
}
