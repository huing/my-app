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
// s

/* 变量提升 */
// var a;
// if (true) {
//   a = 3;
//   function a() {}
//   a = 7;
//   console.log(a);
// }
// console.log(a);
// //
// var a₀ = undefined;
// {
//   let a₁ = function a() {};
//   a₁ = 3;
//   a₀ = a₁;
//   a₁ = 7;
//   console.log(a₁);
// }
// console.log(a₀);

// ['1', '2', '3'].map(parseInt)

// [3,15,8,29,102,22].sort()
// [3,15,8,29,102,22].sort((a,b) => a-b)

// function debounce(func, time) {
//   var obj = {}
//   var timer = null;
//   console.log(obj)
//   return () => {
//     console.log(timer, obj)
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, arguments)
//     }, time);
//     obj[timer] = timer
//     console.log('timer--->', timer, obj)
//   }
// }
// function debounce(func, wait, immediate) {
//   var timeout, result;
//   return function () {
//     var context = this;
//     var args = arguments;

//     if (timeout) clearTimeout(timeout);
//     if (immediate) {
//       // 如果已经执行过，不再执行
//       var callNow = !timeout;
//       timeout = setTimeout(function () {
//         timeout = null;
//       }, wait);
//       if (callNow) result = func.apply(context, args);
//     } else {
//       timeout = setTimeout(function () {
//         func.apply(context, args);
//       }, wait);
//     }
//     return result;
//   };
// }
// const onscroll = debounce(() => console.log('ok'), 500)
// onscroll()
// onscroll()
// onscroll()

// function throtte(func, time) {
//   var activeTime = 0;
//   return () => {
//     const current = Date.now();
//     const context  = this
//     if (current - activeTime > time) {
//       func.apply(context, arguments);
//       activeTime = Date.now();
//     }
//   }
// }
// 一定要是给个新的名字，不然过不了，这样作用域才是一样的
// const onscroll1 = throtte(() => console.log('ok'), 500)
// onscroll1()
// onscroll1()
// onscroll1()

// let arr = [1,2,3,4,5]
// arr.forEach((num, index) => arr[index] = num * 2)

// function Person() {

// }
// var person = new Person()
// person.name = 'Kevin'
// console.log(person)

// person.__proto__ == Person.prototype

// null 表示没有对象，即该处不应该有值
// Object.prototype.__proto__ === null

// const s = new Set([1,2,3])
// console.log(s)

// const person = {name: 'Lydia'}
// function sayHi(age) {
//   console.log(`${this.name} is ${age}`)
// }
// sayHi.call(person, 21)
// sayHi.bind(person, 21)

// var obj = {
//   '2': 3,
//   '3': 4,
//   'length': 2,
//   'splice': Array.prototype.splice,
//   'push': Array.prototype.push,
// }

// obj = {
//   1: 1,
//   3: 4,
//   'length': 2,
//   'splice': Array.prototype.splice,
//   'push': Array.prototype.push,
// }

// obj.push(1)
// obj.push(2)
// console.log(obj)

// var a = {n: 1};
// var b=a;
// a.x = a = {n:2}

// var a = {n: 1}
// a.x = a = {n:2}

// let array = new Array(100000)
// let array = new Array(1000000)
// let array = new Array(10000000)
// console.time('for')
// for (let index = 0; index < array.length; index++) {
// }
// console.timeEnd('for')
// console.time('forEach')
// array.forEach((item) => {})
// console.timeEnd('forEach')

// var a = {}, b = '123', c = 123;
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]);

// var a = {}, b = Symbol('123'), c= Symbol('123');
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]);

// var a = {}, b = {key: '123'}, c= {key: '456'};
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]);

// function changeObjProperty(o) {
//   o.siteUrl = 'baidu'
//   o = new Object()
//   o.siteUrl = 'google'
// }
// let webSite = new Object()
// changeObjProperty(webSite)
// console.log(webSite.siteUrl)
// function changeObjProperty(o, b) {
//   o.siteUrl = 'baidu'
//   b = 5
//   o = {}
//   // let b
//   o.siteUrl = 'google'
//   b= 6
//   console.log(o, b)
// }
// let webSite = {}
// let a = 1
// changeObjProperty(webSite, a)
// console.log(webSite.siteUrl, a)

// function Foo() {
//   Foo.a = function() {
//     console.log(1)
//   }
//   this.a = function() {
//     console.log(2)
//   }
// }
// Foo.prototype.a = function() {
//   console.log(3)
// }
// Foo.a = function() {
//   console.log(4)
// }
// Foo.a();
// let obj = new Foo();
// obj.a();
// Foo.a();

// // true
// String('11') == new String('11');
// // false
// String('11') === new String('11');

// 1 + '1'
// 2 * '2'
// [1,2] + [2,1]
// 'a' + + 'b'
// var msg = 'hello';
// for (var i = 0; i < 10; i++) {
//   var msg = 'hello' + i * 2 + i;
// }

// var name = 'Tom';
// (function() {
//   if (typeof name == 'undefined') {
//     var name = 'Jack';
//     // name = 'Jack';
//     console.log('Goodbye ' + name);
//   } else {
//     console.log('Hello ' + name);
//   }
// })();

var o = {
  a: 2,
  m: function () {
    return this.a + 1;
  },
};

console.log(o.m()); // 3
// 当调用 o.m 时，'this' 指向了 o.

var p = Object.create(o);
// p 是一个继承自 o 的对象

p.a = 4; // 创建 p 的自身属性 'a'
console.log(p.m()); // 5
// 调用 p.m 时，'this' 指向了 p
// 又因为 p 继承了 o 的 m 函数
// 所以，此时的 'this.a' 即 p.a，就是 p 的自身属性 'a'
console.log(o.m()); // 3
