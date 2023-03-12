---
id: flow
title: 流程规范
tags:
  - flow
  - 流程
  - 协作办公
---

### 提交代码规范
#### 使用 commitizen 规范 Git 提交说明

- 全局使用

1. 安装依赖
```
npm install -g commitizen
npm install -g cz-conventional-changelog
```

2. 配置 commitizen adapter
```
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc // mac命令工具输入
```

3. 使用
```
git add .
git cz
```
- 项目局部使用

1. 安装依赖
`npm install --save-dev commitizen`

2. 配置，打开项目的 package.json 文件，配置如下
```js title="package.json"
{
  "scripts": {
    "commit": "git-cz",
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  }
}
```

3. 使用
```
git add .
npm run commit
```

#### Commit message 的格式
- Header

Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）

**type用于说明 commit 的类别**

:::info

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

:::

**scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同**

**subject是 commit 目的的简短描述，不超过50个字符**

- Body

Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例

:::info

More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent

:::

- Footer

Footer 部分只用于两种情况

1. 不兼容变动
**如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。**

2. 关闭 Issue
**如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue**

`Closes #123, #245, #992`