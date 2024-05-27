class GenericNumber<T>{
    zeroValue: T;
    constructor(zeroValue:T) {
        this.zeroValue = zeroValue;
    }
    add (x:T, y:T) {
        return x;
    }
}

let myGenericNumber = new GenericNumber<number>(10);
console.log(myGenericNumber.zeroValue);
console.log(myGenericNumber.add(1,2));

let myGenericString = new GenericNumber<string>("Hello");
myGenericString.add("Hello", "World");

interface LengthWise {
    length: number;
}
function loggingIdentity<T extends LengthWise>(arg:T) {
    console.log(arg.length);
}