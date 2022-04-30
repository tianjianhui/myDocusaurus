---
id: CSS
title: CSS 代码规范
tags:
  - code
  - 代码规范
  - 协作办公
---

## CSS-in-JavaScript 代码规范

> 在 `jsx` 里写 `css` 的代码规范

### 命名

- 使用驼峰命名法给对象的 `key` 命名

```css
// bad
{
  'bermuda-triangle': {
    display: 'none',
  },
}

// good
{
  bermudaTriangle: {
    display: 'none',
  },
}
```

- 使用下划线标识修改为其他样式

```css
// bad
{
  bruceBanner: {
    color: 'pink',
    transition: 'color 10s',
  },

  bruceBannerTheHulk: {
    color: 'green',
  },
}

// good
{
  bruceBanner: {
    color: 'pink',
    transition: 'color 10s',
  },

  bruceBanner_theHulk: {
    color: 'green',
  },
}
```

- 使用 `selectorName_fallback` 设置回退样式集(用于覆盖原来的样式)

> 为什么？ 与修饰符类似，保持命名一致有助于揭示这些样式与在浏览器中覆盖它们的样式之间的关系

```css
// bad
{
  muscles: {
    display: 'flex',
  },

  muscles_sadBears: {
    width: '100%',
  },
}

// good
{
  muscles: {
    display: 'flex',
  },

  muscles_fallback: {
    width: '100%',
  },
}
```

- 使用单独的选择器设置备用样式集

> 为什么？ 保留一个单独的对象中包含的回退样式可以明确它们的目的，从而提高可读性

```css
// bad
{
  muscles: {
    display: 'flex',
  },

  left: {
    flexGrow: 1,
    display: 'inline-block',
  },

  right: {
    display: 'inline-block',
  },
}

// good
{
  muscles: {
    display: 'flex',
  },

  left: {
    flexGrow: 1,
  },

  left_fallback: {
    display: 'inline-block',
  },

  right_fallback: {
    display: 'inline-block',
  },
}
```

- 使用与设备无关的名字 (如： "small", "medium", and "large") 来命名媒体查询的断点

> 为什么？ 常用的名字如： ”phone“, “tablet”，和 “desktop” 与现实世界的设备的特点不匹配。使用这些名字会带来错误的期望

```css
// bad
const breakpoints = {
  mobile: '@media (max-width: 639px)',
  tablet: '@media (max-width: 1047px)',
  desktop: '@media (min-width: 1048px)',
};

// good
const breakpoints = {
  small: '@media (max-width: 639px)',
  medium: '@media (max-width: 1047px)',
  large: '@media (min-width: 1048px)',
};
```

### 嵌套

- 在相同缩进级别的相邻块之间留下空白行

> 为什么？ 空间可以提高可读性，减少合并冲突的可能性

```css
// bad
{
  bigBang: {
    display: 'inline-block',
    '::before': {
      content: "''",
    },
  },
  universe: {
    border: 'none',
  },
}

// good
{
  bigBang: {
    display: 'inline-block',

    '::before': {
      content: "''",
    },
  },

  universe: {
    border: 'none',
  },
}
```

## css 代码规范

### BEM 命名规则

> BEM 是`Block`（块）、`Element`（元素）、`Modifier`（修饰符）的简写，是一种组件化的 CSS 命名方法和规范，由俄罗斯 Yandex 团队所提出

- 块名称为其元素和修饰符定义了命名空间

- 块名称与元素名称之间用双下划线`__`分隔

- 块名称与修饰符或元素与修饰符之间用双连字符`__`分隔

- 命名一般使用小写字母

- 单词之间可以使用-分隔

```css
.block {
}
.block__element {
}
.block--modifier {
}
.block__element {
}
--modifier {
}
```

### Block

- `Block` 是一个功能独立的页面组件，可重复使用，也支持嵌套。我们平时浏览的网页，都是由”块“构成的

- 每个块的块名必须是唯一的，用于明确指出它所描述的是哪个块，命名应该语义化

- 在使用块时，块不应影响其环境，也就是不应设置块的外部几何形状或位置。需要注意的是块应该是独立的，当在页面中添加，删除，或者是移动某个块时，不需要对块进行修改。块之间的样式不应该嵌套。

> 下面一共有 3 个块，分别是 `top`、`search-form`、`bottom`，块之间可以嵌套：

```html
<div class="top">
  <form class="search-form">搜索</form>
</div>
<div class="bottom">底部</div>
```

> 我们在实际应用中，需要保证每个块都是独立的。举个例子说明，例如我们将`top`块中的`search-form`块移动到`bottom`块中，想要保证整体不会乱，就需要`search-form`块的`CSS`必须是独立的。如果我们在写`CSS`时，直接将`search-form`块嵌套在`top`块下是不好的：

```css
// bad
.top .search-form {
  ...;
} /*表示只有在top块内的search-form块才会应用此CSS样式*/
.bottom {
}

// good
.top {
  ...;
}
.bottom {
  ...;
}
.search-form {
  ...;
}
```

### Element

- 元素是块的组成部分，是依赖上下文的。元素的名称用于描述它是什么，而不是它的状态。元素在所属的块中指定位置时，才能表现出应有的功能

- 元素之间可以彼此嵌套，一个元素总是一个模块的一部分，而不是另一个元素的一部分，这意味着元素的名称不能被定义为 `block__elem1__elem2` 这样的层次结构

```html
<div class="top">
  <!--top块中的search-for块-->
  <form class="search-form">
    <!--在search-form块中的input元素-->
    <input class="search-form__input" />
    <!--在search-form块中的button元素-->
    <button class="search-form__button">搜索按钮</button>
  </form>
</div>

.search-form .search-form__input{...} 

.search-form .search-form__button{...}
```

### Modifier

> 修饰符用于对块和元素某些样式的说明，通常用于区分具有一些公共样式的块和元素

```html
<div class="banner__btn">
    <button class=".button .banner__btn--red"></button>  
    <button class=".button .banner__btn--green"></button>
    <button class=".button .banner__btn--blue"></button>   
    <button class=".button .banner__btn--yellow"></button>       
</div>

.banner__btn--red { background-color: red; }

.banner__btn--green { background-color: green; }

.banner__btn--blue { background-color: blue; }

.banner__btn--yellow { background-color: yellow; }
```


