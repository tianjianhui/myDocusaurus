---
id: git
title: git命令
tags:
  - git
  - 代码托管
  - 协作办公
---

### git常用命令

- 初始化一个 git仓库：`git init`

- 添加文件 ：`git add <file>`

- 完成添加：`git commit -m "内容说明"`

- 查看状态结果：`git status`

- 查看修改内容：`git diff document-name`

- 查看修改历史记录：`git log`

- 回退：`git reset --hard HEAD^`(HEAD^也可换成版本号)(git reset --hard HEAD是回退到当前版本，如果本地没有提交可以用这个回退修改)（这时本地的代码就已经回退了,需要线上跟本地保持一致，就需要强推）

- `git push --force` （强行把代码推到线上，一般用于代码回退后）

- 回退：会新建一条 commit 信息，来撤回之前的修改。`git revert`
```js
git revert HEAD // 撤销前一次 commit
git revert HEAD^ // 撤销前前一次 commit
git revert [版本号]
```
- 放弃某个文件的本地修改`git checkout -- filepathname`

- 放弃所有的本地修改` git checkout .`

- 回退覆盖远程分支：`git push origin [name]  --force`(该分支必须是不受保护的)

- 查看命令历史：`git reflog`

- 查看工作区和版本库里最新版本的区别：`git diff HEAD -- <file>`


- 删除文件：`rm <file>`(需用git commit提交)

- 将本地仓库与git上的相关联：`git remote add origin <远程库地址>`

- 把本地库的内容推送到远程：`git push -u origin master`（第一次加-u）

- 从远程库克隆一个本地库：`git clone <远程库地址>`

- 从远程指定分支克隆代码 `git clone -b [分支名] [仓库地址]`
 
- 从远程仓库拉取更新：（`git fetch`）

- `git checkout [分支名]` 紧接着fetch之后，是基于远程分支创建一个相对应的本地分支，加-b 是基于当前的本地分支,同时也可以使用`git merge`命令来将更新合并到工作区域

:::caution 注意

`git pull`命令相当于执行了`git fetch`和`git merge`两个命令

:::

- 查看分支：`git branch`

- 创建分支：`git branch <name>`

- 切换分支：`git checkout <name>`

- 创建+切换分支：`git checkout -b <name>`

- 合并某分支到当前分支：`git merge <name>`

- 删除分支：`git branch -d <name>`

- 如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除

- 重新命名分支:`git branch -m <old-branch-name> <new-branch-name>`

- 将本地分支上传到远程服务器：`（git push -u origin version0 　注：-u是--set-upstream的缩写）`

- 查看远程仓库的信息：`git remote`

- 用`git remote -v`显示更详细的信息

- `git branch -v` 查看所有分支的最后一次操作

- `git branch -vv` 查看当前分支

- `git branch --merged` 查看别的分支和当前分支合并过的分支

- `git branch --no-merged` 查看未与当前分支合并的分支

- `git cherry-pick <commitHash>`  将指定的提交用于当前分支

### 多人协作的工作模式

:::tip 推送代码
首先，可以试图用`git push origin branch-name`推送自己的修改；
如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；
如果合并有冲突，则解决冲突，并在本地提交；
没有冲突或者解决掉冲突后，再用`git push origin branch-name`推送就能成功！
:::

:::tip 关联分支
如果git pull提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建；
建立本地分支和远程分支的关联，使用 `git branch --set-upstream-to=origin/<branch>  <localBranch>`；
如若看不见远程分支，可先pull一下
从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。
发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照
:::

:::tip 切换分支
本地新建的分支如果不推送到远程，对其他人就是不可见的；
从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用git pull抓取远程的新提交；
在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；
:::


### git stash 用法

- `git stash save "save message" ` : 执行存储时，添加备注，方便查找，只有`git stash`也可以，但查找时不方便识别。

- `git stash list` : 查看stash了哪些存储

- `git stash show` : 显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加`stash@{$num}`，比如第二个 `git stash show stash@{1}`

- `git stash show -p` : 显示第一个存储的改动，如果想显示其他存存储，命令:`git stash show  stash@{$num}  -p` ，比如第二个：`git stash show  stash@{1}  -p`

