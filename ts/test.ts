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
for (var i = 0; i < 3; i++) {
    (function(i){
        setTimeout(function(){
            // console.log(i);
        }, 100*i);
    })(i);
}

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string){
    let result = source.search(subString);
    return result > -1;
};

interface StringArray {
    [index: number]: string;
};

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];

// myArray2[2] = "bob"

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number){}
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter('world');

// console.log(greeter.greet())

class Animal {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }

    public move(distanceImMeters: number = 0) {
        console.log(`Animal moved ${distanceImMeters}m.`);
    }
}

class Dog extends Animal {
    public constructor(name: string) {
        super(name);
    }
    bark() {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog('123');

// dog.bark();
// dog.move(10);
// dog.bark();

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + ' ' + restOfName.join(' ');
}

function indetity<T>(arg: T): T {
    return arg;
}

console.log(indetity(123),indetity("id"))

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

enum Response1 {
    No = 0,
    Yes = 1
}

interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;

p = new Person();


function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "number";
}

function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }

    if (isString(padding)) {
        return padding + value;
    }

    throw new Error(`Expected string or number, got '${padding}'.`)
}

function padLeft1(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }

    if (typeof padding === 'string') {
        return padding + value;
    }

    throw new Error(`Expected string or number, got '${padding}'.`);
}

interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingpadder implements Padder {
    constructor(private numSpace: number) {}

    getPaddingString() {
        return Array(this.numSpace + 1).join(" ");
    }
}

function f(x: number, y?: number) {
    return x + (y || 0);
}

console.log(f(1, 2))
console.log(f(2))

const sym1 = Symbol('key');

let obj = {
    [sym1]: "value 123"
}

console.log(obj[sym1])
