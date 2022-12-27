/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // const map = new Set();
    // while(head) {
    //   if (map.has(head)) {
    //     return true;
    //   }
    //   map.add(head);
    //   head = head.next;
    // }
    // return false;

    // 快慢指针
    if (!head || !head.next) {
      return false;
    }

    let slow = head, fast = head.next;
    while(slow !== fast) {
      if (!fast || !fast.next) {
        return false;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return true;
};