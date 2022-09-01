// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let ret = new ListNode(0, head)
  let slow = ret
  let fast = ret
  while (n--) fast = fast.next
  if (!fast) return ret.next
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  console.log(slow)
  console.log(fast)
  console.log(ret)
  console.log(JSON.stringify(ret.next))
  return ret.next
}

removeNthFromEnd(
  {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  },
  2,
)
