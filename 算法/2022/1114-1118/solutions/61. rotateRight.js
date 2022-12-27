/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (k === 0 || !head || !head.next) {
    return head;
  }

  let cur = head;
  let sum = 1;
  // 先找到链表的节点个数
  while (cur.next) {
    cur = cur.next;
    sum ++;
  }

  let add = sum - k % sum;
  // 如果是整数倍，直接返回当前链表
  if (add === sum) {
    return head;
  }

  // 将链表闭合为环
  cur.next = head;
  // 找到头结点
  while(add) {
    cur = cur.next;
    add --;
  }

  // 返回以当前节点为头结点的链表
  const result = cur.next;
  cur.next = null;
  return result;
};