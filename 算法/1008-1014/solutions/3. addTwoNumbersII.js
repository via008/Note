/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseList = function(head) {
  let pre = null;
  let cur = head;

  while (cur) {
    const temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }

  return pre;
}

var addTwoList = function(l1, l2) {
  let head = null;
  let cur = null;
  let carry = 0;
  while(l1 || l2 || carry) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;
    const sum = l1Val + l2Val + carry;
    if (!head) {
      head = cur = new ListNode(sum % 10);
    } else {
      cur.next = new ListNode(sum % 10);
      cur = cur.next;
    }
    carry = Math.floor(sum / 10);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return reverseList(head);
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  // 翻转链表法
  // return addTwoList(reverseList(l1), reverseList(l2))

  // 栈
  const stack1 = [], stack2 = [];
  let cur1 = l1, cur2 = l2;
  // 推入栈
  while(cur1) {
    stack1.unshift(cur1.val);
    cur1 = cur1.next;
  }
  while(cur2) {
    stack2.unshift(cur2.val);
    cur2 = cur2.next;
  }
  
  let newHead = new ListNode(0);
  let carry = 0;

  while(stack1.length || stack2.length || carry) {
    const num1 = stack1.shift() || 0;
    const num2 = stack2.shift() || 0;
    const sum = num1 + num2 + carry;
    carry = Math.floor(sum / 10);

    // 头结点插入
    const temp = newHead.next;
    newHead.next = new ListNode(sum % 10);
    newHead.next.next = temp;
  }

  return newHead.next;
};