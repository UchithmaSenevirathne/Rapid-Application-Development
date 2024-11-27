let x = 10;
const y = 20;

x = 20;
// y = 30; cannot assign to 'y' because it constant

function add(n1:number, n2:number){
    console.log(n1+n2);
}

add(1, 2);

let a: number | string | boolean = 1234;
a = 'abc';
a = false;

let ar1 = [2,3,4,5];
let ar2 = [true, false]
let ar3 = [2,3,true,false]
let ar4 = []
let ar5: any[] = []
let ar6: Array<string> = ['1','2']

function printArray(ar: number[]){
    ar.forEach(element => {
        console.log(element);
    });
}

// printArray(ar2); argument type boolean[] cannot assign to parameter type number[]
printArray(ar1)

let ar7 = ['a','b'];
let ar8 = ['c','d'];

ar7.push(ar8[0])
ar7.push(...ar8)
let ar9 = [...ar7,...ar8];

let t1: [number,number] = [2,3];
// let t2: [number,string] = [2,3]; number cannot assign to string

let [ds1,ds2] = t1;
console.log(ds1,'-',ds2)


const enum Size {
    SMALL = 'a',
    MEDIUM = 'b',
    LARGE = 'c'
}

const mySize = Size.SMALL

console.log(Size.SMALL)
console.log(Size.MEDIUM)
console.log(Size.LARGE)

function addNumber(x: number, y: number){
    if(x>10){
        return x+y;
    }
}

console.log(add(10,20))

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

const dog = {
    age: 12,
    color: {a:"white", b:"black"}
}

console.log("dog color : " , dog.color.a)


interface Person {
    fName: string,
    tele: number
}

class Customer{
    cName: string;
    cTele: number;
}

const person1 : Person = {
    fName: "uchi",
    tele: 1234
}

const customer1 : Customer = {
    cName: "iman",
    cTele: 12345
}


class Parent {
    protected myMethod(str:string){
        console.log(str);
    }

    constructor(message:string){
        console.log(message, " from Parent")
    }
}

class Child extends Parent {
    constructor(message:string){
        super(message);
        this.myMethod("hello");
    }
}

const child1 = new Child('hello world')
// child1.myMethod('hello'); protected only access in subclass

