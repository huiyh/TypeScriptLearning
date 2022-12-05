console.log("3.1.1 接口.定义.3额外的属性检查")

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    return {color : "blue", area : 1}
}

// error
let mySquare3 = createSquare({colour: "red", width: 100});

