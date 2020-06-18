// Maximum Depth of Binary Tree
function maxDepth(root: TreeNode | null): number {
  if (!root) return 1

  const leftDepth: number = maxDepth(root.left)
  const rightDepth: number = maxDepth(root.left)
  return Math.max(leftDepth, rightDepth) + 1
}
