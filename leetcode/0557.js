// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  // let temp = ''
  let k = 0
  let l = 0
  let j = 0
  let ss = s.split('')
  // let ss = new Array(s.length - 1).fill(' ')
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      k = i - 1
      l = j
      j = i + 1
    }
    if (i === s.length - 1) {
      k = i
      l = j
    }
    while (l < k) {
      // temp = s[k]
      // s[k] = s[l]
      // s[l] = temp
      ss[l] = s[k]
      ss[k] = s[l]
      l++
      k--
      if (l === k) {
        ss[l] = s[l]
      }
    }
  }
  console.log(s, '---ss---', ss.join(''))
  return ss.join('')
}

reverseWords("Let's take LeetCode contest")
reverseWords('I love u')

reverseWords('I v u')
