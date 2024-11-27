// type operateFn = (x : number, y : number) => number;
// function subtractFn(x : number, y : number) : number {
//     return x - y;
// }
// function multiplyFn(x : number, y : number) : number {
//     return x * y;
// }
// function calculate(n1 : number, n2 : number, calcFn : operateFn ) : number {
//     const result = calcFn(n1,n2);
//     return result;
// }
// console.log(10,20,subtractFn)
var Demo = /** @class */ (function () {
    function Demo(id, fName, address, tele) {
        this.id = id;
        this.fName = fName,
            this.address = address,
            this.tele = tele;
    }
    Demo.prototype.getId = function () {
        return this.id;
    };
    Demo.prototype.setId = function (id) {
        this.id = id;
    };
    Demo.prototype.getFName = function () {
        return this.fName;
    };
    Demo.prototype.setFName = function (fName) {
        this.fName = fName;
    };
    Demo.prototype.getAddress = function () {
        return this.address;
    };
    Demo.prototype.setAddress = function (address) {
        this.address = address;
    };
    Demo.prototype.getTele = function () {
        return this.tele;
    };
    Demo.prototype.setTele = function (tele) {
        this.tele = tele;
    };
    return Demo;
}());
var demo = new Demo(1, "uchi", "galle", 123);
demo.setId(2);
demo.setFName("muina");
demo.setAddress("matara");
demo.setTele(12345);
console.log(demo.getId());
console.log(demo.getFName());
console.log(demo.getAddress());
console.log(demo.getTele());
