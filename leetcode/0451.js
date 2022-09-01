// https://leetcode-cn.com/problems/sort-characters-by-frequency/

var frequencySort = function (s) {
  let maps = new Map()
  let count = 0
  for (let index = 0; index < s.length; index++) {
    count = (maps.get(s[index]) || 0) + 1
    maps.set(s[index], count)
  }
  let list = [...maps]
  list.sort((a, b) => b[1] - a[1])
  let res = []
  for (let m = 0; m < list.length; m++) {
    const [key, value] = list[m];
    for (let n = 0; n < value; n++) {
      res.push(key)
    }
  }
  return res.join('')
};

console.log(frequencySort('sasaasssss'))