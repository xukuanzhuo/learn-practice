// 有k种面值的硬币，面值分别为c1,c2 ... ck,每种硬币的数量无限，再给一个总金额amount
// 问最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1 

// top-down with cache
function coinChange(coins, amount) {
  const memo = []
  function dp(n) {
    if (memo[n]) return memo[n]
    if (n === 0) return 0
    if (n < 0) return -1
    let res = Infinity
    for (let i in coins) {
      subproblem = dp(n - coins[i])
      if (subproblem !== -1) {
        res = Math.min(res, 1 + subproblem)
      }
    }
    memo[n] = res !== Infinity ? res : -1
    return memo[n]
  }

  return dp(amount)
}

// down-top
function coinChangeDp(coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i=0; i < dp.length; i++) {
    for (let j in coins) {
      if (i - coins[j] >=0) {
        dp[i] = Math.min(dp[i], 1+dp[i-coins[j]])
      }
    }
  }
  return dp[amount] === (amount + 1) ? -1 : dp[amount]
}
