// Binary-tree Post-Order-Traversal
/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function postorderTraversal(root: TreeNode | null): number[] {
  const result: Array<number> = []
  const stack: Array<TreeNode> = []
  let node: TreeNode = root
  while (node !== null || stack.length > 0) {
    if (node !== null) {
      stack.push(node)
      result.unshift(node.val)
      node = node.right
    } else {
      node = stack.pop()
      node = node.left
    }
  }
  return result
};
