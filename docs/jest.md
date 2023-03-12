---
id: jest
title: 前端单元测试之JEST
tags:
  - 单元测试
  - 工具
---

## 使用前的准备工作

- 安装依赖

`yarn add --dev jest`

- 随后，将下列配置内容添加到您的 `package.json`

```js title="package.json"
{
  "scripts": {
    "test": "jest"
  }
}
```

- 写完测试文件，运行 `yarn test`就可以看到打印结果

## 测试用例

### 一个简单的测试函数的用例

```js title="sum.test.js"
const sum = require("../sum"); // 引入要测试的函数

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3); // toBe 是精准匹配,一般用来匹配数字
});
```

### 测试对象

```js
test("object equal", () => {
  const data = {
    one: 1,
    two: {
      kkk: "hello"
    }
  };
  expect(data).toEqual({
    one: 1,
    two: {
      kkk: "hello"
    }
  }); // toEqual 一般用来检查对象的值
});
```

### 测试相反值

```js
test("测试相反值", () => {
  expect(sum(1, 2)).not.toBe(4); //  not.toBe 用来测试反例
});
```

### 真值测试

```js
//  toBeNull 只匹配 null
//  toBeUndefined 只匹配 undefined
//  toBeDefined 与 toBeUndefined 相反
//  toBeTruthy 匹配任何 if 语句为真
//  toBeFalsy 匹配任何 if 语句为假
test("是否为null", () => {
  const data = 12
  expect(data).toBeNull()
})
```

### 测试浮点数

```js
test("测试浮点数", () => {
  const value = 0.1 + 0.2;
  // expect(0.3).toBe(0.3)     // 测试不通过  toBe和toEqual用于测试没有浮点计算的数
  expect(value).toBeCloseTo(0.3); // toBeCloseTo 用于测试浮点数
});
```

### 测试字符串

```js
test("字符串里是否包含某个字符", () => {
  expect("test").not.toMatch(/i/); // toMatch 用于测试字符串
});

test("字符串是否包含某段字符串", () => {
  expect("helloworld").toMatch(/llow/);
});

```

### 测试数组和可迭代对象

```js
test("数组测试", () => {
  const arr = ["jack", "tom", "keven"];
  // expect(arr).toContain('tom');   // toContain 用于测试数组和可迭代对象包含某一值
  expect(new Set(arr)).toContain("tom");
});
```

### 测试函数是否抛出错误

```js
const testFun = () => {
  throw new Error("this is an error");
};
test("函数抛出错误", () => {
  expect(() => {
    testFun();
  }).toThrow(); // toThrow 用于测试函数是否抛出错误  注意⚠️函数需要在expect的包装函数中调用
});
```

### 测试异步代码

```js
test("测试异步函数", () => {
  function callBack(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);  // fetchData 为要测试的异步函数
});

// ********  Promise  *******
test("the data is peanut butter", () => {
  return fetchData().then(data => {
    expect(data).toBe("peanut butter");
  });
});

test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch("error"));
});

test("the fetch fails with an error", () => {
  return expect(fetchData()).rejects.toMatch("error");
});

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});
```

### 使用 `mock` 函数

```js
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

expect(mockCallback.mock.calls.length).toBe(2); // 此 mock 函数被调用了两次
expect(mockCallback.mock.calls[0][0]).toBe(0); // 此 mock 函数第一次调用的第一个参数是0
expect(mockCallback.mock.calls[1][0]).toBe(1); // 此 mock 函数第二次调用的第一个参数是1
expect(mockCallback.mock.results[0].value).toBe(42); // 此 mock 函数第一次调用的结果是42
expect(mockCallback.mock.results[1].value).toBe(43); // 此 mock 函数第二次调用的结果是43

// ********* Mock 的返回值 ********
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true
```

### 数据更改的可视化工具

```js
const {
  diff
} = require('jest-diff');

const a = {
  a: {
    b: {
      c: 5
    }
  }
};
const b = {
  a: {
    b: {
      c: 6
    }
  }
};

const c = ['a', 'b'];
const d = ['b', 'a'];

const result = diff(a, b);

// print diff
console.log('diff', result);
console.log(diff(c, d));
```

### 用于提取和解析JavaScript文件顶部的注释的工具

```js
const {
  parseWithComments
} = require('jest-docblock');

const code = `
/**
 * This is a sample
 *
 * @flow
 */

 console.log('Hello World!');
`;

const parsed = parseWithComments(code);

// prints an object with two attributes: comments and pragmas.
console.log(parsed);
```

### 识别值类型

```js
const {
  getType
} = require('jest-get-type');

const array = [1, 2, 3];
const nullValue = null;
const undefinedValue = undefined;

// prints 'array'
console.log(getType(array));
// prints 'null'
console.log(getType(nullValue));
// prints 'undefined'
console.log(getType(undefinedValue));
```

### 安装和移除

```js
beforeEach(() => {
  // 每个测试之前的处理工作，like dom挂载
});

afterEach(() => {
  // 每个测试之后的处理逻辑，like 卸载dom
});

// ******* 一次性设置 ********

beforeAll(() => {
  // 所有测试前统一设置一下
});

afterAll(() => {
  // 所有测试后统一设置一下
});
```

### 测试分组

```js
// 可以通过 describe 块来将测试分组，类似函数作用域    Jest 会在所有真正的测试开始之前执行测试文件里所有的 describe 处理程序

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 veal', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});
```




