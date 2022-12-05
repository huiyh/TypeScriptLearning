console.log("2.2.5 类型别名")

type Age = number;
type AgeCreagor = () => Age;

function getAge(creager: AgeCreagor): Age {
    return creager();
}

console.log("Age: " + getAge(
    function () {
        return Math.random() * 10
    }
))

console.log("--------------------")

type Persion<T> = {
    name : T;
    mother : Persion<T>;
    father : Persion<T>
}