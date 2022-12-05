console.log("2.3.1 定义函数")

// 有名字的函数
function add1(x: number, y: number): number {
    return x + y;
}

// ts: function add1(x: number, y: number): number

// 匿名函数
const add2 = function (x: number, y: number): number {
    return x +
        y;
};

// ts: const add2: (x: number, y: number) => number

function add3(x: number, y: number): number {
    return x + y;
}

// ts: function add1(x: number, y: number): number
const add4 = function (x: number, y: number): number {
    return x + y;
};
// ts: const add2: (x: number, y: number) => number

let add5: (x: number, y: number) => number