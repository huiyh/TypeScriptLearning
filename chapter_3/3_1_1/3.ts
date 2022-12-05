console.log("3.1.1 接口.定义.可选属性")

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {

    let newSquare = {color: "white", area: 100};

    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;

}

let mySquare1 = createSquare({color: "black"});
console.log(mySquare1);