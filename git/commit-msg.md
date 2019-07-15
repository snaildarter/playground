# commitlint husky规范commit日志

## 安装 @commitlint/config-angular和@commitlint/cli

> npm install --save-dev @commitlint/config-angular @commitlint/cli

## 安装 husky

> npm install --save-dev husky

## 将husky hook计入到package.json

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

## 创建commitlint.config.js文件到项目根目录，设定规范

其他类似文件 *.commitlintrc.js*, *.commitlintrc.json*, 或 *.commitlintrc.yml*。都是可以配置的

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
