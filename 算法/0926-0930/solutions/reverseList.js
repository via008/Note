function reverseList(head) {
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
