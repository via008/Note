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
/**
 * 快慢指针分析：设链表头到环入口需要走的步数为 a，走完环的步数为 b
 * 设置快慢指针 fast，slow 在第一次相遇时走过的步数分别为 f，s
 * f = 2s (fast 每次两步，slow每次一步)
 * f = s + nb (快指针在环内追上慢指针，一定是慢指针走过的步数 + 环长度的整数倍)
 * 两式相减得出慢指针此时走过的步数：s = nb (环的整数倍)
 * 此时只需要再走 a 步就能到达环的入口
 */
 var detectCycle = function(head) {
    // 快慢指针
    // let slow = head;
    // let fast = head;

    // while(true) {
    //   if (!fast || !fast.next) {
    //     return null;
    //   }
    //   // slow 每次走一步，fast 每次走两步
    //   slow = slow.next;
    //   fast = fast.next.next;
    //   // 两指针第一次相遇，则 slow 指针走了 nb 步
    //   if (fast === slow) {
    //     break;
    //   }
    // }

    // fast = head;
    // while(fast !== slow) {
    //   fast = fast.next;
    //   slow = slow.next;
    // }

    // return fast;

    // 标记法
    const set = new Set();
    while(head) {
      if (set.has(head)) {
        return head;
      }
      set.add(head);
      head = head.next;
    }
    return null;
};