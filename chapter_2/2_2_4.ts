console.log("2.2.4 typeof与instanceof")

function isNumber(padding:number | string) : boolean{
    return typeof padding == "number";
}

function isString(padding:number | string) : boolean{
    return typeof padding == "string";
}

function padLeft(value : string, padding: number | string){
    if (isNumber(padding)){
        return Array((padding as number) + 1) .join(" ")+ value
    }
    if (isString(padding)){
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}

console.log(padLeft("Hello World", 4))

console.log("--------------------")

interface Person {
    talk() : void
}

class Teacher implements Person {
    private readonly name: string;
    constructor(name : string) {
        this.name = name;
    }

    talk(): void {
        console.log("Teacher "+ this.name + " talk")
    }
}

class Student implements Person{
    private readonly name: string;

    constructor(name : string, age : number, classRoom : string) {
        this.name = name;
    }

    talk(): void {
        console.log("Student " + this.name + " talk")
    }
}

function getPerson() : Person{
    return Math.random() < 0.5
        ? new Teacher("张老师")
        : new Student("小明",8, "三年级")
}

const person : Person = getPerson()

person.talk()