- `git stash apply` : 应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即`stash@{0}`，如果要使用其他个，`git stash apply stash@{$num}`， 比如第二个:`git stash apply stash@{1} `

- `git stash pop` : 命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即`stash@{0}`，如果要应用并删除其他stash，命令: `git stash pop stash@{$num}` ，比如应用并删除第二个: `git stash pop stash@{1}`

- `git stash drop stash@{$num}` : 丢弃stash@{$num}存储，从列表中删除这个存储

- `git stash clear` : 删除所有缓存的stash

### git 回退

** 当我提交了东西到远程分支，如何回撤 **

> 代码到远程分支是从本地仓库到暂存区，再从暂存区到线上仓库的线性流程

- `git reset --hard [版本号]`,回退到当前版本号，会把本地和暂存区此版本号之后的东西全部删除，任何回退都不会影响到线上，所以需要git push --force强推来覆盖线上

- `git reset [版本号]`,这个命令等同于`git reset --mixed [版本号]`，这个会把暂存区的删掉，本地的会保留，相当于你要重新提交，如果仅仅想撤回当前的本地提交，还没到线上，可以直接`git reset HEAD^`

- `git reset --soft [版本号]`,这个会保存本地和暂存区的，一般用于合并commit提交


### 创建标签

在Git中打标签非常简单，首先，切换到需要打标签的分支上:
```js
$ git branch
* dev
master
$ git checkout master
Switched to branch 'master'
```
然后，敲命令`git tag <name>`就可以打一个新标签:
`$ git tag v1.0`

- 可以用命令`git tag`查看所有标签:
```
$ git tag
v1.0
```
比方说要对add merge这次提交打标签，它对应的commit id是6224937，敲入命令:
`$ git tag v0.9 6224937`
注意，标签不是按时间顺序列出，而是按字母排序的。可以用`git show <tagname>`查看标签信息

还可以创建带有说明的标签，用-a指定标签名，-m指定说明文字：
`$ git tag -a v0.1 -m "version 0.1 released" 3628164`

还可以通过-s用私钥签名一个标签：
`$ git tag -s v0.2 -m "signed version 0.2 released" fec145a`

- 命令`git push origin <tagname>`可以推送一个本地标签；

- 命令`git push origin --tags`可以推送全部未推送过的本地标签；

- 命令`git tag -d <tagname>`可以删除一个本地标签；

- 命令`git push origin :refs/tags/<tagname>`可以删除一个远程标签

### git将代码从A仓库迁移到B仓库

`git remote add origin_repo_b git@server_ip:/path/repo_b.git`

origin_repo_b:自己起的名字，只要不与现有的remote名重复即可

git@server_ip:/path/repo_b.git:repo_b的远程路径

### git基于分支的工作流程：

** 1. 集中式工作流 **

集中式工作流就是上面提到集中式版本控制工具中常用的开发流程，以主分支为核心，所有开发人员通过更新主分支代码完成代码的开发工作，同时也会创建一些分支和标签(Git的默认分支是Master)

** 2. 功能开发工作流 **

通过创建对应的功能或问题修复分支，完成功能的开发和Bug的修复。这样的好处就是功能与功能之间的代码是隔离的互不影响，利用Git的快速切换分支特性，可以在同一工作目录下同时开发多个功能，且各个功能之间的代码不会互相影响。另外所有新代码均通过合并的方式合并到Master分支，这样代码更容易控制管理。

** 3. Gitflow工作流 **

Gitflow可以看作是功能开发工作流的完善版本，它除了Master分支、特性分支、Bug修复分支外，还引入了release、develop两个分支来管理发布和开发，而Master只保存稳定版本的代码。


当我们没有主分支权限时，如何将自己的分支合并到主分支`pull request`

切换远程仓库分支
`git checkout --track remotes/origin/dev`

### commitlint 提交规则
- feat：新功能（feature）

- fix：修补bug

- docs：文档（documentation）

- style： 格式（不影响代码运行的变动）

- refactor：重构（即不是新增功能，也不是修改bug的代码变动）

- test：增加测试

- chore：构建过程或辅助工具的变动

- upgrade： 第三方库升级

- revert：回滚

- eg:  `git  commit -m "feat:增加****列表"`

如果提交时不知道报错位置
npm run lint


