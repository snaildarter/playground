# linux 常用的一些命令

## cp mv rm

> cp [option] source1 source2 source3 ... target_directory

cp [-adfilprsu] 源文件(source) 目标文件(destination)

-a:是指archive的意思，也说是指复制所有的目录
-d:若源文件为连接文件(link file)，则复制连接文件属性而非文件本身
-f:强制(force)，若有重复或其它疑问时，不会询问用户，而强制复制
-i:若目标文件(destination)已存在，在覆盖时会先询问是否真的操作
-l:建立硬连接(hard link)的连接文件，而非复制文件本身
-p:与文件的属性一起复制，而非使用默认属性
-r:递归复制，用于目录的复制操作
-s:复制成符号连接文件(symbolic link)，即“快捷方式”文件-u:若目标文件比源文件旧，更新目标文件

> mv [-fiv] source destination

-f:force，强制直接移动而不询问
-i:若目标文件(destination)已经存在，就会询问是否覆盖
-u:若目标文件已经存在，且源文件比较新，才会更新

> rm [fir] 文件或目录

-f:强制删除
-i:交互模式，在删除前询问用户是否操作
-r:递归删除，常用在目录的删除

> scp [可选参数] file_source file_target

## scp 同步文件

1. scp /Users/neal/web/index.js root@47.107.108.54:/home/wxbot

-r: 递归复制整个目录
-q: 不显示传输进度条
-B: 使用批处理模式（传输过程不询问传输口令或短语）
-C: 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）
-p: 保留原文件的修改时间，访问时间和访问权限
-v: 详细方式显示输出。scp和谁说（1）会显示整个过程的调试信息，

## adduser && passwd

linux 中系统增加用户及设置密码

```
adduser lls
passwd lls
```

增加 _lls_ 用户
在给 _lls_ 添加密码
