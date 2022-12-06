console.log("3.2.6 类函数和静态属性")

class Grid {
    static origin = {x: 0, y: 0}

    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) {

    }
}

let grid1 = new Grid(2.0)
console.log(grid1.calculateDistanceFromOrigin({x:10, y: 10}))