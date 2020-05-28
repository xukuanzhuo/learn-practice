function fib(n) {
  if (n < 1) return 0;
  const cache = []
  return dp(cache, n)
}

// fib自顶向下，备忘录方式缓存
function dp(cache, n) {
  if (n === 1 || n === 2) return 1;

  if (cache[n] !== undefined) return cache[n]
  cache[n] = dp(cache, n - 1) + dp(cache, n - 2)

  return cache[n]
}

// fib自顶向上，dp数组迭代
function fibBottom(N) {
  const dp = []
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N];
}
