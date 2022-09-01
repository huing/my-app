// https://leetcode-cn.com/problems/number-of-atoms/

var countOfAtoms = function (formula) {
  let i = 0;
  const n = formula.length;
  const stack = [new Map()];
  const parseAtom = () => {
    let sb = [];
    sb.push(formula[i++]); // 扫描首字母
    while (i < n && formula[i] >= "a" && formula[i] <= "z") {
      sb.push(formula[i++]); // 扫描首字母后的小写字母
    }
    return sb.join("");
  };
  const parseNum = () => {
    if (i === n || isNaN(Number(formula[i]))) {
      return 1; // 不是数字，视作 1
    }
    let num = 0;
    while (i < n && !isNaN(Number(formula[i]))) {
      num = num * 10 + formula[i++].charCodeAt() - "0".charCodeAt(); // 扫描数字
    }
    return num;
  };

  while (i < n) {
    const ch = formula[i];
    if (ch === "(") {
      i++;
      stack.unshift(new Map()); // 将一个空的哈希表压入栈中，准备统计括号内的原子数量
    } else if (ch === ")") {
      i++;
      const num = parseNum(); // 括号右侧数字
      const popMap = stack.shift(); // 弹出括号内的原子数量
      const topMap = stack[0];
      for (const [atom, v] of popMap.entries()) {
        topMap.set(atom, (topMap.get(atom) || 0) + v * num); // 将括号内的原子数量乘上 num，加到上一层的原子数量中
      }
    } else {
      const atom = parseAtom();
      const num = parseNum();
      const topMap = stack[0];
      topMap.set(atom, (topMap.get(atom) || 0) + num); // 统计原子数量
    }
  }
  let map = stack.pop();
  map = Array.from(map);
  map.sort();
  const sb = [];
  for (const [atom, count] of map) {
    sb.push(atom);
    if (count > 1) {
      sb.push(count);
    }
  }
  return sb.join("");
};

console.log(
  countOfAtoms("H2O"),
  // "H2O"
  countOfAtoms("Mg(OH)2"),
  // "H2MgO2"
  countOfAtoms("K4(ON(SO3)2)2"),
  // "K4N2O14S4"
  countOfAtoms("Be32"),
  // "Be32"
  countOfAtoms("H2O2He3Mg4"),
  countOfAtoms("(H2O2)"),
  countOfAtoms("(H2O2)3")
);
