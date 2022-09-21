console.log("2.2.1")
interface A {
    a: number;
    b: String;
    c: number[];
}

class AImpl implements A{
    // @ts-ignore
    a: number;
    // @ts-ignore
    b: String;
    // @ts-ignore
    c: number[];
}

let obj : A = new AImpl();
obj.a = 1;
obj.b = "Hello";
obj.c = [1,2,3]

console.log(obj)
