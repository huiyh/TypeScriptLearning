function hello<T>(arg: T):T {
    // Error
    // console.log(arg.length)
    return arg;
}

function hello2<T>(arg: T[]):T[] {
    console.log(arg.length)
    return arg;
}

function hello3<T>(arg: Array<T>):Array<T> {
    console.log(arg.length)
    return arg;
}



let output = hello<String>("hello TypeScript")
console.log("hello: " + output)

console.log("hello2:" + hello2(["a", "b"]))

console.log("hello3:" + hello2(["a", "b", "c"]))