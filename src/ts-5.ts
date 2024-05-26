interface IUser2 {
  name: string;
  greet(): string;
}

class User2 implements IUser2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

interface IStaff extends IUser2 {
    role: string;
}
const user3: IStaff = {
    name:"Hannah",
    //role이 없으면 에러
    role: "Admin",
    greet() {
        return `Hello World!`;
    },
}