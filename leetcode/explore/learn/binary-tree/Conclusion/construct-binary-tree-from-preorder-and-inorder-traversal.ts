// Construct Binary Tree from Preorder and Inorder Traversal
import { TreeNode } from '../interface'

let preIndex: number = 0, inIndex: number = 0
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return build(preorder, inorder, null)
};

function build(preorder: number[], inorder: number[], end: TreeNode | null): TreeNode | null {
  if (inIndex >= inorder.length) return null
  
  const node: TreeNode = new TreeNode(preorder[preIndex++])
  
  if (inorder[inIndex] !== node.val) {
    node.left = build(preorder, inorder, node)
  }
  inIndex++

  if (end === null || inorder[inIndex] !== end.val) {
    node.right = build(preorder, inorder, end)
  }

  return node
}

const preorder = [3,9,20,15,7]
const inorder = [9,3,15,20,7]
const node = buildTree(preorder, inorder)
console.dir(node)
