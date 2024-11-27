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


class Demo {
    private id : number
    private fName : string
    private address : string
    private tele : number

    getId() : number {
        return this.id;
    }

    setId(id: number) : void {
        this.id = id;
    }

    getFName() : string {
        return this.fName;
    }

    setFName(fName: string) : void {
        this.fName = fName;
    }

    getAddress() : string {
        return this.address;
    }

    setAddress(address: string) : void {
        this.address = address;
    }

    getTele() : number {
        return this.tele;
    }

    setTele(tele: number) : void {
        this.tele = tele;
    }
}

const demo = new Demo();

demo.setId(2);
demo.setFName("muina");
demo.setAddress("matara");
demo.setTele(12345)

console.log(demo.getId());
console.log(demo.getFName());
console.log(demo.getAddress());
console.log(demo.getTele());

