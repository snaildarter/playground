// 基础类型
var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var nameEn = "bob";
var str = "123456" + isDone;
var list = [1, 2, 3];
var list1 = [1, 2, 3, 4];
var x;
x = ['hello', 10];
// x = [10, 'hello'];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var notSure = 4;
notSure = 'maybe a string insted';
notSure = false;
var list3 = [1, true, "free"];
function warnUser() {
    console.log('This is my Warning message');
}
var unusable = undefined;
var unusable2 = null;
var someValue = "this is a string";
var strLength = someValue.length; // (someValue as string).length;
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
