var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
for (var i = 0; i < 3; i++) {
    (function (i) {
        setTimeout(function () {
            // console.log(i);
        }, 100 * i);
    })(i);
}
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
;
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var myArray2 = ["Alice", "Bob"];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
// console.log(greeter.greet())
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceImMeters) {
        if (distanceImMeters === void 0) { distanceImMeters = 0; }
        console.log("Animal moved " + distanceImMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog('123');
// dog.bark();
// dog.move(10);
// dog.bark();
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
function indetity(arg) {
    return arg;
}
console.log(indetity(123), indetity("id"));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Response1;
(function (Response1) {
    Response1[Response1["No"] = 0] = "No";
    Response1[Response1["Yes"] = 1] = "Yes";
})(Response1 || (Response1 = {}));
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p;
p = new Person();
