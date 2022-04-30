---
id: JavaScript
title: JavaScript 代码规范
tags:
  - code
  - 代码规范
  - 协作办公
---

参考[Airbnb JavaScript 代码规范](https://github.com/BingKui/javascript-zh)

### 类型

- 定义类型时避免使用`var`
- 不变的常量用`const`
- 可重新赋值的用`let`

### 引用

- 对所有的引用使用 `const`,避免使用 `var`

> 为什么？这能确保你无法对引用重新赋值，也不会导致出现 bug 或难以理解。

```js
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

- 如果你一定需要可变动的引用，使用 `let` 代替 `var`

> 为什么？因为 `let` 是块级作用域，而 `var` 是函数作用域。`const`也是块级作用域

```js
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
```

### 对象

- 使用字面值创建对象

```js
// bad
const item = new Object();

// good
const item = {};
```

- 不要使用保留字作为键值

- 使用对象方法的简写

```js
// bad
const atom = {
  value: 1,

  addValue: function(value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```

- 使用对象属性值的简写

```js
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```

- 在对象属性声明前把简写的属性分组
  > 为什么？因为这样能清楚地看出哪些属性使用了简写

```js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

### 数组

- 使用字面值创建数组

```js
// bad
const items = new Array();

// good
const items = [];
```

- 向数组添加元素时使用 Arrary#push 替代直接赋值

```js
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```

- 使用拓展运算符 ... 复制数组

**注意：**数组是引用数据类型

```js
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

- 使用 Array#from 把一个类数组对象转换成数组

```js
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```

### 解构

- 使用解构存取和使用多属性对象

```js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(obj) {
  const {firstName, lastName} = obj;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({firstName, lastName}) {
  return `${firstName} ${lastName}`;
}
```

- 对数组使用解构赋值

```js
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

- 需要回传多个值时，使用对象解构，而不是数组解构

> 为什么？增加属性或者改变排序不会改变调用时的位置

```js
// bad
function processInput(input) {
  // then a miracle occurs
  return [left, right, top, bottom];
}

// 调用时需要考虑回调数据的顺序。
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // then a miracle occurs
  return {left, right, top, bottom};
}

// 调用时只选择需要的数据
const {left, right} = processInput(input);
```

### 字符串

- 字符串使用单引号 ''
- 程序化生成字符串时，使用模板字符串代替字符串连接

```js
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

### 函数

- 使用函数声明代替函数表达式

> 为什么？因为函数声明是可命名的，所以他们在调用栈中更容易被识别。此外，函数声明会把整个函数提升（hoisted），而函数表达式只会把函数的引用变量名提升。这条规则使得箭头函数可以取代函数表达式

```js
// bad
const foo = function() {};

// good
function foo() {}
```

- 函数表达式

```js
// 立即调用的函数表达式 (IIFE)
(() => {
  console.log('Welcome to the Internet. Please follow me.');
})();
```

- 永远不要在一个非函数代码块（if、while 等）中声明一个函数，把那个函数赋给一个变量。浏览器允许你这么做，但它们的解析表现不一致
- 注意: ECMA-262 把 block 定义为一组语句。函数声明不是语句

```js
// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
```

- 不要使用 arguments。可以选择 rest 语法 ... 替代

> 为什么？使用 ... 能明确你要传入的参数。另外 rest 参数是一个真正的数组，而 arguments 是一个类数组

```js
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```

- 直接给函数的参数指定默认值，不要使用一个变化的函数参数

```js
// really bad
function handleThings(opts) {
  // 不！我们不应该改变函数参数。
  // 更加糟糕: 如果参数 opts 是 false 的话，它就会被设定为一个对象。
  // 但这样的写法会造成一些 Bugs。
  //（译注：例如当 opts 被赋值为空字符串，opts 仍然会被下一行代码设定为一个空对象。）
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

- 直接给函数参数赋值时需要避免副作用

> 为什么？因为这样的写法让人感到很困惑

```js
var b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count(); // 1
count(); // 2
count(3); // 3
count(); // 3
```

### 箭头函数

- 当你必须使用函数表达式（或传递一个匿名函数）时，使用箭头函数符号

```js
// bad
[1, 2, 3].map(function(x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => x * x);
```

- 如果一个函数适合用一行写出并且只有一个参数，那就把花括号、圆括号和 return 都省略掉。如果不是，那就不要省略。

```js
// good
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].reduce((total, n) => {
  return total + n;
}, 0);
```

### 构造函数

- 总是使用 class。避免直接操作 prototype

> 为什么? 因为 class 语法更为简洁更易读

```js
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
};

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```

- 使用 extends 继承

> 为什么？因为 extends 是一个内建的原型继承方法并且不会破坏 instanceof

```js
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
};

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
```

- 方法可以返回 this 来帮助链式调用

```js
// bad
Jedi.prototype.jump = function() {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump().setHeight(20);
```

- 可以写一个自定义的 toString() 方法，但要确保它能正常运行并且不会引起副作用

```js
class Jedi {
  constructor(options = {}) {
    this.name = options.name || 'no name';
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }
}
```

### Iterators & Generators

- 不要使用 `iterators`。使用高阶函数例如 `map()` 和 `reduce()` 替代 `for-of`

> 为什么？这加强了我们不变的规则。处理纯函数的回调值更易读，这比它带来的副作用更重要

```js
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}

sum === 15;

// good
let sum = 0;
numbers.forEach((num) => (sum += num));
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;
```

- 尽量不要使用 `generators`

> 为什么？因为它们现在还没法很好地编译到 ES5

### 注释

- 使用 /\*_ ... _/ 作为多行注释。包含描述、指定所有参数和返回值的类型和值

```js
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
  // ...stuff...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {
  // ...stuff...

  return element;
}
```

- 使用 // 作为单行注释。在评论对象上面另起一行使用单行注释。在注释前插入空行

```js
// bad
const active = true; // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}
```

- 给注释增加 FIXME 或 TODO 的前缀可以帮助其他开发者快速了解这是一个需要复查的问题，或是给需要实现的功能提供一个解决方式。这将有别于常见的注释，因为它们是可操作的。使用`FIXME -- need to figure this out` 或者 `TODO -- need to implement`

```js
class Calculator {
  constructor() {
    // FIXME: shouldn't use a global here
    total = 0;
  }
}

class Calculator {
  constructor() {
    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}
```

### 空白

- 使用 2 个空格作为缩进

```js
// bad
function() {
∙∙∙∙const name;
}

// bad
function() {
∙const name;
}

// good
function() {
∙∙const name;
}
```

- 在花括号前放一个空格

```js
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
```

- 在控制语句（if、while 等）的小括号前放一个空格。在函数调用及声明中，不在函数的参数列表前加空格

```js
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
```

- 使用空格把运算符隔开

```js
// bad
const x=y+5;

// good
const x = y + 5;
```

- 在文件末尾插入一个空行
```js
// bad
(function(global) {
  // ...stuff...
})(this);

// bad
(function(global) {
  // ...stuff...
})(this);↵
↵

// good
(function(global) {
  // ...stuff...
})(this);↵
```

- 在块末和新语句前插入空行
```js
// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;

// bad
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// good
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;

```

### 类型转换

- 字符串
```js
//  => this.reviewScore = 9;

// bad
const totalScore = this.reviewScore + '';

// good
const totalScore = String(this.reviewScore);
```

- 对数字使用 parseInt 转换，并带上类型转换的基数
```js
const inputValue = '4';

// bad
const val = new Number(inputValue);

// bad
const val = +inputValue;

// bad
const val = inputValue >> 0;

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);
```

- 如果因为某些原因 parseInt 成为你所做的事的瓶颈而需要使用位操作解决性能问题时，留个注释说清楚原因和你的目的
```js
// good
/**
 * 使用 parseInt 导致我的程序变慢，
 * 改成使用位操作转换数字快多了。
 */
const val = inputValue >> 0;
```

- 布尔
```js
const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// good
const hasAge = !!age;
```
### 命名规则

- 避免单字母命名。命名应具备描述性
```js
// bad
function q() {
  // ...stuff...
}

// good
function query() {
  // ..stuff..
}
```

- 使用驼峰式命名对象、函数和实例
```js
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

- 使用帕斯卡式命名构造函数或类
```js
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```

- 使用下划线 _ 开头命名私有属性
```js
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';

// good
this._firstName = 'Panda';
```

- 别保存 this 的引用。使用箭头函数或 Function#bind
```js
// bad
function foo() {
  const self = this;
  return function() {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function() {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}
```

- 如果你的文件只输出一个类，那你的文件名必须和类名完全保持一致
```js
// file contents
class CheckBox {
  // ...
}
export default CheckBox;

// in some other file
// bad
import CheckBox from './checkBox';

// bad
import CheckBox from './check_box';

// good
import CheckBox from './CheckBox';

```

- 当你导出默认的函数时使用驼峰式命名。你的文件名必须和函数名完全保持一致
```js
function makeStyleGuide() {
}

export default makeStyleGuide;
```

- 当你导出单例、函数库、空对象时使用帕斯卡式命名
```js
const AirbnbStyleGuide = {
  es6: {
  }
};

export default AirbnbStyleGuide;
```

### 存取器

- 如果属性是布尔值，使用 `isVal()` 或 `hasVal()`

```js
// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}
```

### 模块

- 由通用到专用，由远至近，根据依赖关系导入

```js
import react from 'react';              // 别家基础库
import Image from '@hlj/ui/Image';       // 自家ui库
import Login from '@hlj/widget/Login';   // 自家业务UI库

import request from '@/utils/request';    // 应用级别基础库
import Avatar from '@/components/Avatar'; // 应用级别UI库

import { loadCoupon } from '@/pages/order/service';  // 页面级别基础库
import { formatTime } from '@pages/order/view';  // 视图帮助方法
import Header from './Header';    // 当前模块子组件
import style from './style.scss'; // 当前模块样式
```
