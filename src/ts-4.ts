class User1 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name} my age is ${this.age}`;
    }
}
const user = new User1("John", 30);
const greetJohn = user.greet();