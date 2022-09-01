// https://leetcode-cn.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  let temp = ''
  let i = 0
  let j = s.length - 1
  while (i < j) {
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
    i++
    j--
  }
}

reverseString(['h', 'e', 'l', 'l', 'o'])
reverseString(['H', 'a', 'n', 'n', 'a', 'h'])
