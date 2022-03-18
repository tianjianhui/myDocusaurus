---
id: ts
title: ts入门
tags:
  - TS
  - 前端
---

## TS基础

### 变量定义
```ts
let name: string = "yunfan";

let isName: boolean = false;

let age: number = 28;

let u: undefined = undefined;

let n: null = null;

let notSoure: any = 'jjj'

// 函数参数类型
function divide(param: unknown) {
  return param as number / 2;
}

//函数返回类型
function welcome(): void {
  console.log('hello')
}

// 数组类型
let arr: number[] = [1, 2, 3];

// 元组类型[元组类型允许表示一个已知元素数量和类型的数组]
let tuple: [number, string] = [18, 'yes']

tuple.push(56) // 不会报错，定义时越界会报错

let tuple: [number, string] = [18, 'yes', 25] // 越界报错

// 多种定义数组的方法
let resArr:Array<number | string | boolean> = [23, 45, 'yeo', true] 

let resArr1:Array<any> = [23, 45, 'yeo', true]

let resArr2:any[] = [23, 45, 'yao', false]

let resArr3:(number | string | boolean)[] =[56, true, 'jack']

type arrItem = number | string | boolean

let resArr4: arrItem[] = [89, '344', 'hjk', false]
```

### 函数表达式写法
```ts
function add(x:number, y:number):number {
  return x + y
}

// 可选参数，要放在最后面
function add1(x:number, y:number = 20, z?:number):number {
  return x + y
}
```

### 接口定义
```ts
interface Person {
  readonly name: string;
  age?: number;
}
let yunfan: Person = {
  name: 'yunfan',
  age: 28
}

// interface 描述函数类型
interface ISum {
  (x:number,y:number):number
}

const sum:ISum = (num1, num2) => {
  return num1 + num2
}
```

:::caution 注意
在 TS 中，重复声明一个 interface，会把所有的声明全部合并，这里所有的 .d.ts 文件合并出来的 Array 接口，就组合成了 Array 内置类型的全部属性和功能

like: 
```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 会合并成
interface person {
  name: string;
  age: number;
}
```
:::

### 抽象类
```ts
/所谓抽象类，是指只能被继承，但不能被实例化的类
abstract class Person {}
```

### implements
```ts
// implements 是实现的意思，class 实现 interface
interface MusicInterface {
  playMusic(): void
}

class Cellphone implements MusicInterface {
  playMusic() {}
}

// 定义了约束后，class 必须要满足接口上的所有条件
interface MusicInterface {
  playMusic(): void
}

interface CallInterface {
  makePhoneCall(): void
}

class Cellphone1 implements MusicInterface, CallInterface {
  playMusic() {}
  makePhoneCall() {}
}

// 使用 implements 只能约束类实例上的属性和方法，要约束构造函数和静态属性，需要这么写
interface CircleStatic {
  new (radius: number): void
  pi: number
}

const Circle:CircleStatic = class Circle {
  static pi: 3.14
  public radius: number
  public constructor(radius: number) {
      this.radius = radius
  }
}
```

### 枚举
```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum ItemStatus {
  Buy = 100,
  Send = 20,
  Receive = 1
}

// 使用 const 来定义一个常量枚举, 编译出来的 JS 代码会简洁很多，提高了性能
const enum Jack {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

## TS进阶

### 联合类型
```ts
let num: number | string
num = 8
num = 'eight'
```

### 交叉类型
```ts
interface Animal {
  type: string;
  age: number;
}

type Dog = Animal & { grade: number}
```

### type

:::tip 提示
类型别名用 type 关键字来书写，有了类型别名，我们书写 TS 的时候可以更加方便简洁

类型别名会给一个类型起个新名字。类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型
:::

```ts
type Name = string                              // 基本类型

type arrItem1 = number | string                  // 联合类型

const arr1: arrItem[] = [1,'2', 3]

type Person1 = { 
  name: Name 
}

type Student = Person1 & { grade: number  }       // 交叉类型

type Teacher = Person1 & { major: string  } 

