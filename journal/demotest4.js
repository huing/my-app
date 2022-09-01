// //line=readline()
// //print(line)
// console.log('Hello World!');

// // 小程序跨平台
// // loader顺序
// // 微前端
// // 重绘
// // 前端监控
// // vno
// // 性能
// // 算法，源码，栈，冒泡，排序，队列
// // github
// // 你不知道的javascript
// // 工程化
// // cli
// // webpack

// var length = 10;
// function fn () {
//     return this.length + 1;
// }
// var obj = {
//     length: 5,
//     test1: function () {
//         return fn();
//     }
// };
// obj.test2 = fn;
// //What is the code output below
// console.log (obj.test1())
// console.log (fn() === obj.test2())

// /// //

// // console.log(1)

// // setTimeout(()=>{
// //     console.log(2);
// // }, 0);

// // console.log(3);

// // new Promise(()=>{
// //     console.log(4)
// // }).then(()=>{
// //     console.log(5)
// // });

// // const sum = (num1, num2) => (num3) => {
// //     return num1 + num2 + num3
// // }

// const sum = (...rest) => (...rest1) => {
//     const ans = rest1.reduce((acc, cur) => {
//                 return acc += cur
//             }, 0)
//     return {
//         value: () => {

//             console.log(6)
//         }
//     }
// }

// // 实现函数sum，并通过sum(1,2)(3).value() 得到6

// sum().value()  ///6

// // 实现一个函数flattenFnArray([p1, p2, p3])，让promise按顺序调用，第一个promise执行完以后再执行第二个

// // await p1
// // await p2
// // await p3
