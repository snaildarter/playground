# commitlint husky 规范 commit 日志

## 安装 @commitlint/config-angular 和@commitlint/cli

```
 npm install --save-dev @commitlint/config-angular @commitlint/cli
```

## 安装 husky

```
npm install --save-dev husky
```

## 将 husky hook 计入到 package.json

```js
{
  ...
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}

```

## 创建 commitlint.config.js 文件到项目根目录，设定规范

其他类似文件 _.commitlintrc.js_, _.commitlintrc.json_, 或 _.commitlintrc.yml_。都是可以配置的

```js
module.exports = {
  parserPreset: {
    parserOpts: {
      issuePrefixes: ["WEB-"]
    }
  },
  rules: {
    "references-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["Feature", "Fix", "Doc", "Refactor", "Merge", "Release"]
    ],
    "subject-empty": [2, "never"]
  }
};
```

类似于这种

```bash
npm --no-git-tag-version version patch
```

## git tags

在 gitlab 中增加 tag 后，然后在 vscode 中拉代码的时候就会报错，

可以在命令行中

```bash
git fetch --tags -f
```


批量更换原来已提交的name和email

```bash
#!/bin/sh

git filter-branch --env-filter '

OLD_EMAIL="www@www.com"
CORRECT_NAME="Neal"
CORRECT_EMAIL="1107554021@qq.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```
