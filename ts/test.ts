// 基础类型
let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let nameEn: string = "bob";
let str: string = `123456${isDone}`;

let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3, 4];
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello'];

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

let notSure: any = 4;
notSure = 'maybe a string insted';

notSure = false;
let list3: any[] = [1, true, "free"];

function warnUser(): void {
    console.log('This is my Warning message');
}

let unusable: void = undefined;
let unusable2: null = null;

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // (someValue as string).length;
for (var i = 0; i < 10; i++) {
    (function(i){
        setTimeout(function(){
            console.log(i);
        }, 100*i);
    })(i);
}

