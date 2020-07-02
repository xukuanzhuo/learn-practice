import { TreeNode } from '../interface'

function preorderTraversalRecursion(root: TreeNode): number[] {
  const ret: number[] = []
  function helper(node: TreeNode, arr: number[]) {
    if (node) {
      arr.push(node.val)
      helper(node.left, arr)
      helper(node.right, arr)
    }
  }
  helper(root, ret)
  return ret
}

function preorderTraversalIterator(root: TreeNode): number[] {
  const ret: number[] = [], stack: TreeNode[] = []
  let node: TreeNode = root
  while (node !== null || stack.length > 0) {
    ret.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    node = node.left
    if (node === null && stack.length > 0) {
      node = stack.pop()
    }
  }
  return ret
}

function inorderTraversalRecursion(root: TreeNode): number[] {
  const ret: number[] = []
  function helper(node: TreeNode, arr: number[]) {
    if (node !== null) {
      if (node.left) {
        helper(node.left, arr)
      }
      arr.push(node.val)
      if (node.right) {
        helper(node.right, arr)
      }
    }
  }
  helper(root, ret)
  return ret
}

function inorderTraversalIterator(root: TreeNode): number[] {
  const ret: number[] = [], stack: TreeNode[] = []
  let node: TreeNode = root
  while (node !== null || stack.length > 0) {
    if (node !== null) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      ret.push(node.val)
      node = node.right
    }
  }

  return ret
}

function postorderTraversalRecursion(root: TreeNode): number[] {
  const ret: Array<number> = []
  function helper(node: TreeNode ,arr: number[]) {
    if (node !== null) {
      ret.unshift(node.val)
      if (node.right !== null) {
        helper(node.right, ret)
      }
      if (node.left !== null) {
        helper(node.left, ret)
      }
    }
  }
  helper(root, ret)
  return ret
}

function postorderTraversalIterator(root: TreeNode): number[] {
  const ret: number[] = [], stack: TreeNode[] = []
  let node: TreeNode = root
  while (node !== null || stack.length > 0) {
    if (node !== null) {
      stack.push(node)
      ret.unshift(node.val)
      node = node.right
    } else {
      node = stack.pop()
      node = node.left
    }
  }
  return ret
}