// https://leetcode-cn.com/problems/display-table-of-food-orders-in-a-restaurant/

// var displayTable = function (orders) {
//   // 从订单中获取餐品名称和桌号，统计每桌点餐数量
//   const nameSet = new Set();
//   const foodsCnt = new Map();
//   for (const order of orders) {
//     nameSet.add(order[2]);
//     const id = parseInt(order[1]);
//     const map = foodsCnt.get(id) || new Map();
//     map.set(order[2], (map.get(order[2]) || 0) + 1);
//     foodsCnt.set(id, map);
//   }

//   // 提取餐品名称，并按字母顺序排列
//   const n = nameSet.size;
//   const names = [];
//   for (const name of nameSet) {
//     names.push(name);
//   }
//   names.sort();

//   // 提取桌号，并按餐桌桌号升序排列
//   const m = foodsCnt.size;
//   const ids = [];
//   for (const id of foodsCnt.keys()) {
//     ids.push(id);
//   }
//   ids.sort((a, b) => a - b);

//   // 填写点菜展示表
//   const table = [];
//   const header = [];
//   header.push("Table");
//   for (const name of names) {
//     header.push(name);
//   }
//   table.push(header);
//   for (let i = 0; i < m; ++i) {
//     const id = ids[i];
//     const cnt = foodsCnt.get(id);
//     const row = [];
//     row.push(id.toString());
//     for (let j = 0; j < n; ++j) {
//       row.push((cnt.get(names[j]) || 0).toString());
//     }
//     table.push(row);
//   }
//   return table;
// };

var displayTable = function (orders) {
  let title = new Set();
  let ids = new Set();
  for (const item of orders) {
    title.add(item[2]);
    ids.add(Number(item[1]));
  }
  title = ["Table", ...[...title].sort()];
  ids = [...ids].sort((a, b) => a - b);
  let order = [title];
  for (const item of ids) {
    order.push(new Array(title.length).fill(0));
    order[order.length - 1][0] = item;
  }
  for (const item of orders) {
    const colIndex = order.findIndex((col) => col[0] === Number(item[1]));
    const rowIndex = order[0].findIndex((row) => row === item[2]);
    order[colIndex][rowIndex] += 1;
  }
  for (let i = 1; i < order.length; i++) {
    for (let j = 0; j < order[i].length; j++) {
      order[i][j] = order[i][j] + "";
    }
  }
  return order;
};

console.log(
  displayTable([
    ["David", "3", "Ceviche"],
    ["Corina", "10", "Beef Burrito"],
    ["David", "3", "Fried Chicken"],
    ["Carla", "5", "Water"],
    ["Carla", "5", "Ceviche"],
    ["Rous", "3", "Ceviche"],
  ])
);
