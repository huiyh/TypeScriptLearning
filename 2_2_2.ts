console.log("2.2.2 交叉类型与联合类型")

interface B {
    d:number;
    z:string;
}
interface C {
    f:string;
    g:string;
}
type D = B & C

class DImpl implements D{
    // @ts-ignore
    d: number;
    // @ts-ignore
    f: string;
    // @ts-ignore
    g: string;
    // @ts-ignore
    z: string;
}

let d: D = new DImpl()
d.d = 1;
d.f ="";
d.g ="";
d.z ="";

console.log(d)