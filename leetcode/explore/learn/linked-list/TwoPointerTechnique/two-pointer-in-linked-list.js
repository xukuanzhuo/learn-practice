// Initialize slow & fast pointers
let slow = fast = head

/**
 * Change this condition to fit specific problem.
 * Attention: remember to avoid null-pointer error
 **/
while (slow && fast && fast.next) {
  slow = slow.next;         // move slow pointer one step each time
  fast = fast.next.next;    // move fast pointer two steps each time
  if (slow === fast) {      // change this condition to fit specific problem
      return true;
  }
}
return false;   // change return value to fit specific problem