// const data = [
//   {
//     id: 1,
//     type: 2,
//     children: [
//       {
//         id: 3,
//         type: 2,
//         children: [
//           {
//             id: 5,
//             type: 2,
//           },
//           {
//             id: 6,
//             type: 1,
//           },
//         ],
//       },
//       {
//         id: 4,
//         type: 1,
//       },
//     ],
//   },
//   {
//     id: 2,
//     type: 1,
//   },
//   {
//     id: 7,
//     type: 2,
//   },
// ];

// const getType1 = (currentData) => {
//   let currentTypeList = [];
//   currentTypeList = currentData
//     .filter((item) => item.type === 2)
//     .map((item) => {
//       if (item.children && item.children.length) {
//         item.children = getType1(item.children);
//       }
//       return item;
//     });
//   return currentTypeList;
// };
// console.log(getType1(data));

// const getType = (currentData) => {
//   const currentTypeList = [];
//   currentData.map((item) => {
//     if (item.children && item.children.length) {
//       currentTypeList.push(...getType(item.children));
//     }
//     if (item.type === 2) {
//       delete item.children;
//       currentTypeList.push(item);
//     }
//     return item;
//   });
//   return currentTypeList;
// };
// console.log(getType(data));
