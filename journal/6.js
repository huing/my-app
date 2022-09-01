// 取分类最后一级，并返回一维数组
const flatLastCategorys = (arr) => {
  const result = [];
  (arr || []).map((cate) => {
    // console.info("cate", JSON.stringify(cate));
    if (Array.isArray(cate.children) && cate.children.length !== 0) {
      result.push(...flatLastCategorys(cate.children));
    } else {
      // console.info("????");
      result.push(cate);
    }
    return cate;
  });
  return result;
};

const arr = [
  {
    id: 1,
    children: [
      {
        id: 11,
        children: [
          {
            id: 111,
            children: [],
          },
          {
            id: 112,
            children: null,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    children: [
      {
        id: 21,
        children: [
          {
            id: 221,
            children: [],
          },
          {
            id: 222,
            children: null,
          },
        ],
      },
    ],
  },
];
flatLastCategorys(arr);
