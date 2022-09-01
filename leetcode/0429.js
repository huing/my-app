// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/

var levelOrder = function (root) {
  let res = [];
  let stack = [];
  let leng = 0;
  if (!root) {
    return res;
  }
  stack.push(root);
  while (stack.length !== 0) {
    leng = stack.length;
    res.push([]);
    for (let i = 1; i <= leng; ++i) {
      const node = stack.shift();
      res[res.length - 1].push(node.val);
      if (node.children) {
        stack.push(...node.children);
      }
    }
  }
  return res;
};

const root = {
  val: 1,
  children: [
    {
      val: 2,
      children: null,
    },
    {
      val: 3,
      children: [
        {
          val: 6,
          children: null,
        },
        {
          val: 7,
          children: [
            {
              val: 11,
              children: [
                {
                  val: 14,
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      val: 4,
      children: [
        {
          val: 8,
          children: [
            {
              val: 12,
              children: null,
            },
          ],
        },
      ],
    },
    {
      val: 5,
      children: [
        {
          val: 9,
          children: [
            {
              val: 13,
              children: null,
            },
          ],
        },
        {
          val: 10,
          children: null,
        },
      ],
    },
  ],
};

console.log(levelOrder(root));
