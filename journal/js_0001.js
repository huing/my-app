/* this */
// const a = 123;
// let b = 456;
// var c = 789;
// function x() {
//   //       undefined  undefined  789
//   console.log(this.a, this.b, this.c);
// }
// x();

/* c.b */
var a = function () {
  this.b = 3;
};
var c = new a();
a.prototype.b = 10;
var b = 7;
a();
console.log(c.b); // 3

/* 变量提升 */
// var a;
// if (true) {
//   a = 3;
//   function a {}
//   a = 7;
//   console.log(a);
// }
// console.log(a);
//
// var a₀ = undefined;
// {
//   let a₁ = function a() {};
//   a₁ = 3;
//   a₀ = a₁;
//   a₁ = 7;
//   console.log(a₁);
// }
// console.log(a₀);
