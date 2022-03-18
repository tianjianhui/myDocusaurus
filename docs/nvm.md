---
id: nvm
title: node版本控制
tags: [nvm, node, 版本控制]
---

## nvm安装（mac）

### 安装命令（二选一）

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

### 安装失败的处理

:::note 
你的系统可能缺少一个 .bash_profile 文件，你可以创建一个此文件（可通过vi或vim命令），打开复制粘贴以下代码（安装nvm成功后终端的最好3行代码）进去，保存，然后再次运行安装命令
:::

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
:::caution 注意
如果你安装了 oh my zsh ，需要在 .zshrc 文件去添加以上配置信息，（一般安装成功都会自动写入这个文件最底部）
:::

:::tip 提示
如果上面没有解决问题，打开你的 .bash_profile 文件，并添加以下代码：
`source ~/.bashrc`，更改完记得保存更改并退出

退出文件的方法：先按`esc`，然后输入`:`，然后输入`q`，最后回车
:::

### nvm常用命令

-  `nvm install stable`  安装最新稳定版 node

- `nvm install <version>` 安装指定版本，如：安装v4.4.0，nvm install v4.4.0

- `nvm uninstall <version>`  删除已安装的指定版本，语法与install类似

- `nvm use <version>`  切换使用指定的版本node

- `nvm ls`  列出所有安装的版本

- `nvm alias default <version>`  如： `nvm alias default v11.1.0`，设置默认版本
