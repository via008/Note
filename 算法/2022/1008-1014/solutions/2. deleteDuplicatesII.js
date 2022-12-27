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
  // 迭代
  if (!head || !head.next) {
    return head;
  }
  const newHead = new ListNode(0, head);
  let cur = newHead;

  while(cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const dup = cur.next.val;
      while(cur.next && cur.next.val === dup) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  
  return newHead.next;
}