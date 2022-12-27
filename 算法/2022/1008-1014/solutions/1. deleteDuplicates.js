/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  let pre = head, cur = head.next;
  while(cur) {
    if (pre.val === cur.val) {
      cur = cur.next;
      pre.next = cur;
    } else {
      pre = cur;
      cur = cur.next;
    }
  }
  return head;
};