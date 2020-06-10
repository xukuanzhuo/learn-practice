// Linked List Cycle II
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null || head.next === null) return null
  
  let walker = runner = entry = head
  while (runner.next && runner.next.next) {
    walker = walker.next
    runner = runner.next.next
    if (walker === runner) {
      while (walker != entry) {
        walker = walker.next
        entry = entry.next
      }
      return entry
    }
  }
  return null
};
