// https://leetcode-cn.com/problems/permutation-in-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  let map = new Map()
  let i = 0

  let j = 0
  let s1Map = new Map()
  while (j < s1.length) {
    s1Map.set(s1[j], (s1Map.get(s1[j]) || 0) + 1)
    j++
  }
  // console.log('s1Map', s1Map)

  while (i < s2.length) {
    map.set(s2[i], (map.get(s2[i]) || 0) + 1)
    let fi = 0
    map.forEach((value) => {
      fi += value
    })
    if (fi - 1 === s1.length) {
      if (map.get(s2[i - fi + 1]) - 1 === 0) {
        map.delete(s2[i - fi + 1])
      } else {
        map.set(s2[i - fi + 1], map.get(s2[i - fi + 1]) - 1)
      }
    }

    // console.log('map', map)
    let flag = true
    s1Map.forEach((value, key) => {
      if (map.get(key) !== value) {
        flag = false
      }
    })
    if (flag) {
      return true
    }
    // console.log('fi', s1Map.size, map, fi, s1.length)
    // if (fi - 1 === s1.length) {
    //   console.log('ok')
    // }
    i++
  }
  return false
}
console.log(
  //  true
  checkInclusion('ab', 'eidbaooo'),
  // false
  checkInclusion('ab', 'eidboaoo'),
  // true
  checkInclusion('abo', 'eidboaoo'),
  // true
  checkInclusion('dba', 'eiidbaoaoo'),
  // true
  checkInclusion('ii', 'eiidbaoaoo'),
  // true
  checkInclusion('oo', 'eiidbaoaoo'),
  // false
  checkInclusion('ooo', 'eiidbaoaoo'),
  //  true
  checkInclusion('aooo', 'eidbaooo'),
)
