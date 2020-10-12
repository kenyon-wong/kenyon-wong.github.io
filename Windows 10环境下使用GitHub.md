# Windows 10 环境下使用 GitHub

> 最后发布:2018-10-13 11:10:14 首次发布:2018-10-13 11:10:14
>
> 版权声明：本文为博主原创文章，遵循 [CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/) 版权协议，转载请附上原文出处链接和本声明。
>
> 本文链接：[https://blog.csdn.net/michael\_f2008/article/details/83036671](https://blog.csdn.net/michael_f2008/article/details/83036671)

*   [1、注册账号](#)

*   [2、下载并安装 Git for Windows](#)

*   [3、配置 Git](#)

*   [4、连接 GitHub](#)

*   [5、创建本地仓库并上传](#)

## 1、注册账号

首先需要去[GitHub 官网](https://github.com)上注册一个账号，然后创建一个仓库。

## 2、下载并安装 Git for Windows

[https://gitforwindows.org](https://gitforwindows.org)

下载完成后进行安装，一路 next 即可。

## 3、配置 Git

*   运行 Git Bash，如下图所示：

![在这里插入图片描述](https://img-blog.csdn.net/20181013132720252?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pY2hhZWxfZjIwMDg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

*   然后创建 ssh key，输入命令：

$ ssh-keygen -t rsa -C "your_email@youremail.com"

其中 `your_email@youremail.com`为注册 GitHub 时使用的邮箱。

![在这里插入图片描述](https://img-blog.csdn.net/20181013133609517?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pY2hhZWxfZjIwMDg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

*   此时可以修改保存 key 的路径，也可以不做修改，直接回车。

![在这里插入图片描述](https://img-blog.csdn.net/20181013133815238?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pY2hhZWxfZjIwMDg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

*   输入每次使用 key 时需提供的密码，如果不输入则不使用密码。

*   出现下图显示的内容则说明已经配置成功。

![在这里插入图片描述](https://img-blog.csdn.net/20181013134330691?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pY2hhZWxfZjIwMDg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## 4、连接 GitHub

*   找到刚才生成的.ssh 文件夹，打开 id\_rsa.pub 文件，并复制里面的内容。

*   打开 GitHub 主页，点击头像处打开下拉菜单，选择 Settings

![在这里插入图片描述](https://img-blog.csdn.net/2018101313501886?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pY2hhZWxfZjIwMDg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

*   点击左侧的 SSH and GPG keys

![在这里插入图片描述](https://img-blog.csdn.net/20181013135213595?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pY2hhZWxfZjIwMDg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

*   点击绿色的 New SSH Key 按钮，在新页面中填入 Title 和 Key。其中，Title 可以随便填写；Key 为刚才复制的内容。最后点击“Add SSH Key”。

![在这里插入图片描述](https://img-blog.csdn.net/20181013135513969?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pY2hhZWxfZjIwMDg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

*   再次打开 Git Bash，输入命令：

$ ssh -T git@github.com

如下图所示：

![在这里插入图片描述](https://img-blog.csdn.net/20181013140535602?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pY2hhZWxfZjIwMDg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

输入 yes 后回车，出现提示：

![在这里插入图片描述](https://img-blog.csdn.net/20181013140658449?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pY2hhZWxfZjIwMDg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

说明已成功连接到 GitHub。

## 5、创建本地仓库并上传

*   打开 Git Bash，并输入以下两行命令：

$ git config --global user.name "your name"

$ git config --global user.email "your_email@youremail.com"

其中，`your name` 最好是 GitHub 的用户名，`your_email@youremail.com`为注册 GitHub 时的邮箱。

*   在本地的硬盘上创建一个文件夹，作为本地仓库。进入文件夹后，打开 Git Bash，并输入以下命令：

$ git clone https://github.com/yourName/yourRepo.git

其中，`yourName`为 GitHub 的用户名；`yourRepo`为第 1 步中在 GitHub 新建的仓库名称。

*   clone 完成后，本地仓库中也有了一个同名的文件夹，即远程仓库。

# [GitHub 新手使用手册](https://www.jianshu.com/p/bf95d885978e)

> 文章推荐:
>
> **[Git 命令总结](https://www.jianshu.com/p/dd7f18ed0bb1)**
>
> *[如何在同一台电脑上使用 github 和 gitlab](https://www.jianshu.com/p/d97c6121952a)**

GitHub 是基于 git 实现的代码托管。git 是目前最好用的版本控制系统了，非常受欢迎，比之 svn 更好。

GitHub 可以免费使用，并且快速稳定。即使是付费帐户，每个月不超过 10 美刀的费用也非常便宜。

利用 GitHub，你可以将项目存档，与其他人分享交流，并让其他开发者帮助你一起完成这个项目。优点在于，他支持多人共同完成一个项目，因此你们可以在同一页面对话交流。

创建自己的项目，并备份，代码不需要保存在本地或者服务器，GitHub 做得非常理想。

学习 Git 也有很多好处。他被视为一个预先维护过程，你可以按自己的需要恢复、提交出现问题,或者您需要恢复任何形式的代码，可以避免很多麻烦。Git 最好的特性之一是能够跟踪错误，这让使用 Github 变得更加简单。Bugs 可以公开，你可以通过 Github 评论，提交错误。

在 GitHub 页面，你可以直接开始，而不需要设置主机或者 DNS。

对于我来说，我可以在公司和家编辑同样的一套代码了，用 U 盘或者网盘都好麻烦的说

理论说太多容易忘，来实践实践吧。

### 一. 创建 github repository(仓库)

#### 1\. 登录 [github](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2F)

#### 2\. 创建 repository(仓库)

为啥要叫 repository(仓库)？我起初也纳闷，叫代码库不更简单明了么？ 但仔细一琢磨，仓库一般都是放粮食的吧，这是把代码当作饱腹之物，多有爱，瞬间觉得这冰冷冷的代码充满了查克拉。

扯远了，来看怎么创建仓库

看到右上角 "+" 没? 点击选择 "New repository"

![](https://upload-images.jianshu.io/upload_images/4804567-a9214d983f3a748b.png?imageMogr2/auto-orient/strip|imageView2/2/w/301)

下面是创建仓库信息，只有名字是必填项

![](https://upload-images.jianshu.io/upload_images/4804567-6a9e89e7c89d2b35.png?imageMogr2/auto-orient/strip|imageView2/2/w/789)

创建成功后，可以看到自己的仓库地址。它还介绍了 github 仓库的常用指令, 这个指令需要在本地安装 git 客户端

git init // 把这个目录变成 Git 可以管理的仓库

git add README.md // 文件添加到仓库

git add . // 不但可以跟单一文件，还可以跟通配符，更可以跟目录。一个点就把当前目录下所有未追踪的文件全部 add 了

git commit -m "first commit" // 把文件提交到仓库

git remote add origin git@github.com:wangjiax9/practice.git // 关联远程仓库

git push -u origin master // 把本地库的所有内容推送到远程库上

![](https://upload-images.jianshu.io/upload_images/4804567-7106c26b6e83ecb2.png?imageMogr2/auto-orient/strip|imageView2/2/w/860)

### 二. 安装 git 客户端

#### 1\. 下载 [git](https://links.jianshu.com/go?to=https%3A%2F%2Fgit-scm.com%2F)

![](https://upload-images.jianshu.io/upload_images/4804567-42874577806d037f.png?imageMogr2/auto-orient/strip|imageView2/2/w/356)

#### 2\. 安装客户端

![](https://upload-images.jianshu.io/upload_images/4804567-9c365772c80c0308.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

![](https://upload-images.jianshu.io/upload_images/4804567-4ff227fa2d21f846.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

选择安装路径，千万别选带中文的路径，有时候会引起不必要的误会

![](https://upload-images.jianshu.io/upload_images/4804567-185e4ce580d41016.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

选择安装组件，按默认的来就好了

1）图标组件(Addition icons) : 选择是否创建快速启动栏图标 或者 是否创建桌面快捷方式;

2）桌面浏览(Windows Explorer integration) : 浏览源码的方法, 单独的上下文浏览 只使用 bash 或者 只用 Git GUI 工具; 高级的上下文浏览方法 使用 git-cheetah plugin 插件;

3）关联配置文件(Associate .git\*) : 是否关联 git 配置文件, 该配置文件主要显示文本编辑器的样式;

4）关联 shell 脚本文件(Associate .sh) : 是否关联 Bash 命令行执行的脚本文件;

5）使用 TrueType 编码 : 在命令行中是否使用 TruthType 编码, 该编码是微软和苹果公司制定的通用编码;

![](https://upload-images.jianshu.io/upload_images/4804567-3f09255ea4d9c116.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

设置开始菜单中快捷方式的目录名称，默认就好，下一步吧

![](https://upload-images.jianshu.io/upload_images/4804567-75155711e0c84f0f.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

设置环境变量 : 选择使用什么样的命令行工具, 一般情况下我们默认使用 Git Bash 即可, 默认选择;

1）Git 自带 : 使用 Git 自带的 Git Bash 命令行工具;

2）系统自带 CMD : 使用 Windows 系统的命令行工具;

3） 二者都有 : 上面二者同时配置, 但是注意, 这样会将 windows 中的 find.exe 和 sort.exe 工具覆盖, 如果不懂这些尽量不要选择;

![](https://upload-images.jianshu.io/upload_images/4804567-4f2bc47bad57fafb.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

选择换行格式 ，依然是默认就好。

1）检查出 windows 格式转换为 unix 格式 : 将 windows 格式的换行转为 unix 格式的换行在进行提交;

2）检查出原来格式转为 unix 格式 : 不管什么格式的, 一律转为 unix 格式的换行在进行提交;

3）不进行格式转换 : 不进行转换, 检查出什么, 就提交什么;

![](https://upload-images.jianshu.io/upload_images/4804567-6027491640922fb7.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

选择终端模拟器，依然默认就好

1）使用 MinTTY，就是在 Windows 开了一个简单模拟 Linux 命令环境的窗口 Git Bash

2）使用 windows 的系统的命令行程序 cmd.exe

![](https://upload-images.jianshu.io/upload_images/4804567-c8c82ac44f1078bb.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

选择默认就好，不用文件系统缓存

![](https://upload-images.jianshu.io/upload_images/4804567-c81762a8dcfabc2a.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

安装 ing...

![](https://upload-images.jianshu.io/upload_images/4804567-ba2f419011476815.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

安装成功

![](https://upload-images.jianshu.io/upload_images/4804567-e95635f037f910ee.png?imageMogr2/auto-orient/strip|imageView2/2/w/503)

#### 3\. 绑定用户

打开 git-bash.exe，在桌面快捷方式/开始菜单/安装目录中

因为 Git 是分布式版本控制系统，所以需要填写用户名和邮箱作为一个标识，用户和邮箱为你 github 注册的账号和邮箱

`git config --global user.name "Your Name"`

`git config --global user.email "your_email@example.com"`

注: [your\_email@example.com](https://links.jianshu.com/go?to=mailto%3Ayour_email%40example.com) 的部分请改成你在创建账户时用的邮箱地址

![](https://upload-images.jianshu.io/upload_images/4804567-365223d5e05e546e.png?imageMogr2/auto-orient/strip|imageView2/2/w/445)

这个命令会在 C:\\Users\\Administator （Administator 为电脑用户名，每个人不同）目录下生成 .gitconfig 文件

![](https://upload-images.jianshu.io/upload_images/4804567-ea24a13bbfa47d9d.png?imageMogr2/auto-orient/strip|imageView2/2/w/491)

PS: 下面代码是为了记住用户名和密码, 不用每次都输入, 需要的直接添加保存即可

[credential]

helper = store

当然, 还有其他方法保存, 可以直接在 git bash 中执行命令：

*   记住密码十五分钟

`git config --global credential.helper cache`

*   自定义记住的时间 (单位: 秒)

`git config credential.helper 'cache --timeout=3600'`

*   永久记住

`git config --global credential.helper store`

最后再输入一次账号密码就可以保存了

### 三. 为 Github 账户设置 SSH key

众所周知 ssh key 是加密传输。

加密传输的算法有好多，git 使用 rsa，rsa 要解决的一个核心问题是，如何使用一对特定的数字，使其中一个数字可以用来加密，而另外一个数字可以用来解密。这两个数字就是你在使用 git 和 github 的时候所遇到的 public key 也就是公钥以及 private key 私钥。

其中，公钥就是那个用来加密的数字，这也就是为什么你在本机生成了公钥之后，要上传到 github 的原因。从 github 发回来的，用那公钥加密过的数据，可以用你本地的私钥来还原。

如果你的 key 丢失了，不管是公钥还是私钥，丢失一个都不能用了，解决方法也很简单，重新再生成一次，然后在 github.com 里再设置一次就行

#### 1\. 生成 SSH Key

首先检查是否已生成密钥 `cd ~/.ssh`

`ls` 如果有 3 个文件，则密钥已经生成，id\_rsa.pub 就是公钥

![](https://upload-images.jianshu.io/upload_images/4804567-5498a20ffa73930e.png?imageMogr2/auto-orient/strip|imageView2/2/w/246)

也可以打开我的电脑 `C:\Users\Administator\.ssh` （Administator 为电脑用户名，每个人不同）里面找到

![](https://upload-images.jianshu.io/upload_images/4804567-0e4b2a3011fbe48f.png?imageMogr2/auto-orient/strip|imageView2/2/w/310)

如果没有生成，那么通过 `$ ssh-keygen -t rsa -C "your_email@example.com"` 来生成

注: [your\_email@example.com](https://links.jianshu.com/go?to=mailto%3Ayour_email%40example.com) 的部分请改成你在创建账户时用的邮箱地址

1）是路径确认，直接按回车存默认路径即可

2）直接回车键，这里我们不使用密码进行登录, 用密码太麻烦;

3）直接回车键

![](https://upload-images.jianshu.io/upload_images/4804567-d98a9822c8b3c1a5.png?imageMogr2/auto-orient/strip|imageView2/2/w/563)

生成成功后，去对应目录 `C:\Users\Administator\.ssh` （Administator 为电脑用户名，每个人不同）用记事本打开 id\_rsa.pub，得到 ssh key 公钥

![](https://upload-images.jianshu.io/upload_images/4804567-6a5385b8058460ca.png?imageMogr2/auto-orient/strip|imageView2/2/w/572)

#### 2\. 为 github 账号配置 ssh key

切换到 github，展开个人头像的小三角，点击 settings

![](https://upload-images.jianshu.io/upload_images/4804567-fbb65dded578867c.png?imageMogr2/auto-orient/strip|imageView2/2/w/210)

然后打开 SSH and GPG keys 菜单， 点击 New SSH key 新增密钥

![](https://upload-images.jianshu.io/upload_images/4804567-fbc32170d3eabe91.png?imageMogr2/auto-orient/strip|imageView2/2/w/1071)

标题建议和仓库名一致, 便于区分. 接着将 id\_rsa.pub 文件中 key 粘贴到此，最后 Add SSH key 生成密钥

![](https://upload-images.jianshu.io/upload_images/4804567-f2ce071d1a7a83a7.png?imageMogr2/auto-orient/strip|imageView2/2/w/1137)

如此，github 账号的 SSH keys 配置完成

![](https://upload-images.jianshu.io/upload_images/4804567-acb564e011a085d8.png?imageMogr2/auto-orient/strip|imageView2/2/w/755)

### 四. 上传本地项目到 github

-----------------

1.  创建一个本地项目

![](https://upload-images.jianshu.io/upload_images/4804567-8d5e957b140acb96.png?imageMogr2/auto-orient/strip|imageView2/2/w/331)

2.  建立本地仓库

再来复习一下创建新仓库的指令：

git init // 把这个目录变成 Git 可以管理的仓库

git add README.md // 文件添加到仓库

git add . // 不但可以跟单一文件，还可以跟通配符，更可以跟目录。一个点就把当前目录下所有未追踪的文件全部 add 了

git commit -m "first commit" // 把文件提交到仓库

git remote add origin git@github.com:wangjiax9/practice.git // 关联远程仓库

git push -u origin master // 把本地库的所有内容推送到远程库上

首先，进入到 beautifulDay 项目目录，还记得创建仓库成功后的那个页面吧，指令都在呢

然后执行指令：`git init`

![](https://upload-images.jianshu.io/upload_images/4804567-2cbb5b522bb54a59.png?imageMogr2/auto-orient/strip|imageView2/2/w/494)

初始化成功后你会发现项目里多了一个隐藏文件夹.git

这个目录是 Git 用来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把 Git 仓库给破坏了。

![](https://upload-images.jianshu.io/upload_images/4804567-661c2653f4048f02.png?imageMogr2/auto-orient/strip|imageView2/2/w/372)

接着，将所有文件添加到仓库

执行指令：`git add .`

![](https://upload-images.jianshu.io/upload_images/4804567-14d44118fb8427ce.png?imageMogr2/auto-orient/strip|imageView2/2/w/393)

然后把文件提交到仓库，双引号内是提交注释

执行指令：`git commit -m "提交文件"`

![](https://upload-images.jianshu.io/upload_images/4804567-039a8943ff8646dd.png?imageMogr2/auto-orient/strip|imageView2/2/w/403)

如此本地仓库建立好了

#### 3\. 关联 github 仓库

到 github beautifulDay 仓库复制仓库地址

![](https://upload-images.jianshu.io/upload_images/4804567-c0791897b8f96123.png?imageMogr2/auto-orient/strip|imageView2/2/w/710)

然后执行指令：`git remote add origin git@github.com:wangjiax9/beautifulDay.git`

![](https://upload-images.jianshu.io/upload_images/4804567-c2bb63381e149659.png?imageMogr2/auto-orient/strip|imageView2/2/w/477)

#### 4\. 上传本地代码

执行指令：`git push -u origin master`

敲一个：yes， 然后回车

![](https://upload-images.jianshu.io/upload_images/4804567-4c9a70c59144e803.png?imageMogr2/auto-orient/strip|imageView2/2/w/566)

到此，本地代码已经推送到 github 仓库了，我们现在去 github 仓库看看

咦！奇怪了，我的目录呢？这个坑突然冒出来是不是印象很深刻呢~

注意咯：git 是不能管理空的文件夹的，文件夹里必须有文件才能 add

好，我们来试一下，我在 examples 里新建了一个 test1.html 文件

执行指令添加文件->提交文件->推送文件

`git add .`

`git commit -m "提交 test1.html"`

`git push -u origin master`

然后刷新一下 github，你会看到，examples 文件夹出来了

总结

现在通过博客来将 github 入门梳理了一遍，印象好深刻，应该不会变成零碎了。如果大家想要知道更多的 git 操作和知识，推荐去看看[缪雪峰的 git 教程](https://links.jianshu.com/go?to=http%3A%2F%2Fwww.liaoxuefeng.com%2Fwiki%2F0013739516305929606dd18361248578c67b8067c8c017b000)，讲得很详细