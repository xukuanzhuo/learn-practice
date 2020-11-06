function fib(n) {
  if (n === 1 || n === 2) return 1
  return fib(n-1) + fib(n-2)
}

function fibCache(n) {
  if (n < 1) return 0
  const memo = []

  function helper(memo, n) {
    if (n === 1 || n === 2) return 1
    if (memo[n]) return memo[n]
    memo[n] = helper(memo, n-1) + helper(memo, n-2)
    return memo[n]
  }
  return helper(memo, n)
}

function fibDp(n) {
  const dp = []
  dp[1] = dp[2] = 1
  for (let i=3; i<=n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}

console.log(fibDp(100))