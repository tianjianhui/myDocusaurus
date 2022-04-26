---
slug: write
title: 文档编写语法
tags:
  - 文档
  - Docusaurus
---

参考[Docusaurus](https://www.docusaurus.cn/)

### 标题

```
# 超大号
## 大号
### #越多号越小
```

:::tip 效果

# h1

## h2

### h3

:::

### 链接

```
[文字](链接url)
[百度](https://www.baidu.com/)
![标题](图片地址)
![示例图片](https://note.youdao.com/favicon.ico)
```

:::tip 效果

[百度](https://www.baidu.com/)

![示例图片](https://note.youdao.com/favicon.ico)

:::

### 排序

```
- 无须排序

1. 有序排序一
2. 有序排序二
```

:::tip 效果

- 无序一
- 无序二

1. 有序一
2. 有序二
3. 有序三

:::

### 引用

```
> 这是引用内容
```

:::tip 效果

> 这是引用内容

:::

### 文本样式

```
**加粗**
*斜体*
~~through-line~~
```

:::tip 效果

**加粗**

_斜体_

~~through-line~~

:::

### 代码

````
`一行代码`

<!-- 代码块用```包裹，后面可以添加语言，如js，ts，jsx等 -->
```js
代码块
...
```
<!-- 用title添加标题 -->
```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

````

:::tip 效果

`一行代码`

```js
代码块
...
```

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

:::

### 告示框

```
:::note 笔记

note

:::

:::tip 提示

tip

:::

:::info 信息

info

:::

:::caution 提醒

caution

:::

:::danger 危险

danger

:::

```

:::note 笔记

note

:::

:::tip 提示

tip

:::

:::info 信息

info

:::

:::caution 提醒

caution

:::

:::danger 危险

danger

:::

### 表格

```
| header 1    | header 2    |
| ----------- | ----------- |
| row 1 col 1 | row 1 col 2 |
| row 2 col 1 | row 2 col 2 |

```

:::tip 效果

| header 1    | header 2    |
| ----------- | ----------- |
| row 1 col 1 | row 1 col 2 |
| row 2 col 1 | row 2 col 2 |

:::

### 多选框

```
- [ ] 1
    - [ ] 1-1
    - [ ] 1-2
    - [x] 1-3   // X表示勾选上的

```

:::tip 效果

- [ ] 1
  - [ ] 1-1
  - [ ] 1-2
  - [x] 1-3

:::
