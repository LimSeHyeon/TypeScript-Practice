function identity<T>(arg: T):T {
    return arg;
}
identity(1);

interface GenericIdentityFn<T> {
    (arg:T):T;
}

let myIdentity: GenericIdentityFn<number> = identity;

let myIdentity2: GenericIdentityFn<{
    name: string;
    age: number;
}> = function (arg) {
    arg.name = `${arg.name} 수정됨`;
    return arg;
}