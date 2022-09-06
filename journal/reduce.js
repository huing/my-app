function Fun(min, max) {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + min
  );
}
function Fun2() {
  const numArr = [];
  for (let i = 0; i < 10; i += 1) {
    numArr.push(Fun(10, 100));
  }
  return numArr;
}
// 生成10个随机数吗，忘了这个是干啥的
for (let i = 0; i < 10; i += 1) {
  const res = Fun2()
    .sort()
    .reduce((acc, cur) => {
      if (!acc.length || acc[acc.length - 1] !== cur) {
        // !acc.includes(cur)
        acc.push(cur);
      }
      return acc;
    }, [])
    .reduce((acc, cur) => acc + cur, 0);
  console.log(res);
}
