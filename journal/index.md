## Markdown

<!-- 标题 -->

# This is an h1 tag

## This is an h2 tag

###### This is an h6 tag

_This text will be italic_

_This will also be italic_

**This text will be bold**

**This will also be bold**

_You **can** combine them_

<!-- 列表 -->

- Item 1
    - tem 1a

* Item 1a

- Item 1

1. One
2. Two
3. Three

<!-- 分隔线 -->

---

---

---

---

<!-- 链接 -->

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

http://github.com - automatic!

<!-- 区块引用Blockquotes -->

> We're living the future so the present is our past.

I think you should use an `<addr>` element here instead.

<!-- 代码块 -->

```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: "#foo" });
  }
}
```

<!-- 待办 -->

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

<!-- 表格（table） -->

| 表格     | 第二栏   |   第三栏 |        |
| -------- | :------- | -------: | :----: |
| 表格内容 | 左对齐 ↑ | 右对齐 ↑ | 居中 ↑ |
|          | 文字     |     文字 |  文字  |

<!-- 图片 -->

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
