// interface Name {
//   name: string;
// }

// interface User extends Name {
//   age: number;
// }

// type Name1 = {
//   name: string;
// };

// type User1 = Name1 & { age: number };

// // 基本类型别名
// type Name3 = string;
// // 联合类型
// interface Dog {
//   wong();
// }
// interface Cat {
//   miao();
// }
// type Pet = Dog | Cat;
// // 具体定义数组每个位置的类型
// type PetList = [Dog, Pet];
// // 当你想获取一个变量的类型时，使用 typeof
// let div = document.createElement("div");
// type B = typeof div;

// // interface 可以而 type 不行
// // interface 能够声明合并
// interface User {
//   name: string;
//   age: number;
// }
// interface User {
//   sex: string;
// }
// /*
// User 接口为 {
//   name: string
//   age: number
//   sex: string 
// }
// */