type StudentAndTeacherList = [Student, Teacher]  // 元组类型

const list: StudentAndTeacherList = [
  { name: 'lin', grade: 100 }, 
  { name: 'liu', major: 'Chinese' }
]
```

:::note type 和 interface 的区别
**相同点**
1. 都可以定义一个对象或函数  都允许继承
```ts
// interface 继承 interface
interface Person { 
  name: string 
}

interface Student extends Person { 
  grade: number 
}

const person:Student = {
  name: 'lin',
  grade: 100
}

// type 继承 type
type Person = { 
  name: string 
}

type Student = Person & { grade: number  }   // 用交叉类型

// interface 继承 type
type Person = { 
  name: string 
}

interface Student extends Person { 
  grade: number 
}

// type 继承 interface
interface Person { 
  name: string 
}

type Student = Person & { grade: number  }   // 用交叉类型
```

**不同点**
1. interface（接口） 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述

type 是类型别名，用于给各种类型定义别名，让 TS 写起来更简洁、清晰

2. type 可以声明基本类型、联合类型、交叉类型、元组，interface 不行

3. interface可以合并重复声明，type 不行

4. interface 是接口，用于描述一个对象。

type 是类型别名，用于给各种类型定义别名，让 TS 写起来更简洁、清晰
:::

### 类型断言

**使用类型断言来告诉 TS，我（开发者）比你（编译器）更清楚这个参数是什么类型，你就别给我报错了**
```ts
function getLength(arg: number | string): number {
  const str = arg as string
  if (str.length) {
      return str.length
  } else {
      const number = arg as number
      return number.toString().length
  }
}
```

### 字面量类型
```ts
type ButtonSize = 'mini' | 'small' | 'normal' | 'large'

type Sex = '男' | '女'
```

### 泛型
:::tip 了解
泛型基本使用

处理函数参数
:::
```ts
function print<T>(arg:T):T {
  console.log(arg)
  return arg
}
print<string>('hello')  // 定义 T 为 string

print('hello')  // TS 类型推断，自动推导类型为 string

type Print = <T>(arg: T) => T
const printFn:Print = function print(arg) {
    console.log(arg)
    return arg
}

interface Iprint<T> {
  (arg: T): T
}

function print<T>(arg:T) {
  console.log(arg)
  return arg
}

const myPrint: Iprint<number> = print
// 多个泛型
function swap<T, U>(tuple: [T, U]): [U, T]{
  return [tuple[1], tuple[0]]
}

// 约束泛型
interface ILength {
  length: number
}

function printLength<T extends ILength>(arg: T): T {
  console.log(arg.length)
  return arg
}

// 使用泛型，可以在定义函数、接口或类的时候，不预先指定具体类型，而是在使用的时候再指定类型。
// 泛型无法约束类的静态成员
// 泛型约束接口
interface IKeyValue<T, U> {
  key: T
  value: U
}

const k1:IKeyValue<number, string> = { key: 18, value: 'lin'}
const k2:IKeyValue<string, number> = { key: 'lin', value: 18}
```

### 索引类型
```ts
interface IPerson {
  name: string;
  age: number;
}

type Test = keyof IPerson; // 'name' | 'age'

interface IPerson {
  name: string;
  age: number;
}

let type1:  IPerson['name'] // string
let type2:  IPerson['age']  // number

// 检查动态属性
// 定义泛型 T、K，用于约束 userInfo 和 keys
// 为 K 增加一个泛型约束,使 K 继承 userInfo 的所有属性的联合类型, 即K extends keyof T
function getValues<T, K extends keyof T>(userInfo: T, keys: K[]): T[K][] {
  return keys.map(key => userInfo[key])
}
```

### 映射类型

:::tip 提示
TS允许将一个类型映射成另外一个类型
:::

```ts
// 介绍映射类型之前，先介绍一下 in 操作符，用来对联合类型实现遍历
type Hello = 'name' | 'school' | 'sex'
type world = {
  [k in Hello]: string
}

