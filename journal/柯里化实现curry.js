/*
 * 柯里化 相加
 * */
function add(...argus) {
  // arguments是个对象
  // let args = Array.prototype.slice.call(arguments);
  const args = argus;
  const inner = function (...innerArgs) {
    args.push(...innerArgs);
    return inner;
  };
  inner.toString = function () {
    return args.reduce((acc, cur) => acc + cur, 0);
  };
  inner.value = function () {
    return args.reduce((acc, cur) => acc + cur, 0);
  };
  return inner;
}

// const result = add(1)(2)(3)(4)(5);
const result = add(1, 2, 3, 4)(5);
console.log(result.toString());
console.log(result.value());

/*
 * 柯里化 map
 * 参数复用
 * */
const list1 = [{ left: "左", position: "位置" }];
const list2 = [{ right: "右", position: "位置" }];
const curring = name => element => element[name];
const name_left = curring("left");
const name_right = curring("right");
list1.map(name_left);
list2.map(name_right);
