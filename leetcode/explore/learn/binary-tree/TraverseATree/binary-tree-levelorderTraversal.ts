// Binary Tree levelOrderTraversal
/**
 * Definition for a binary tree node.
 */
import { TreeNode } from '../interface'

function levelOrder(root: TreeNode | null): number[][] {
  let list: number[][] = [], stack: TreeNode[] = []
  if (root === null) return list
  stack = [root]
  list.push([root.val])
  while (stack.length > 0) {
    const tempArr: number[] = [], tempStack: TreeNode[] = []
    for (let i = 0; i < stack.length; i++) {
      const node: TreeNode = stack[i]
      if (node.left) {
        tempArr.push(node.left.val)
        tempStack.push(node.left)
      }
      if (node.right) {
        tempArr.push(node.right.val)
        tempStack.push(node.right)
      }
    }
    stack = tempStack
    if (tempArr.length > 0) list.push(tempArr)
  }

  return list
};