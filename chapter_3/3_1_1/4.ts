console.log("3.1.1 接口.定义.可选属性 错误示例")

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare2(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        'SquareConfig'
        // Error: Property 'clor' does not exist on type
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare2 = createSquare2({color: "black"});