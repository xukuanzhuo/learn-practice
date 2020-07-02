// Populating Next Right Pointers in Each Node II

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  helper(root)
  return root 
};

function helper(node) {
  if (node === null) return node
  if (node.left) {
    node.left.next = node.right
  }

  if (node.right && node.next) {
    node.right.next = node.next.left
  }
  helper(node.left)
  helper(node.right)
}
