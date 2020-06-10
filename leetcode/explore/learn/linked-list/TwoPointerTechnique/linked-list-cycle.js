// Linked List Cycle
// Given a linked list, determine if it has a cycle in it.
// To represent a cycle in the given linked list, we use an integer pos which represents
// the position(0 - indexed) in the linked list where tail connects to.If pos is - 1,
// then there is no cycle in the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let walker = runner = head
  while (walker !== null && runner !== null && runner.next !== null) {
    walker = walker.next
    runner = runner.next.next
    if (walker == runner) return true
  }
  return false
};
