var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var x = 10;
var y = 20;
x = 20;
// y = 30; cannot assign to 'y' because it constant
function add(n1, n2) {
    console.log(n1 + n2);
}
add(1, 2);
var a = 1234;
a = 'abc';
a = false;
var ar1 = [2, 3, 4, 5];
var ar2 = [true, false];
var ar3 = [2, 3, true, false];
var ar4 = [];
var ar5 = [];
var ar6 = ['1', '2'];
function printArray(ar) {
    ar.forEach(function (element) {
        console.log(element);
    });
}
// printArray(ar2); argument type boolean[] cannot assign to parameter type number[]
printArray(ar1);
var ar7 = ['a', 'b'];
var ar8 = ['c', 'd'];
ar7.push(ar8[0]);
ar7.push.apply(ar7, ar8);
var ar9 = __spreadArray(__spreadArray([], ar7, true), ar8, true);
var t1 = [2, 3];
// let t2: [number,string] = [2,3]; number cannot assign to string
var ds1 = t1[0], ds2 = t1[1];
console.log(ds1, '-', ds2);
var mySize = "a" /* Size.SMALL */;
console.log("a" /* Size.SMALL */);
console.log("b" /* Size.MEDIUM */);
console.log("c" /* Size.LARGE */);
function addNumber(x, y) {
    if (x > 10) {
        return x + y;
    }
}
console.log(add(10, 20));
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
var dog = {
    age: 12,
    color: { a: "white", b: "black" }
};
console.log("dog color : ", dog.color.a);
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var person1 = {
    fName: "uchi",
    tele: 1234
};
var customer1 = {
    cName: "iman",
    cTele: 12345
};
var Parent = /** @class */ (function () {
    function Parent(message) {
        console.log(message, " from Parent");
    }
    Parent.prototype.myMethod = function (str) {
        console.log(str);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(message) {
        var _this = _super.call(this, message) || this;
        _this.myMethod("hello");
        return _this;
    }
    return Child;
}(Parent));
var child1 = new Child('hello world');
