var message: string = "Hello world";
console.log(message);

class Person {
    name(): void {
       console.log('Neal');
    }
}

var obj = new Person();
obj.name();

// 元祖
let x: [string, number];
x = ['Neal', 1];

// 枚举
enum Color {Red, Green, Blue};

let c: Color = Color.Blue;
console.log(c, `Color is value.`);

// void 用于表示方法返回的类型，表示该方法没有返回值

function hello(): void {
    console.log(0, 'void: function return void.');
}
hello();

// null 表示对象值缺失。
// undefined 用于初始化变量为一个未定义的值
// never 是其它类型（包括null和undefined）的子类型，代表不会出现的值。

// any 类型
/**
 * `1. 变量的值会动态改变时，比如来自用户的输入，任意类型可以让这些变量跳过编译阶段的类型检车`
 * `2. 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查`
 * `3. 定义存储各种类型数据的数组时`
 */
// eg: 1
 let xAny: any = 4;
 xAny = 'I am who i am';
 xAny = false;

// eg: 2
let y: any = 4;
y.isItExists();
y.toFixed();

// eg: 3
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;



