// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let map = new Map()
  let lengs = []
  let i = 0
  let j = 1
  while (i < s.length) {
    if (!map.get(s[i])) {
      map.set(s[i], 1)
      i++
    } else {
      lengs.push(map.size)
      map.clear()
      i = j
      j++
    }
  }
  lengs.push(map.size)
  return Math.max(...lengs)
}
lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('pwwkew')
lengthOfLongestSubstring('')
lengthOfLongestSubstring(' ')
lengthOfLongestSubstring('abbcccdef')
lengthOfLongestSubstring('dvdf')
