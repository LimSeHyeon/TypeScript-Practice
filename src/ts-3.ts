interface User {
    readonly id: number;
    name: string;
    age: number;
    height?: number;
}
const user1: User = {
    id: 1,
    name: "Betty",
    age: 30
}
user1.name = "James";
// user1.id = 2; // readonly 속성이므로 변경 불가
const user2: User = {
    id: 2,
    name: "Betty",
    age: 30,
    height: 160
}