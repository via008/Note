/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const mergeTwo = (head1, head2) => {
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }

  const dummyHead = new ListNode(0);
  let temp = dummyHead, temp1 = head1, temp2 = head2;

  while(temp1 && temp2) {
    if (temp1.val > temp2.val) {
      temp.next = temp2;
      temp2 = temp2.next;
    } else {
      temp.next = temp1;
      temp1 = temp1.next;
    }
    temp = temp.next;
  }

  if (temp1) {
    temp.next = temp1;
  }
  if (temp2) {
    temp.next = temp2;
  }

  return dummyHead.next;
}

const sortTwoList = (head, tail) => {
  if (head === null) {
    return head;
  }

  if (head.next === tail) {
    head.next = null;
    return head;
  }

  let slow = head, fast = head;
  while(fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }

  const center = slow;
  return mergeTwo(sortTwoList(head, center), sortTwoList(center, tail));
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  /**
   * 归并排序
   * 1. 先用快慢指针（慢指针一次移动一步，快指针一次移动两步）的方式找到链表的中点
   * 2. 分别排序两个链表
   * 3. 然后合并两个有序链表
   */

  return sortTwoList(head, null);
};