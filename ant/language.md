# 国际化相关的语言包处理

## 背景

多语言处理的时候，N国语言，都要处理，增加一个字段，N个文件要处理，本人比较懒吧，想在一个文件里面处理，然后在分到各个国家对应的文件里面

## 以antd pro为例子处理

> 1. 把各国语言包文件汇总

```js
const fs = require('fs');

const en = require('./locales/en-US.json');
const zhcn = require('./locales/zh-CN.json');
const zhtw = require('./locales/zh-TW.json');

const { log } = console;
const base = {};

function mergerData(targetData, dataArr) {
    const [ first ] = dataArr;
    for (let key in first) {
        if (typeof first[key] === 'object') {
            if (Array.isArray(first[key])) {
                targetData[key] ? '' : (targetData[key] = []);
            } else {
                targetData[key] ? '' : (targetData[key] = {});
            }
            const newData = dataArr.map(item => item[key]);
            mergerData(targetData[key], newData);
        } else {
            targetData[key] ? '' : (targetData[key] = {});
            targetData[key]['en-US'] = dataArr[0][key];
            targetData[key]['zh-CN'] = dataArr[1][key];
            targetData[key]['zh-TW'] = dataArr[2][key];
        }
    }
}

mergerData(base, [en, zhcn, zhtw]);

fs.writeFileSync('./base.json', JSON.stringify(base, undefined, 4), 'utf8');
log('complied sucssed!')

```

> 2. 把base文件分发给单独的js文件

```js
const fs = require('fs');

const { log } = console;

const base = require('./base.json');

const [en, cn, tw] = [{}, {}, {}];

function tolan(data, en, cn, tw) {
    const lanArr = [en, cn, tw];
    for (let key in data) {
        if (typeof data[key] === 'object') {
            if (Array.isArray(data[key])) {
                lanArr.forEach(item => {
                    item[key] ? '' : item[key] = [];
                });
            } else {
                lanArr.forEach(item => {
                    item[key] ? '' : item[key] = {};
                });
            }

            for (let lankey in data[key]) {
                if (typeof data[key][lankey] === 'object') {
                    tolan(data[key], en[key], cn[key], tw[key]);
                } else {
                    en[key] = data[key]['en-US'];
                    cn[key] = data[key]['zh-CN'];
                    tw[key] = data[key]['zh-TW'];
                    break;
                }
            }
        }
    }
}

tolan(base, en, cn, tw);

fs.writeFileSync('./en.json', JSON.stringify(en, undefined, 4), 'utf8');
fs.writeFileSync('./cn.json', JSON.stringify(cn, undefined, 4), 'utf8');
fs.writeFileSync('./tw.json', JSON.stringify(tw, undefined, 4), 'utf8');

log('complied sucssed!')

```

## 代码总结

都使用了递归，解决层层嵌套，判断是数组还是的对象，还原语言包中想使用数组（*[]*）还是对象（*{}*），其他感觉没什么了。共勉！
