/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // let curA = headA, curB = headB;
    // const mapA = new Set();
    // while(curA) {
    //   mapA.add(curA);
    //   curA = curA.next;
    // }
    // while(curB) {
    //   if (mapA.has(curB)) {
    //     return curB;
    //   }
    //   curB = curB.next;
    // }
    // return null;

    // 双指针
    if (!headA || !headB) {
      return null;
    }
    let curA = headA,curB = headB;
    while(curA !== curB) {
      curA = curA === null ? headB : curA.next;
      curB = curB === null ? headA : curB.next;
    }
    return curA;
};