//선택적 프로퍼티
function greet(a:string, b:number):string {
    return `Hello ${a} my age is ${b}`;
}

greet("World", 30);
// greet("JS"); //에러 발생

function greet2(a:string, b?:number):string {
    return `Hello ${a} my age is ${b}`;
}
greet2("World", 30);
greet2("JS");//정상 동작

// default 값 생성
function greet3(a:string, b:number =0):string {
    return `Hello ${a} my age is ${b}`;
}
greet3("TS");