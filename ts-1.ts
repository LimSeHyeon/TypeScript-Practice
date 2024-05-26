const a:number = 1;
const b:string = "ABC";
const c:boolean = false;
const d:any = "DEF";
const e:any = [1,2,3];

const f:string[] = ["A", "B"];
const g:Array<number> = [1,2];
const h:[number, string, boolean] = [1, "A", true];

enum Color {
    Red,
    Green,
    Blue
}

const color:Color = Color.Green;

function sum(a:number, b:number):number {
    return a + b;
}

//a와 b를 인자로 받고, string을 return하는 함수
type func1 = (a:string, b:string)=>string;
type func2 = (a:string, b:string)=>void;

const function1: func1 = (a,b)=>{
    return "hello world";
}

const function2: func2 = (a:string, b:string)=>{
    return "Hello world";
}