// Partial<T>将T的所有属性映射为可选的

interface Man {
  name: string;
  age: number;
}
type IMan = Partial<Man>
let xiaoming: IMan = {}

// Partial原理
type Partial<T> = {
  [P in keyof T]?: T[P]
}
```

### Readonly
```ts
type IReadonly = Readonly<Man>
let xiaogang: IReadonly = {
  name: 'xiaogang',
  age: 29
}
// Readonly 原理 和 Partial 几乎完全一样
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
```

### Pick
:::tip 提示
Pick用于抽取对象子集，挑选一组属性并组成一个新的类型
:::

```ts
interface IPerson {
  name: string
  age: number
  sex: string
}

type IPick = Pick<IPerson, 'name' | 'age'>


let p1: IPick = {
  name: 'lin',
  age: 18
}

// Pick 原理
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

### Record

:::tip 提示
上面三种映射类型官方称为同态,意思是只作用于 obj 属性而不会引入新的属性

Record 是会创建新属性的非同态映射类型
:::

```ts
interface IPerson {
  name: string
  age: number
}

type IRecord = Record<string, IPerson>

let personMap: IRecord = {
   person1: {
       name: 'lin',
       age: 18
   },
   person2: {
       name: 'liu',
       age: 25
   } 
}

// Record 原理
type Record<K extends keyof any, T> = {
  [P in K]: T
}
```

### Exclude
```ts
// Exclude 意思是不包含，Exclude<T, U> 会返回 联合类型 T 中不包含 联合类型 U 的部分
type Test = Exclude<'a' | 'b' | 'c', 'a'>
```

### Extract
```ts
// Extract<T, U>提取联合类型 T 和联合类型 U 的所有交集
type Test = Extract<'key1' | 'key2', 'key1'>
```

### Omit
```ts
// Omit<T, U>从类型 T 中剔除 U 中的所有属性
interface IPerson {
  name: string
  age: number
}

type IOmit = Omit<IPerson, 'age'>
```

### NonNullable
```ts
// NonNullable<T> 用来过滤类型中的 null 及 undefined 类型
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]
```

### Parameters
```ts
// Parameters 获取函数的参数类型，将每个参数类型放在一个元组中
type T1 = Parameters<() => string>  // []

type T2 = Parameters<(arg: string) => void>  // [string]

type T3 = Parameters<(arg1: string, arg2: number) => void> // [arg1: string, arg2: number]
```

### ReturnType
```ts
// ReturnType 获取函数的返回值类型
type T0 = ReturnType<() => string>  // string

type T1 = ReturnType<(s: string) => void>  // void
```

### TS 声明文件
:::tip 提示
**declare**
当使用第三方库时，很多三方库不是用 TS 写的，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
**.d.ts**
通常我们会把声明语句放到一个单独的文件（Vue.d.ts）中，这就是声明文件，以 .d.ts 为后缀
:::

```ts title="src/Vue.d.ts"
interface VueOption {
  el: string,
  data: any
}

declare class Vue {
  options: VueOption
  constructor(options: VueOption)
}
```

```ts title="src/index.ts"
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

:::caution 注意
 一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。所以当我们将 Vue.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 Vue 的类型定义了
:::

### 使用三方库
- 那么当我们使用三方库的时候，是不是所有的三方库都要写一大堆 decare 的文件呢？

- 答案是不一定，要看社区里有没有这个三方库的 TS 类型包（一般都有）。

- 社区使用 @types 统一管理第三方库的声明文件，是由 DefinitelyTyped[11] 这个组织统一管理的

- 比如安装 lodash 的类型包

- `npm install @types/lodash -D`


### 泛型约束后端接口参数类型
```ts
import axios from 'axios'

interface API {
    '/book/detail': {
        id: number,
    },
    '/book/comment': {
        id: number
        comment: string
    }
    ...
}


function request<T extends keyof API>(url: T, obj: API[T]) {
    return axios.post(url, obj)
}

request('/book/comment', {
    id: 1,
    comment: '非常棒！'
})
```



