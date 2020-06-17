// Binary Tree inorder Traversal
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
var inorderTraversal = function (root) {
  const list = []
  const traversal = (node, list) => {
    if (node !== null) {
      if (node.left !== null) {
        traversal(node.left, list)
      }
      list.push(node.val)
      if (node.right !== null) {
        traversal(node.right, list)
      }
    }
  }
  traversal(root, list)
  return list
};

// iterative solution
var inorderTraversal = function (root) {
  const list = [], stack = []
  let node = root
  while (node !== null || stack.length > 0) {
    if (node !== null) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      list.push(node.val)
      node = node.right
    }
  }
  return list
};
