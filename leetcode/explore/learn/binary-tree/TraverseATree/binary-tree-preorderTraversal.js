// Binary Tree Preorder Traversal
// Given a binary tree, return the preorder traversal of its nodes' values.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// recursion solution
var preorderTraversal = function (root) {
  const ret = []
  const traversal = (node, ret)=> {
    if (!!node) {
      ret.push(node.val)
      traversal(node.left, ret)
      traversal(node.right, ret)
    }
  }
  traversal(root, ret)
  return ret
}

// iterative solution
var preorderTraversal = function (root) {
  const ret = [], rights = []
  while (root !== null) {
    ret.push(root.val)
    if (root.right !== null) {
      rights.push(root.right)
    }
    root = root.left
    if (root === null && rights.length > 0) {
      root = rights.pop()
    }
  }
  return ret
}
