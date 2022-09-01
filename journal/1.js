// function wait() {
//   return new Promise(resolve => setTimeout(resolve, 10 * 1000))
// }
// async function main() {
//   console.time();
//   const x = wait();
//   const y = wait();
//   const z = wait();
//   await x;
//   await y;
//   await z;
//   console.timeEnd();
// }
// async function main() {
//   console.time();
//   await wait();
//   await wait();
//   await wait();
//   console.timeEnd();
// }
// main();

// console.log('A');
// setTimeout(() => console.log('B', 0));
// while(true) {}
// console.log('B');

// var a = 10;
// (function () {
//   console.log(1, a);
//   a = 5;
//   console.log(2, a)
//   console.log(3, window.a);
  
//   var a= 20;
//   console.log(4, a);
//   console.log(5, window.a);
// })()
// console.log(6, window.a);
// console.log(7, a);
