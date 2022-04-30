---
id: React
title: React/JSX 代码规范
tags:
  - code
  - 代码规范
  - 协作办公
---

### Class vs React.createClass vs stateless

- 如果你的组件有内部状态或者是 `refs` ，推荐使用 `class extends React.Component` 而不是 `React.createClass`。 `eslint: react/prefer-es6-class` `react/prefer-stateless-function`

```jsx
// bad
const Listing = React.createClass({
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  },
});

// good
class Listing extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}
```

- 如果你的组件没有状态或者 refs 推荐使用普通函数（不是箭头函数）而不是类定义

```js
// bad
class Listing extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// bad (relying on function name inference is discouraged)
const Listing = ({hello}) => <div>{hello}</div>;

// good
function Listing({hello}) {
  return <div>{hello}</div>;
}
```

### 命名

- **扩展名:** 使用 .jsx 作为 React 组件的扩展名
- **文件名:** 使用帕斯卡命名法给文件命名。 例如： `ReservationCard.jsx`
- 引用命名: 使用帕斯卡命名法给 React 组件命名并用驼峰命名法给组件实例命名。 `eslint: react/jsx-pascal-case`

```jsx
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

- 组件命名: 使用文件名作为组件的名字。 例如： `ReservationCard.jsx` 应该包含一个名字叫 `ReservationCard` 的组件。 但是，如果整个文件夹是一个模块，使用 `index.jsx` 作为入口文件，并使用目录名称作为组件名称

```jsx
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
```

- 高阶组件命名: 在生成的新组件上，使用高阶组件的名称和传入组件的名称作为新组件的 displayName 。 例如：高价组件 `withFoo()`，当被传入到一个叫做 Bar 的组件中的时候，应该生成一个拥有 `displayName` 为 `withFoo(Bar)` 的组件

- 属性命名: 避免使用 DOM 组件属性来用作其他用途

```jsx
// bad
<MyComponent style="fancy" />

// bad
<MyComponent className="fancy" />

// good
<MyComponent variant="fancy" />
```

### 代码对齐

- 遵循以下的 JSX 代码对齐方式

```jsx
// bad
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// 如果能写在一行，直接写成一行
<Foo bar="bar" />

// 子元素按照常规方式缩进
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>
```

### 单引号和双引号

- 对于 JSX 属性总是使用双引号 （"）， 对于其他的 JS 来说使用单引号 （'）

> 为什么？ HTML 属性的规则就是使用双引号而不是单引号，因此 JSX 的属性也遵循这个约定

```jsx
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```

### 空格

- 总是在**自闭和标签**的标签前加一个空格

```jsx
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```

- 不要在 JSX 中的括号两边添加空格

```jsx
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```

### 属性

- 总是使用驼峰命名法命名属性名

```jsx
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>
```

- 当一个属性的值为显式的 true 时，应该省略

```jsx
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

- `<img>` 标签应该始终添加 `alt` 属性。 如果图片是直观的， `alt` 可以为空或者 `<img>` 必须有 `role="presentation"` 属性

```jsx
// bad
<img src="hello.jpg" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// good
<img src="hello.jpg" alt="" />

// good
<img src="hello.jpg" role="presentation" />
```

- 只是用有效的，非抽象的 `ARIA roles`

```jsx
// bad - 不是一个 ARIA role
<div role="datepicker" />

// bad - 抽象的 ARIA role
<div role="range" />

// good
<div role="button" />
```

- 不要在元素上使用 accessKey

> 为什么？ 设置的键盘快捷键和使用显示器和键盘的人的键盘命令不一致会导致访问的复杂性

```jsx
// bad
<div accessKey="h" />

// good
<div />
```

- 避免使用数组的索引作为 `key` 属性的值，应该是唯一的 `ID`

```jsx
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```

- 总是为所有非必要的属性定义明确的 `defaultProps`

> 为什么？ propTypes 可以作为组件的文档说明，并且声明 defaultProps 意味着，阅读代码的人不需要假设一下默认的值。更重要的是，显式的声明默认属性可以让你的组件跳过属性的类型检查

```jsx
// bad
function SFC({ foo, bar, children }) {
  return <div>{foo}{bar}{children}</div>;
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node,
};

// good
function SFC({ foo, bar, children }) {
  return <div>{foo}{bar}{children}</div>;
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node,
};
SFC.defaultProps = {
  bar: '',
  children: null,
};
```

- 尽可能少使用扩展运算符

> 为什么？ 这样你有更大的可能将不必要的属性传递个组件

- 对于已知的，明确的对象使用扩展运算符。这非常有用尤其是在使用 Mocha 测试组件的时候

```jsx
export default function Foo {
  const props = {
    text: '',
    isPublished: false
  }

  return (<div {...props} />);
}
```

### Refs

- 总是在 `ref` 中使用回调函数

```jsx
// bad
<Foo
  ref="myRef"
/>

// good
<Foo
  ref={(ref) => { this.myRef = ref; }}
/>
```

### 括号

- 当存在多行时，使用括号包裹 `JSX` 标签

```jsx
// bad
render() {
  return <MyComponent variant="long body" foo="bar">
           <MyChild />
         </MyComponent>;
}

// good
render() {
  return (
    <MyComponent variant="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good, 当存在一行时
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
```

### 标签

- 没有子节点的标签总是自闭和

```jsx
// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
```

- 如果你的组件具有多行属性，请在新行上关闭标签

```jsx
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```

### 方法

- 使用箭头函数关闭局部变量

```jsx
function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={() => doSomethingWith(item.name, index)}
        />
      ))}
    </ul>
  );
}
```

- 在构造器中为 `render` 函数绑定处理方法

> 为什么？ 渲染路径中的绑定函数会在每个渲染器上创建一个全新的函数

```jsx
// bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// good
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
```

- 不要在 React 组件的内部方法中使用下划线前缀

> 为什么？ 下划线前缀有时被用作其他语言的约定来表示隐私。 但是，与其他语言不同， `JavaScript` 没有隐私的原生支持，所有东西都是公开的。 无论你是什么意图，在属性前添加下划线前缀并不会使它们成为私有属性，并且任何属性（有或者没有前缀）都应该被视为公共的

```jsx
// bad
React.createClass({
  _onClickSubmit() {
    // do stuff
  },

  // other stuff
});

// good
class extends React.Component {
  onClickSubmit() {
    // do stuff
  }

  // other stuff
}
```

- 确保你的 render 方法存在返回值

```jsx
// bad
render() {
  (<div />);
}

// good
render() {
  return (<div />);
}
```

