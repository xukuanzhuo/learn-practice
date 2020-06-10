// Design Linked List

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * Initialize your data structure here.
 */
class MyLinkedList {
  constructor() {
    this.head = new Node(0)
    this.size = 0
  }

  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index >= this.size) return -1
    let temp = this.head.next
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp.val
  }

  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const temp = this.head.next
    this.head.next = new Node(val)
    this.head.next.next = temp
    this.size++
  }

  /**
   * Append a node of value val to the last element of the linked list. 
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    let temp = this.head
    while (temp.next !== null) {
      temp = temp.next
    }
    temp.next = new Node(val)
    this.size++
  }

  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
   * @param {number} index 
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index > this.size) return
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    const next = temp.next
    temp.next = new Node(val)
    temp.next.next = next
    this.size++
  }

  /**
   * Delete the index-th node in the linked list, if the index is valid. 
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index >= this.size) return
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    const next = temp.next
    temp.next = next.next
    next.next = null
    this.size--
  }
}
