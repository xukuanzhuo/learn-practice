// Remove Nth Node From End of List
// Given a linked list, remove the n-th node from the end of list and return its head.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const headNode = new ListNode(0)
  headNode.next = head
  let slow = fast = headNode
  while (fast !== null) {
    if (n < 0) {
      slow = slow.next
    }
    fast = fast.next
    n--
  }
  if (slow.next !== null) {
    slow.next = slow.next.next
  }
  return headNode.next
};