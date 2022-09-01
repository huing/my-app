/*
 *
 * 全局作用域
 * 函数作用域
 * 块级作用域
 * 声明提升
 * const let var 区别
 * */
var a = 11;
let b = 21;
{
  // a 的作用域
  var a = 12;
  let b = 22;
}
// console.log(a);
// console.log(b);
function A() {
  // a 的作用域
  // console.log(a); // undefined
  var a = 13;
  let b = 23;
  // console.log(a); // 13
  // console.log(b);
}
A();
// console.log(a);
// console.log(b);

/*
 *
 * map 参数
 * */
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(parseInt);

/*
 *
 * 箭头函数
 * 简单
 * 不能 new 没有构造函数 constructor
 * 没有 arguments
 * 不能用 bind 改变 this
 * */
const normal = {
  name: "普通函数",
  getName: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 10);
  },
};

const arrow = {
  name: "箭头函数",
  getName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 10);
  },
};

normal.getName();
arrow.getName();
