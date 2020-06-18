// Symmetric Tree
// recursion solution
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  return helper(root.left, root.right)
};
function helper(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true
  } else if (!p || !q) {
    return false
  }
  if (p.val !== q.val) return false

  return helper(p.left, q.right) && helper(p.right, q.left)
}

// iterative solution