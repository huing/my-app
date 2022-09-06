/*
 * promise 解决了回调地狱
 * */
console.log(1);
let promise = new Promise((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    resolve("这次一定");
    console.log(4);
  });

  // reject("下次一定");
  // throw new Error("白嫖不成功");
});
promise
  .then(
    (value) => {
      console.log(value);
      // return value;
    },
    (reason) => {
      console.log(reason);
    }
  )
  .then(
    (value) => {
      console.log(value);
      return "ddd";
    },
    (reason) => {
      console.log(reason);
    }
  )
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log(reason);
    }
  )
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log(reason);
    }
  );
console.log(3);

export {};
