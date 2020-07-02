// Binary-tree Post-Order-Traversal
/**
 * Definition for a binary tree node.
 */
import { TreeNode } from '../interface'
  
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
