// Construct Binary Tree from Inorder and Postorder Traversal
import { TreeNode } from '../interface'

let pInorder: number
let pPostorder: number
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  pInorder = inorder.length - 1
  pPostorder = postorder.length - 1

  return helper(inorder, postorder, null)
}

function helper(inorder: number[], postorder: number[], end: TreeNode | null) {
  if (pPostorder < 0) return null

  const n: TreeNode = new TreeNode(postorder[pPostorder--])

  if (inorder[pInorder] != n.val) {
    n.right = helper(inorder, postorder, n)
  }
  pInorder--
  
  if ((end === null) || (inorder[pInorder] !== end.val)) {
    n.left = helper(inorder, postorder, end)
  }
  
  return n
}
const inorder = [9,3,15,20,7]
const postorder = [9,15,7,20,3]
const node = buildTree(inorder, postorder)