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

let d: D = {
    d: 0,
    f: "",
    g: "",
    z: ""
}


console.log(d)