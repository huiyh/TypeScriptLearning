const array = [233,"hello",true]
for (let value of array){
    console.log(value)
}
for (let i in array){
    console.log(i)
}

console.log("--------------------")

function* infiniteList(){
    let i = 0;
    while (i < 3){
        yield i++;
    }
}

let list = infiniteList();
console.log(list.next())
console.log(list.next())
console.log(list.next())
console.log(list.next())

console.log("--------------------")

function* generator() {
    console.log("Exec started")
    yield 0;
    console.log("Exec resumed")
    yield 1;
    console.log("Exec end")
}
let gen = generator()
console.log("0: ")
console.log(gen.next())
console.log("1: ")
console.log(gen.next())
console.log("2: ")
console.log(gen.next())

console.log("--------------------")

function* generator2() {
    // @ts-ignore
    let who: any = yield;
    console.log("Hello " + who)
}

const gen2 = generator2()
console.log(gen2.next())
console.log(gen2.next("TypeScript"))

console.log("--------------------")

function* generator3() {
    try {
        yield 1;
    } catch (error){
        // @ts-ignore
        console.log("Catch: " + error.message)
    }
}

const gen3 = generator3()
console.log(gen3.next())
gen3.throw(new Error("Something incorrect"))